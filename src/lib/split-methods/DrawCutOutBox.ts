import PlugInParameters from "@/lib/main-entrance/PlugInParameters";
/**
 * 绘制裁剪框
 * @param mousex 鼠标x轴坐标
 * @param mouseY 鼠标y轴坐标
 * @param width  裁剪框宽度
 * @param height 裁剪框高度
 * @param context 需要进行绘制的canvas画布
 * @param birderSize 边框节点直径
 * @param controller 需要进行操作的canvas容器
 * @param imageController 图片canvas容器
 * @param drawBorders
 */

export function drawCutOutBox (
    mouseX:number,
    mouseY:number,
    width:number,
    height:number,
    context:CanvasRenderingContext2D,
    borderSize:number,
    contriller:HTMLCanvasElement,
    imageController:HTMLCanvasElement,
    drawBorders =true
){
  // 获取画布宽高
  const canvasWidth =contriller?.width;
  const canvasHeight=contriller?.height;
  const dpr =window.devicePixelRatio || 1;
  const data= new PlugInParameters();

  // 画布，图片不存在则return
  if(!canvasWidth || !canvasWidth ||!imageController)return;

  //清楚画布
  context.clearRect(0,0,canvasWidth,canvasHeight);

  //绘制蒙层
  context.save();
  const maskColor =data.getMaskColor();
  context.fillStyle = "rgba(0, 0, 0, .6)";
  if(maskColor){
    context.fillStyle =`rgba(${maskColor.r},${maskColor.g},${maskColor.b},${maskColor.a})`;
  }
  context.fillRect(0,0,canvasWidth,canvasHeight);
  //将蒙层凿开
  context.globalCompositeOperation="source-atop";
  //裁剪选择框
  context.clearRect(mouseX,mouseY,width,height);
  //  绘制8个边框像素点并保存坐标信息以及事件参数
  context.globalCompositeOperation="source-over";
  context.fillStyle=data.getCutBoxBdColor();
  // 是否绘制裁剪框的8个像素点
  if(drawBorders){
    // 像素点大小
    const size = borderSize;
    context.fillRect(mouseX - size / 2,mouseY -size/2 ,size,size);
    context.fillRect(
        mouseX - size /2 +width/2,
        mouseY -size /2,
        size,
        size
    );
    context.fillRect(mouseX -size / 2+ width /2, mouseY - size /2 ,size,size);
    context.fillRect(
        mouseX -size / 2 ,
        mouseY -size/2 +height/2,
        size,
        size
    );
    context.fillRect(
        mouseX - size /2 +width,
        mouseY - size/2 +height /2,
        size,
        size
    ); 
    context.fillRect(mouseX - size / 2,mouseY -size / 2 +height,size,size);
    context.fillRect(
        mouseX - size /2 +width/2,
        mouseY - size/2 +height/2,
        size,
        size
    )
    context.fillRect(
        mouseX - size /2 +width,
        mouseY - size /2 +height,
        size,
        size
    );
  }
  //绘制结束
  context.restore()
  // 使用drawImage将图片绘制到蒙层下方 
  context.save();

  context.globalCompositeOperation ="destination-over";
  //  图片尺寸使用canvas容器的css中的尺寸
  let  {imgWidth,imgHeight} ={
    imgWidth:parseInt(contriller.style.width),
    imgHeight:parseInt(contriller.style.height)
  }

  // 用户有传入截图dom绘制时使用其dom的尺寸
  const screenShotDom = data.getScreenShotDom();
  if(screenShotDom!==null){
    imgWidth = screenShotDom.clientWidth;
    imgHeight =screenShotDom.clientHeight;
  }

  //  非webrtc模式且未传入截图dom时，图片的宽高不做处理
  if(!data.getWebRtcStatus()&&screenShotDom==null){
    imgWidth = imageController.width /dpr;
    imgHeight =imageController.height /dpr;
  }
  context.drawImage(imageController,0,0,imgWidth,imgHeight);
  context.restore;
  //  返回裁剪框临时位置信息
  if(width >0  &&height>0){
    // 考虑左上往下拉区域的情况
    return {
        startX:mouseX,
        startY:mouseY,
        width,
        height
    }
  }else if(width < 0 && height <0) {
    return {
        startX: mouseX + width,
        startY:mouseY  + height,
        width:Math.abs(width),
        height:Math.abs(height)
    }
  } else if (width >0 && height<0){
    // 考虑左下往右上拉区域的情况
    return {
        startX: mouseX ,
        startY:mouseY  + height,
        width,
        height:Math.abs(height)
    }
  }else if(width< 0 && height>0){
    // 考虑右上往左下拉区域的情况
    return {
        startX: mouseX + width,
        startY:mouseY,
        width,
        height:Math.abs(height)
    }
  }
  return {
    startX:mouseX,
    startY:mouseY,
    width,
    height
  }
}