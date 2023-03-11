const players=[]
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
        var role=roles[c]  
        roles.splice(c,1)
        return role
    }
}

// adds players to new <ul> in the preparation page
    for(var i=0 ; i<players.length ; i++){
        var $li=$("<li>").text(players[i].name)
        $("ul").append($li)
    }

function Prep(){
    for(var i=0 ; i<players.length ; i++){
        for(var j=0 ; j<players.length ; j++){
            var item="<div>"
        }
    }
}