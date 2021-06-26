
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function() {
        document.body.style.backgroundColor = document.getElementById("getRandomColor").value;
    });
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

})();
