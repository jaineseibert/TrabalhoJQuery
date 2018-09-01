function toTop()
{
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $("#toTop").fadeIn();   
            } else {
                $("#toTop").fadeOut();
            }
        });

        $("#toTop").click(function() {
            $("body,html").animate({scrollTop:0},800);
        }); 
    });
}

( function( $ ) {
$( document ).ready(function() {

	toTop();
// Cache the elements we'll need
var menu = $('#menu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('#responsive-tab');

// Create responsive trigger
menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');

// Toggle menu visibility
menu.on('click', '#responsive-tab', function(){
	listItems.slideToggle('fast');
	listItems.addClass('collapsed');
});
});
} )( jQuery );
