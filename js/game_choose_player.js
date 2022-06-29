let nb_players = -1
let current_player = 0
let list_players = []
let input
let label

$(document).ready(function(){
    init();
});

function init(){
    change_color_background()
    nb_players = find_get_parameter("nbp")
    input = $("input[id=\"nb_players\"]")
    label = $("label[for=\"nb_players\"]")
    next_player()
}

function next_player(){
    current_player++
    input.val("")
    label.html("Player "+current_player+" name")
}

function submit_name_player(){
    let name = input.val()
    list_players[current_player] = name
    $("#list_participant").append("<li class=\"list-group-item\">"+name+"</li>")
    next_player();
    if(current_player > nb_players){
        localStorage.setItem('players', JSON.stringify(list_players));
        location.href = 'game_play.html';
    }
}