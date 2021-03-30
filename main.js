// Create an array to randoly choose from

const arr = ["Rock", "Paper", "Scissor"];

// creat a function randomly choose from 'Rock', 'Paper' or 'sciasors'.

function computerPlay() {
    // let random_pick = Math.floor(Math.random() * arr.length);
    // console.log(random_pick, arr[random_pick]);

    let random_pick = Math.floor(Math.random() * arr.length);
    console.log(arr[random_pick]);
}

computerPlay()