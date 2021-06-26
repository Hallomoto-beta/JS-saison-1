
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    

    function MessageParheure(){
        var heures = new Date().getHours();
        var minutes = new Date().getMinutes();
        
            if (heures < 18 ){
                return ('Hello you ');
            }
            if (heures > 18 ){
                return ('Good evening');
            }
        }
    
    
        document.getElementById("target").innerHTML = MessageParheure()
})();
