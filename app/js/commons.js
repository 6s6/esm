function wrap_show_less(value){
    return " <div class=\"text-container\"> \
<div class=\"text-content eval-text\">  "+value+" </div> \
<div class=\"show-more \"> \
  <div class='rounded-box'> <a style='margin:10px;' href=\"#\">show more</a></div> \
 </div></div> ";
}

function evaluate_show_less(toggle_classes){
    $(".show-more .rounded-box a").each(function() {
        var $link = $(this);
        var $content = $link.parent().parent().prev("div.text-content");
        var $title = $link.parent().parent().parent().parent().find("h2.middle-column-title").first();
        console.log($link.parent().parent().parent().parent().parent().parent().find("div.first-colum-first-row").first().css('padding-top', ($title[0].clientHeight-7)+"px"));
        console.log("cH", $title[0].clientHeight-12); //
        console.log($link);
        console.log($content.first().position());

        var visibleHeight = $content[0].clientHeight;
        var actualHide = $content[0].scrollHeight - 1;

        console.log("aH",actualHide,"vH", visibleHeight);

        if (actualHide > visibleHeight) {
            $content.first().addClass("short-text");
            $link.show();

        } else {
            $link.hide();
        }
    });

    $(".show-more .rounded-box a").on("click", function() {
        var $link = $(this);
        var $content = $link.parent().parent().prev("div.text-content");
        var linkText = $link.text();

        $content.toggleClass(toggle_classes);

        $link.text(getShowLinkText(linkText));

        return false;
    });

    function getShowLinkText(currentText) {
        var newText = '';

        if (currentText.toUpperCase() === "SHOW MORE") {
            newText = "show less";
        } else {
            newText = "show more";
        }

        return newText;
    }
}