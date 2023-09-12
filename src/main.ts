import CreateDom from "@/lib/main-entrance/CreateDom";
// 导入截图所需样式
import "@/assets/scss/screen-shot.scss"
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
} from "@/lib/type/ComponentType"
import {drawMasking} from "@/lib/split-methods/DrawMasking"
import {fixedData ,nonNegativeData} from "@/lib/commont-methods/FixedData"
import {drawPencil ,initPencil} from "@/lib/split-methods/DrawPencil"