$(document).ready(function(){
    change_color_background()
    init();
});

let nb_players,current_player,list_players,input,label,players_correct

function init(){
    nb_players = find_get_parameter("nbp")
    current_player = -1
    list_players = []
    input = $("input[id=\"nb_players\"]")
    label = $("label[for=\"nb_players\"]")
    $("#list_participant").html("")
    next_player()
}

function next_player(){
    current_player++
    input.val("")
    label.html("Player "+(current_player+1)+" name")
}

function submit_name_player(){
    let name = input.val()
    if(name.length>0){
        list_players[current_player] = name
        $("#list_participant").append("<li class=\"list-group-item\">"+name+"</li>")
        next_player();
        if(current_player >= nb_players){
            $("#form_validate_players").removeClass("d-none")
            $("#form_players").addClass("d-none")
        }
    }
}

function submit_players(is_validate){
    if(is_validate){
        localStorage.setItem('players', JSON.stringify(list_players));
        location.href = 'game.html';
    }else{
        $("#form_validate_players").addClass("d-none")
        $("#form_players").removeClass("d-none")
        init()
    }
}