function navVersionTwo(){

    var $_sections = $('.menu-toggle'),
        $_navFlyout = $('.nav-version-two__menu');

    $_sections.on('click', function(){
        $_navFlyout.toggleClass('open');
    });

    console.log('nav-ver2');

}

navVersionTwo();