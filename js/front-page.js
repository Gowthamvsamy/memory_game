window.onload = function () {

    const frontPage = document.createElement("div");
    frontPage.classList = "frontPage";
    document.body.appendChild(frontPage);

    const text = frontPage.appendChild(document.createElement("div"));
    text.textContent = "MEMORY GAME";
    text.className = "text-7xl font-bold text-amber-700 text-center";
    
    const button = frontPage.appendChild(document.createElement("button"));
    const a = button.appendChild(document.createElement("a"));
    a.textContent = "START GAME";
    a.href = "./game-page.html";
    a.className = "text-white";
    button.className = "frontPagebtn"
}