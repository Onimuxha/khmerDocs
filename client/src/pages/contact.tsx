import { motion } from "framer-motion";
import { Mail, MessageSquare, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "សូមបញ្ចូលឈ្មោះ"),
  email: z.string().email("អ៊ីមែលមិនត្រឹមត្រូវ"),
  message: z.string().min(10, "សារត្រូវមានយ៉ាងហោចណាស់ 10 តួអក្សរ"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    toast({
      title: "ផ្ញើសារជោគជ័យ",
      description: "យើងនឹងឆ្លើយតបមកអ្នកក្នុងពេលឆាប់បំផុត។",
    });
    form.reset();
  };

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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">ទំនាក់ទំនង</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              មានសំណួរ ឬមតិកែលម្អ? យើងរីករាយស្តាប់ពីអ្នក!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  ផ្ញើសារមកយើង
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ឈ្មោះ</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                              {...field}
                              data-testid="input-contact-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>អ៊ីមែល</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="example@email.com"
                              {...field}
                              data-testid="input-contact-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>សារ</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="សរសេរសាររបស់អ្នកនៅទីនេះ..."
                              className="min-h-32"
                              {...field}
                              data-testid="input-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" data-testid="button-submit-contact">
                      ផ្ញើសារ
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">អ៊ីមែល</h3>
                    <p className="text-sm text-muted-foreground">contact@khmerdocs.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-sm text-muted-foreground">github.com/khmerdocs</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-muted/50">
                <h3 className="font-medium mb-2">ម៉ោងធ្វើការ</h3>
                <p className="text-sm text-muted-foreground">
                  ច័ន្ទ - សុក្រ: ០៨:០០ - ១៧:០០
                </p>
                <p className="text-sm text-muted-foreground">
                  យើងនឹងឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង។
                </p>
              </Card>
            </motion.div>
          </div>
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
