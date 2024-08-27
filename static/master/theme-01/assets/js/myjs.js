// const csrftoken = document.querySelector("[name=csrfmiddlewaretoken]").value;
 
toastr.options = {
    timeOut: 3000,
    progressBar: true,
    showMethod: "slideDown",
    hideMethod: "slideUp",
    positionClass: "toast-bottom-right",
    showDuration: 200,
    hideDuration: 200,
  };

function FormAjax(ev , formId , formBtn, formLBtn, errorId) { 
    var funcForm = $(`#${formId}`);  
    $(`#${formBtn}`).css("display", "none");
    $(`#${formLBtn}`).css("display", "block");
    var funcform = new FormData(funcForm[0]);
   $.ajax({
        type: funcForm.attr('method'),
        url: funcForm.attr('action'),   
        contentType: false,
        processData: false,
        dataType: "json",
        headers: { "X-CSRFToken": csrftoken },            
        data: funcform,
        success: function (data) {
             if (data.type == "success") { 
                $(`.err`).empty() 
                if(data.status == 'add'){
                    $(`#${formId} input`).val("");
                    $(`#${formId} textarea`).val("");
                }
                toastr.success(data.msg); 
                if(data.data){
                    AddFun(data.data)
                }
                setTimeout(() => { 
                    if(data.redirect_url){
                        window.location.replace(`${data.redirect_url}`);
                    }  
                    $(`#${formBtn}`).css("display", "block");
                    $(`#${formLBtn}`).css("display", "none");
                } , 1500)
            }
            else if (data.type=='danger'){  
                $(`.err`).empty() 
                if(data.errors){
                    Object.keys(data.errors).map(
                        (key) => { 
                            $(`#err${errorId}${key}`).empty()
                            console.log(`#err${errorId}${key}`)
                            console.log(data.errors[key])
                            $(`#err${errorId}${key}`).append(data.errors[key]);
                        });
                    setTimeout(() => {
                        $(`#${formBtn}`).css("display", "block");
                        $(`#${formLBtn}`).css("display", "none");
                    } , 3000)
                }else{
                    toastr.error(data.msg);
                    setTimeout(() => {
                        $(`#${formBtn}`).css("display", "block");
                        $(`#${formLBtn}`).css("display", "none");
                    } , 3000)
                } 
            } 
        }
    });
    ev.preventDefault();
}

function FormAjaxModal(ev , formId , formBtn, formLBtn, modalId, errorId) {  
    var funcForm = $(`#${formId}`);  
    $(`#${formBtn}`).css("display", "none");
    $(`#${formLBtn}`).css("display", "block");
    var funcform = new FormData(funcForm[0]);
   $.ajax({
        type: funcForm.attr('method'),
        url: funcForm.attr('action'),   
        contentType: false,
        processData: false,
        dataType: "json",
        headers: { "X-CSRFToken": csrftoken },            
        data: funcform,
        success: function (data) {
             if (data.type == "success") { 
                $(`.err`).empty()  
                toastr.success(data.msg);  
                if(data.data){
                    AddFun(data.data)
                }
                dt.map(item => {
                    item.ajax.reload(null, false);
                })
                $(`#${modalId} .cancel`).trigger("click");
                setTimeout(() => { 
                    if(data.redirect_url){
                        window.location.replace(`${data.redirect_url}`);
                    }  
                    $(`#${formBtn}`).css("display", "block");
                    $(`#${formLBtn}`).css("display", "none");
                } , 1500)
            }
            else if (data.type=='danger'){  
                $(`.err`).empty() 
                if(data.errors){
                    Object.keys(data.errors).map(
                        (key) => { 
                            if(data.pk){ 
                            $(`#err${errorId}${key}_${data.pk}`).empty() 
                            $(`#err${errorId}${key}_${data.pk}`).append(data.errors[key]);
                            }else{
                            $(`#err${errorId}${key}`).empty() 
                            $(`#err${errorId}${key}`).append(data.errors[key]);}
                        });
                    setTimeout(() => {
                        $(`#${formBtn}`).css("display", "block");
                        $(`#${formLBtn}`).css("display", "none");
                    } , 3000)
                }else{
                    toastr.error(data.msg);
                    dt.map(item => {
                        item.ajax.reload(null, false);
                    })
                    $(`#${modalId} .cancel`).trigger("click");
                    setTimeout(() => {
                        $(`#${formBtn}`).css("display", "block");
                        $(`#${formLBtn}`).css("display", "none");
                    } , 3000)
                } 
            } 
        }
    });
    ev.preventDefault();
}

function FormAjaxModalDelete(ev , modalId, url, pk) {    
        let theURLDelete = url; 
        $.ajax({
          type: "GET",
          url: theURLDelete,
          data: { code : pk, part : '1' },
          success: function (data) {
            if (data.type == "success") {
              toastr.success(data.msg); 
              dt.ajax.reload(null, false );
              $(`#${modalId} .cancel`).trigger('click')
            } else if (data.type == "danger") {
              toastr.error(data.msg);
            }
          },
        });
        ev.preventDefault(); 
}

var previw_upload_img = function (event, upload) {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById(upload);
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

