/**
 * 取出一条历史记录
 */
import InitData from "@/lib/main-entrance/InitData";
export function takeOutHistory () {
    const data=new InitData();
    data.popHistory();
}