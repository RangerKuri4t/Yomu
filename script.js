function goToChapter(select) {
    location.href = select.value;
}

function goToNextChapter() {
    let list = document.getElementById("chapterList") ;
    let chapter = list.selectedIndex;
    if(chapter !== list.options.length - 1) {
        location.href = list.options[chapter + 1].value;
    }


}

function goToPrevChapter() {
    let list = document.getElementById("chapterList");
    let chapter = list.selectedIndex;
    if(chapter !== 0) {
        location.href = list.options[chapter - 1].value;
    }
    
}


const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchIcon");

searchButton.addEventListener("click" , function() {
    const text = searchBar.value;
    window.location.href = "search.html?q=" + text;


});
