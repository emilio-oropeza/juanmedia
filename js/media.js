$(document).ready(function(){

  $('#uno').masonry({
      itemSelector: '.content',
      originTop: true,
      gutter: 0,
      columnWidth: 20,
      fitWidth: true
    });
    $(".show").fancybox();
    $(".show").attr('rel', 'video facebook snap instagram landing').fancybox({padding: 0});
    $('div.element a').click(function() {
    var textoFiltro = $(this).text().toLowerCase().replace(/\s/g,"-");
    if(textoFiltro == 'todos')
    {
        $('div.content').fadeIn('slow').removeClass('hidden');
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
    var id = $(this).attr('id');
    switch(id){
      case 'todos':
        $('#todos').addClass('enable').removeClass('disable');
        $('#landing').addClass('disable').removeClass('enable');
        $('#vid').addClass('disable').removeClass('enable');
        $('#book').addClass('disable').removeClass('enable');
        $('#insta').addClass('disable').removeClass('enable');
        $('#chat').addClass('disable').removeClass('enable');
        $('.show_general').addClass('show');
        $('.show_video').addClass('show');
        $('.show_facebook').addClass('show');
        $('.show_instagram').addClass('show');
        $('.show_snapchat').addClass('show');
      break;
      case 'landing':
        $('#todos').addClass('disable').removeClass('enable');
        $('#landing').addClass('enable').removeClass('disable');
        $('#vid').addClass('disable').removeClass('enable');
        $('#book').addClass('disable').removeClass('enable');
        $('#insta').addClass('disable').removeClass('enable');
        $('#chat').addClass('disable').removeClass('enable');
        $('.show_landing').addClass('show');
        $('.show_video').removeClass('show');
        $('.show_facebook').removeClass('show');
        $('.show_instagram').removeClass('show');
        $('.show_snapchat').removeClass('show');
      break;
      case 'vid':
        $('#todos').addClass('disable').removeClass('enable');
        $('#landing').addClass('disable').removeClass('enable');
        $('#vid').addClass('enable').removeClass('disable');
        $('#book').addClass('disable').removeClass('enable');
        $('#insta').addClass('disable').removeClass('enable');
        $('#chat').addClass('disable').removeClass('enable');
        $('.show_landing').removeClass('show');
        $('.show_video').addClass('show');
        $('.show_facebook').removeClass('show');
        $('.show_instagram').removeClass('show');
        $('.show_snapchat').removeClass('show');
      break;
      case 'book':
        $('#todos').addClass('disable').removeClass('enable');
        $('#landing').addClass('disable').removeClass('enable');
        $('#vid').addClass('disable').removeClass('enable');
        $('#book').addClass('enable').removeClass('disable');
        $('#insta').addClass('disable').removeClass('enable');
        $('#chat').addClass('disable').removeClass('enable');
        $('.show_landing').removeClass('show');
        $('.show_video').removeClass('show');
        $('.show_facebook').addClass('show');
        $('.show_instagram').removeClass('show');
        $('.show_snapchat').removeClass('show');
      break;
      case 'insta':
        $('#todos').addClass('disable').removeClass('enable');
        $('#landing').addClass('disable').removeClass('enable');
        $('#vid').addClass('disable').removeClass('enable');
        $('#book').addClass('disable').removeClass('enable');
        $('#insta').addClass('enable').removeClass('disable');
        $('#chat').addClass('disable').removeClass('enable');
        $('.show_landing').removeClass('show');
        $('.show_video').removeClass('show');
        $('.show_facebook').removeClass('show');
        $('.show_instagram').addClass('show');
        $('.show_snapchat').removeClass('show');
      break;
      case 'chat':
        $('#todos').addClass('disable').removeClass('enable');
        $('#landing').addClass('disable').removeClass('enable');
        $('#vid').addClass('disable').removeClass('enable');
        $('#book').addClass('disable').removeClass('enable');
        $('#insta').addClass('disable').removeClass('enable');
        $('#chat').addClass('enable').removeClass('disable');
        $('.show_landing').removeClass('show');
        $('.show_video').removeClass('show');
        $('.show_facebook').removeClass('show');
        $('.show_instagram').removeClass('show');
        $('.show_snapchat').addClass('show');
      break;
    }
    $('#uno').masonry({
      itemSelector: '.content',
      originTop: true,
      gutter: 0,
      columnWidth: 20,
      fitWidth: true
    });
    return false;
    });

    //$("a[href$='.jpg']")
    

    /*$('#uno').masonry({
      itemSelector: '.content',
      columnWidth: 20,
      
    });
    $('#uno').masonry({
      itemSelector: '.content',
      columnWidth: 20,
      
    });*/
    
    
});

