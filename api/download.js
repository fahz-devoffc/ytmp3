import axios from "axios"

export default async function handler(req,res){

const API_KEY="ISI_API_KEY_KAMU"

const API_BASE="https://back.asitha.top/api/ytapi"

const {url}=req.body

try{

const response=await axios.get(API_BASE,{
params:{
url:url,
fo:"mp3",
qu:"128"
},
headers:{
Authorization:`Bearer ${API_KEY}`
}
})

res.status(200).json({
status:true,
link:response.data.link
})

}catch(err){

res.status(500).json({
status:false
})

}

}
