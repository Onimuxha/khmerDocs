import { z } from "zod";

// Lesson structure
export const lessonSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  codeBlocks: z.array(z.object({
    language: z.string(),
    code: z.string(),
    filename: z.string().optional(),
  })).optional(),
  images: z.array(z.object({
    url: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
  })).optional(),
});

export type Lesson = z.infer<typeof lessonSchema>;

// Chapter structure
export const chapterSchema = z.object({
  id: z.string(),
  title: z.string(),
  lessons: z.array(lessonSchema),
});

export type Chapter = z.infer<typeof chapterSchema>;

// Programming Language structure
export const programmingLanguageSchema = z.object({
  id: z.string(),
  name: z.string(),
  nameEn: z.string(),
  icon: z.string(),
  color: z.string(),
  chapters: z.array(chapterSchema),
});

export type ProgrammingLanguage = z.infer<typeof programmingLanguageSchema>;

// Documentation structure
export const documentationSchema = z.object({
  languages: z.array(programmingLanguageSchema),
});

export type Documentation = z.infer<typeof documentationSchema>;

// Search result structure
export const searchResultSchema = z.object({
  type: z.enum(["language", "chapter", "lesson"]),
  languageId: z.string(),
  chapterId: z.string().optional(),
  lessonId: z.string().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  content: z.string().optional(),
});

export type SearchResult = z.infer<typeof searchResultSchema>;

// Navigation state for scrollspy
export const navigationStateSchema = z.object({
  activeLanguageId: z.string().nullable(),
  activeChapterId: z.string().nullable(),
  activeLessonId: z.string().nullable(),
});

export type NavigationState = z.infer<typeof navigationStateSchema>;
