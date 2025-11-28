import { useState, useEffect, useCallback } from "react";
import {
  getBookmarks,
  isBookmarked,
  addBookmark,
  removeBookmark,
  getProgress,
  isLessonCompleted,
  markLessonCompleted,
  type BookmarkData,
} from "@/lib/bookmarks";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkData[]>([]);

  useEffect(() => {
    setBookmarks(getBookmarks());
    const handleStorageChange = () => {
      setBookmarks(getBookmarks());
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleBookmark = useCallback(
    (data: Omit<BookmarkData, "timestamp">) => {
      if (isBookmarked(data.lessonId)) {
        removeBookmark(data.lessonId);
      } else {
        addBookmark(data);
      }
      setBookmarks(getBookmarks());
    },
    []
  );

  return { bookmarks, toggleBookmark, isBookmarked };
}

export function useProgress() {
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setCompleted(getProgress().map((p) => p.lessonId));
    const handleStorageChange = () => {
      setCompleted(getProgress().map((p) => p.lessonId));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleComplete = useCallback(
    (lessonId: string, languageId: string, chapterId: string) => {
      if (isLessonCompleted(lessonId)) {
        // For demo, we only add completion, not remove
        return;
      }
      markLessonCompleted(lessonId, languageId, chapterId);
      setCompleted(getProgress().map((p) => p.lessonId));
    },
    []
  );

  return { completed, toggleComplete, isLessonCompleted };
}
