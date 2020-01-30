const head = document.head;
const flag = document.getElementById("flag");
const swedenFlag = '<link rel="stylesheet" href="/websoft/work/report/flag/style/sweden.css">';
const japanFlag = '<link rel="stylesheet" href="/websoft/work/report/flag/style/japan.css">';
const italyFlag = '<link rel="stylesheet" href="/websoft/work/report/flag/style/italy.css">';

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
        flag.classList.add("show");
        flag.classList.remove("hide");
    } else {
        flag.classList.remove("show");
        flag.classList.add("hide");
    }

}