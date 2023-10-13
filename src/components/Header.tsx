import { ModeToggle } from "./mode-toggle";
import { Badge } from "./ui/badge";

export default function Header() {
  return (
    <header className="flex justify-between p-6 items-center bg-secondary">
      <div className="flex gap-2">
        <span>Syed Sheharyar</span>
        <sup><Badge>Resume</Badge></sup>
      </div>
      <ModeToggle></ModeToggle>
    </header>
  )
}
