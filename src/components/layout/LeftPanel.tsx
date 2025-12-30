import { LeftMainArea } from "@/components/left-panel/LeftMainArea";
import { LeftSubArea } from "@/components/left-panel/LeftSubArea";

export function LeftPanel() {
  return (
    <aside className="flex flex-col flex-1 border-[0.5px] border-foreground/60 p-4 min-h-0">
      {/* 主要区域和副区域 */}
      <div className="flex-1 mt-4 flex gap-2 min-h-0">
        <LeftMainArea />
        <LeftSubArea />
      </div>
    </aside>
  );
}

