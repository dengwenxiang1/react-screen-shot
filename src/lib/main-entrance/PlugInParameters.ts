let enableWebRtc = true;
//electron环境下使用webrtc需要自己传入屏幕流
let screenFlow:MediaStream | null =null;
//数据初始化标识
let initStatus = false;

//画布宽高
let canvasWidth = 0;
let canvasHeight = 0;

// 展示截图图片至容器
let showScreenDate = false;
let screenShotDom: null |HTMLElement = null;

//  蒙层颜色
const maskColor = { r:0 , g:0 ,b:0,a:0.6};
let writeBase64 = true;
let cutBoxColor = "#2CABFF";
let saveCallback:((code:number,msg:string)=> void) | null =null;
export default class PlugInParameters{
  constructor(){
    if(initStatus){
      enableWebRtc = true;
      canvasWidth = 0;
      canvasHeight= 0;
      cutBoxColor ="#2CABFF"
      showScreenDate=false;
      writeBase64=true;
      screenFlow=null;
      // 初始化完成设置其值为false
      initStatus =false;
      screenShotDom=null;
      saveCallback=null;
    }
  }

  // 设置数据初始化标识
  public setInitStatus(status:boolean){
    initStatus=status
  }

  // 获取数据初始化标识
  public getInitStatus(){
    return initStatus;
  }

  //获取webrtc启用状态
  public getWebRtcStatus(){
    return enableWebRtc;
  }

  //设置webrtc启用状态
  public setWebRtcStatus(status:boolean){
    enableWebRtc = status;
  }

  public setScreenShotDom(dom:HTMLElement){
    screenShotDom=dom;
  }
  public getScreenShotDom(){
    return screenShotDom;
  }
  
  public getCutBoxBdColor(){
    return cutBoxColor;
  }
  public setCutBoxBdColor(color:string){
     cutBoxColor=color;
  }

  // 获取屏幕流
  public getScreenFlow(){
    return screenFlow;
  }
  
  //  设置屏幕流
  public setScreenFlow(stream:MediaStream){
    screenFlow =stream;
  }

  // 获取画布宽高
  public getCnavasSzie(){
    return{
      canvasWidth,
      canvasHeight
    };
  }

  //设置画布宽高
  public setCanvasSzie(width:number,height:number){
    canvasWidth =width;
    canvasHeight=height;
  }

  // 获取展示图片至容器的状态
  public getShowScreenDataStatus(){
    return showScreenDate;
  }

  // 设置展示图片至容器的状态
  public setShowScreenDataStatus(status:boolean) {
    showScreenDate=status;
  }

  //  设置蒙层颜色
  public setMaskColor(color:{
    r:number,
    g:number,
    b:number,
    a:number
  })
  {
    maskColor.r=color.r;
    maskColor.g=color.g;
    maskColor.b=color.b;
    maskColor.a=color.a;
  }

  public getMaskColor(){
    return maskColor;
  }

  // 设置截图数据的写入状态
  public setWriteImgState(state:boolean){
    writeBase64=state;
  }

  public getWriteImgState(){
    return writeBase64;
  }

  public setSaveCallback(saveFn:(code:number,msg:string)=> void){
    saveCallback=saveFn;
  }
  public getSaveCallback(){
    return saveCallback;
  }
}