const dataApi = "https://6af4319a55a1de7dcf03b0c3.mockapi.io/chaine/data"
   export async function getData(){
   try {
   const res = await fetch(dataApi)
   if(!res.ok){
    throw new Error(`HTTP Error! : ${res.status}`)
   }
   const data = await res.json()
   return data
   }
   catch(error) {
    console.error("Filled to fetch channels : " ,error)
    throw error;
   }
   
}
const API_URL = "https://6af4319a55a1de7dcf03b0c3.mockapi.io/chaine/data";
 const response=await fetch(API_URL);
 const channels=await response.json();

 for(const channel of channels){
    await fetch(`${API_URL}/${channel.id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({isFavorite:false,isBlacklisted:false}),
    })
 }
 console.log("Terminé");