import { updateChannel, deleteChannel } from "./api.js"; 

const element = document.getElementById("element");
const channelImage = document.getElementById("channelImage");

export function afficher(channels) {
    element.innerHTML = "";

    channels.forEach((channel) => {
    element.innerHTML += `
        <button data-categ="${channel.category}"
            class="md:hover:bg-blue-600 bg-blue-800 flex flex-row items-center gap-4 rounded-lg p-4">

            <span class="text-white font-sans">
                ${channel.channelNumber}
            </span>

            <img src="${channel.logo}"
                class="h-10 w-12 object-contain rounded-md" alt="">

            <span class="text-white font-semibold flex-1 text-center">
                ${channel.name}
            </span>

            <div class="flex flex-col items-center gap-2 shrink-0">

                <i data-heart class="${channel.isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart"
                   style="color: ${channel.isFavorite ? 'yellow' : 'white'};">
                </i>

                ${channel.isBlacklisted
                    ? `<span data-restore class="text-green-400 text-sm">Restaurer</span>`
                    : `<i data-ban class="fa-solid fa-ban text-red-500"></i>`}

                ${channel.isBlacklisted
                    ? `<i data-trash class="fa-solid fa-trash text-white"></i>`
                    : ``}

            </div>

        </button>
    `;
});

    const buttons = element.querySelectorAll("button");
    const para = document.getElementById("para");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const video = document.getElementById('video')
            video.innerHTML = `
<video-player>
  <video-skin style="display: block; width: 100%; aspect-ratio: 16 / 9; --media-controls-before-start: visible;">
    <hlsjs-video src="https://stream.mux.com/BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM.m3u8" playsinline></hlsjs-video>
  </video-skin>
</video-player>`
            para.textContent = channels[index].name;
        });

        
        const heart = button.querySelector("[data-heart]");
        heart.addEventListener("click", async (e) => {
            e.stopPropagation(); 

            const channel = channels[index];
            const newValue = !channel.isFavorite;

            try {
                await updateChannel(channel.id, { isFavorite: newValue }); 
                channel.isFavorite = newValue;                              
                afficher(channels);                                         
            } catch (error) {
                console.error(error);
              
            }
        });

        
        const ban = button.querySelector("[data-ban]");
        if (ban) {
            ban.addEventListener("click", async (e) => {
                e.stopPropagation();

                const channel = channels[index];

                try {
                    await updateChannel(channel.id, { isBlacklisted: true });
                    channel.isBlacklisted = true;
                    afficher(channels.filter(c => !c.isBlacklisted));
                } catch (error) {
                    console.error(error);
                    
                }
            });
        }

        
        const restore = button.querySelector("[data-restore]");
        if (restore) {
            restore.addEventListener("click", async (e) => {
                e.stopPropagation();

                const channel = channels[index];

                try {
                    await updateChannel(channel.id, { isBlacklisted: false });
                    channel.isBlacklisted = false;
                    afficher(channels.filter(c => c.isBlacklisted));
                } catch (error) {
                    console.error(error);
                    
                }
            });
        }

        
        const trash = button.querySelector("[data-trash]");
        if (trash) {
            trash.addEventListener("click", async (e) => {
                e.stopPropagation();

                const channel = channels[index];

                
                const ok = confirm(`Supprimer "${channel.name}" pour toujours ?`);
                if (!ok) return; 

                try {
                    
                    await deleteChannel(channel.id);

                    
                    document.dispatchEvent(
                        new CustomEvent("channel-deleted", { detail: channel.id })
                    );
                } catch (error) {
                    console.error(error);
                    alert("Impossible de supprimer la chaîne.");
                }
            });
        }
    });
}