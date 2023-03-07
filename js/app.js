const exit = () => {
    window.close();
}

const register = () => {
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".login").style.display = "none";
    document.querySelector(".register").style.display = "grid";
    document.querySelector(".play").style.display = "none";
}

const login = () => {
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".login").style.display = "grid";
    document.querySelector(".register").style.display = "none";
    document.querySelector(".play").style.display = "none";
}

const game = () => {
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".login").style.display = "none";
    document.querySelector(".register").style.display = "none";
    document.querySelector(".play").style.display = "grid";
}

const end = () => {
    window.location.reload();
}

const menu = () => {
    document.querySelector(".menu").style.display = "grid";
    document.querySelector(".login").style.display = "none";
    document.querySelector(".register").style.display = "none";
    // flush all inputs
    document.getElementById("rname").value = "";
    document.getElementById("remail").value = "";
    document.getElementById("rphone").value = "";
    document.getElementById("rpassword").value = "";
    document.getElementById("lemail").value = "";
    document.getElementById("lpassword").value = "";
}

const playerName = [];
const playerEmail = [];
const playerPhone = [];
const playerPassword = [];

let key = 0;

const registerProcess = () => {
    const pname = document.getElementById("rname").value;
    const pemail = document.getElementById("remail").value;
    const pphone = document.getElementById("rphone").value;
    const ppassword = document.getElementById("rpassword").value;
    if ((pname.length === 0)) {
        alert("Please Enter Username");
        document.getElementById("rname").style.border = "2px solid red";
        document.getElementById("remail").style.border = "2px solid #ffa630";
        document.getElementById("rphone").style.border = "2px solid #ffa630";
        document.getElementById("rpassword").style.border = "2px solid #ffa630";
    } else if ((pemail.length === 0)) {
        alert("Please Enter Email");
        document.getElementById("rname").style.border = "2px solid #ffa630";
        document.getElementById("remail").style.border = "2px solid red";
        document.getElementById("rphone").style.border = "2px solid #ffa630";
        document.getElementById("rpassword").style.border = "2px solid #ffa630";
    } else if ((pphone.length === 0)) {
        alert("Please Enter Phone");
        document.getElementById("rname").style.border = "2px solid #ffa630";
        document.getElementById("remail").style.border = "2px solid #ffa630";
        document.getElementById("rphone").style.border = "2px solid red";
        document.getElementById("rpassword").style.border = "2px solid #ffa630";
    } else if ((ppassword.length <= 7)) {
        alert("Please Enter Password, and atleast 8 letters");
        document.getElementById("rname").style.border = "2px solid #ffa630";
        document.getElementById("remail").style.border = "2px solid #ffa630";
        document.getElementById("rphone").style.border = "2px solid #ffa630";
        document.getElementById("rpassword").style.border = "2px solid red";
    } else {
        document.getElementById("rname").value = "";
        document.getElementById("remail").value = "";
        document.getElementById("rphone").value = "";
        document.getElementById("rpassword").value = "";
        key++;
        playerName.push(pname);
        playerEmail.push(pemail);
        playerPhone.push(pphone);
        playerPassword.push(ppassword);
        for (let index = 0; index < key; index++) {
            window.localStorage.setItem("name", playerName[index]);
            window.localStorage.setItem("email", playerEmail[index]);
            window.localStorage.setItem("phone", playerPhone[index]);
            window.localStorage.setItem("password", playerPassword[index]);
        }
        login();
    }
}

const loginProcess = () => {
    const pemail = document.getElementById("lemail").value;
    const ppassword = document.getElementById("lpassword").value;
    if ((pemail.length === 0)) {
        alert("Please Enter Email");
        document.getElementById("lemail").style.border = "2px solid red";
        document.getElementById("lpassword").style.border = "2px solid #ffa630";
    } else if ((ppassword.length == 0)) {
        alert("Please Enter Password");
        document.getElementById("lemail").style.border = "2px solid #ffa630";
        document.getElementById("lpassword").style.border = "2px solid red";
    } else {
        document.getElementById("lemail").style.border = "2px solid #ffa630";
        document.getElementById("lpassword").style.border = "2px solid #ffa630";
        const storageEmail = window.localStorage.getItem("email");
        const storagePassword = window.localStorage.getItem("password");
        if (pemail !== storageEmail) {
            alert("Make sure you enter correct email");
            document.getElementById("lemail").style.border = "2px solid red";
        } else if (ppassword !== storagePassword) {
            alert("Make sure you enter correct password");
            document.getElementById("lpassword").style.border = "2px solid red";
        } else {
            alert("welcome! " + storageEmail);
            document.querySelector(".username").innerHTML = "Hey " + window.localStorage.getItem("name") + "!";
            game();
        }
    }
}

