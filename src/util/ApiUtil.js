/**
 * 
 * @param {接口类型} type 
 * @param {请求方法} url 
 * @param {数据} data 
 */
export function apiutil(type, url, data){
    var json = {"type":type,"url":url,"data":data};
    return JSON.stringify(json);
}