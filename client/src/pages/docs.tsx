import { useState, useCallback, useMemo } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { LessonContent } from "@/components/lesson-content";
import { useScrollspy, scrollToSection } from "@/hooks/use-scrollspy";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import { documentationData } from "@/lib/documentation-data";
import type { SearchResult, NavigationState } from "@shared/schema";

export default function DocsPage() {
  const [match, params] = useRoute("/docs/:languageId");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [highlightedLessonId, setHighlightedLessonId] = useState<string | null>(null);
  const activeSection = useScrollspy();

  const languageId = (params?.languageId as string | undefined) || null;

  const currentLanguage = useMemo(() => {
    if (!languageId) return documentationData[0];
    return documentationData.find((lang) => lang.id === languageId) || documentationData[0];
  }, [languageId]);

  // Setup keyboard navigation
  useKeyboardNavigation(currentLanguage.id);

  const handleNavigate = useCallback(
    (langId: string, chapterId?: string, lessonId?: string) => {
      const targetId = lessonId || chapterId || langId;
      if (lessonId) {
        setHighlightedLessonId(lessonId);
        setTimeout(() => setHighlightedLessonId(null), 2000);
      }
      scrollToSection(targetId);
    },
    []
  );

  const handleSearchResult = useCallback((result: SearchResult) => {
    const targetId = result.lessonId || result.chapterId || result.languageId;
    if (result.lessonId) {
      setHighlightedLessonId(result.lessonId);
      setTimeout(() => setHighlightedLessonId(null), 2000);
    }
    scrollToSection(targetId);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar
        onSearchResult={handleSearchResult}
        onMobileMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        isMobileMenuOpen={sidebarOpen}
      />

      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          currentLanguageId={currentLanguage.id}
        />

        <main className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          >
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">ឯកសារសរសេរកូដ</h1>
              <p className="text-muted-foreground">
                រៀនភាសាកម្មវិធីជាភាសាខ្មែរ
              </p>
            </div>

            <LessonContent languages={[currentLanguage]} highlightedLessonId={highlightedLessonId} />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
