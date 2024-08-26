
$(window).on('load',function(){
    setTimeout(function(){ // allowing 3 secs to fade out loader
        $('.preloader').fadeOut('slow');
    },500);
});

  $('#card-registration input').click(function(){
    $(this).siblings('label').addClass('active')
})

$('.icon-menu-md img').click(function(){
    // $('.menu-fixed').slideDown()
    $('.menu-fixed').css({"right" : "0" , "top" : "50px"})
})
$('.menu-fixed .logo i').click(function(){
    $('.menu-fixed').css({"right" : "-100%"})
    $('.submenu').slideUp();
})

function submenu(submenu){
    $('.submenu').slideToggle();
    $('#' + submenu).siblings('ul').hide();
    $('#' + submenu).show();
}
$('.close-submenu').click(function(){
    $('.submenu').slideUp();
})
$('.list-cards-reject .item .title , .list-ticket .item .title').click(function(){
    $(this).siblings('.body').slideToggle()
    if( $(this).find('i').hasClass('rotated')){
        $(this).find('i').removeClass('rotated')
    }else{
        $(this).find('i').addClass('rotated')
    }
    $(this).parent('.item').siblings().children('.body').slideUp()
    $(this).parent('.item').siblings().find('i').removeClass('rotated')
})


$('.owl-vector').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        1800:{
            items:1
        }
    }
    
})

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).val()).select();
    document.execCommand("copy");
    $temp.remove();
    $('p.alert-copy').fadeIn(1000, function() {
        $('p.alert-copy').delay(1500).fadeOut();
    });
  }

//   $('span.update-btn').click(function(){
//     window.location.reload();
//   })




var previw_upload_img = function(event , upload , name) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById(upload);
      output.src = reader.result;

      if($('.operation-img ul li').hasClass(upload)){
          $('.operation-img ul li.' + upload).find('.img img').attr('src' ,reader.result )
      }else{
          $('.empty-list-auth').css({'display' : 'none'})
          $('.operation-img .btn-form-auth button').removeAttr('disabled')

        var create_item =  `
        <li  class="${upload}">
            <div>
                <div class="img">
                <img src="${reader.result}" alt="" />
                </div>
                <span>${name}</span>
            </div>
        </li>
      `
  
            $('.operation-img ul').append(create_item)
            $('li.' + upload).append(`<i onClick="delete_item(event)" class="fas fa-trash" />`)
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };


  function delete_item(event){
    $(event.target).parent('li').remove()
    var img_class = $(event.target).parent('li').attr('class')
    $('img#' + img_class).attr("src" , '/static/customer/theme-01/img/error/not_found_img2.png')
    $('#input-' + img_class).val(null)

    if($('.operation-img ul').children().length == 0){
        $('.empty-list-auth').css({'display' : 'block'})
        $('.operation-img .btn-form-auth button').attr('disabled' , 'disabled')
    }
  }

$('.md-drop-status .item').click(function(){
    $('.info-top-profile .item').slideToggle()
})
  
$(".select2").select2( {
    placeholder: "انتخاب کنید",
  } );
