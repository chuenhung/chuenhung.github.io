<!-- 点击弹出文字效果 -->
var a_idx = 0;
jQuery(document).ready(function($) {
 
    $("body").click(function(e) {
 
        var a = new Array("温暖", "快乐", "自信", "爱", "自由");
 
        var $i = $("<span/>").text(a[a_idx]);
 
        a_idx = (a_idx + 1) % a.length;
 
        var x = e.pageX,
 
        y = e.pageY;
 
        $i.css({
 
            "z-index": 99999,
 
            "top": y - 20,
 
            "left": x,
 
            "position": "absolute",
 
            "font-weight": "bold",
 
            "color": "#ff6651"
 
        });
 
        $("body").append($i);
 
        $i.animate({
 
            "top": y - 180,
 
            "opacity": 0
 
        },
 
        1500,
 
        function() {
 
            $i.remove();
 
        });
 
    });
 
});