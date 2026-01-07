"""数据集服务"""
import json
import os
from typing import Dict
from ..config import get_settings
from ..models.dataset import Dataset


class DatasetService:
    """数据集操作服务"""
    
    def __init__(self):
        self.settings = get_settings()
        self.metadata_path = os.path.join(self.settings.data_dir, "metadata.json")
    
    def get_all_datasets(self) -> Dict[str, Dataset]:
        """获取所有数据集"""
        try:
            with open(self.metadata_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            return {name: Dataset(**info) for name, info in data.items()}
        except FileNotFoundError:
            print(f"数据文件不存在: {self.metadata_path}")
            return {}
        except json.JSONDecodeError as e:
            print(f"JSON 解析错误: {e}")
            return {}
        except Exception as e:
            print(f"读取数据集失败: {e}")
            return {}


# 创建服务单例
dataset_service = DatasetService()

