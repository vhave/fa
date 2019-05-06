(function($) {
  $('.box-team-bottom a').click(function(){
    $(this).parent().removeClass('current')
    // $(this).parent('.col-xs-12').siblings().find('.box-team-bottom').removeClass('current')
  })

  $('#myCarousel').carousel({interval:2000});

  // 获取界面上轮播图容器
  var $carousels = $('.carousel');
  var startX,endX;
  // 在滑动的一定范围内，才切换图片
  var offset = 50;
  // 注册滑动事件
  $carousels.on('touchstart',function (e) {
    // console.log(e);
    // 手指触摸开始时记录一下手指所在的坐标x
    startX = e.originalEvent.touches[0].clientX;

  });
  $carousels.on('touchmove',function (e) {
    // 目的是：记录手指离开屏幕一瞬间的位置 ，用move事件重复赋值
    endX = e.originalEvent.touches[0].clientX;
  });
  $carousels.on('touchend',function (e) {
    //console.log(endX);
    //结束触摸一瞬间记录手指最后所在坐标x的位置 endX
    //比较endX与startX的大小，并获取每次运动的距离，当距离大于一定值时认为是有方向的变化
    var distance = Math.abs(startX - endX);
    if (distance > offset){
      //说明有方向的变化
      //根据获得的方向 判断是上一张还是下一张出现
      $(this).carousel(startX >endX ? 'next':'prev');
    }
  })





  var scrollTop = $(window).scrollTop();

  if (scrollTop === 0) {
    $('.navbar-default').removeClass('fixed-to-top');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  // $('.back-to-top').click(function(){
  //   $('html, body').animate({scrollTop : 0},800);
  //   return false;
  // });

  //navigation
  $('.navigation').onePageNav({
    begin: function() {
      console.log('start');
    },
    end: function() {
      console.log('stop');
    },
    scrollOffset: 0
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //Home Background Slider

  $(function() {

    $.mbBgndGallery.buildGallery({
      containment: "#intro",
      timer: 3000,
      effTimer: 1000,
      controls: "#controls",
      grayScale: false,
      shuffle: false,
      preserveWidth: false,
      effect: "fade",
      effect: {
        enter: {
          left: 0,
          opacity: 0
        },
        exit: {
          left: 0,
          opacity: 0
        },
        enterTiming: "ease-in",
        exitTiming: "ease-in"
      },

      // If your server allow directory listing you can use:
      // (however this doesn't work locally on your computer)

      //folderPath:"testImage/",

      // else:

      images: [
        "img/bgslides/1.jpg",
      ],

      onStart: function() {},
      onPause: function() {},
      onPlay: function(opt) {},
      onChange: function(opt, idx) {},
      onNext: function(opt) {},
      onPrev: function(opt) {}
    });


  });

  // featured text
  $("#rotator .1strotate").textrotator({
    animation: "dissolve",
    speed: 4000
  });
  $("#rotator .2ndrotate").textrotator({
    animation: "dissolve",
    speed: 4000
  });

  //iphone carousel animation
  $(window).load(function() {
    $('#intro').addClass("animated fadeIn");
    $('.carousel-iphone').addClass("animated fadeInLeft");
  });

  // Fixed navbar
  $(window).scroll(function() {

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 200) {
      $('.navbar-default').css('display', 'block');
      $('.navbar-default').addClass('fixed-to-top');

    } else if (scrollTop == 0) {

      $('.navbar-default').removeClass('fixed-to-top');
    }
  });


  //parallax
  if ($('#parallax1').length || $('#parallax2').length) {


    $(window).stellar({
      responsive: true,
      scrollProperty: 'scroll',
      parallaxElements: false,
      horizontalScrolling: false,
      horizontalOffset: 0,
      verticalOffset: 0
    });

  }

  function navbar() {

    if ($(window).scrollTop() > 1) {
      $('#navigation').addClass('show-nav');
    } else {
      $('#navigation').removeClass('show-nav');
    }

  }

  $(document).ready(function() {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function() {
        navbar();
      });

    }

  });


  $(window).resize(function() {

    var browserWidth = $(window).width();

    if (browserWidth > 560) {

      $(window).scroll(function() {
        navbar();
      });

    }

  });


  // Carousel
  $('.service .carousel').carousel({
    interval: 4000
  })

  //works
  $(function() {
    Grid.init();
  });

  //animation
  new WOW().init();

})(jQuery);