const block = [null, null, null, null, null, null, null, null, null];
console.log(block);

let score = 0;

const sound = () => {
    const audio = new Audio("../sounds/sound.mp3");
    audio.play();
}

const result = () => {
    if (
        (block[0] === "X") && (block[1] === "X") && (block[2] === "X") ||
        (block[3] === "X") && (block[4] === "X") && (block[5] === "X") ||
        (block[6] === "X") && (block[7] === "X") && (block[8] === "X") ||
        (block[0] === "X") && (block[3] === "X") && (block[6] === "X") ||
        (block[1] === "X") && (block[4] === "X") && (block[7] === "X") ||
        (block[2] === "X") && (block[5] === "X") && (block[8] === "X") ||
        (block[0] === "X") && (block[4] === "X") && (block[8] === "X") ||
        (block[6] === "X") && (block[4] === "X") && (block[2] === "X")
    ) {
        score = 0;
        window.localStorage.setItem("score", score);
        document.querySelector(".score").innerHTML = "You Lose! " + window.localStorage.getItem("score");
        sound();
        document.querySelector(".block1").disabled = true;
        document.querySelector(".block2").disabled = true;
        document.querySelector(".block3").disabled = true;
        document.querySelector(".block4").disabled = true;
        document.querySelector(".block5").disabled = true;
        document.querySelector(".block6").disabled = true;
        document.querySelector(".block7").disabled = true;
        document.querySelector(".block8").disabled = true;
        document.querySelector(".block9").disabled = true;
    }
    if (
        (block[0] === "O") && (block[1] === "O") && (block[2] === "O") ||
        (block[3] === "O") && (block[4] === "O") && (block[5] === "O") ||
        (block[6] === "O") && (block[7] === "O") && (block[8] === "O") ||
        (block[0] === "O") && (block[3] === "O") && (block[6] === "O") ||
        (block[1] === "O") && (block[4] === "O") && (block[7] === "O") ||
        (block[2] === "O") && (block[5] === "O") && (block[8] === "O") ||
        (block[0] === "O") && (block[4] === "O") && (block[8] === "O") ||
        (block[6] === "O") && (block[4] === "O") && (block[2] === "O")
    ) {
        score += 100;
        window.localStorage.setItem("score", score);
        document.querySelector(".score").innerHTML = "You Win! " + window.localStorage.getItem("score");
        sound();
        document.querySelector(".block1").disabled = true;
        document.querySelector(".block2").disabled = true;
        document.querySelector(".block3").disabled = true;
        document.querySelector(".block4").disabled = true;
        document.querySelector(".block5").disabled = true;
        document.querySelector(".block6").disabled = true;
        document.querySelector(".block7").disabled = true;
        document.querySelector(".block8").disabled = true;
        document.querySelector(".block9").disabled = true;
    }
}

const possibleX = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const possibleRandom1 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom2 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom3 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom4 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom5 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom6 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom7 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom8 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom9 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom10 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom11 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom12 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom13 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom14 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom15 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom16 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom17 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom18 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom19 = possibleX[Math.floor(Math.random() * possibleX.length)];
const possibleRandom20 = possibleX[Math.floor(Math.random() * possibleX.length)];

