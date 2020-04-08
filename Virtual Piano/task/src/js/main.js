document.addEventListener("keydown", e => {

    switch (e.code) {
        case "KeyA":
            console.log("The 'A' key is pressed.");
            playMusic("A");
            break;
        case "KeyS":
            console.log("The 'S' key is pressed.");
            playMusic("S");
            break;
        case "KeyD":
            console.log("The 'D' key is pressed.");
            playMusic("D");
            break;
        case "KeyF":
            console.log("The 'F' key is pressed.");
            playMusic("F");
            break;
        case "KeyG":
            console.log("The 'G' key is pressed.");
            playMusic("G");
            break;
        case "KeyH":
            console.log("The 'H' key is pressed.");
            playMusic("H");
            break;
        case "KeyJ":
            console.log("The 'J' key is pressed.");
            playMusic("J");
            break;
        case "KeyW":
            console.log("The 'W' key is pressed.");
            playMusic("W");
            break;
        case "KeyE":
            console.log("The 'E' key is pressed.");
            playMusic("E");
            break;
        case "KeyT":
            console.log("The 'T' key is pressed.");
            playMusic("T");
            break;
        case "KeyY":
            console.log("The 'Y' key is pressed.");
            playMusic("Y");
            break;
        case "KeyU":
            console.log("The 'U' key is pressed.");
            playMusic("U");
            break;
        default:
            console.warn(`Key ${e.key} is pressed.`);
    }
});

let playMusic = key => {
    let audio = new Audio(`./${key}.mp3`);
    audio.play();
};