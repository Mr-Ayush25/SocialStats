import { Bot, Brain } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow">
      <Link className="flex items-center justify-center" href="/">
        <Bot className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">Let&apos;s Analyze</span>
      </Link>
    </header>
  );
}
