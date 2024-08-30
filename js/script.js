window.onload = function () {
    const container = document.createElement("div");
    container.className = "container flex items-center bg-white flex-col w-full md:w-2/4 h-screen mx-auto relative";
    document.body.appendChild(container);

    const gamePage = container.appendChild(document.createElement("div"));
    gamePage.className = "gamePage w-full";

    const timer_count = gamePage.appendChild(document.createElement("div"));
    timer_count.className = "timer_count";

    const timerdiv1 = timer_count.appendChild(document.createElement("div"));
    timerdiv1.className = "flex justify-between gap-5";

    const back = timerdiv1.appendChild(document.createElement("button"));
    const btn = back.appendChild(document.createElement("a"));
    btn.textContent = "Back";
    btn.href = "index.html";
    back.className = "backBtn";


    const reset = timerdiv1.appendChild(document.createElement("button"));
    const a = reset.appendChild(document.createElement("a"));
    a.textContent = "Reset";
    reset.className = "reset"

    let count = 0;
    let seconds = 0;
    let minutes = 0;
    let intervalId;
    reset.addEventListener("click", function () {
        count = 0;
        seconds = 0;
        minutes = 0;
        counts.textContent = `Count : ${count}`;
        timer.textContent = `Time : ${minutes} : ${seconds}`;
        clearInterval(intervalId);
        a.href = "./game-page.html";
    });

    const timerdiv2 = timer_count.appendChild(document.createElement("div"));
    timerdiv2.className = "flex justify-between gap-5";

    const timer = timerdiv2.appendChild(document.createElement("p"));
    timer.textContent = `Time : ${minutes} : ${seconds}`;


    const counts = timerdiv2.appendChild(document.createElement("p"));
    counts.textContent = `Count : ${count}`;

    const memoryBox = gamePage.appendChild(document.createElement("div"));
    memoryBox.className = "grid grid-rows-4 grid-flow-col gap-4 border-t p-5";


    const images = [
        "./images/1.jpg", "./images/1.jpg",
        "./images/2.jpg", "./images/2.jpg",
        "./images/3.jpg", "./images/3.jpg",
        "./images/4.jpg", "./images/4.jpg",
        "./images/5.jpg", "./images/5.jpg",
        "./images/6.jpg", "./images/6.jpg",
        "./images/7.jpg", "./images/7.jpg",
        "./images/8.jpg", "./images/8.jpg"
    ];

    const defaultImage = "./images/cover-img.jpg";

    const randomImageIndex = images.sort(() => 0.5 - Math.random());

    let selectedImages = [];
    let matchCount = 0;

    intervalId = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        timer.textContent = `Time : ${minutes} : ${seconds}`;
    }, 1000);

    randomImageIndex.forEach((image) => {
        const img = memoryBox.appendChild(document.createElement("img"));
        img.src = defaultImage;
        img.className = "box h-36 border rounded-md w-[168px] cursor-pointer";


        img.addEventListener("click", function () {

            if (selectedImages.length < 2) {
                img.src = image;
                img.classList.add("flipBox");
                selectedImages.push({ imgElement: img, imageSrc: image });

                count++;
                counts.textContent = `Count : ${count}`;


                if (selectedImages.length === 2) {
                    if (selectedImages[0].imageSrc === selectedImages[1].imageSrc) {
                        matchCount++;
                        selectedImages.forEach(({ imgElement }) => {
                            imgElement.classList.add("disabled");
                            imgElement.style.pointerEvents = "none";
                        });
                        selectedImages = [];

                        if (matchCount === 8) {
                            const winner = container.appendChild(document.createElement("div"));
                            winner.className = "winner";

                            const winnertext = winner.appendChild(document.createElement("p"));
                            winnertext.textContent = "You won the game!";
                            winnertext.className = "text-red-400 text-3xl mb-14";

                            const back = winner.appendChild(document.createElement("button"));
                            const btn = back.appendChild(document.createElement("a"));
                            btn.textContent = "Back";
                            btn.href = "index.html";
                            back.className = "backBtn"
                        }
                    } else {

                        setTimeout(() => {
                            selectedImages.forEach(({ imgElement }) => {
                                imgElement.src = defaultImage;
                                imgElement.classList.remove("flipBox");
                            });
                            selectedImages = [];
                        }, 1000);
                    }
                }

            }
        });

    })
}