const blockX = () => {
    if (block[possibleRandom1] === null) {
        document.querySelector(".block" + (possibleRandom1 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom1 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom1 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom1 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom1 + 1)).innerHTML = "X";
        block[possibleRandom1] = "X";
        result();
    } else if (block[possibleRandom2] === null) {
        document.querySelector(".block" + (possibleRandom2 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom2 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom2 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom2 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom2 + 1)).innerHTML = "X";
        block[possibleRandom2] = "X";
        result();
    } else if (block[possibleRandom3] === null) {
        document.querySelector(".block" + (possibleRandom3 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom3 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom3 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom3 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom3 + 1)).innerHTML = "X";
        block[possibleRandom3] = "X";
        result();
    } else if (block[possibleRandom4] === null) {
        document.querySelector(".block" + (possibleRandom4 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom4 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom4 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom4 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom4 + 1)).innerHTML = "X";
        block[possibleRandom4] = "X";
        result();
    } else if (block[possibleRandom5] === null) {
        document.querySelector(".block" + (possibleRandom5 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom5 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom5 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom5 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom5 + 1)).innerHTML = "X";
        block[possibleRandom5] = "X";
        result();
    } else if (block[possibleRandom6] === null) {
        document.querySelector(".block" + (possibleRandom6 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom6 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom6 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom6 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom6 + 1)).innerHTML = "X";
        block[possibleRandom6] = "X";
        result();
    } else if (block[possibleRandom7] === null) {
        document.querySelector(".block" + (possibleRandom7 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom7 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom7 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom7 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom7 + 1)).innerHTML = "X";
        block[possibleRandom7] = "X";
        result();
    } else if (block[possibleRandom8] === null) {
        document.querySelector(".block" + (possibleRandom8 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom8 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom8 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom8 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom8 + 1)).innerHTML = "X";
        block[possibleRandom8] = "X";
        result();
    } else if (block[possibleRandom9] === null) {
        document.querySelector(".block" + (possibleRandom9 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom9 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom9 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom9 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom9 + 1)).innerHTML = "X";
        block[possibleRandom9] = "X";
        result();
    } else if (block[possibleRandom10] === null) {
        document.querySelector(".block" + (possibleRandom10 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom10 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom10 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom10 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom10 + 1)).innerHTML = "X";
        block[possibleRandom10] = "X";
        result();
    } else if (block[possibleRandom11] === null) {
        document.querySelector(".block" + (possibleRandom11 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom11 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom11 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom11 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom11 + 1)).innerHTML = "X";
        block[possibleRandom11] = "X";
        result();
    } else if (block[possibleRandom12] === null) {
        document.querySelector(".block" + (possibleRandom12 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom12 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom12 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom12 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom12 + 1)).innerHTML = "X";
        block[possibleRandom12] = "X";
        result();
    } else if (block[possibleRandom13] === null) {
        document.querySelector(".block" + (possibleRandom13 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom13 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom13 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom13 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom13 + 1)).innerHTML = "X";
        block[possibleRandom13] = "X";
        result();
    } else if (block[possibleRandom14] === null) {
        document.querySelector(".block" + (possibleRandom14 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom14 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom14 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom14 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom14 + 1)).innerHTML = "X";
        block[possibleRandom14] = "X";
        result();
    } else if (block[possibleRandom15] === null) {
        document.querySelector(".block" + (possibleRandom15 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom15 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom15 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom15 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom15 + 1)).innerHTML = "X";
        block[possibleRandom15] = "X";
        result();
    } else if (block[possibleRandom16] === null) {
        document.querySelector(".block" + (possibleRandom16 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom16 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom16 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom16 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom16 + 1)).innerHTML = "X";
        block[possibleRandom16] = "X";
        result();
    } else if (block[possibleRandom17] === null) {
        document.querySelector(".block" + (possibleRandom17 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom17 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom17 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom17 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom17 + 1)).innerHTML = "X";
        block[possibleRandom17] = "X";
        result();
    } else if (block[possibleRandom18] === null) {
        document.querySelector(".block" + (possibleRandom18 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom18 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom18 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom18 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom18 + 1)).innerHTML = "X";
        block[possibleRandom18] = "X";
        result();
    } else if (block[possibleRandom19] === null) {
        document.querySelector(".block" + (possibleRandom19 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom19 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom19 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom19 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom19 + 1)).innerHTML = "X";
        block[possibleRandom19] = "X";
        result();
    } else if (block[possibleRandom20] === null) {
        document.querySelector(".block" + (possibleRandom20 + 1)).style.backgroundColor = "#ffa630";
        document.querySelector(".block" + (possibleRandom20 + 1)).style.color = "#000000";
        document.querySelector(".block" + (possibleRandom20 + 1)).style.cursor = "default";
        document.querySelector(".block" + (possibleRandom20 + 1)).disabled = true;
        document.querySelector(".block" + (possibleRandom20 + 1)).innerHTML = "X";
        block[possibleRandom20] = "X";
        result();
    }
}

