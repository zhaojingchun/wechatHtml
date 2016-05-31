window.onload=function(){
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            $(".game-container").append("<div class='game-bg"+i+"_"+j+"'></div>");
            $(".game-container").append($("<div id='game-up"+i+"_"+j+"' "+"class='gameUp'></div>").css({"left":getPointX(i),"top":getPointY(j)}))
        }
    }
    function getPointX(i){
        return 20+120*i;
    }
    function getPointY(y){
        return 20+120*y;
    }
}



