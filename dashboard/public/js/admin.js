$("#leftside-navigation .sub-menu > a").click(function(e) {
    $(this).toggleClass("active"), 
    $(this).hasClass("active") ? $(this).next().slideDown() : $(this).next().slideUp(),
    $(this).hasClass("active") ? $(this).find('i.arrow').removeClass('fa-angle-right').addClass('fa-angle-down') : $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-right'),
    e.stopPropagation()
  })