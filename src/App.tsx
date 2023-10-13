import Header from "./components/Header"
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
import { ScrollArea } from "./components/ui/scroll-area"
import Footer from "./components/Footer"
import LandingPage from "./components/LandingPage"
import FlexLayout from "./components/FlexLayout"
import techStackImages from "./data/techStackImages"
import skillsAndProgress from "./data/skillsAndProgress"
import toolsIUseImages from "./data/toolsIUse"
import ContactSection from "./components/ContactSection"

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <LandingPage />
        <FlexLayout
          title="Tech Stack"
          images={techStackImages}
        />
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
              Played with Svelte and Svelte kit as well. I stick with one
              language to ensure increase in Indepth concepts of that language
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
              As I always a topper in my class and finished my High School from{" "}
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
        <FlexLayout
          title="Tools I Use"
          images={toolsIUseImages}
        />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
