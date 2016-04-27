$(document).ready(function(){
    $('div.element a').click(function() {
    var textoFiltro = $(this).text().toLowerCase().replace(/\s/g,"-");
    if(textoFiltro == 'todos')
    {
        $('div.content').fadeIn('slow');
    }
    else
    {
        $('div.content').each(function()
        {
            if(!$(this).hasClass(textoFiltro))
            {
                $(this).fadeOut('normal').addClass('hidden');
            }
            else
            {
                $(this).fadeIn('slow').removeClass('hidden');
            }
        });
    }
    return false;
    });
    $('#uno').masonry({
      columnWidth: 265,
      itemSelector: '.content',
      fitWidth: true
    });
    //revisa http://masonry.desandro.com/options.html
    
});