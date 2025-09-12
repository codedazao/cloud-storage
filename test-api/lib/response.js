export const responseJson = (response,data) =>{
    response.header("content-type", "application/json");
    response.send(JSON.stringify(data));
}

export const success = (response,data,code = 200) =>{
    responseJson(response,{
        code:code,
        data:data
    });
}
export const error = (response,message,code = 300) =>{
    responseJson(response,{
        code:code,
        message:message
    });
}