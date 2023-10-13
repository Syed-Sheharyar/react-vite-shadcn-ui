import { Button } from './ui/button'
import { Github } from 'lucide-react'

export default function LandingPage() {
  return (
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
          I am a fully passionate Full stack developer with focus on learning
          and building stuff. With knowledge of popular technologies use in
          Industries I can provide high quality websites with all types of
          functionalities needed.
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
  )
}
