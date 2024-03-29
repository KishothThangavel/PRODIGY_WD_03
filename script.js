const selectbox=document.querySelector(".select-box"),
selectxbtn=selectbox.querySelector(".playerx"),
selectobtn=selectbox.querySelector(".playero"),
playboard=document.querySelector(".play-board"),
allbox=document.querySelectorAll("section span"),
players=document.querySelectorAll(".players");

window.onload=()=>{ 

    for(let i=0;i<allbox.length;i++){
        allbox[i].setAttribute("onclick","clickedbox(this)");
    }

    selectxbtn.onclick=()=>{
        selectbox.classList.add("hide"); //Hide the select box on playerX button clicked
        playboard.classList.add("show"); //Show the playboard section when playerx clicked
    }
    selectobtn.onclick=()=>{
        selectbox.classList.add("hide"); //Hide the select box on playero button clicked
        playboard.classList.add("show"); //Show the playboard section when playero clicked
        players.forEach(player => {
            player.classList.add("active");
        });
    }
}

let playerXIcon="fas fa-times"; //class name for cross icon
let playerOIcon="far fa-circle"; //class name for circle icon

function clickedbox(element) {
    if(players[0].classList.contains("active")) {
        element.innerHTML = `<i class="${playerXIcon}"></i>`; // Display X icon if Player X is active
    } else {
        element.innerHTML = `<i class="${playerOIcon}"></i>`; // Display O icon if Player O is active
    }
}
