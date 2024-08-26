

  var previw_upload_img = function(event , upload ) {


    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById(upload);
      output.src = reader.result;


      if($('.operation-img div').hasClass(upload)){
          $('.operation-img div.' + upload).find('img').attr('src' ,reader.result )
      }else{
          $('.empty-list-auth').css({'display' : 'none'})
          $('.operation-img .btn-form-auth button').removeAttr('disabled')

        var create_item =  `
        <img style="width: 32%;height: 32%;" src="${reader.result}" class="rounded-circle" alt="image">
      `
  
            $('.operation-img div').append(create_item)
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  };
