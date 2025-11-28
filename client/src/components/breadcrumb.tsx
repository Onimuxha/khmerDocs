import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/hooks/use-scrollspy";

interface BreadcrumbProps {
  languageName: string;
  languageId: string;
  chapterTitle?: string;
  chapterId?: string;
  lessonTitle?: string;
  lessonId?: string;
}

export function Breadcrumb({
  languageName,
  languageId,
  chapterTitle,
  chapterId,
  lessonTitle,
  lessonId,
}: BreadcrumbProps) {
  const handleClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <div className="flex items-center gap-2 text-sm mb-6 overflow-x-auto pb-2">
      <Button
        variant="ghost"
        className="h-auto p-0 text-primary hover:text-primary"
        onClick={() => handleClick(languageId)}
        data-testid="breadcrumb-language"
      >
        {languageName}
      </Button>

      {chapterId && chapterTitle && (
        <>
          <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <Button
            variant="ghost"
            className="h-auto p-0 text-muted-foreground hover:text-foreground"
            onClick={() => handleClick(chapterId)}
            data-testid="breadcrumb-chapter"
          >
            {chapterTitle}
          </Button>
        </>
      )}

      {lessonId && lessonTitle && (
        <>
          <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <span className="text-foreground font-medium" data-testid="breadcrumb-lesson">
            {lessonTitle}
          </span>
        </>
      )}
    </div>
  );
}
