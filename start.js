const players=[]  // empty array to store player objects

 // invoking addPlayerO to make object for every player
function checkName(){
    const name=document.getElementById("playername").value  // assigning the name the user typed
    if(roles.length===0){
        return alert("Maximum players limit reached!")
    }
    if(name.includes(",")){
        return alert("name can't have ',' in it")
    }
    if(name.length===0){
        return alert("please type a name")
    }
    for(var i=0 ; i<players.length ; i++){  //checking if name is taken
        if(players[i]===name){
            return alert("name already taken!")
        }
    }
    const player=name
    players.push(player)
    const $li=$("<li>").text(name)  //start of making a player list
    $("ul").append($li)
    console.log(players)

}


// checks if the the minimum players range has been reached to start the game
function startGame(){
    if(players.length<5){
        alert("you need at least 5 players!")
        return false
    }
    sessionStorage.setItem("players", players);
}


