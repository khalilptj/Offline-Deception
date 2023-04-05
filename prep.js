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
        var c=Math.floor(Math.random()*roles.length) // returns how many roles are in the game
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

/*                  ITEMS GENERATING                  */

    var itemsGenerated=[]
    for(var i=0 ; i<players.length ; i++){
        var c=Math.floor(Math.random()*players.length)
        if(itemsGenerated.includes(items[c])){
            i--
        }
        else{
            itemsGenerated.push(items[c])
        }
    }
    console.log(itemsGenerated)

/*                                     ITEM SELECTION PHASE                       */
// displaying the items
for(var i=0 ; i<itemsGenerated.length ; i++){
    var k=$("<div class='items'><h3 class='1st'>"+itemsGenerated[i].name+"</h3><button class='itemselect' onclick='selecting("+i+")'>Contest</button><p>"+itemsGenerated[i].description+"</p></div>")
    $("#items").append(k)
}

var selector=0
var contestedItems=[]
alert(players[selector].name+" is choosing...")
function selecting(index){
    item=itemsGenerated[index]
    if(selector+1===players.length){
        if(contestedItems.includes(item)){
            item.contesters.push(players[selector])
            for(var i=0 ; i<contestedItems.length ; i++){
                if(contestedItems[i].contesters.length===1){
                    contestedItems[i].contesters[0].items.push(contestedItems[i].name)
                }
            }
            window.location.href="fight.html"
        }
        else{
            item.contesters.push(players[selector])
            contestedItems.push(item)
            window.location.href="fight.html"
        }
    }
    else{
        selector++
        alert(players[selector].name+" is choosing...")
        if(contestedItems.includes(item)){
            item.contesters.push(players[selector])
        }
        else{
            item.contesters.push(players[selector])
            contestedItems.push(item)
        }
    }
    
}
sessionStorage.setItem("players",JSON.stringify(players))