const ending = new URLSearchParams(window.location.search);
const searchText = ending.get("q");


for(const key in mangas) {
    const manga = mangas[key];
    if(manga["title"].toLowerCase().includes(searchText.toLowerCase())) {
        document.getElementById("mangaSelectBig").innerHTML += `<div class="oneMangaOption">
            <a href="MangaAbout.html?id=${key}"><img src="${manga["cover"]}"></a>
            <h2>${manga["title"]}</h2>
        </div>`;
    }
}