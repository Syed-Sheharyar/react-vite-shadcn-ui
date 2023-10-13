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
import SkillsIPossess from "./components/SkillsIPossess"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion"

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
        <SkillsIPossess />
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
        <section className="flex w-4/5 sm:w-2/4 flex-col justify-center items-center h-screen m-auto">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-muted-foreground">
            FAQs
          </h2>
          <Accordion
            type="single"
            className="w-full mt-2"
            collapsible>
            <AccordionItem value="opensource">
              <AccordionTrigger>
                Do you have any Open Source Contributions to your name?
              </AccordionTrigger>
              <AccordionContent>
                Yes! You can take a look at my{" "}
                <a
                  href="https://github.com/Syed-Sheharyar"
                  target="_blank"
                  rel="noopener noreferrer">
                  Github
                </a>{" "}
                I had few Contributions to my name. You also find this website
                code in this{" "}
                <a
                  href="https://github.com/Syed-Sheharyar/sheharyar-resume"
                  target="_blank"
                  rel="noopener noreferrer">
                  repo.
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="docker">
              <AccordionTrigger>
                Do you have any experience with Containerization tools like
                Docker?
              </AccordionTrigger>
              <AccordionContent>
                Yes! I had experience with Docker and understanding of
                Containerization concepts as well.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="learning">
              <AccordionTrigger>
                How you learn all these Languages and Tools?
              </AccordionTrigger>
              <AccordionContent>
                As a self-taught developer I learn through Youtube Videos,
                Documentation and Medium or dev.to articles. All are great
                resources to be prepare yourself even for senior position in a
                company.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="languages">
              <AccordionTrigger>
                Why you stick with one language and how better you now with TS?
              </AccordionTrigger>
              <AccordionContent>
                I started Web dev 3 year's ago from now and go complete
                full-stack with the same language as demand of TS increases I
                switch my gears to Type Safety and never look back. I already
                mentioned that I have some experience in Python as well.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="">
              <AccordionTrigger>
                You mention React Native and Electron JS are you good at both?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Because concepts are very similar for React Native for sure
                I had played with React Native a little bit and have good basic
                understanding of React Native's ecosystem. For, Electron JS
                currently I am working on my side project with Electron paired
                with React. So, yeah I am good at both.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
