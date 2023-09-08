import { saveCanvasToImage} from "@/lib/commont-methods/SaveCanvasToImage"
import {saveCanvasToBase64} from "@/lib/commont-methods/SaveCanvasToBase64"
import InitData from "@/lib/main-entrance/InitData"
import PlugInParameters from "@/lib/main-entrance/PlugInParameters"


/**
 * 将指定区域的canvas转为图片
 */
export function getCanvasImgData(isSave:boolean){
    const data =new InitData()
    const plugInParameters= new PlugInParameters();
    const screenShotCanvas = data.getScreenShotContainer()?.getContext("2d");
    //获取裁剪区域位置信息
    const {statrX,startY,width,height} =data.getCutOutBoxPosition();
    let base64 = ""
    if(screenShotCanvas){
        if(isSave){
            //将canvas转为图片
            saveCanvasToImage(screenShotCanvas,startY,statrX,width,height);
        }else{
            // 将canvas转为base64
            base64 = saveCanvasToBase64(
                screenShotCanvas,
                statrX,
                startY,
                width,
                height,
                0.75,
                plugInParameters.getWriteImgState()
            )
        }
    }
    return base64;
}