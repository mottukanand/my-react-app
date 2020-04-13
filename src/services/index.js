import axios from 'axios'


export const performRequest = (method, url,headers, params, auth) => {
 const body = method === 'get' ? 'params' : 'data'

 const config = {
   method,
   url,
   headers:headers,
   baseURL: "https://jsonplaceholder.typicode.com",
   [body]: params || {}
 }
 return  axios.request(config);
}