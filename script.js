async function download(){

let url = document.getElementById("ytlink").value

let res = await fetch("/api/download",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({url})
})

let data = await res.json()

if(data.status){
document.getElementById("result").innerHTML =
`<a href="${data.link}" target="_blank">Download MP3</a>`
}else{
document.getElementById("result").innerText="Gagal convert"
}

}