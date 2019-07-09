//Sidenav
$('#menu-button').click(function(e){
    e.stopPropagation();
     $('#hide-menu').toggleClass('show-menu');
     $('#overlay').removeClass('d-none');
});
$('#hide-menu').click(function(e){
    e.stopPropagation();
});
$('body,html,#link-close').click(function(e){
       $('#hide-menu').removeClass('show-menu');
       $('#overlay').addClass('d-none');
});

/* Tooltip */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

/* More texts */
$('#btn-more-text').click(function(){
    $('.more-singles').removeClass('d-none');
});