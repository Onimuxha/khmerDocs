import { motion } from "framer-motion";
import { BookOpen, Code, Heart, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">អំពីឯកសារកូដខ្មែរ</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              គម្រោងបង្រៀនសរសេរកូដជាភាសាខ្មែរសម្រាប់សិស្សនិស្សិត និងអ្នកចង់រៀនសរសេរកូដទាំងអស់
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                បេសកកម្មរបស់យើង
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                យើងជឿជាក់ថា ការរៀនសរសេរកូដមិនគួរមានឧបសគ្គភាសាទេ។ គម្រោងនេះត្រូវបានបង្កើតឡើង
                ដើម្បីផ្តល់ឱកាសឲ្យប្រជាជនខ្មែរទាំងអស់អាចរៀនសរសេរកូដជាភាសាកំណើតរបស់ខ្លួន។
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ឯកសាររបស់យើងរួមបញ្ចូលភាសាកម្មវិធីពេញនិយមបំផុតដូចជា C, C++, Python, JavaScript និង React
                ជាមួយនឹងឧទាហរណ៍កូដច្បាស់លាស់ និងការពន្យល់ងាយស្រួលយល់។
              </p>
            </Card>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">មាតិកាគុណភាពខ្ពស់</h3>
                <p className="text-sm text-muted-foreground">
                  មេរៀនទាំងអស់ត្រូវបានសរសេរដោយអ្នកជំនាញ និងពិនិត្យដោយសហគមន៍
                  ដើម្បីធានាថាមាតិកាមានគុណភាព និងទាន់សម័យ។
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">សម្រាប់ទាំងអស់គ្នា</h3>
                <p className="text-sm text-muted-foreground">
                  មិនថាអ្នកជាសិស្សវិទ្យាល័យ និស្សិត ឬអ្នកជំនាញ យើងមានមេរៀនសម្រាប់រាល់កម្រិត
                  ពីដំបូងរហូតដល់កម្រិតខ្ពស់។
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-8 text-center bg-primary/5 border-primary/20">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">សូមអរគុណ</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                សូមអរគុណដែលបានគាំទ្រគម្រោងនេះ។ យើងសង្ឃឹមថាឯកសារនេះនឹងជួយអ្នកក្នុងដំណើរការរៀនសរសេរកូដ។
                ប្រសិនបើអ្នកមានសំណូមពរ ឬមតិកែលម្អ សូមទំនាក់ទំនងមកយើង។
              </p>
            </Card>
          </motion.div>
        </div>
      </main>

      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>រក្សាសិទ្ធិ 2024 ឯកសារកូដខ្មែរ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
        </div>
      </footer>
    </div>
  );
}
