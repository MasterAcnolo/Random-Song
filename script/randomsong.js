console.log("Hey Nate, how's life ?")



async function getSong(){


    try{
        const output = document.getElementById("output")
        const response = await fetch("../data/nf-songs.json");
        const songs = await response.json();

        const index = Math.floor(Math.random() * songs.length)
        const chanson = songs[index];

        console.log(chanson)

        // let albumcover =''
        // switch(chanson.Album){
        //     case "Hope":
        //         albumcover = "https://m.media-amazon.com/images/I/81urqSumK4L._UF1000,1000_QL80_.jpg"
        //         break;

        //     default:
        //         albumcover = "https://cdn-images.dzcdn.net/images/cover/f692f95997a917c2a94e7b9e3a27ccf3/1900x1900-000000-80-0-0.jpg";
        //         break;
        // }


        const albumCovers = {
        "Hope": "assets/cover/Hope.jpg",
        "NF": "assets/cover/NF.jpg",
        "Chasing": "assets/cover/Chasing.jpg",
        "Mansion": "assets/cover/Mansion.jpg",
        "No Name (EP)": "assets/cover/NoName.jpg",
        "Clouds (The Mixtape)": "assets/cover/Clouds.jpg",
        "Perception": "assets/cover/Perception.jpg",
        "Therapy Session": "assets/cover/TherapySession.jpg",
        "The Search": "assets/cover/TheSearch.jpg",
        };

        const albumcover = albumCovers[chanson.Album] || "assets/notfound.jpg";

        output.innerHTML = `
        <h2>${chanson.Titre}</h2><p>Artiste: ${chanson.Artiste}
        </p><p>Album: ${chanson.Album}</p>
        <p>Durée: ${chanson.Durée}</p>
        <p>Date de Sortie: ${chanson["Date de Sortie"]} </p>

        <img src="${albumcover}">
        `;


    }
    catch(error){
        console.error("Erreur lors du chargement du fichier JSON: ", error)
    }
}

