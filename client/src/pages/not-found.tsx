import { Link } from "wouter";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <Card className="p-8 text-center">
          <div className="text-6xl font-bold text-primary mb-4">404</div>
          <h1 className="text-2xl font-semibold mb-2">រកមិនឃើញទំព័រ</h1>
          <p className="text-muted-foreground mb-6">
            សូមអភ័យទោស ទំព័រដែលអ្នកកំពុងស្វែងរកមិនមានទេ។
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button className="gap-2" data-testid="button-go-home">
                <Home className="h-4 w-4" />
                ទំព័រដើម
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()} data-testid="button-go-back">
              <ArrowLeft className="h-4 w-4 mr-2" />
              ត្រឡប់ក្រោយ
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
