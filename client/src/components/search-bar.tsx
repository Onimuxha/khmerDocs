import { useState, useEffect, useRef, useMemo } from "react";
import { Search, FileText, FolderOpen, Code } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";
import { getSearchableItems } from "@/lib/documentation-data";
import type { SearchResult } from "@shared/schema";

interface SearchBarProps {
  onResultClick: (result: SearchResult) => void;
  className?: string;
}

export function SearchBar({ onResultClick, className }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const searchableItems = useMemo(() => getSearchableItems(), []);
  
  const fuse = useMemo(
    () =>
      new Fuse(searchableItems, {
        keys: [
          { name: "title", weight: 0.4 },
          { name: "titleEn", weight: 0.3 },
          { name: "subtitle", weight: 0.2 },
          { name: "content", weight: 0.1 },
        ],
        threshold: 0.4,
        includeMatches: true,
        minMatchCharLength: 1,
      }),
    [searchableItems]
  );

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).slice(0, 8).map((result) => ({
      ...result.item,
      matches: result.matches,
    }));
  }, [query, fuse]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
        break;
      case "Enter":
        e.preventDefault();
        if (results[selectedIndex]) {
          handleResultClick(results[selectedIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleResultClick = (result: typeof results[0]) => {
    onResultClick({
      type: result.type,
      languageId: result.languageId,
      chapterId: result.chapterId,
      lessonId: result.lessonId,
      title: result.title,
      subtitle: result.subtitle,
      content: result.content,
    });
    setQuery("");
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "language":
        return <Code className="h-4 w-4 text-primary" />;
      case "chapter":
        return <FolderOpen className="h-4 w-4 text-muted-foreground" />;
      case "lesson":
        return <FileText className="h-4 w-4 text-muted-foreground" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="search"
          placeholder="ស្វែងរក..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="pl-9 pr-12 h-9 w-64"
          data-testid="input-search"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-popover border border-popover-border rounded-md shadow-lg overflow-hidden z-50"
            data-testid="search-dropdown"
          >
            <div className="max-h-80 overflow-y-auto py-2">
              {results.map((result, index) => (
                <button
                  key={`${result.type}-${result.languageId}-${result.chapterId || ""}-${result.lessonId || ""}`}
                  className={cn(
                    "w-full flex items-start gap-3 px-4 py-2.5 text-left transition-colors",
                    selectedIndex === index
                      ? "bg-accent"
                      : "hover:bg-accent/50"
                  )}
                  onClick={() => handleResultClick(result)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  data-testid={`search-result-${index}`}
                >
                  <div className="mt-0.5">{getIcon(result.type)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">
                      {result.title}
                    </div>
                    {result.subtitle && (
                      <div className="text-xs text-muted-foreground truncate">
                        {result.subtitle}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && query.trim() && results.length === 0 && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-popover border border-popover-border rounded-md shadow-lg overflow-hidden z-50"
          >
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              រកមិនឃើញលទ្ធផល
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
