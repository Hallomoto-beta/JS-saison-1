
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    function MessageParDate(){
        var date = new Date();
        var day = date.getDay();
         var minutes = date.getMinutes();
         var heure = date.getHours();
         var month = date.getMonth();
         var day1 = date.getDate();
         var year = date.getFullYear();

         switch (new Date().getDay()) {
            case 0:
              day = "Sunday";
              break;
            case 1:
              day = "Monday";
              break;
            case 2:
               day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case 6:
              day = "Saturday";
              break;
          }
          switch (new Date().getMonth()) {
            case 0:
                month = "January";
              break;
            case 1:
                month = "February";
              break;
            case 2:
                month = "March";
              break;
            case 3:
                month = "April";
              break;
            case 4:
                month = "May";
              break;
            case 5:
                month = "June";
              break;
            case 6:
                month = "July";
                break;
            case 7:
                month = "August";
                break;
            case 8:
                month = "September";
                break;
            case 9:
                month = "October";
                break;
            case 10:
                month = "November";
                break;
            case 11:
                month = "December";
                break;
          }
          if (minutes < 10 ){
            var temp = day + " " + day1 + " " +  month  +" "+ year + ", " + heure +"h"+ "0"+minutes; 
          }

          if (minutes > 10 ){
            var temp = day + " " + day1 + " " +  month  +" "+ year + ", " + heure +"h"+ minutes; 
          }
    
    return temp;


}
document.getElementById("target").innerHTML = MessageParDate()


})();
