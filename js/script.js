$(function() {
  $('#back a').on('click',function(event){
    $('body,html').animal({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});
