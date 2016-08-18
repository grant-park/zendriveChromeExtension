window.traxmilliseconds = function(){
    var _exec = function(){
        $(document).ready(function(){
            var _timeArray = jQuery.makeArray($(".tripinfo-item"));
            _timeArray.forEach(function(cur,i,arr){
                $(cur).find(".sorted").css("padding-bottom", "13px");
                $(cur).find(".sorted").after("<div style='position: absolute; transform: translateX(18px) translateY(17px);'>" + $(cur).attr("rel") + "</div>");
            });
        });
    };
    if (!window.jQuery) {
        fetch('https://code.jquery.com/jquery-3.1.0.min.js')
        .then(r => r.text())
        .then(r => eval(r))
        .then(() => {
            _exec();
        });
    } else {
        _exec();
    }
};

traxmilliseconds();
