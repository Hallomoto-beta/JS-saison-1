
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
        

    function MessageParheure(){
        var heures = new Date().getHours();
        var minutes = new Date().getMinutes();
        
            if (heures <= 17){
                if (minutes <=30);
                return 'Hello you ';
                }
            else{
                return 'Good evening';
            }
        }
    
    
        document.getElementById("target").innerHTML = MessageParheure()

})();
