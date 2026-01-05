"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getDatasets, Dataset } from "@/lib/services/datasetService";

// Context 类型定义
interface DatasetContextType {
  datasets: { [key: string]: Dataset };
  datasetNames: string[];
  selectedName: string | null;
  selectedDataset: Dataset | null;
  setSelectedName: (name: string) => void;
  loading: boolean;
}

// 创建 Context
const DatasetContext = createContext<DatasetContextType | undefined>(undefined);

// Provider 组件
export function DatasetProvider({ children }: { children: ReactNode }) {
  const [datasets, setDatasets] = useState<{ [key: string]: Dataset }>({});
  const [datasetNames, setDatasetNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 组件挂载时获取数据集列表
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getDatasets();
        if (result.success && result.data) {
          setDatasets(result.data.datasets);
          setDatasetNames(result.data.names);
        }
      } catch (error) {
        console.error("获取数据集失败:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // 根据选中的名称获取对应的数据集对象
  const selectedDataset = selectedName ? datasets[selectedName] : null;

  return (
    <DatasetContext.Provider
      value={{
        datasets,
        datasetNames,
        selectedName,
        selectedDataset,
        setSelectedName,
        loading,
      }}
    >
      {children}
    </DatasetContext.Provider>
  );
}

// 自定义 Hook，方便组件使用
export function useDataset() {
  const context = useContext(DatasetContext);
  if (!context) {
    throw new Error("useDataset 必须在 DatasetProvider 内部使用");
  }
  return context;
}

