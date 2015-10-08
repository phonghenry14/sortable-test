// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(function() {
  var correctItems=$(".fixed");
  var correctIndex=[];
  for(var i=0; i<correctItems.length; i++){
      correctIndex[i]=$("#sortable li").index(correctItems[i]);
  }
  $("#sortable").sortable({
    cancel: ".fixed",
    change: function(event,ui) {
      for(var i=0; i<correctItems.length; i++){
        var lockto = correctIndex[i];
        var thisindex = $(ui.helper).index(fixed);
        var fixed = $(correctItems[i]);
        var index = $("#sortable li").index(fixed);
        var targetindex = lockto+1;
        if(index !== targetindex) {
          if(index > targetindex ) {
            fixed.prev().insertAfter(fixed); //move it up by one position
          } else if(index==(targetindex-1) && thisindex>targetindex) {
            //don't move it at all
          } else {
            fixed.next().insertBefore(fixed); //move it down by one position
          }
        } else if(index==targetindex && thisindex>targetindex) {
          fixed.prev().insertAfter(fixed); //move it up by one position
        }
      }
    }
  });
  $("#sortable").disableSelection();
});

