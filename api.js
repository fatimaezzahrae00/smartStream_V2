const dataApi = "https://6af4319a55a1de7dcf03b0c3.mockapi.io/chaine/data"
let loading = document.getElementById('loading');
   export async function getData(){
   try {
      loading.classList.remove("hidden");
      loading.classList.add("flex");
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
   finally{
       loading.classList.remove("flex");
      loading.classList.add("hidden");
   }
   
}
export async function updateChannel(id, changes) {
  const res = await fetch(dataApi + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changes)
  });
  if (!res.ok) {
    throw new Error(`HTTP Error! : ${res.status}`);
  }
  return await res.json();
}
export async function deleteChannel(id) {
  const res = await fetch(dataApi + "/" + id, {
    method: "DELETE"           
  });
  if (!res.ok) {
    throw new Error(`HTTP Error! : ${res.status}`);
  }
  return await res.json();
}
 