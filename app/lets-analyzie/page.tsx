import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Chat } from "@/components/chat";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <Chat />
        </main>
      </div>
    </div>
  );
}
