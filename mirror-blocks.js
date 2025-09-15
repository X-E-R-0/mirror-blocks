const insBtn = document.querySelector("#ins-btn");
const instructions = document.querySelector("#instructions");
const chBlocks = document.querySelectorAll(".ch-blocks");
const ansBlocks = document.querySelectorAll(".ans-blocks");
const messageBox = document.querySelector("#message-box");
const resetAns = document.querySelector("#reset-ans");
const doneBtn = document.querySelector("#done");
const resetCh = document.querySelector("#reset-ch");
const checkedBlocks = [];
const filledBlocks = [];


function fillBlocks(arr) {
    //random = Math.floor(Math.random() * (max - min) + min);
    let numOfFillings = Math.random() * (19 - 12) + 12;
    while (numOfFillings > 0) {
        const rand = Math.floor(Math.random() * 36);
        if (!arr.includes(rand)) {
            arr.push(rand);
            chBlocks[rand].classList.add("check");
            numOfFillings--;
        }
    }
}

fillBlocks(filledBlocks);

insBtn.addEventListener("click", () => {
    instructions.classList.toggle("open");
});


ansBlocks.forEach((block, index) => {
    block.addEventListener("click", () => {
        if (block.classList.contains("check")) {
            checkedBlocks.splice(checkedBlocks.indexOf(index), 1);
            block.classList.remove("check");
        } else {
            block.classList.add("check");
            checkedBlocks.push(index);
        }
    });
});

resetAns.addEventListener("click", () => {
    ansBlocks.forEach((block) => {
        block.classList.remove("check");
    });
    checkedBlocks.splice(0);
    messageBox.innerHTML = '';
});

doneBtn.addEventListener("click", () => {
    if (filledBlocks.length > checkedBlocks.length) {
        messageBox.innerHTML = "*You havn't filled sufficient blocks";
    } else if (checkedBlocks.length > filledBlocks.length) {
        messageBox.innerHTML = "*You have filled more than required blocks";
    } else {
        let won;
        for (let i = 0; i < checkedBlocks.length; i++) {
            if (!filledBlocks.includes(checkedBlocks[i])) won = false;
            else won = true;
        }
        if (won) {
            messageBox.innerHTML = "!!WON!!";
        }
    }
});

resetCh.addEventListener("click", () => {
    chBlocks.forEach((block) => {
        block.classList.remove("check");
    });
    filledBlocks.splice(0);
    fillBlocks(filledBlocks);
    messageBox.innerHTML = '';
});