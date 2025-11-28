import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

export function KeyboardShortcutsDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Press ? to open shortcuts
      if (e.key === "?" && e.shiftKey) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        title="ឌីលូកគ្រាប់ចុច (? ដើម្បីបើក)"
        data-testid="button-keyboard-shortcuts"
      >
        <HelpCircle className="h-5 w-5" />
        <span className="sr-only">ឌីលូកគ្រាប់ចុច</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>ឌីលូកគ្រាប់ចុច</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold mb-2 text-foreground">ស្វែងរក</p>
              <div className="flex justify-between text-muted-foreground">
                <span>⌘K / Ctrl+K</span>
                <span>បើកស្វែងរក</span>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2 text-foreground">ដំណើរការ</p>
              <div className="space-y-1 text-muted-foreground">
                <div className="flex justify-between">
                  <span>← / →</span>
                  <span>មេរៀនមុន/បន្ទាប់</span>
                </div>
                <div className="flex justify-between">
                  <span>Alt+N</span>
                  <span>ភាសាបន្ទាប់</span>
                </div>
                <div className="flex justify-between">
                  <span>Alt+P</span>
                  <span>ភាសាមុន</span>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2 text-foreground">មេរៀន</p>
              <div className="space-y-1 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Bookmark Icon</span>
                  <span>បន្ថែម/ដកចំណាំ</span>
                </div>
                <div className="flex justify-between">
                  <span>Check Icon</span>
                  <span>ក្រឹត្យសម្រេច</span>
                </div>
                <div className="flex justify-between">
                  <span>Copy</span>
                  <span>ចម្លងកូដ</span>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2 text-foreground">វិសេស</p>
              <div className="flex justify-between text-muted-foreground">
                <span>?</span>
                <span>បង្ហាញឌីលូក</span>
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground mt-4 pt-4 border-t">
            ចំណាំ៖ ឌីលូកនឹងគ្រប់គ្រងដោយស្វ័យប្រវត្តិនៅលើ localStorage របស់អ្នក។
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
