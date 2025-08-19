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
    <p id="titre"> <span> Title: </span> ${randomMusic.titre} </p>
    <p id="album"> <span> Album: </span> ${randomMusic.album} </p>
    <p id="date"> <span> Release Date: </span> ${randomMusic.date_sortie} </p>
    <p id="duree"> <span> Duration: </span> ${randomMusic.duree} </p>
    <img src="https://nf-api-c24p.onrender.com/api/${randomMusic.cover_url}" alt="Cover of ${randomMusic.album}">
    `

    output.style.opacity = "1";
    
    // Animation trigger
    output.classList.remove('animated');
    void output.offsetWidth; // pour autoriser l'animation de se réinitialiser
    output.classList.add('animated');


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