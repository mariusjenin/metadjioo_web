const wine_selection = []
let curr_player = -1;
let players

const inputs = {}
let title_turn

function init(){
    players = JSON.parse(localStorage.getItem("players"))
    for (let i = 0; i < players.length; i++) {
        wine_selection[i] = new Wine()
    }
    setup_hover()
    title_turn = $("#title_turn")
    inputs.tannic = $("input[id='tannic']")
    inputs.woody = $("input[id='woody']")
    inputs.fruity = $("input[id='fruity']")
    inputs.mineral = $("input[id='mineral']")
    inputs.floral = $("input[id='floral']")
    inputs.spicy = $("input[id='spicy']")
    inputs.acidic = $("input[id='acidic']")
    next_player()
}

function next_player(){
    curr_player++
    inputs.tannic.val(0)
    inputs.woody.val(0)
    inputs.fruity.val(0)
    inputs.mineral.val(0)
    inputs.floral.val(0)
    inputs.spicy.val(0)
    inputs.acidic.val(0)
    if(curr_player < players.length){
        title_turn.html(players[curr_player]+"'s turn!")
    }
}

function submit_choices(){
    wine_selection[curr_player].set(
        inputs.tannic.val(),
        inputs.woody.val(),
        inputs.fruity.val(),
        inputs.mineral.val(),
        inputs.floral.val(),
        inputs.spicy.val(),
        inputs.acidic.val(),
    )
    wine_selection[curr_player].set_name(players[curr_player])
    next_player();
    if(curr_player >= players.length){
        localStorage.setItem("players_choices",JSON.stringify(wine_selection))
        location.href = 'game_end.html';
    }
    change_color_background()
}

$(document).ready(function () {
    change_color_background()
    init()
});