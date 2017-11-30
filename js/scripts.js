;(function($) {

  "use strict";

  var $body = $('body');
  // var $head = $('head');
  // var $mainWrapper = $('#main-wrapper');

  // Mediaqueries
  // ---------------------------------------------------------
  // var XS = window.matchMedia('(max-width:767px)');
  // var SM = window.matchMedia('(min-width:768px) and (max-width:991px)');
  // var MD = window.matchMedia('(min-width:992px) and (max-width:1199px)');
  // var LG = window.matchMedia('(min-width:1200px)');
  // var XXS = window.matchMedia('(max-width:480px)');
  // var SM_XS = window.matchMedia('(max-width:991px)');
  // var LG_MD = window.matchMedia('(min-width:992px)');


  // jquery ui call functionfor calendar
  //------------------------------------------------
  $( "#datepicker" ).datepicker();

  // Touch
  // ---------------------------------------------------------
  var dragging = false;

  $body.on('touchmove', function() {
    dragging = true;
  });

  $body.on('touchstart', function() {
    dragging = false;
  });


  // Advanced search toggle
  var $SearchToggle = $('.header-search-bar .search-toggle');
  $SearchToggle.hide();

  $('.header-search-bar .toggle-btn').on('click', function(e){
    e.preventDefault();
    $SearchToggle.slideToggle(300);
  });


  // navbar toggle
  //------------------------------------------------
  $('.header-nav-bar button').on('click',function(){
    $('.header-nav-bar').toggleClass('active');
  });

  var $headerNavBar = $('#header .header-nav-bar, .header-nav-bar button');

  $headerNavBar.each(function () {
    var $this = $(this);

    $this.on('clickoutside touchendoutside', function () {
      if ($this.hasClass('active')) { $this.removeClass('active'); }
    });
  });


  //home slide tab-content hide
  //---------------------------------------
  $('.home-tab li > a').on('click', function(){

    $CategoryTtoggle.removeClass('active');
  });

    // Create clone list
    $select.find('option').each(function () {
      var $this = $(this);

      $list.append('<li data-value="' + $this.val() + '">' + $this.text() + '</li>');
    });

    // Toggle list
    $container.on('click', function () {
      $container.toggleClass('active');
      $list.slideToggle(250);
    });

    // Option Select
    $list.children('li').on('click', function () {
      var $this = $(this);

      $valueHolder.val($this.text());
      $select.find('option[value="' + $this.data('value') + '"]').prop('selected', true);
    });

    // Hide
    $container.on('clickoutside touchendoutside', function () {
      if (!dragging) {
        $container.removeClass('active');
        $list.slideUp(250);
      }
    });

    // Links
    if ($select.hasClass('links')) {
      $select.on('change', function () {
        window.location.href = select.val();
      });
    }

    $select.on('change', function () {
      cosole.log(chnaged);
      cosole.log($(this).val());
    });
  };

  $('select').each(function () {
    $(this).uouCustomSelect();
  });

  // sub-categories remove and active class
  //-----------------------------------------------------
  var $CategoryLink = $('#categories .accordion ul li div a');

  $CategoryLink.on('click', function(){
    $(this)
      .addClass('active')
      .siblings().removeClass('active')
      .parent().parent().siblings('li').children('div a').click(function(){
        $CategoryLink.removeClass('active');
      });
  });



  
  $("a").click(function(e){
    if($(this).attr("href") === '#'){
      e.preventDefault();
    }
  });


}(jQuery));



$("document").ready(function($){
  var nav = $('.header-search-bar');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
        nav.addClass("sticky");

    } else {
        nav.removeClass("sticky");
    }

  });
});


