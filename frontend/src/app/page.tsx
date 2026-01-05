import { LeftPanel } from "@/components/sections/LeftPanel";
import { RightPanel } from "@/components/sections/RightPanel";
import { TopBar } from "@/components/sections/TopBar";
import { DatasetSelector } from "@/components/sections/DatasetSelector";

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col gap-4 p-4 overflow-hidden">
      <TopBar />
      <div className="flex flex-1 gap-4 min-h-0">
        <div className="flex flex-col w-1/2 gap-4 min-h-0">
          <DatasetSelector />
          <LeftPanel />
        </div>
        <RightPanel />
      </div>
    </main>
  );
}
