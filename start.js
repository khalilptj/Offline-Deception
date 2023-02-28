const players=[]  // empty array to store player objects
var roles=["demon","doctor","investigator","spy","vigilante","bodyguard","serialkiller","jester"] //arrays that has all the roles in the game

function getRole(){
    if(roles.length!==0){
        var c=Math.ceil(Math.random()*roles.length) // returns how many roles are in the game
        var role=roles[c-1]  // subtract 1, because c returns 1 to length of roles array
        roles.splice(c-1,1)
        console.log(roles)
        return role
    }
}

 // invoking addPlayerO to make object for every player
function addPlayer(){
    if(roles.length===0){
        return alert("Maximum players limit reached!")
    }
    const name=document.getElementById("playername").value
    if(name.length===0){
        return alert("please type a name")
    }
    for(var i=0 ; i<players.length ; i++){
        if(players[i].name===name){
            return alert("name already taken!")
        }
    }
    const player=addPlayerO(name)
    players.push(player)
    const $li=$("<li>").text(name)  //start of making a player list
    $("ul").append($li)
    console.log(players)

}


function addPlayerO(name){            // making object for the players
    return {
        name: name,
        role: getRole(),
        health: 3,
        items: []
    }
}

// checks if the the minimum players range has been reached to start the game
function startGame(){
    if(players.length<5){
        alert("you need at least 5 players!")
        return false
    }
}

//adds players to new <ul> in the preparation page
function arrange(){
    for(var i=0 ; players.length ; i++){
        var $li=$("<li>").text(players[i].name)
        $("ul").append($li)
    }
}
