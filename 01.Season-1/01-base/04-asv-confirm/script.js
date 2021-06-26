
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    let age = window.prompt("qu'elle age as tu ? ");
    let sex = window.prompt("es tu un hommme ou une femme? ");
    let ville = window.prompt(" où vies tu ? ");
        confirm( age + sex + ville);
        if (confirm == 'yes'){
           return('cest noté!') ;
        }
        else{

        }
        
})();
