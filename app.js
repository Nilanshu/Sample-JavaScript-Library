var g = G$('hijd','io');
g.greet().setLang('es').greet(true);

$('#login').click(function() {
    var loginGrtr = G$('johny','cash');
    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});