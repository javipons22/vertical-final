jQuery(document).ready(function($){
    $('.main-nav, .social-nav').hide();
    $('.main-header__button').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.main-nav, .social-nav').slideToggle();
        //$('nav').slideToggle();
        //$('nav').animate({width:'toggle'},350);
    });

    // Todas las funciones se ejecutan al cambiar el tamaño de la pantalla
    $(window).resize(function() {
        if ($(window).width() >= 576) {
            // INICIO FUNCION CAMBIAR IMAGENES BANNER EN MOBIL CON RESPECTO A LAPTOP
            // Borramos todos los slides del container
            $(".carousel-container-js").empty();
            for(var i = 1; i <= 3; i++){
                // si es la primera foto , en div class agregar active
                if(i == 1) {
                    $(".carousel-container-js" ).append( `<div class="carousel-item active"><img src="img/banner${i}.jpg" class="d-block w-100 img-carousel" alt="imagen banner ${i}"></div>` );
                } else {
                    $(".carousel-container-js" ).append( `<div class="carousel-item "><img src="img/banner${i}.jpg" class="d-block w-100 img-carousel" alt="imagen banner ${i}"></div>` );
                }
            }
        } else {
            $(".carousel-container-js").empty();
            for(var i = 1; i <= 3; i++){
                // si es la primera foto , en div class agregar active
                if(i == 1) {
                    $(".carousel-container-js" ).append( `<div class="carousel-item active"><img src="img/banner-mobile${i}.jpg" class="d-block w-100 img-carousel" alt="imagen banner ${i}"></div>` );
                } else {
                    $(".carousel-container-js" ).append( `<div class="carousel-item "><img src="img/banner-mobile${i}.jpg" class="d-block w-100 img-carousel" alt="imagen banner ${i}"></div>` );
                }
            }
            
        }
        // Cuando hacemos resize que tambien cambie el espacio del top del sitio
        var height1 = $('.main-header').height();
        var height2 = $('.top-header').height();
        $('body').css('margin-top',(height1 + height2) + 'px');

    }).resize();

    // INICIO CAMBIO DE SUCURSALES FOOTER (INICIO) ------------------
    // Cambio de Sucursales footer
    $('#sucursal').on('change', function() {
        var sucursal = this.value;
        for (var i = 0; i < 3 ; i++) {
            // i + 1 porque tiene que empezar desde el 2do elemento del array sucursales
            $(`.contacto-footer-${i}`).html(sucursales[sucursal][i+1]);
        }
    });
    // FIN CAMBIO DE SUCURSALES FOOTER (FIN) ------------------

    // INICIO MARCADOR DE PAGINAS EN NAV (INICIO) ------------------
    // Marcador de pagina actual en header para el nav
    var pathname = window.location.pathname;
    // dividimos el path en un array para acceder al ultimo elemento
    var splitPath = pathname.split("/");
    // Obtenemos el index del ultimo elemento
    var lastIndex = splitPath.length - 1;

    // (ELSE) si el elemento esta vacio es HOME , por eso agregamos la clase selected a .home en el else
    if (splitPath[lastIndex].length > 0) {
        $("." + splitPath[lastIndex]).addClass('main-nav__link--selected');
    } else {
        $(".home").addClass('main-nav__link--selected');
    }
    // FIN MARCADOR DE PAGINAS EN NAV (FIN) ------------------

    // INICIO CREADOR SUCURSALES - PAGINA SUCURSALES (INICIO) ------------------
    // De esta forma se itera cuando los valores del objeto son arrays (obtenido de internet)
    for (var [key, value] of Object.entries(sucursales)){
        // funcion disponible en archivo sucursales.js
        var HTMLSucursal = crearHTMLSucursal(value[0],value[1],value[2],value[3],value[4],'#','#','#');
        $(".sucursales-container" ).append(HTMLSucursal);
    }
    // FIN CREADOR SUCURSALES - PAGINA SUCURSALES (FIN) ------------------
    
});