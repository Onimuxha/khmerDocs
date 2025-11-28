import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Code, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { LanguageIcon } from "@/components/language-icons";

const features = [
  {
    icon: BookOpen,
    title: "ឯកសារពេញលេញ",
    description: "មេរៀនសរសេរកូដជាភាសាខ្មែរសម្រាប់អ្នកចាប់ផ្តើមដល់អ្នកជំនាញ",
  },
  {
    icon: Code,
    title: "កូដឧទាហរណ៍",
    description: "ឧទាហរណ៍កូដជាច្រើនដែលអាចចម្លង និងប្រើប្រាស់បាន",
  },
  {
    icon: Zap,
    title: "ទំនើប និងរហ័ស",
    description: "បច្ចេកវិទ្យាចុងក្រោយបំផុត ជាមួយការរចនាស្អាត និងទាន់សម័យ",
  },
  {
    icon: Users,
    title: "សម្រាប់ខ្មែរ",
    description: "សរសេរជាភាសាខ្មែរទាំងស្រុង ងាយស្រួលយល់",
  },
];

const languages = [
  { id: "c", name: "C", color: "#A8B9CC" },
  { id: "cpp", name: "C++", color: "#00599C" },
  { id: "csharp", name: "C#", color: "#239120" },
  { id: "python", name: "Python", color: "#3776AB" },
  { id: "html", name: "HTML", color: "#E34F26" },
  { id: "css", name: "CSS", color: "#1572B6" },
  { id: "javascript", name: "JavaScript", color: "#F7DF1E" },
  { id: "react", name: "React", color: "#61DAFB" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                រៀនសរសេរកូដ
                <br />
                <span className="text-primary">ជាភាសាខ្មែរ</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                ឯកសារសរសេរកូដពេញលេញជាភាសាខ្មែរ។ រៀនភាសាកម្មវិធីពី C ដល់ React.js
                ជាមួយឧទាហរណ៍កូដច្បាស់លាស់ និងការពន្យល់ងាយស្រួលយល់។
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs">
                  <Button size="lg" className="gap-2" data-testid="button-start-learning">
                    ចាប់ផ្តើមរៀន
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" data-testid="button-learn-more">
                    ស្វែងយល់បន្ថែម
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 border-t">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">ភាសាកម្មវិធីដែលមាន</h2>
              <p className="text-muted-foreground">
                រៀនភាសាកម្មវិធីពេញនិយមបំផុតក្នុងពិភពលោក
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link href="/docs">
                    <Card className="p-4 text-center hover-elevate cursor-pointer">
                      <div className="flex justify-center mb-2">
                        <LanguageIcon language={lang.id} size="lg" />
                      </div>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">មុខងារពិសេស</h2>
              <p className="text-muted-foreground">
                អ្វីដែលធ្វើឲ្យឯកសារកូដខ្មែរខុសពីគេ
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 border-t">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                ចាប់ផ្តើមរៀនថ្ងៃនេះ
              </h2>
              <p className="text-muted-foreground mb-8">
                មិនថាអ្នកជាអ្នកចាប់ផ្តើមថ្មី ឬអ្នកជំនាញ យើងមានមេរៀនសម្រាប់អ្នកទាំងអស់គ្នា
              </p>
              <Link href="/docs">
                <Button size="lg" className="gap-2" data-testid="button-start-now">
                  ចាប់ផ្តើមឥឡូវនេះ
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>រក្សាសិទ្ធិ 2024 ឯកសារកូដខ្មែរ។ រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
        </div>
      </footer>
    </div>
  );
}
