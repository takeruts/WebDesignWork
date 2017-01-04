$(window).load(function () {
    location.hash = "anchor";


    /* カテゴリーが時計の場合
        console.log($(".category p").html());
*/
    if ($(".category p").html().indexOf("時計") != -1) {
        $(".itemname p").css({
            "font-size": "18px",
            "margin-top": "8px"
        });
        $(".picture").css({
            "top": "120px",
            "left": "72px",
            "width": "254px",
            "height": "254px"
        })
    } else if ($(".category p").html().indexOf("絵画") != -1) {
        $(".itemname p").css({
            "font-size": "22px",
            "margin-top": "8px"
        });
        $(".picture").css({
            "top": "120px",
            "left": "72px",
            "width": "254px",
            "height": "254px"
        })
    }
});