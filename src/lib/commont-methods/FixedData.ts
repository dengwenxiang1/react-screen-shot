/**
 * 对参数进行处理，小于0则返回0
 */
export function nonNegativeData(data:number){
    return data>0?data:0
}
/**
 * 计算传进来的数据，不让其移出可视区域
 * @param data 需要计算的数据
 * @param trimDistane 裁剪框宽度
 * @param cnavasDistance 画布宽度
 */
export function fixedData(
    data:number,
    trimDistane:number,
    cnavasDistance:number
){
  if(nonNegativeData(data) +trimDistane>cnavasDistance){
    return nonNegativeData(cnavasDistance -trimDistane)
  }else{
    return nonNegativeData(data)
  }
}