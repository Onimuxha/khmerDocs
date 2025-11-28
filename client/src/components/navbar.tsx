import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { SearchBar } from "@/components/search-bar";
import { LanguageIcon } from "@/components/language-icons";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import type { SearchResult } from "@shared/schema";

const navLinks = [
  { href: "/", label: "ទំព័រដើម" },
  { href: "/docs", label: "ឯកសារ" },
  { href: "/about", label: "អំពីយើង" },
  { href: "/contact", label: "ទំនាក់ទំនង" },
];

const programmingLanguages = ["c", "cpp", "csharp", "python", "html", "css", "javascript", "react"];

interface NavbarProps {
  onSearchResult?: (result: SearchResult) => void;
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

export function Navbar({ onSearchResult, onMobileMenuToggle, isMobileMenuOpen }: NavbarProps) {
  const [location] = useLocation();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearchResult = (result: SearchResult) => {
    if (onSearchResult) {
      onSearchResult(result);
    }
  };

  return (
    <header className="sticky top-0 z-50 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="h-full px-4 lg:px-6">
        <div className="flex h-full items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={onMobileMenuToggle}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="hidden font-semibold sm:inline-block" data-testid="text-logo">
                ឯកសារកូដ
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-sm",
                      location === link.href && "bg-accent"
                    )}
                    data-testid={`link-nav-${link.href.replace("/", "") || "home"}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1.5 mr-2">
              {programmingLanguages.map((lang) => (
                <Link key={lang} href={`/docs/${lang}`}>
                  <button
                    className="p-1.5 rounded-md hover:bg-accent transition-colors"
                    title={lang.toUpperCase()}
                    data-testid={`button-lang-${lang}`}
                  >
                    <LanguageIcon language={lang} size="sm" />
                  </button>
                </Link>
              ))}
            </div>

            <div className="hidden sm:block">
              <SearchBar onResultClick={handleSearchResult} />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              data-testid="button-mobile-search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>

            <ThemeToggle />
          </div>
        </div>

        <AnimatePresence>
          {mobileSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden py-3 border-t"
            >
              <SearchBar onResultClick={handleSearchResult} className="w-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
