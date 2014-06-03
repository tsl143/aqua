//deliver=document.getElementById('deliver');
//deliver.addEventListener('webkitTransitionEnd', function( event ) { 
//     alert( "Finished transition!" ); 
//}, false );
$(document).ready(function(){
$("#deliver").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){ 
$(".deliverypopup").show();
});
});
$(window).load(function(){$('#deliver').addClass('rideanim');$('#deliver').css('left','85%');});