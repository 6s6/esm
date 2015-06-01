function wrap_show_less(value){
    return " <div class=\"text-container\"> \
<div class=\"text-content short-text\">  "+value+" </div> \
<div class=\"show-more\"> \
  <a href=\"#\">Show more</a> \
 </div></div> ";
}

function evaluate_show_less(toggle_classes){
    $(".show-more a").each(function() {
    var $link = $(this);
    var $content = $link.parent().prev("div.text-content");

    console.log($link);

    var visibleHeight = $content[0].clientHeight;
    var actualHide = $content[0].scrollHeight - 1;

    console.log(actualHide);
    console.log(visibleHeight);

    if (actualHide > visibleHeight) {
        $link.show();
    } else {
        $link.hide();
    }
});

$(".show-more a").on("click", function() {
    var $link = $(this);
    var $content = $link.parent().prev("div.text-content");
    var linkText = $link.text();

    $content.toggleClass(toggle_classes);

    $link.text(getShowLinkText(linkText));

    return false;
});

function getShowLinkText(currentText) {
    var newText = '';

    if (currentText.toUpperCase() === "SHOW MORE") {
        newText = "Show less";
    } else {
        newText = "Show more";
    }

    return newText;
}
}
