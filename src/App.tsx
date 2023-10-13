import { CopyrightIcon, Github, LocateFixed, Mail, Send } from "lucide-react"
import Header from "./components/Header"
import { Button } from "./components/ui/button"
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from "./components/ui/table"
import { Progress } from "./components/ui/progress"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Label } from "@radix-ui/react-dropdown-menu"
import { ScrollArea } from "./components/ui/scroll-area"
import { PhoneCall } from "lucide-react"

const skillsAndProgress = [
  {
    skill: "HTML and JavaScript",
    purpose: "Languages of the Web",
    progress: 99,
  },
  {
    skill: "JQuery and Bootstrap",
    purpose: "Old School libraries for Dom manipulation and Styling",
    progress: 80,
  },
  {
    skill: "CSS and Tailwind",
    purpose: "Popular Solutions for Styling in Web",
    progress: 85,
  },
  {
    skill: "TypeScript",
    purpose: "TypeSafety for JavaScript to not get errors in production",
    progress: 90,
  },
  {
    skill: "React",
    purpose: "Most Popular Front-end Framework for Building Web Apps",
    progress: 95,
  },
  {
    skill: "React Native",
    purpose: "React for Mobile using Native components",
    progress: 70,
  },
  {
    skill: "Next JS",
    purpose: "SSR framework for React with tons of features and Routing",
    progress: 90,
  },
  {
    skill: "Express JS and Fastify JS REST APIS",
    purpose: "Backend Frameworks for barbones Node JS",
    progress: 90,
  },
  {
    skill: "GraphQL and TRPC",
    purpose: "Modern way of building APIs not an expert in this",
    progress: 70,
  },
  {
    skill: "MongoDB and FireStore",
    purpose: "NoSQL Databases I work with",
    progress: 85,
  },
  {
    skill: "SQL",
    purpose: "Database query language for SQL Databases",
    progress: 80,
  },
  {
    skill: "MySQL, Postgres and SQLite",
    purpose: "Some Popular SQL Databases I work with",
    progress: 85,
  },
  {
    skill: "Python",
    purpose: "Python for Backend and Automation",
    progress: 60,
  },
]

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section className="flex justify-center sm:justify-around items-center flex-col sm:flex-row w-full h-[30rem] sm:h-96 gap-5">
          <h1 className="text-center sm:text-left sm:w-[20ch]">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              &lt;Hey! My name is/&gt;
            </code>
            <span className="text-4xl block sm:text-7xl font-bold text-muted-foreground tracking-wide">
              Syed Sheharyar
            </span>
          </h1>
          <div className="text-center sm:text-justify">
            <p className="mt-3 mb-3 w-2/3 sm:w-[50ch] m-auto opacity-70">
              I am a fully passionate Fullstack developer with focus on learning
              and building stuff. With knowledge of popular technologies use in
              Industries I can provide high quality websites with all types of
              functionality needed.
            </p>
            <a
              href="https://github.com/Syed-Sheharyar"
              target="_blank"
              rel="noopener noreferrer">
              <Button variant="link">
                <Github
                  size={20}
                  className="mr-2"
                />{" "}
                Github
              </Button>
            </a>
          </div>
        </section>
        <section className="relative flex justify-evenly bg-secondary p-10">
          <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-40 text-muted-foreground font-bold background text-3xl sm:text-6xl md:text-7xl">
            Tech Stack
          </div>
          <img
            className="z-10"
            loading="lazy"
            src="typescript.png"
            alt="TypeScript Logo"
            width={40}
          />
          <img
            className="z-10"
            loading="lazy"
            src="tailwind.jpg"
            alt="Tailwind Logo"
            width={50}
          />
          <img
            className="z-10"
            loading="lazy"
            src="next.png"
            alt="Next.JS Logo"
            width={60}
          />
          <img
            className="z-10"
            loading="lazy"
            src="react.png"
            alt="React Logo"
            width={50}
          />
          <img
            className="z-10"
            loading="lazy"
            src="node.png"
            alt="React Logo"
            width={50}
          />
          <img
            className="z-10"
            loading="lazy"
            src="python.png"
            alt="React Logo"
            width={50}
          />
        </section>
        <section className="w-full flex items-center flex-col justify-center gap-10 sm:flex-row p-10 sm:h-screen">
          <div className="w-full sm:w-2/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-muted-foreground">
              About My Skills
            </h2>
            <p className="text-justify mt-3">
              As I am a FullStack developer with more than 2 year's of
              Experience in building stuff with JS Tech Stack mainly MERN, PERN
              or React with Next JS Specialized in both Front-end and back-end.
              Have a good understanding of implementing APIs and HTTP Protocol
              and how to communicate with them in Front-end. With solid
              understanding of JS and TS I can built almost anything including
              Mobile APPs using React Native or Capacitor or Desktop Apps using
              Electron JS.
            </p>
            <p className="text-justify mt-3">
              Played with Svelte and Svelte-kit as well. I stick with one
              language to ensure increase in indepth concepts of that language
              like Promises in JS.{" "}
              <b>
                <em>
                  Languages are just Tools that can be learn as needed. Have a
                  good knowledge of Python as well.
                </em>
              </b>
            </p>
          </div>
          <div className="w-full sm:w-2/4">
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-muted-foreground">
              Education
            </h2>
            <p className="text-justify mt-3">
              As I always a topper in my class and finished my HighSchool from{" "}
              <b>
                Metropolitan School <em>(Maymar Campus)</em>
              </b>{" "}
              as Result announced by Sindh Board recently. I pass the class with
              A1 grade and 82% and got a great result. I am fluent in speaking
              English and Urdu is our National Language.
            </p>
          </div>
        </section>
        <section className="w-full pb-10 flex items-center flex-col">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-muted-foreground">
            Skills I Possess
          </h2>
          <ScrollArea className="h-96 w-full">
            <Table className="sm:w-4/5 m-auto mt-3">
              <TableCaption>
                Table shows that how much perfect I am in particular skill
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Skills</TableHead>
                  <TableHead>Purpose (Definition)</TableHead>
                  <TableHead>Progress</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {skillsAndProgress.map((e) => (
                  <TableRow key={e.skill}>
                    <TableCell className="font-medium">{e.skill}</TableCell>
                    <TableCell>{e.purpose}</TableCell>
                    <TableCell>
                      <Progress
                        value={e.progress}
                        className="sm:w-40 min-w-[6rem]"></Progress>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </section>
        <section className="relative flex justify-evenly bg-secondary p-10">
          <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-40 text-muted-foreground font-bold background text-3xl sm:text-6xl md:text-7xl">
            Tools I use
          </div>
          <img
            className="z-10"
            loading="lazy"
            src="git.png"
            alt="Git Logo"
            width={60}
          />
          <img
            className="z-10"
            loading="lazy"
            src="github.png"
            alt="Github Logo"
            width={60}
          />
          <img
            className="z-10"
            loading="lazy"
            src="vscode.jpg"
            alt="VSCode Logo"
            width={50}
          />
          <img
            className="z-10"
            loading="lazy"
            src="docker.jpg"
            alt="Docker Logo"
            width={60}
          />
          <img
            className="z-10"
            loading="lazy"
            src="postman.png"
            alt="Postman Logo"
            width={80}
          />
        </section>
        <section className="w-full pb-5 flex justify-center flex-col sm:flex-row">
          <div className="sm:w-2/4 p-5 sm:pl-10 text-center sm:text-left">
            <h2 className="font-semibold text-3xl">Contact Me</h2>
            <address className="mt-2 mb-3 opacity-70">
              <LocateFixed className="m-1 inline" /> Flat C-721, Phase-3,
              Diamond Tower, Diamond Society, Sector-W, Gulshan-e-Maymar,
              Karachi.
            </address>
            <a
              className="block"
              href="mailto:syedsheharyartariq146@gmail.com">
              <Button variant="link">
                <Mail className="mr-2" /> syedsheharyartariq146@gmail.com
              </Button>
            </a>{" "}
            <a href="tel:03002633828">
              <Button variant="link">
                <PhoneCall className="mr-2" />
                03002633828
              </Button>
            </a>
          </div>
          <form
            name="contact"
            className="sm:w-2/4 border p-5 flex flex-col gap-3 bg-secondary"
            netlify>
            <Label>Email</Label>
            <Input
              className="border-b-2 border-b-muted-foreground"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"></Input>
            <Label>Message</Label>
            <Textarea
              className="border-b-2 border-b-muted-foreground"
              id="message"
              name="message"
              placeholder="Your Message..."></Textarea>
              <Button type="submit">Send Message <Send className="ml-2" size={18}/></Button>
          </form>
        </section>
        <footer className="flex justify-center gap-2 p-3 text-sm">
          Made by Syed Sheharyar <CopyrightIcon size="10"></CopyrightIcon> All
          Rights Reserved
        </footer>
      </main>
    </>
  )
}

export default App
