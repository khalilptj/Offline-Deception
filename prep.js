const players=[]
const roles=["demon","doctor","investigator","spy","vigilante","bodyguard","serialkiller","jester"] //arrays that has all the roles in the game
const storedPlayers = sessionStorage.getItem("players").split(",");

for(var i=0 ; i<storedPlayers.length ; i++){
    players.push(addPlayer(storedPlayers[i]))
}


function addPlayer(name){            // making object for the players
    return {
        name: name,
        role: getRole(),
        health: 3,
        items: []
    }
}

function getRole(){
    if(roles.length!==0){
        var c=Math.ceil(Math.random()*(roles.length-1)) // returns how many roles are in the game
        var role=roles[c]  // subtract 1, because c returns 1 to length of roles array
        roles.splice(c,1)
        return role
    }
}

//adds players to new <ul> in the preparation page
function arrange(){
    for(var i=0 ; players.length ; i++){
        var $li=$("<li>").text(players[i].name)
        $("ul").append($li)
    }
}