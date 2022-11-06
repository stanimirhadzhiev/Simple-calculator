$('.button').click(function (e) {
            
    var a = $(e.target).text();
    if(a === "C"){
        $('.displayNumber').text("");
    }
    else if(a === "+/-")
    {
        $('.displayNumber').append("-");
    }
    else if(a === "÷"){
        $('.displayNumber').append("/");
    }
    else if(a==="CE"){
        var str = $('.displayNumber').text();
        var laststr = str.substring(0, str.length-1);
        $('.displayNumber').text(laststr);
    }
    else if (a === "="){
        var b = $('.displayNumber').text();
        var c = eval(b)
        $('.displayNumber').text("");
        $('.displayNumber').append(c);
    }
    else{
        $('.displayNumber').append(a);
    }
});