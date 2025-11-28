import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { LessonContent } from "@/components/lesson-content";
import { useScrollspy, scrollToSection } from "@/hooks/use-scrollspy";
import { documentationData } from "@/lib/documentation-data";
import type { SearchResult, NavigationState } from "@shared/schema";

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const activeSection = useScrollspy();

  const handleNavigate = useCallback(
    (languageId: string, chapterId?: string, lessonId?: string) => {
      const targetId = lessonId || chapterId || languageId;
      scrollToSection(targetId);
    },
    []
  );

  const handleSearchResult = useCallback((result: SearchResult) => {
    const targetId = result.lessonId || result.chapterId || result.languageId;
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
                រៀនភាសាកម្មវិធីជាភាសាខ្មែរ - ពី C ដល់ React.js
              </p>
            </div>

            <LessonContent languages={documentationData} />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
