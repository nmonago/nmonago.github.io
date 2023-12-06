const apiUrl = "https://fipo.equisd.com/api/songs.json";

function makeCard(song) {
    const { band, album, genre } = song;

    const songsContainer = document.querySelector(".songs-container");

    const songBand = document.createElement("h5");
    songBand.textContent = `Band: ${band}`;

    const songAlbum = document.createElement("p");
    songAlbum.textContent = `Album: ${album}`;
    if (album === "ddd") {
        songAlbum.style.color = "green";
    } else {
        songAlbum.style.color = "gray";
    }

    const songGenre = document.createElement("h5");
    songGenre.textContent = `Genre: ${genre}`;

    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(songBand);
    card.appendChild(songAlbum);
    card.appendChild(songGenre);

    songsContainer.appendChild(card);
}

async function GetSongs() {
    try {
        const response = await fetch(apiUrl);
        const { objects } = await response.json();

        if (Array.isArray(objects)) {
            objects.forEach(song => makeCard(song));
            console.log(objects);
        } else {
            console.error('La propiedad "objects" no es un array en la respuesta del API.');
        }
    } catch (error) {
        console.error(error);
    }
}

GetSongs();