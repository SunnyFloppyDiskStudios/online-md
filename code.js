var isComic = false;
function changeFont() {
    isComic = !isComic;

    if (isComic) {
        document.getElementById("editor").style.fontFamily = "ComicMonoCodeFont";
    } else {
        document.getElementById("editor").style.fontFamily = "JBMonoCodeFont";
    }
}

