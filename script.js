const userName = $('#username');
const userEmail = $('#email');
const errorMessage = $('.errorMessage')
const errorMessage1 = $('.errorMessage1')
const verificationEmail = /^[a-zA-Z0-9_.]{3,25}@[a-z]{5,}\.[a-z]{2,10}$/;
const btnCommencer = $('.button');

btnCommencer.click(() => {
    let nom = userName.val().trim();
    let email = userEmail.val().trim();
    if (nom.length == 0) {
        errorMessage.text("N'oubliez pas de renseigner votre nom");
    } else if (nom.length < 3) {
        errorMessage.text("Entrez un nom valide");
    } else {
        errorMessage.text("");
    }
    if (email.length == 0) {
        errorMessage1.text("N'oubliez pas de renseigner votre email");
    } else if (!verificationEmail.test(email)) {
        errorMessage1.text("Entrez un email correct");
    } else {
        errorMessage1.textContent = ""
    }

});