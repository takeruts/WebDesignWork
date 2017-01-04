$(window).load(function () {

    $("li[id^=hcH]").each(function (i) {
        if (i == 0) {
            marginLeft = "0px";
        } else {
            marginLeft = "90px";
        }
        $(this).css({
            "margin-left": marginLeft,
            "margin-top": "0px",
            "margin-bottom": "10px"
        });
    });

    $("li[id^=hcU]").each(function (i) {
        switch (i % 5) {
        case 0:
            marginLeft = "0px";
            marginTop = "0px";
            $(this).css({
                "clear": "left"
            });
            break;
        case 1:
        case 3:
            marginLeft = "-30px";
            marginTop = "-70px";
            break;
        case 2:
        case 4:
            marginLeft = "-30px";
            marginTop = "0px";
            break;
        }
        $(this).css({
            "margin-left": marginLeft,
            "margin-top": marginTop,
            "margin-bottom": "10px"
        });
    });

});