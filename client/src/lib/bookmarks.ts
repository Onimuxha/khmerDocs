// Lesson bookmarking and progress tracking with localStorage

export interface BookmarkData {
  lessonId: string;
  languageId: string;
  chapterId: string;
  title: string;
  timestamp: number;
}

export interface ProgressData {
  lessonId: string;
  languageId: string;
  chapterId: string;
  completedAt: number;
}

const BOOKMARKS_KEY = "khmer_docs_bookmarks";
const PROGRESS_KEY = "khmer_docs_progress";

export function addBookmark(data: Omit<BookmarkData, "timestamp">): void {
  const bookmarks = getBookmarks();
  const exists = bookmarks.some((b) => b.lessonId === data.lessonId);
  if (!exists) {
    bookmarks.push({
      ...data,
      timestamp: Date.now(),
    });
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  }
}

export function removeBookmark(lessonId: string): void {
  const bookmarks = getBookmarks().filter((b) => b.lessonId !== lessonId);
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
}

export function getBookmarks(): BookmarkData[] {
  try {
    const stored = localStorage.getItem(BOOKMARKS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function isBookmarked(lessonId: string): boolean {
  return getBookmarks().some((b) => b.lessonId === lessonId);
}

export function markLessonCompleted(
  lessonId: string,
  languageId: string,
  chapterId: string
): void {
  const progress = getProgress();
  const exists = progress.some((p) => p.lessonId === lessonId);
  if (!exists) {
    progress.push({
      lessonId,
      languageId,
      chapterId,
      completedAt: Date.now(),
    });
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }
}

export function getProgress(): ProgressData[] {
  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function isLessonCompleted(lessonId: string): boolean {
  return getProgress().some((p) => p.lessonId === lessonId);
}

export function getProgressStats(languageId: string) {
  const progress = getProgress().filter((p) => p.languageId === languageId);
  return {
    completed: progress.length,
    lastCompleted: progress.length > 0 ? progress[progress.length - 1].completedAt : null,
  };
}
