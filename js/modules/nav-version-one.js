
function menuSection() {
    var $navList = $('.nav-version-one__menu > li');

    $navList.on('mouseover', function() {
        //console.log('>>>> hovered <<<<');
        var $that = $(this);
        //console.log($that);

        $that.find('ul:first').show().find('> a').addClass('active');
    }).on('mouseout', function(){
        var $that = $(this);
        //console.log($that);
        $that.find('ul:first').hide().find('> a').removeClass('active')
    });
}


// display flyout
function flyoutMenuChild(){
    var $navHeadline = $('.nav-version-one__menu li li');

    $navHeadline.on('mouseover', function(){
        //console.log($that);
        var $that = $(this),
            $_self = this,
            $_section = $('ul:first', $_self);

        if ($that.has('ul').length) {
            $that.parent().addClass('expanded');
        }

        $_section.parent().find('> a').addClass('active');
        $_section.show();

    }).on('mouseout', function(){

        var $that = $(this),
            $_self = this,
            $_section = $('ul:first', $_self);

        $that.parent().removeClass('expanded');
        $_section.parent().find('> a').removeClass('active');
        $_section.hide();
    })
}

menuSection();
flyoutMenuChild();

