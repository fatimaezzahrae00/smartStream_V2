import { getData } from "./api.js";
import { afficher } from "./ui.js";
import { initSearch } from "./search.js";
const channels = await getData();
afficher(channels.filter(channel => !channel.isBlacklisted)); 
initSearch(channels);


 


const Documentaires = document.getElementById('Documentaires');
const sports = document.getElementById('Sports');
const enfant = document.getElementById('Enfant');


// export function filterItems(filter) {
//     filterBtns.forEach(btn => {
//         btn.addEventListener("click", () => {
            
//         });
//     });
// }
const section = document.getElementById('btnscontainer')

section.addEventListener('click', function filterBtns(e) {
    const btn = e.target.closest('button')
    if (!btn) return

    // const filtered = btn.id === 'all'
    //     ? channels
    //     : channels.filter(channel => channel.category.toLowerCase() === btn.id.toLowerCase())
    const filtered = btn.id === 'all'
        ? channels.filter(channel => !channel.isBlacklisted)
        : channels.filter(channel => !channel.isBlacklisted && channel.category.toLowerCase() === btn.id.toLowerCase())

    afficher(filtered)
})
const favoriteBtn = document.getElementById('favorite');

favoriteBtn.addEventListener('click', () => {
    const favorites = channels.filter(channel => channel.isFavorite === true);
    afficher(favorites);
});
const blacklistBtn = document.getElementById('blacklist');

blacklistBtn.addEventListener('click', () => {
    const blacklisted = channels.filter(channel => channel.isBlacklisted === true);
    afficher(blacklisted);
});

document.addEventListener("channel-deleted", (e) => {
    const position = channels.findIndex(channel => channel.id === e.detail);
    if (position !== -1) {
        channels.splice(position, 1);   
    }
    afficher(channels.filter(channel => channel.isBlacklisted));
});