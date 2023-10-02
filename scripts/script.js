var flag = false;
function myFunction() {
    $("#firsth2").attr("style","color:red").html("Hello JQuery, it really is working!");
}
$(document).ready(function() {
    myFunction();
    $("#hideFooter").click(function() {
        if (flag) {
            $("footer").show();
            flag = false;
        }
        else{
            $("footer").hide();
            flag = true;
        };
        alert($("#home").attr("href"));
    });
    $("#btn1").click(function() {
        //alert("Text: " + $("#test").text());
        $("#test1").text("Hello world");
    });
    $("#btn2").click(function() {
        //alert("HTML: " + $("#test").html());
        $("#test2").html("<b>Hello world</b>");
    });
    $("#btn3").click(function() {
        $("#test3").val("Goofy");
    });
    $("#stAni").click(function() {
        $("div").animate({left:"250px"});
    });
});
