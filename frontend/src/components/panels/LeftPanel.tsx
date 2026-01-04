import Image from "next/image";

export function LeftPanel() {
  return (
    <aside className="flex flex-col flex-1 border-[0.5px] border-foreground/60 p-4 min-h-0">
      {/* 主要区域 */}
      <div className="flex-1 mt-4 flex min-h-0">
        <div className="flex-1 min-w-0 h-full relative">
          <Image
            src="/29872af2fada2ee3fa9adf014a243492.jpg"
            alt="主要区域图片"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </aside>
  );
}

