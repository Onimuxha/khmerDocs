import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/hooks/use-scrollspy";
import type { Lesson } from "@shared/schema";

interface TableOfContentsProps {
  lessons: Lesson[];
  activeLessonId?: string | null;
}

export function TableOfContents({ lessons, activeLessonId }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (lessons.length === 0) return null;

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full px-4 py-3 rounded-md border bg-card hover-elevate transition-colors"
        data-testid="button-toc-toggle"
      >
        <span className="text-sm font-semibold">ខ្លឹមសារមេរៀន</span>
        <motion.div
          animate={{ rotate: isOpen ? 0 : -90 }}
          transition={{ duration: 0.15 }}
          className="ml-auto"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden mt-2 border border-t-0 rounded-md rounded-t-none bg-card"
          >
            <div className="p-4 space-y-2">
              {lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => {
                    scrollToSection(lesson.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-md text-sm transition-colors hover-elevate",
                    activeLessonId === lesson.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/30"
                  )}
                  data-testid={`toc-lesson-${lesson.id}`}
                >
                  {lesson.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
