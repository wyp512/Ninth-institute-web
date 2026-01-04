"""数据集 API 路由"""
from fastapi import APIRouter, HTTPException
from ..services.dataset_service import dataset_service
from ..models.dataset import DatasetsListResponse, DatasetResponse

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


@router.get("/names")
async def get_dataset_names():
    """获取数据集名称列表"""
    try:
        names = dataset_service.get_dataset_names()
        return {"success": True, "data": names}
    except Exception as e:
        return {"success": False, "error": f"获取数据集名称失败: {str(e)}"}


@router.get("/{name}", response_model=DatasetResponse)
async def get_dataset_by_name(name: str):
    """根据名称获取单个数据集"""
    dataset = dataset_service.get_dataset_by_name(name)
    
    if dataset is None:
        raise HTTPException(status_code=404, detail=f"数据集 '{name}' 不存在")
    
    return DatasetResponse(success=True, data=dataset)

