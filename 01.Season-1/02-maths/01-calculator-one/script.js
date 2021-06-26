
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition0
       let x = new Number(document.getElementById("op-one").value);
       let y = new Number(document.getElementById("op-two").value);
       let z = x + y;

       alert (z);
        
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let x = new Number(document.getElementById("op-one").value);
       let y = new Number(document.getElementById("op-two").value);
       let z = x - y;

       alert (z);
     
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let x = new Number(document.getElementById("op-one").value);
       let y = new Number(document.getElementById("op-two").value);
       let z = x * y;

       alert (z);
     
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let x = new Number(document.getElementById("op-one").value);
        let y = new Number(document.getElementById("op-two").value);
        let z = x / y;
 
        alert (z);
    });
})();
