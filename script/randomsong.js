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
    <h2> Title: ${randomMusic.titre} </h2>
    <h3> Album: ${randomMusic.album} </h3>
    <h3> <span> Release Date: <span> ${randomMusic.date_sortie} </h3>
    <h3> <span> Duration: <span> ${randomMusic.duree} </h3>
    <img src="https://nf-api-c24p.onrender.com/api/${randomMusic.cover_url}" alt="Album Cover">
    `
}

