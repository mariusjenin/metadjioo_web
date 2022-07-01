const wine_ref = new Wine(2, 0, 4, 0, 3, 1, 2)
const inputs = {}
let wine_selection, body, title_result

$(document).ready(function () {
    change_color_background()
    init()
});

function compare(wine_1, wine_2) {
    if (wine_1.score > wine_2.score) {
        return -1;
    }
    if (wine_1.score < wine_2.score) {
        return 1;
    }
    return 0;
}
function init() {
    setup_hover()
    $("input[id='tannic']").val(wine_ref.tannic)
    $("input[id='woody']").val(wine_ref.woody)
    $("input[id='fruity']").val(wine_ref.fruity)
    $("input[id='mineral']").val(wine_ref.mineral)
    $("input[id='floral']").val(wine_ref.floral)
    $("input[id='spicy']").val(wine_ref.spicy)
    $("input[id='acidic']").val(wine_ref.acidic)


    wine_selection = JSON.parse(localStorage.getItem("players_choices"))
    for (let i = 0; i < wine_selection.length; i++) {
        let wine = new Wine()
        Object.assign(wine, wine_selection[i])
        wine_selection[i] = wine
        let average_error = Math.round(wine.compare(wine_ref) * 100) / 100.0
        wine_selection[i].score = Math.round((5 - average_error) * 100 / 5.0)
    }
    wine_selection.sort(compare);

    title_result = $("#title_result")
    body = $("#result_card").find("tbody")

    title_result.html("\ ")
    body.html("")

    let row
    for (let i = 0; i < wine_selection.length; i++) {
        row = $("<tr>\n" +
            "                            <th>" + (i + 1) + "</th>\n" +
            "                            <td style='visibility: hidden'>" + wine_selection[i].name + "</td>\n" +
            "                            <td style='visibility: hidden'>" + wine_selection[i].score + "</td>\n" +
            "                        </tr>")
        body.append(row)
        let td = row.find("td")
        setTimeout(row => {
            td.css('visibility', 'visible').hide().fadeIn(800)
        }, 1000 * (wine_selection.length - i - 1))
    }

    setTimeout(row => {
        title_result.html(wine_selection[0].name + " is the winner!")
    }, 1000 * (wine_selection.length - 1))
    // setTimeout(row => {console.log("test")
    // }, 1000*(wine_selection.length-i),row);
    // console.log(1000*(wine_selection.length-i))
}