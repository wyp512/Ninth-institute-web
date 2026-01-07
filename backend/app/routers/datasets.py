"""数据集 API 路由"""
from fastapi import APIRouter
from ..services.dataset_service import dataset_service
from ..models.dataset import DatasetsListResponse

router = APIRouter(prefix="/api/datasets", tags=["datasets"])


@router.get("", response_model=DatasetsListResponse)
async def get_datasets():
    """获取所有数据集"""
    try:
        datasets = dataset_service.get_all_datasets()
        names = list(datasets.keys())
        
        # 转换为字典格式
        datasets_dict = {name: ds.model_dump() for name, ds in datasets.items()}
        
        return DatasetsListResponse(
            success=True,
            data={
                "names": names,
                "datasets": datasets_dict
            }
        )
    except Exception as e:
        return DatasetsListResponse(
            success=False,
            error=f"获取数据集失败: {str(e)}"
        )

