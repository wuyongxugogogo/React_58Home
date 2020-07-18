let devUrl = '';
let prodUrl = '';
export default {
    baseUrl:process.env.NODE_ENV==="production"?prodUrl:devUrl,
    path:"/",
    token:""
}