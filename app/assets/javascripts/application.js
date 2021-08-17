// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require materialize 
//= require turbolinks
//= require_tree .

document.addEventListener('DOMContentLoaded', function() {
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  var elems = document.querySelectorAll('.carousel');
  var instance = M.Carousel.init(elems, {fullWidth: true});
  for (var i = 0; i < elems.length; i++) {
    var elem = elems[i]
    var inst =  M.Carousel.getInstance(elem);
    var nextbtn = document.querySelector('.next-btn');
    var prevbtn = document.querySelector('.prev-btn');
    nextbtn.addEventListener('click', function() {
      inst.next()
    })
    prevbtn.addEventListener('click', function() {
      inst.prev()
    })
  }
  $('#fade-out-target').fadeOut(2000)
});




