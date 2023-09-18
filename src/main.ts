import CreateDom from "@/lib/main-entrance/CreateDom";
// 导入截图所需样式
import "@/assets/scss/screen-shot.scss";
import InitData from "@/lib/main-entrance/InitData";
import {
    crcEventType,
    cutOutBoxBorder,
    drawCutOutBoxReturnType,
    movePositionType,
    positionInfoType,
    screenShotType,
    toolPositionValType,
    zoomCutOutBoxReturnType
} from "@/lib/type/ComponentType";
import {drawMasking} from "@/lib/split-methods/DrawMasking";
import {fixedData ,nonNegativeData} from "@/lib/commont-methods/FixedData";
import {drawPencil ,initPencil} from "@/lib/split-methods/DrawPencil";
import {drawText} from "@/lib/split-methods/DrawText";
import {drawRectangle} from "@/lib/split-methods/DrawRectangle";
import {drawCircle} from "@/lib/split-methods/DrawCircle";
import {DrawArrow} from "@/lib/split-methods/DrawArrow"; 
import {drawMosaic} from "@/lib/split-methods/DrawMosaic";
import { drawCutOutBox } from "@/lib/split-methods/DrawCutOutBox";
import { zoomCutOutBoxPosition } from "@/lib/split-methods/ZoomCutOutBoxPosition";
import {saveBorderArrInfo} from "@/lib/commont-methods/SaveBorderArrInfo";
import {calculateToolLocation} from "@/lib/split-methods/CalculateToolLocation"
import html2canvas from "html2canvas";
import PlugInParameters from "@/lib/main-entrance/PlugInParameters";
import {getDrawBoundaryStatus} from "@/lib/split-methods/BoundaryJudgment";
import  KeyboardEventHandle from "@/lib/split-methods/KeyboardEventHandle";
import {setPlugInParameters} from "@/lib/split-methods/SetPlugInParameters";
import {drawCrossImg} from "@/lib/split-methods/drawCrossImg";
import { getCanvas2dCtx } from "@/lib/commont-methods/CanvasPatch";
import { updateContainerMouseStyle} from "@/lib/commont-methods/UpdateContainerMouseStyle"
import { addHistory } from "@/lib/split-methods/AddHistoryData";