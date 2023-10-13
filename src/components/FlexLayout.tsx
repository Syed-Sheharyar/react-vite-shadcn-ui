import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface Image {
  src: string
  alt: string
  width: string
}

export interface FlexLayoutProps {
  title: string
  images: Image[]
}

export default function FlexLayout(props: FlexLayoutProps) {
  return (
    <section className="relative flex justify-evenly bg-secondary p-10">
      <div className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-40 text-muted-foreground font-bold background text-3xl sm:text-6xl md:text-7xl">
        {props.title}
      </div>
      {props.images.map((img) => (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="z-10">
              <img
                loading="lazy"
                src={img.src}
                alt={img.alt}
                width={img.width}
              />
            </TooltipTrigger>
            <TooltipContent>{img.alt}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </section>
  )
}
