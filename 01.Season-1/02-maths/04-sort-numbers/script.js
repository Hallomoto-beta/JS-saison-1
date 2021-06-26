// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        const numbers = document.getElementById("numbers").value.split(",");
        let tab = []
        for (let index = 0; index < numbers.length; index++) {
            const element = numbers[index];
            tab.push(new Number(element))
        }
              tab.sort((a,b)=> a - b)

        alert (tab);

    });

})();
