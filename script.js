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