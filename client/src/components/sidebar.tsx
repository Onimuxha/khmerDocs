import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LanguageIcon } from "@/components/language-icons";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { documentationData } from "@/lib/documentation-data";
import type { NavigationState } from "@shared/schema";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: NavigationState;
  onNavigate: (languageId: string, chapterId?: string, lessonId?: string) => void;
  currentLanguageId: string;
}

export function Sidebar({ isOpen, onClose, activeSection, onNavigate, currentLanguageId }: SidebarProps) {
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (activeSection.activeChapterId) {
      setExpandedChapters((prev) => new Set(prev).add(activeSection.activeChapterId!));
    }
  }, [activeSection]);

  const toggleChapter = useCallback((chapterId: string) => {
    setExpandedChapters((prev) => {
      const next = new Set(prev);
      if (next.has(chapterId)) {
        next.delete(chapterId);
      } else {
        next.add(chapterId);
      }
      return next;
    });
  }, []);

  const handleLessonClick = (languageId: string, chapterId: string, lessonId: string) => {
    onNavigate(languageId, chapterId, lessonId);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const currentLanguage = documentationData.find((lang) => lang.id === currentLanguageId);

  const sidebarContent = (
    <ScrollArea className="h-full">
      <div className="py-4 px-3">
        <div className="mb-4 pb-4 border-b">
          <p className="text-xs font-semibold text-muted-foreground uppercase px-3 mb-3">ភាសាកម្មវិធី</p>
          <div className="space-y-1">
            {documentationData.map((language) => (
              <Link key={language.id} href={`/docs/${language.id}`}>
                <button
                  className={cn(
                    "w-full flex items-center gap-2 px-3 py-2.5 rounded-md text-left transition-colors hover-elevate",
                    currentLanguageId === language.id
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                  data-testid={`sidebar-lang-${language.id}`}
                >
                  <LanguageIcon language={language.icon} size="sm" />
                  <span className="flex-1 font-medium text-sm">{language.name}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>

        {currentLanguage && (
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase px-3 mb-3">
              ដែនក្រង
            </p>
            <div className="space-y-1">
              {currentLanguage.chapters.map((chapter) => (
                <div key={chapter.id} className="mb-1">
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className={cn(
                      "w-full flex items-center gap-2 px-3 py-2 rounded-md text-left text-sm transition-colors hover-elevate",
                      activeSection.activeChapterId === chapter.id
                        ? "bg-accent/70 text-accent-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                    )}
                    data-testid={`sidebar-chapter-${chapter.id}`}
                  >
                    <motion.div
                      animate={{ rotate: expandedChapters.has(chapter.id) ? 90 : 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                    </motion.div>
                    <span className="flex-1 font-medium">{chapter.title}</span>
                  </button>

                  <AnimatePresence initial={false}>
                    {expandedChapters.has(chapter.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-4 mt-0.5 space-y-0.5">
                          {chapter.lessons.map((lesson) => (
                            <button
                              key={lesson.id}
                              onClick={() => handleLessonClick(currentLanguageId, chapter.id, lesson.id)}
                              className={cn(
                                "w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors hover-elevate",
                                activeSection.activeLessonId === lesson.id
                                  ? "bg-primary/10 text-primary border-l-2 border-primary -ml-[2px] pl-[14px]"
                                  : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                              )}
                              data-testid={`sidebar-lesson-${lesson.id}`}
                            >
                              {lesson.title}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );

  return (
    <>
      <aside className="hidden lg:block w-64 h-[calc(100vh-4rem)] border-r bg-sidebar sticky top-16 shrink-0">
        {sidebarContent}
      </aside>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
              onClick={onClose}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed left-0 top-0 z-50 h-full w-72 bg-sidebar border-r lg:hidden"
            >
              <div className="flex items-center justify-between h-16 px-4 border-b">
                <span className="font-semibold">ឯកសារកូដ</span>
                <Button variant="ghost" size="icon" onClick={onClose} data-testid="button-close-sidebar">
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="h-[calc(100%-4rem)]">
                {sidebarContent}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
