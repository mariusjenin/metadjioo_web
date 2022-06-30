const flavors = {
    tannic: "the phenolic compounds in wines that leave a bitter, dry, and puckery feeling in the mouth",
    woody: "Woody is an adjective used to describe a wine that is especially dominant in oak character and the nuances which oak imparts can impart into wine. It may have overwhelming notes of smoke, toast and more",
    fruity: "a tasting term for wines that exhibit strong smells and flavors of fresh fruit",
    mineral: "The wines being described as mineral are also generally described as 'elegant', 'lean', 'pure' and 'acid'. They have a taste as if of licking wet stones and often a chalky texture to match",
    floral: "Wines with floral aromas contain terpenes which give us aromas of some well known flowers, such as rose, lavender, violet, citrus blossom, white flowers and geranium. Floral aromas are primary aromas, which means they come from the grapes themselves rather than winemaking techniques or aging",
    spicy: "a tasting term used for odors and flavors reminiscent of black pepper, bay leaf, curry powder, baking spices, oregano, rosemary, thyme, saffron, or paprika found in certain wines",
    acidic: "the liveliness and crispness in wine that activates our salivary glands"
}

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
        title_turn.html(players[curr_player]+"'s turn !")
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
    next_player();
    console.log(curr_player,players.length,players)
    if(curr_player >= players.length){
        location.href = 'game_end.html';
        localStorage.setItem("players",null)
    }
    change_color_background()
}

$(document).ready(function () {
    change_color_background()
    init()
});