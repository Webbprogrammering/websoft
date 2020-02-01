const head = document.head;
const flag = document.getElementById("flag");
const swedenFlag = '<link rel="stylesheet" href="style/sweden.css">';
const japanFlag = '<link rel="stylesheet" href="style/japan.css">';
const italyFlag = '<link rel="stylesheet" href="style/italy.css">';

function showSwedenFlag() {
    showFlag(swedenFlag);
}

function showJapanFlag() {
    showFlag(japanFlag);
}

function showItalyFlag() {
    showFlag(italyFlag);
}

function showFlag(flagLink) {
    clearFlagStyle();
    makeVisible(true);
    document.head.insertAdjacentHTML("beforeend", flagLink);
    flag.hidden = false;
}

function flagClick() {
    makeVisible(false)
}

function clearFlagStyle() {
    head.removeChild(head.lastElementChild);
}

function makeVisible(visibility) {
    if (visibility === true) {
        flag.classList.remove("hide");
        flag.classList.add("show");
    } else {
        flag.classList.remove("show");
        flag.classList.add("hide");
    }

}