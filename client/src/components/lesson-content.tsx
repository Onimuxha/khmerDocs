import { useMemo } from "react";
import { motion } from "framer-motion";
import { CodeBlock } from "@/components/code-block";
import { LanguageIcon } from "@/components/language-icons";
import { LessonHeader } from "@/components/lesson-header";
import { TableOfContents } from "@/components/table-of-contents";
import { Breadcrumb } from "@/components/breadcrumb";
import { useScrollspy } from "@/hooks/use-scrollspy";
import { documentationData } from "@/lib/documentation-data";
import type { ProgrammingLanguage } from "@shared/schema";

interface LessonContentProps {
  languages: ProgrammingLanguage[];
  highlightedLessonId?: string | null;
}

export function LessonContent({ languages, highlightedLessonId }: LessonContentProps) {
  const activeSection = useScrollspy();
  const currentLanguage = languages[0] || documentationData[0];

  // Get all lessons in current language for TOC
  const allLessons = useMemo(() => {
    return currentLanguage.chapters.flatMap((ch) => ch.lessons);
  }, [currentLanguage]);

  return (
    <div className="pb-32">
      {languages.map((language, langIndex) => (
        <section
          key={language.id}
          id={language.id}
          className="scroll-mt-20"
          data-language={language.id}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: langIndex * 0.05 }}
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b">
              <LanguageIcon language={language.icon} size="lg" />
              <h1 className="text-3xl font-bold" data-testid={`heading-lang-${language.id}`}>
                {language.name}
              </h1>
            </div>

            <TableOfContents lessons={allLessons} activeLessonId={activeSection.activeLessonId} />

            {language.chapters.map((chapter, chapterIndex) => (
              <section
                key={chapter.id}
                id={chapter.id}
                className="scroll-mt-20 mb-12"
                data-chapter={chapter.id}
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: chapterIndex * 0.03 }}
                >
                  <h2
                    className="text-2xl font-semibold mb-6 text-foreground"
                    data-testid={`heading-chapter-${chapter.id}`}
                  >
                    {chapter.title}
                  </h2>

                  {chapter.lessons.map((lesson, lessonIndex) => {
                    const isHighlighted = highlightedLessonId === lesson.id;
                    return (
                    <section
                      key={lesson.id}
                      id={lesson.id}
                      className="scroll-mt-20 mb-10"
                      data-lesson={lesson.id}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        animate={isHighlighted ? {
                          boxShadow: [
                            "0 0 0 0px rgba(59, 130, 246, 0.6)",
                            "0 0 0 8px rgba(59, 130, 246, 0.3)",
                            "0 0 0 12px rgba(59, 130, 246, 0)"
                          ]
                        } : {}}
                        transition={isHighlighted ? { duration: 0.8 } : { duration: 0.25, delay: lessonIndex * 0.02 }}
                        className="bg-card border rounded-lg p-6"
                      >
                        <Breadcrumb
                          languageName={language.name}
                          languageId={language.id}
                          chapterTitle={chapter.title}
                          chapterId={chapter.id}
                          lessonTitle={lesson.title}
                          lessonId={lesson.id}
                        />

                        <LessonHeader
                          lessonId={lesson.id}
                          lessonTitle={lesson.title}
                          languageId={language.id}
                          chapterId={chapter.id}
                        />

                        <div className="prose-docs">
                          {lesson.content.split("\n\n").map((paragraph, pIndex) => {
                            if (paragraph.startsWith("•")) {
                              const items = paragraph.split("\n").filter(Boolean);
                              return (
                                <ul key={pIndex} className="list-disc ml-6 mb-4 space-y-1">
                                  {items.map((item, iIndex) => (
                                    <li key={iIndex} className="text-base leading-relaxed text-foreground/90">
                                      {item.replace(/^•\s*/, "")}
                                    </li>
                                  ))}
                                </ul>
                              );
                            }
                            return (
                              <p
                                key={pIndex}
                                className="text-base leading-relaxed mb-4 text-foreground/90"
                              >
                                {paragraph}
                              </p>
                            );
                          })}
                        </div>

                        {lesson.images && lesson.images.length > 0 && (
                          <div className="my-6 space-y-4">
                            {lesson.images.map((image, imgIndex) => (
                              <div key={imgIndex} className="flex flex-col items-center">
                                <img
                                  src={image.url}
                                  alt={image.alt}
                                  className="max-w-md h-auto rounded-lg border border-border shadow-sm"
                                  data-testid={`image-${lesson.id}-${imgIndex}`}
                                />
                                {image.caption && (
                                  <p className="text-sm text-muted-foreground mt-2 text-center italic">
                                    {image.caption}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {lesson.codeBlocks && lesson.codeBlocks.length > 0 && (
                          <div className="mt-4">
                            {lesson.codeBlocks.map((block, blockIndex) => (
                              <CodeBlock
                                key={blockIndex}
                                code={block.code}
                                language={block.language}
                                filename={block.filename}
                              />
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </section>
                    );
                  })}
                </motion.div>
              </section>
            ))}
          </motion.div>

          {langIndex < languages.length - 1 && (
            <div className="border-t my-16" />
          )}
        </section>
      ))}
    </div>
  );
}
