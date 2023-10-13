import { BookOpen, Code } from "lucide-react";

export default function SkillsIPossess() {
  return (
    <section className="w-full flex items-center flex-col justify-center gap-10 sm:flex-row p-10 sm:h-screen">
      <div className="w-full sm:w-2/4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-muted-foreground flex items-center">
          About My Skills <Code className="ml-3"/>
        </h2>
        <p className="text-justify mt-3">
          As I am a FullStack developer with more than 2 year's of Experience in
          building stuff with JS Tech Stack mainly MERN, PERN or React with Next
          JS Specialized in both Front-end and back-end. Have a good
          understanding of implementing APIs and HTTP Protocol and how to
          communicate with them in Front-end. With solid understanding of JS and
          TS I can built almost anything including Mobile APPs using React
          Native or Capacitor or Desktop Apps using Electron JS.
        </p>
        <p className="text-justify mt-3">
          Played with Svelte and Svelte kit as well. I stick with one language
          to ensure increase in Indepth concepts of that language like Promises
          in JS.{" "}
          <b>
            <em>
              Languages are just Tools that can be learn as needed. Have a good
              knowledge of Python as well.
            </em>
          </b>
        </p>
      </div>
      <div className="w-full sm:w-2/4">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-muted-foreground flex items-center">
          Education
          <BookOpen className="ml-3" />
        </h2>
        <p className="text-justify mt-3">
          As I always a topper in my class and finished my High School from{" "}
          <b>
            Metropolitan School <em>(Maymar Campus)</em>
          </b>{" "}
          as Result announced by Sindh Board recently. I pass the class with A1
          grade and 82% and got a great result. I am fluent in speaking English
          and Urdu is our National Language.
        </p>
      </div>
    </section>
  )
}
