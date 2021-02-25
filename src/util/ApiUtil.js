
export function apiutil(type, url, data){
    var json = {"type":type,"url":url,"data":data};
    console.log(json);
    return json;
}