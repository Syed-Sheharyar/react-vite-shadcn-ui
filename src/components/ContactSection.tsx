import { Button } from "./ui/button"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { LocateFixed, Mail, PhoneCall } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="w-full pb-5 flex justify-center flex-col sm:flex-row">
      <div className="sm:w-2/4 p-12 text-center sm:text-left">
        <h2 className="font-semibold text-3xl">Contact me</h2>
        <address className="mt-2 mb-3 opacity-70">
          <LocateFixed className="m-1 inline" /> Flat C-721, Phase-3, Diamond
          Tower, Diamond Society, Sector-W, Gulshan-e-Maymar, Karachi.
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
        className="sm:w-2/4 p-5 flex flex-col gap-3 bg-secondary"
        data-netlify="true"
        method="POST">
        <label htmlFor="email">Email</label>
        <Input
          className="border-b-2 border-b-muted-foreground"
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"></Input>
        <label htmlFor="message">Message</label>
        <Textarea
          className="border-b-2 border-b-muted-foreground"
          id="message"
          name="message"
          placeholder="Your Message..."></Textarea>
        <Button
          type="submit"
          className="mt-2">
          Send Message{" "}
        </Button>
      </form>
    </section>
  )
}
