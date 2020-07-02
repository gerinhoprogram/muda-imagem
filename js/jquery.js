$(document).ready(function() {
    $('.abre-fecha').hide();
    $('<div id="tela" style="text-align: center" ><img src="img/foto1.jpg" alt="Descrição da imagem" style="width:100%" /></div>')
    .insertAfter('#galeria');
    $('.foto').click(function(event) {
        event.preventDefault();
        $('#tela img').remove();
        $('<img style="width:100%" />')
        .attr('src', $(this).attr('src'))
        .css('opacity', '0.3')
        .appendTo('#tela')
        .animate({opacity: 1 }, 2000);
    });
});