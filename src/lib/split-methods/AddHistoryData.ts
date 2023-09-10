import InitData from "@/lib/main-entrance/InitData";
// 保存当前画布状态
export function addHistory (){
  const data = new InitData();
  const screenShotController = data.getScreenShotContainer();
  if(screenShotController ==null) return;
  // 获取canvas容器
  // 获取canvas画布与容器
  const context = screenShotController.getContext("2d") as CanvasRenderingContext2D;
  const controller =screenShotController;
  if(data.getHistory().length >data.getMaxUndoNum()){
    // 删除最早的一条画布记录
    data.shiftHistory();
  }
  // 保存当前画布状态
  data.pushHistory({
    data:context.getImageData(0,0 ,controller.width,controller.height)
  })
  // 启用撤销按钮
  data.setUndoStatus(false);
}