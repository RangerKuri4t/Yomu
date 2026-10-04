const ending = new URLSearchParams(window.location.search);
const id = ending.get("id");
const manga = mangas[id];

if(!manga) {
    document.getElementById("mangaTitle").textContent = "Manga not found";
}
else {
    document.getElementById("mangaCover").src = manga["cover"];
    document.getElementById("mangaTitle").textContent = manga["title"];
    document.getElementById("mangaAuthor").textContent = manga["author"];
    for(const genre of manga["genres"]) {
        document.getElementById("mangaGenres").innerHTML += `<span class="tag">${genre}</span>`;
    }
    document.getElementById("mangaDescription").textContent = manga["description"];

    if(manga["chapters"].length === 0) {
        document.getElementById("readButton").style.display = "none";

    }
    else {
        document.getElementById("readButton").href = manga["chapters"][0]["link"];

    }

    for(const chapter of manga["chapters"]) {
        document.getElementById("chapterList").innerHTML += `<div class="chapter">
            <div class="imgInsideDiv">
                <a href="${chapter["link"]}"><img src="${chapter["thumb"]}"></a>
            </div>
            <div>
                <h1 class="textInsideDiv">${chapter["number"]}</h1>
                <h2 class="textInsideDiv">${chapter["title"]}</h2>
            </div>
        </div>
        <hr>`;
        
    }
    

}