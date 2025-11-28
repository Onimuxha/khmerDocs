import type { ProgrammingLanguage } from "@shared/schema";

export const documentationData: ProgrammingLanguage[] = [
  {
    id: "c",
    name: "ភាសា C",
    nameEn: "C",
    icon: "c",
    color: "#A8B9CC",
    chapters: [
      {
        id: "c-basics",
        title: "មូលដ្ឋានគ្រឹះ",
        lessons: [
          {
            id: "c-intro",
            title: "ការណែនាំភាសា C",
            content: `ភាសា C គឺជាភាសាសរសេរកម្មវិធីដែលមានអានុភាពខ្លាំង និងប្រើប្រាស់ទូលំទូលាយបំផុតមួយក្នុងពិភពលោក។ វាត្រូវបានបង្កើតឡើងដោយ Dennis Ritchie នៅក្នុងឆ្នាំ 1972 នៅ Bell Labs។

ភាសា C ត្រូវបានប្រើសម្រាប់បង្កើតប្រព័ន្ធប្រតិបត្តិការ កម្មវិធីបង្កប់ និងកម្មវិធីដែលត្រូវការល្បឿនខ្ពស់។`,
            images: [
              {
                url: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
                alt: "ロゴ C",
                caption: "ឡូហ្គូ C"
              }
            ],
            codeBlocks: [
              {
                language: "c",
                code: `#include <stdio.h>

int main() {
    printf("សួស្តី ពិភពលោក!\\n");
    return 0;
}`,
                filename: "hello.c"
              }
            ]
          },
          {
            id: "c-variables",
            title: "អថេរ និងប្រភេទទិន្នន័យ",
            content: `អថេរគឺជាកន្លែងផ្ទុកទិន្នន័យក្នុងមេមូរី។ ភាសា C មានប្រភេទទិន្នន័យជាច្រើនដូចជា:

• int - លេខគត់
• float - លេខទសភាគ
• char - តួអក្សរ
• double - លេខទសភាគច្បាស់លាស់ជាង`,
            codeBlocks: [
              {
                language: "c",
                code: `int age = 25;
float price = 19.99;
char grade = 'A';
double pi = 3.14159265359;

printf("អាយុ: %d\\n", age);
printf("តម្លៃ: %.2f\\n", price);`,
                filename: "variables.c"
              }
            ]
          },
          {
            id: "c-operators",
            title: "សញ្ញាប្រមាណវិធី",
            content: `ភាសា C មានសញ្ញាប្រមាណវិធីច្រើនប្រភេទ:

• សញ្ញាគណិតវិទ្យា: +, -, *, /, %
• សញ្ញាប្រៀបធៀប: ==, !=, <, >, <=, >=
• សញ្ញាតក្កវិទ្យា: &&, ||, !`,
            codeBlocks: [
              {
                language: "c",
                code: `int a = 10, b = 5;

// សញ្ញាគណិតវិទ្យា
int sum = a + b;      // 15
int diff = a - b;     // 5
int product = a * b;  // 50

// សញ្ញាប្រៀបធៀប
if (a > b) {
    printf("a ធំជាង b\\n");
}`,
                filename: "operators.c"
              }
            ]
          }
        ]
      },
      {
        id: "c-control",
        title: "រចនាសម្ព័ន្ធគ្រប់គ្រង",
        lessons: [
          {
            id: "c-if-else",
            title: "If-Else ប្រយោគលក្ខខណ្ឌ",
            content: `ប្រយោគ if-else អនុញ្ញាតឲ្យយើងធ្វើការសម្រេចចិត្តក្នុងកូដ។ កូដខាងក្នុង if នឹងដំណើរការតែពេលលក្ខខណ្ឌពិតប៉ុណ្ណោះ។`,
            codeBlocks: [
              {
                language: "c",
                code: `int score = 85;

if (score >= 90) {
    printf("ពិន្ទុ A\\n");
} else if (score >= 80) {
    printf("ពិន្ទុ B\\n");
} else if (score >= 70) {
    printf("ពិន្ទុ C\\n");
} else {
    printf("ត្រូវខិតខំទៀត\\n");
}`,
                filename: "if_else.c"
              }
            ]
          },
          {
            id: "c-loops",
            title: "រង្វិលជុំ (Loops)",
            content: `រង្វិលជុំអនុញ្ញាតឲ្យយើងដំណើរការកូដម្តងទៀតច្រើនដង។ ភាសា C មានរង្វិលជុំបីប្រភេទ: for, while និង do-while។`,
            codeBlocks: [
              {
                language: "c",
                code: `// រង្វិលជុំ for
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
// លទ្ធផល: 1 2 3 4 5

// រង្វិលជុំ while
int count = 0;
while (count < 3) {
    printf("ការរាប់: %d\\n", count);
    count++;
}`,
                filename: "loops.c"
              }
            ]
          }
        ]
      },
      {
        id: "c-functions",
        title: "អនុគមន៍",
        lessons: [
          {
            id: "c-function-basics",
            title: "មូលដ្ឋានអនុគមន៍",
            content: `អនុគមន៍គឺជាប្លុកកូដដែលអាចប្រើឡើងវិញបាន។ វាជួយឲ្យកូដរបស់យើងមានរចនាសម្ព័ន្ធល្អ និងងាយស្រួលថែទាំ។`,
            codeBlocks: [
              {
                language: "c",
                code: `// ការប្រកាសអនុគមន៍
int add(int a, int b) {
    return a + b;
}

// ការហៅអនុគមន៍
int main() {
    int result = add(5, 3);
    printf("ផលបូក: %d\\n", result);
    return 0;
}`,
                filename: "functions.c"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cpp",
    name: "ភាសា C++",
    nameEn: "C++",
    icon: "cpp",
    color: "#00599C",
    chapters: [
      {
        id: "cpp-basics",
        title: "មូលដ្ឋានគ្រឹះ C++",
        lessons: [
          {
            id: "cpp-intro",
            title: "ការណែនាំភាសា C++",
            content: `C++ គឺជាភាសាសរសេរកម្មវិធីដែលពង្រីកពីភាសា C ដោយបន្ថែមលក្ខណៈ Object-Oriented Programming (OOP)។ វាត្រូវបានបង្កើតដោយ Bjarne Stroustrup នៅក្នុងឆ្នាំ 1979។`,
            codeBlocks: [
              {
                language: "cpp",
                code: `#include <iostream>
using namespace std;

int main() {
    cout << "សួស្តី ពិភពលោក!" << endl;
    return 0;
}`,
                filename: "hello.cpp"
              }
            ]
          },
          {
            id: "cpp-classes",
            title: "Class និង Object",
            content: `Class គឺជាគំរូសម្រាប់បង្កើត objects។ វាអាចមាន attributes (អថេរ) និង methods (អនុគមន៍) ខាងក្នុង។`,
            images: [
              {
                url: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
                alt: "ឡូហ្គូ C++",
                caption: "ឡូហ្គូ C++"
              }
            ],
            codeBlocks: [
              {
                language: "cpp",
                code: `class Car {
public:
    string brand;
    int year;
    
    void displayInfo() {
        cout << "ម៉ាក: " << brand << endl;
        cout << "ឆ្នាំ: " << year << endl;
    }
};

int main() {
    Car myCar;
    myCar.brand = "Toyota";
    myCar.year = 2023;
    myCar.displayInfo();
    return 0;
}`,
                filename: "classes.cpp"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "csharp",
    name: "ភាសា C#",
    nameEn: "C#",
    icon: "csharp",
    color: "#239120",
    chapters: [
      {
        id: "csharp-basics",
        title: "មូលដ្ឋានគ្រឹះ C#",
        lessons: [
          {
            id: "csharp-intro",
            title: "ការណែនាំភាសា C#",
            content: `C# គឺជាភាសាសរសេរកម្មវិធីដែលបង្កើតដោយ Microsoft។ វាត្រូវបានប្រើសម្រាប់បង្កើតកម្មវិធី Windows, ហ្គេម Unity និង Web applications ជាមួយ .NET។`,
            codeBlocks: [
              {
                language: "csharp",
                code: `using System;

class Program {
    static void Main() {
        Console.WriteLine("សួស្តី ពិភពលោក!");
    }
}`,
                filename: "Program.cs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "python",
    name: "ភាសា Python",
    nameEn: "Python",
    icon: "python",
    color: "#3776AB",
    chapters: [
      {
        id: "python-basics",
        title: "មូលដ្ឋានគ្រឹះ Python",
        lessons: [
          {
            id: "python-intro",
            title: "ការណែនាំភាសា Python",
            content: `Python គឺជាភាសាសរសេរកម្មវិធីដែលងាយស្រួលរៀន និងប្រើប្រាស់។ វាល្បីល្បាញសម្រាប់ Data Science, Machine Learning និង Web Development។`,
            codeBlocks: [
              {
                language: "python",
                code: `# កម្មវិធីដំបូង
print("សួស្តី ពិភពលោក!")

# អថេរ
name = "សុភា"
age = 25
print(f"ឈ្មោះ: {name}, អាយុ: {age}")`,
                filename: "hello.py"
              }
            ]
          },
          {
            id: "python-lists",
            title: "បញ្ជី (Lists)",
            content: `Lists គឺជារចនាសម្ព័ន្ធទិន្នន័យដែលអាចផ្ទុកធាតុច្រើន។ វាអាចផ្លាស់ប្តូរបាន (mutable) និងរក្សាលំដាប់នៃធាតុ។`,
            codeBlocks: [
              {
                language: "python",
                code: `# បង្កើតបញ្ជី
fruits = ["ផ្លែប៉ោម", "ផ្លែចេក", "ផ្លែម្នាស់"]

# ចូលប្រើធាតុ
print(fruits[0])  # ផ្លែប៉ោម

# បន្ថែមធាតុ
fruits.append("ផ្លែទុរេន")

# រង្វិលជុំ
for fruit in fruits:
    print(fruit)`,
                filename: "lists.py"
              }
            ]
          },
          {
            id: "python-functions",
            title: "អនុគមន៍ Python",
            content: `អនុគមន៍ក្នុង Python ត្រូវបានប្រកាសដោយប្រើពាក្យ def។ វាអាចទទួល parameters និង return values។`,
            codeBlocks: [
              {
                language: "python",
                code: `def greet(name):
    return f"សួស្តី {name}!"

def calculate_sum(a, b):
    return a + b

# ហៅអនុគមន៍
message = greet("សុភា")
print(message)

total = calculate_sum(10, 20)
print(f"ផលបូក: {total}")`,
                filename: "functions.py"
              }
            ]
          }
        ]
      },
      {
        id: "python-oop",
        title: "Object-Oriented Programming",
        lessons: [
          {
            id: "python-classes",
            title: "Class និង Objects",
            content: `Class គឺជាគំរូសម្រាប់បង្កើត objects។ ក្នុង Python យើងប្រើពាក្យ class ដើម្បីប្រកាស class។`,
            codeBlocks: [
              {
                language: "python",
                code: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        print(f"ខ្ញុំឈ្មោះ {self.name}")
        print(f"អាយុ {self.age} ឆ្នាំ")

# បង្កើត object
student = Student("សុភា", 20)
student.introduce()`,
                filename: "classes.py"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "html",
    name: "HTML",
    nameEn: "HTML",
    icon: "html",
    color: "#E34F26",
    chapters: [
      {
        id: "html-basics",
        title: "មូលដ្ឋានគ្រឹះ HTML",
        lessons: [
          {
            id: "html-intro",
            title: "ការណែនាំ HTML",
            content: `HTML (HyperText Markup Language) គឺជាភាសាសម្រាប់បង្កើតរចនាសម្ព័ន្ធគេហទំព័រ។ វាប្រើ tags ដើម្បីកំណត់ធាតុផ្សេងៗនៅលើទំព័រ។`,
            codeBlocks: [
              {
                language: "html",
                code: `<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <title>គេហទំព័រដំបូង</title>
</head>
<body>
    <h1>សួស្តី ពិភពលោក!</h1>
    <p>នេះជាកថាខណ្ឌដំបូងរបស់ខ្ញុំ។</p>
</body>
</html>`,
                filename: "index.html"
              }
            ]
          },
          {
            id: "html-elements",
            title: "ធាតុ HTML មូលដ្ឋាន",
            content: `HTML មានធាតុជាច្រើនសម្រាប់បង្កើតមាតិកា:

• Headings: h1 ដល់ h6
• Paragraph: p
• Links: a
• Images: img
• Lists: ul, ol, li`,
            codeBlocks: [
              {
                language: "html",
                code: `<!-- ចំណងជើង -->
<h1>ចំណងជើងធំបំផុត</h1>
<h2>ចំណងជើងរង</h2>

<!-- កថាខណ្ឌ -->
<p>នេះជាកថាខណ្ឌ។</p>

<!-- តំណភ្ជាប់ -->
<a href="https://example.com">ចុចទីនេះ</a>

<!-- រូបភាព -->
<img src="image.jpg" alt="ពិពណ៌នារូប">

<!-- បញ្ជី -->
<ul>
    <li>ធាតុទី ១</li>
    <li>ធាតុទី ២</li>
</ul>`,
                filename: "elements.html"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "css",
    name: "CSS",
    nameEn: "CSS",
    icon: "css",
    color: "#1572B6",
    chapters: [
      {
        id: "css-basics",
        title: "មូលដ្ឋានគ្រឹះ CSS",
        lessons: [
          {
            id: "css-intro",
            title: "ការណែនាំ CSS",
            content: `CSS (Cascading Style Sheets) គឺជាភាសាសម្រាប់កំណត់រចនាប័ទ្មនៃគេហទំព័រ។ វាគ្រប់គ្រងពណ៌ ទំហំ ប្លង់ និងរូបរាងនៃធាតុ HTML។`,
            codeBlocks: [
              {
                language: "css",
                code: `/* ជ្រើសរើសធាតុ */
h1 {
    color: #333;
    font-size: 24px;
}

/* ជ្រើសរើសតាម class */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* ជ្រើសរើសតាម ID */
#header {
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
}`,
                filename: "styles.css"
              }
            ]
          },
          {
            id: "css-flexbox",
            title: "Flexbox ប្លង់",
            content: `Flexbox គឺជារបៀបរៀបចំប្លង់ដែលមានអានុភាពខ្លាំង។ វាងាយស្រួលសម្រាប់ការតម្រៀប និងចែកចាយទំហំធាតុ។`,
            codeBlocks: [
              {
                language: "css",
                code: `.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.flex-item {
    flex: 1;
    padding: 20px;
}

/* Responsive */
@media (max-width: 768px) {
    .flex-container {
        flex-direction: column;
    }
}`,
                filename: "flexbox.css"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "javascript",
    name: "JavaScript",
    nameEn: "JavaScript",
    icon: "javascript",
    color: "#F7DF1E",
    chapters: [
      {
        id: "js-basics",
        title: "មូលដ្ឋានគ្រឹះ JavaScript",
        lessons: [
          {
            id: "js-intro",
            title: "ការណែនាំ JavaScript",
            content: `JavaScript គឺជាភាសាសរសេរកម្មវិធីសម្រាប់គេហទំព័រ។ វាធ្វើឲ្យគេហទំព័រមានអន្តរកម្ម និងផ្លាស់ប្តូរមាតិកាដោយមិនចាំបាច់ reload ទំព័រ។`,
            codeBlocks: [
              {
                language: "javascript",
                code: `// អថេរ
let name = "សុភា";
const age = 25;

// អនុគមន៍
function greet(person) {
    return \`សួស្តី \${person}!\`;
}

console.log(greet(name));

// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8`,
                filename: "basics.js"
              }
            ]
          },
          {
            id: "js-dom",
            title: "DOM Manipulation",
            content: `DOM (Document Object Model) អនុញ្ញាតឲ្យ JavaScript ចូលប្រើ និងផ្លាស់ប្តូរធាតុ HTML នៅលើទំព័រ។`,
            codeBlocks: [
              {
                language: "javascript",
                code: `// ជ្រើសរើសធាតុ
const button = document.getElementById('myButton');
const items = document.querySelectorAll('.item');

// ផ្លាស់ប្តូរមាតិកា
button.textContent = 'ចុចខ្ញុំ';

// បន្ថែម event listener
button.addEventListener('click', () => {
    alert('អ្នកបានចុចប៊ូតុង!');
});

// បង្កើតធាតុថ្មី
const newDiv = document.createElement('div');
newDiv.className = 'card';
document.body.appendChild(newDiv);`,
                filename: "dom.js"
              }
            ]
          },
          {
            id: "js-async",
            title: "Async/Await",
            content: `Async/Await គឺជារបៀបងាយស្រួលសម្រាប់ធ្វើការជាមួយ asynchronous code ដូចជាការហៅ API។`,
            codeBlocks: [
              {
                language: "javascript",
                code: `// Async function
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('មានបញ្ហា:', error);
    }
}

// ហៅអនុគមន៍
fetchData();`,
                filename: "async.js"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "react",
    name: "React.js",
    nameEn: "React",
    icon: "react",
    color: "#61DAFB",
    chapters: [
      {
        id: "react-basics",
        title: "មូលដ្ឋានគ្រឹះ React",
        lessons: [
          {
            id: "react-intro",
            title: "ការណែនាំ React",
            content: `React គឺជា JavaScript library សម្រាប់បង្កើត user interfaces។ វាប្រើ component-based architecture ដែលងាយស្រួលប្រើឡើងវិញ។`,
            codeBlocks: [
              {
                language: "jsx",
                code: `import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>ការរាប់: {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                បន្ថែម
            </button>
        </div>
    );
}

export default Counter;`,
                filename: "Counter.jsx"
              }
            ]
          },
          {
            id: "react-components",
            title: "Components និង Props",
            content: `Components គឺជាប្លុកសម្រាប់បង្កើត UI ក្នុង React។ Props អនុញ្ញាតឲ្យយើងបញ្ជូនទិន្នន័យពី parent ទៅ child component។`,
            codeBlocks: [
              {
                language: "jsx",
                code: `// Card component
function Card({ title, description, image }) {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

// ប្រើ Card component
function App() {
    return (
        <div>
            <Card 
                title="ផលិតផលទី១"
                description="ពិពណ៌នាផលិតផល"
                image="/product.jpg"
            />
        </div>
    );
}`,
                filename: "Card.jsx"
              }
            ]
          },
          {
            id: "react-hooks",
            title: "React Hooks",
            content: `Hooks អនុញ្ញាតឲ្យយើងប្រើ state និង lifecycle features ក្នុង functional components។ Hooks ដែលប្រើច្រើនបំផុតគឺ useState និង useEffect។`,
            codeBlocks: [
              {
                language: "jsx",
                code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchUser() {
            const response = await fetch(\`/api/users/\${userId}\`);
            const data = await response.json();
            setUser(data);
            setLoading(false);
        }
        
        fetchUser();
    }, [userId]);
    
    if (loading) return <p>កំពុងផ្ទុក...</p>;
    
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    );
}`,
                filename: "UserProfile.jsx"
              }
            ]
          }
        ]
      }
    ]
  }
];

// Helper function to get all searchable items
export function getSearchableItems() {
  const items: Array<{
    type: "language" | "chapter" | "lesson";
    languageId: string;
    chapterId?: string;
    lessonId?: string;
    title: string;
    titleEn?: string;
    subtitle?: string;
    content?: string;
  }> = [];

  documentationData.forEach((lang) => {
    items.push({
      type: "language",
      languageId: lang.id,
      title: lang.name,
      titleEn: lang.nameEn,
    });

    lang.chapters.forEach((chapter) => {
      items.push({
        type: "chapter",
        languageId: lang.id,
        chapterId: chapter.id,
        title: chapter.title,
        subtitle: lang.name,
      });

      chapter.lessons.forEach((lesson) => {
        items.push({
          type: "lesson",
          languageId: lang.id,
          chapterId: chapter.id,
          lessonId: lesson.id,
          title: lesson.title,
          subtitle: `${lang.name} > ${chapter.title}`,
          content: lesson.content,
        });
      });
    });
  });

  return items;
}
