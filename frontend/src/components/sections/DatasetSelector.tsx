"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDataset } from "@/contexts/DatasetContext";

export function DatasetSelector() {
  const { datasetNames, selectedName, setSelectedName, loading } = useDataset();

  return (
    <div className="w-1/2 px-4 py-4">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-foreground whitespace-nowrap">
          Dataset:
        </label>
        <Select
          disabled={loading}
          value={selectedName || undefined}
          onValueChange={setSelectedName}
        >
          <SelectTrigger className="flex-1">
            <SelectValue placeholder={loading ? "加载中..." : "选择数据集..."} />
          </SelectTrigger>
          <SelectContent>
            {datasetNames.map((name) => (
              <SelectItem key={name} value={name}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
