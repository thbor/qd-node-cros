import axios from 'axios'
  const axiosMethod = {
    url:"/getJson",
    method:"GET"
  }
  axios(axiosMethod).then((data)=>{
    console.log("axios請求成功",data)
    return data
  }).catch(err=>{
    console.log("失敗",err)
  })