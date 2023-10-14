import instance from "./request";

// post请求，有参数,如传用户名和密码
export const loginAPI = (data: any)=>{
    return  instance.post("/admin/login", data);
}

