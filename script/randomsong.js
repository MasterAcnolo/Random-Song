console.log("Hey Nate, how's life ?")


/* 
Ce truc c'est pour 'réveiller' le serveur lorsqu'il se met en veille le coquinou
*/
document.addEventListener("DOMContentLoaded", () => { 
  fetch("https://nf-api-c24p.onrender.com/")
    .then(() => console.log("Render réveillé"))
    .catch(err => console.warn("Render dort encore", err));
});


async function getRandom() {
    const response = await fetch("https://nf-api-c24p.onrender.com/api/musiques/random");
    const randomMusic = await response.json();

    const output = document.getElementById("output")
    console.log(randomMusic)

    output.innerHTML=
    `
    <h2 id="titre"> Title: ${randomMusic.titre} </h2>
    <h3 id="album"> Album: ${randomMusic.album} </h3>
    <h3 id="date"> <span> Release Date: <span> ${randomMusic.date_sortie} </h3>
    <h3 id="duree"> <span> Duration: <span> ${randomMusic.duree} </h3>
    <img src="https://nf-api-c24p.onrender.com/api/${randomMusic.cover_url}" alt="Cover of ${randomMusic.album}">
    `

    output.style.opacity = "1";
    
    const container = document.getElementById('output');

    switch (randomMusic.album){
        case "Hope":
            container.style.backgroundColor = "#374542";
            break;
        case "The Search":
            container.style.backgroundColor = "#292726";
            break;
        case "Perception":
            container.style.backgroundColor = "#181E1E";
            break;
        case "Therapy Session":
            container.style.backgroundColor = "#151716";
            break;
        case "Mansion":
            container.style.backgroundColor = "#141615";  
            break;
        case "Clouds (The Mixtape)":
            container.style.backgroundColor = "#435B69";
            break;
        case "Moments":
            container.style.backgroundColor = "#1f1f1fff";
            break;
        case "NF (EP)":
            container.style.backgroundColor = "#2A2F2B";
            break;
        default:
            container.style.backgroundColor = "#302f2fff";
    }
}



