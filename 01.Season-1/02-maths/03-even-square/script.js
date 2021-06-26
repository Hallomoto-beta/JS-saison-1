
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
       var tab = [ ] 
for(var i=1;i<21;i++) {
    tab.push(Math.pow(i,2));
}
alert(tab);

})
})(); 
