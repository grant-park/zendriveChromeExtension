$(document).ready(function(){
    setTimeout(function(){
        var _timeArray = jQuery.makeArray($(".sorted"));
        _timeArray.shift();
        _timeArray.forEach(function(cur,i,arr){
            $(cur).css("padding-bottom", "13px");
            $(cur).after("<div style='position: absolute; transform: translateX(18px) translateY(17px);'>" + (new Date($(cur).html()).getTime()) + "</div>");
        });
    },3000);
});
