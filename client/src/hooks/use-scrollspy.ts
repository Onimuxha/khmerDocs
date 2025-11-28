import { useState, useEffect, useCallback } from "react";
import type { NavigationState } from "@shared/schema";

export function useScrollspy(): NavigationState {
  const [activeSection, setActiveSection] = useState<NavigationState>({
    activeLanguageId: null,
    activeChapterId: null,
    activeLessonId: null,
  });

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("[data-lesson], [data-chapter], [data-language]");
    const scrollPosition = window.scrollY + 100;

    let currentLanguage: string | null = null;
    let currentChapter: string | null = null;
    let currentLesson: string | null = null;

    sections.forEach((section) => {
      const element = section as HTMLElement;
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        if (element.dataset.lesson) {
          currentLesson = element.dataset.lesson;
          const chapterSection = element.closest("[data-chapter]") as HTMLElement;
          if (chapterSection) {
            currentChapter = chapterSection.dataset.chapter || null;
          }
          const languageSection = element.closest("[data-language]") as HTMLElement;
          if (languageSection) {
            currentLanguage = languageSection.dataset.language || null;
          }
        } else if (element.dataset.chapter) {
          currentChapter = element.dataset.chapter;
          const languageSection = element.closest("[data-language]") as HTMLElement;
          if (languageSection) {
            currentLanguage = languageSection.dataset.language || null;
          }
        } else if (element.dataset.language) {
          currentLanguage = element.dataset.language;
        }
      }
    });

    setActiveSection((prev) => {
      if (
        prev.activeLanguageId !== currentLanguage ||
        prev.activeChapterId !== currentChapter ||
        prev.activeLessonId !== currentLesson
      ) {
        return {
          activeLanguageId: currentLanguage,
          activeChapterId: currentChapter,
          activeLessonId: currentLesson,
        };
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeSection;
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}
