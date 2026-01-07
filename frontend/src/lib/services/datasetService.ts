const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export interface Dataset {
  path: string;
  type: string;
  obsm: string;
  layers: string;
  reference: string;
}

export interface DatasetsResponse {
  success: boolean;
  data?: {
    names: string[];
    datasets: { [key: string]: Dataset };
  };
  error?: string;
}

// 获取所有数据集
export async function getDatasets(): Promise<DatasetsResponse> {
  const response = await fetch(`${API_BASE_URL}/api/datasets`);
  return response.json();
}

