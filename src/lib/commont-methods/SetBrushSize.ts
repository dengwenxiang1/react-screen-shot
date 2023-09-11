import InitData from "@/lib/main-entrance/InitData";
import { setSelectedClassName } from "@/lib/commont-methods/SetSelectedClassName";
/**
 * 设置画笔大小
 * @param size
 * @param index
 * @param mouseEvent
 */
export function setBrushSize (
    size:string,
    index:number,
    mouseEvent:MouseEvent
) {
  const data =new InitData();
  // 为当前点击项添加选中的class名
  setSelectedClassName(mouseEvent,index,true);
  let sizeNum =2;
  switch(size){
    case "small":
        sizeNum =2;
        break;
    case "medium":
        sizeNum =5;
        break;
    case "big":
        sizeNum =10;
        break;
  }
  data.setPenSzie(sizeNum);
  return sizeNum;
}