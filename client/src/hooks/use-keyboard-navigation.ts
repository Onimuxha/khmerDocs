import { useEffect } from "react";
import { useLocation } from "wouter";
import { documentationData } from "@/lib/documentation-data";
import { scrollToSection } from "@/hooks/use-scrollspy";

export function useKeyboardNavigation(currentLanguageId: string) {
  const [, navigate] = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip if input is focused
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Arrow keys for next/previous lesson
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const currentLanguage = documentationData.find(
          (lang) => lang.id === currentLanguageId
        );
        if (!currentLanguage) return;

        const allLessons = currentLanguage.chapters.flatMap((ch) =>
          ch.lessons.map((l) => ({ ...l, chapterId: ch.id }))
        );

        if (e.key === "ArrowRight" && allLessons.length > 0) {
          // Navigate to first lesson if not on a lesson yet
          scrollToSection(allLessons[0].id);
        } else if (e.key === "ArrowLeft" && allLessons.length > 0) {
          // Navigate to first lesson
          scrollToSection(allLessons[0].id);
        }
      }

      // Alt+N for next language
      if (e.altKey && e.key === "n") {
        e.preventDefault();
        const currentIndex = documentationData.findIndex(
          (lang) => lang.id === currentLanguageId
        );
        if (currentIndex < documentationData.length - 1) {
          const nextLang = documentationData[currentIndex + 1];
          navigate(`/docs/${nextLang.id}`);
        }
      }

      // Alt+P for previous language
      if (e.altKey && e.key === "p") {
        e.preventDefault();
        const currentIndex = documentationData.findIndex(
          (lang) => lang.id === currentLanguageId
        );
        if (currentIndex > 0) {
          const prevLang = documentationData[currentIndex - 1];
          navigate(`/docs/${prevLang.id}`);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentLanguageId, navigate]);
}
