var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/joke.ico");
        document.title = '呀！崩溃啦！╭(°A°`)╮ ';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");
        document.title = '咦，又好啦！◕ ں ◕ ';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});