const block1 = () => {
    document.querySelector(".block1").style.backgroundColor = "#ffffff";
    document.querySelector(".block1").style.color = "#000000";
    document.querySelector(".block1").style.cursor = "default";
    document.querySelector(".block1").disabled = true;
    document.querySelector(".block1").innerHTML = "O";
    block[0] = "O";
    result();
    blockX();
}

const block2 = () => {
    document.querySelector(".block2").style.backgroundColor = "#ffffff";
    document.querySelector(".block2").style.color = "#000000";
    document.querySelector(".block2").style.cursor = "default";
    document.querySelector(".block2").disabled = true;
    document.querySelector(".block2").innerHTML = "O";
    block[1] = "O";
    result();
    blockX();
}

const block3 = () => {
    document.querySelector(".block3").style.backgroundColor = "#ffffff";
    document.querySelector(".block3").style.color = "#000000";
    document.querySelector(".block3").style.cursor = "default";
    document.querySelector(".block3").disabled = true;
    document.querySelector(".block3").innerHTML = "O";
    block[2] = "O";
    result();
    blockX();
}

const block4 = () => {
    document.querySelector(".block4").style.backgroundColor = "#ffffff";
    document.querySelector(".block4").style.color = "#000000";
    document.querySelector(".block4").style.cursor = "default";
    document.querySelector(".block4").disabled = true;
    document.querySelector(".block4").innerHTML = "O";
    block[3] = "O";
    result();
    blockX();
}

const block5 = () => {
    document.querySelector(".block5").style.backgroundColor = "#ffffff";
    document.querySelector(".block5").style.color = "#000000";
    document.querySelector(".block5").style.cursor = "default";
    document.querySelector(".block5").disabled = true;
    document.querySelector(".block5").innerHTML = "O";
    block[4] = "O";
    result();
    blockX();
}

const block6 = () => {
    document.querySelector(".block6").style.backgroundColor = "#ffffff";
    document.querySelector(".block6").style.color = "#000000";
    document.querySelector(".block6").style.cursor = "default";
    document.querySelector(".block6").disabled = true;
    document.querySelector(".block6").innerHTML = "O";
    block[5] = "O";
    result();
    blockX();
}

const block7 = () => {
    document.querySelector(".block7").style.backgroundColor = "#ffffff";
    document.querySelector(".block7").style.color = "#000000";
    document.querySelector(".block7").style.cursor = "default";
    document.querySelector(".block7").disabled = true;
    document.querySelector(".block7").innerHTML = "O";
    block[6] = "O";
    result();
    blockX();
}

const block8 = () => {
    document.querySelector(".block8").style.backgroundColor = "#ffffff";
    document.querySelector(".block8").style.color = "#000000";
    document.querySelector(".block8").style.cursor = "default";
    document.querySelector(".block8").disabled = true;
    document.querySelector(".block8").innerHTML = "O";
    block[7] = "O";
    result();
    blockX();
}

const block9 = () => {
    document.querySelector(".block9").style.backgroundColor = "#ffffff";
    document.querySelector(".block9").style.color = "#000000";
    document.querySelector(".block9").style.cursor = "default";
    document.querySelector(".block9").disabled = true;
    document.querySelector(".block9").innerHTML = "O";
    block[8] = "O";
    result();
    blockX();
}

const strName = window.localStorage.getItem("name");
const strEmail = window.localStorage.getItem("email");
const strPhone = window.localStorage.getItem("phone");
const strScore = window.localStorage.getItem("score");
console.log(JSON.stringify(strName + "," + strEmail + "," + strPhone + "," + strScore));