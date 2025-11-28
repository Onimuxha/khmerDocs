import { useState, useEffect } from "react";
import { Check, Copy, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { codeToHtml } from "shiki";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({ code, language, filename, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function highlight() {
      try {
        const html = await codeToHtml(code, {
          lang: language === "jsx" ? "tsx" : language,
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
        });
        setHighlightedCode(html);
      } catch {
        setHighlightedCode(`<pre><code>${code}</code></pre>`);
      } finally {
        setIsLoading(false);
      }
    }
    highlight();
  }, [code, language]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("group relative rounded-md border bg-card my-4 overflow-hidden", className)}>
      {filename && (
        <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-2 text-sm text-muted-foreground">
          <FileCode className="h-4 w-4" />
          <span className="font-mono">{filename}</span>
        </div>
      )}
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
          onClick={copyToClipboard}
          data-testid="button-copy-code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
          <span className="sr-only">ចម្លងកូដ</span>
        </Button>
        {isLoading ? (
          <div className="p-4 font-mono text-sm">
            <div className="animate-pulse space-y-2">
              <div className="h-4 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          </div>
        ) : (
          <div
            className="[&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre]:text-sm [&_pre]:leading-relaxed [&_.shiki]:bg-transparent dark:[&_.shiki.github-light]:hidden [&_.shiki.github-dark]:hidden dark:[&_.shiki.github-dark]:block"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        )}
      </div>
    </div>
  );
}
