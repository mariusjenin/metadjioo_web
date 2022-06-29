function change_color_background(){
    let elem = $("#background-game");
    remove_class_background_color(elem)
    elem.addClass(random_class_color_background());
}

function random_class_color_background(){
    return "game-color-"+(Math.floor(Math.random() * 7)+1);
}

function remove_class_background_color(elem){
    const classList = elem[0].className.split(/\s+/);
    for (let i = 0; i < classList.length; i++) {
        if (classList[i].slice(0, 10) === 'game-color') {
            elem.removeClass(classList[i]);
        }
    }
}

/**
 * Found here https://stackoverflow.com/a/5448595/19434049
 * @param parameter_name
 * @returns value of parameter
 */
function find_get_parameter(parameter_name) {
    let result = null,
        tmp = [];
    const items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameter_name) result = decodeURIComponent(tmp[1]);
    }
    return result;
}