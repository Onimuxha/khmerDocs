import { useState, useCallback } from "react";
import { Bookmark, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookmarks, useProgress } from "@/hooks/use-bookmarks";
import { cn } from "@/lib/utils";

interface LessonHeaderProps {
  lessonId: string;
  lessonTitle: string;
  languageId: string;
  chapterId: string;
  onMarkComplete?: () => void;
}

export function LessonHeader({
  lessonId,
  lessonTitle,
  languageId,
  chapterId,
  onMarkComplete,
}: LessonHeaderProps) {
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const { toggleComplete, isLessonCompleted } = useProgress();
  const [showMark, setShowMark] = useState(false);

  const isCurrentlyBookmarked = isBookmarked(lessonId);
  const isCurrentlyCompleted = isLessonCompleted(lessonId);

  const handleBookmark = useCallback(() => {
    toggleBookmark({
      lessonId,
      languageId,
      chapterId,
      title: lessonTitle,
    });
  }, [toggleBookmark, lessonId, languageId, chapterId, lessonTitle]);

  const handleMarkComplete = useCallback(() => {
    toggleComplete(lessonId, languageId, chapterId);
    setShowMark(true);
    setTimeout(() => setShowMark(false), 2000);
    onMarkComplete?.();
  }, [toggleComplete, lessonId, languageId, chapterId, onMarkComplete]);

  return (
    <div className="flex items-start justify-between gap-4 mb-4">
      <div className="flex-1">
        <h3 className="text-xl font-medium text-foreground">{lessonTitle}</h3>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {showMark && (
          <div className="text-xs font-medium text-green-600 dark:text-green-400 whitespace-nowrap">
            ✓ ទាក់ទងសម្រេច
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleMarkComplete}
          disabled={isCurrentlyCompleted}
          className={cn(
            isCurrentlyCompleted && "opacity-60"
          )}
          title={isCurrentlyCompleted ? "ពេលវេលាត្រូវបានគាប់ក្រម" : "គាប់ក្រម​មេរៀនចប់ស្រុច"}
          data-testid="button-mark-complete"
        >
          <Check
            className={cn(
              "h-4 w-4",
              isCurrentlyCompleted && "text-green-600 dark:text-green-400"
            )}
          />
          <span className="sr-only">ទាក់ទងសម្រេច</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleBookmark}
          className={cn(
            isCurrentlyBookmarked && "text-primary"
          )}
          title={isCurrentlyBookmarked ? "ដកចេញចំណាំ" : "បន្ថែមចំណាំ"}
          data-testid="button-bookmark"
        >
          <Bookmark
            className={cn(
              "h-4 w-4",
              isCurrentlyBookmarked && "fill-current"
            )}
          />
          <span className="sr-only">ចំណាំ</span>
        </Button>
      </div>
    </div>
  );
}
