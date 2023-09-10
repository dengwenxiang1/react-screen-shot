/**
 * 裁剪框工具栏点击事件
 * @param toolName
 * @param index
 * @param mouseEvent
 */
import {setSelectedClassName} from "@/lib/commont-methods/SetSelectedClassName"
import { calculateOptionIcoPosition } from "@/lib/split-methods/CalculateOptionIcoPosition";
import InitData from "@/lib/main-entrance/InitData";
import { getCanvasImgData} from  "@/lib/commont-methods/GetCanvasImgData";
import { takeOutHistory } from "@/lib/commont-methods/TakeOutHistory";
import {drawCutOutBox} from '@/lib/split-methods/DrawCutOutBox';
import { drawText } from '@/lib/split-methods/DrawText';

export function toolClickEvent(
    toolName: string,
    index:number,
    mouseEvent:any,
    completeCallback:Function | undefined,
    closeCallback:Function | undefined
){

}