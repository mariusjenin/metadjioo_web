function change_color_background(){
    let elem = $("#background_game");
    remove_class_background_color(elem)
    elem.addClass(random_class_color_background());
}

function random_class_color_background(){
    let previous_class_color = localStorage.getItem('class_color');
    let class_color
    do{
        class_color = "game-color-"+(Math.floor(Math.random() * 7)+1);
    } while(previous_class_color === class_color)

    localStorage.setItem('class_color', class_color);
    return class_color;
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

function setup_hover(){
    let label_range = $(".label_range")
    label_range.hover(
        function() {
            $(this).parent().find('.bubble_hover_range').show(100)
        },
        function() {
            $(this).parent().find('.bubble_hover_range').hide(100)
        }
    );
    label_range.click(
        function() {
            let bubble =$(this).parent().find('.bubble_hover_range');

            if(bubble.is(":visible")){
                $(this).parent().find('.bubble_hover_range').hide(100)
            } else {
                $(this).parent().find('.bubble_hover_range').show(100)
            }
        }
    );
}