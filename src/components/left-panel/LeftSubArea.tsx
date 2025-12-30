import { ScrollArea } from "@/components/ui/scroll-area";

const legendItems = [
  { label: "data1", color: "#ef4444" },
  { label: "data2", color: "#f97316" },
  { label: "data3", color: "#eab308" },
  { label: "data4", color: "#22c55e" },
  { label: "data5", color: "#14b8a6" },
  { label: "data6", color: "#3b82f6" },
  { label: "data7", color: "#8b5cf6" },
  { label: "data8", color: "#ec4899" },
  { label: "data9", color: "#6366f1" },
  { label: "data10", color: "#06b6d4" },
  { label: "data11", color: "#84cc16" },
  { label: "data12", color: "#a855f7" },
  { label: "data13", color: "#f43f5e" },
  { label: "data14", color: "#0ea5e9" },
  { label: "data15", color: "#10b981" },
  { label: "data16", color: "#f59e0b" },
  { label: "data17", color: "#7c3aed" },
  { label: "data18", color: "#db2777" },
  { label: "data19", color: "#2563eb" },
  { label: "data20", color: "#16a34a" },
  { label: "data21", color: "#dc2626" },
  { label: "data22", color: "#ea580c" },
  { label: "data23", color: "#0891b2" },
  { label: "data24", color: "#4f46e5" },
  { label: "data25", color: "#be185d" },
  { label: "data26", color: "#65a30d" },
  { label: "data27", color: "#c026d3" },
  { label: "data28", color: "#059669" },
  { label: "data29", color: "#d97706" },
  { label: "data30", color: "#9333ea" },
];

export function LeftSubArea() {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <ScrollArea className="h-full">
        <div className="space-y-2 p-2">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

