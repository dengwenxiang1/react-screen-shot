/**
 * @param text 需要进行绘制的文字
 * @param mouseX 绘制位置的X轴坐标
 * @param mouseY 绘制位置的Y轴坐标
 * @param fontSize 文字大小
 * @param color 字体颜色
 * @param context 需要你行绘制的画布
 */
export function drawText (
    text: string,
    mouseX: number,
    mouseY: number,
    color: string,
    fontSize: number,
    context:CanvasRenderingContext2D
){
  // 开始绘制
  context.save();
  // 设置字体颜色
  context.fillStyle = color;
  context.textBaseline = "middle";
  context.font = `bold ${fontSize} px none`;
  context.fillText(text,mouseX,mouseY);
  // 结束绘制
  context.restore();
}