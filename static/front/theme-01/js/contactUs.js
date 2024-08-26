hideError = () => {
    $('#contactForm input#username').keyup(function(){
        $("#username").removeClass("ErrorInput")
        $('#UsernameError').addClass("hidden")
    })
    $('#contactForm input#mobile').keyup(function(){
        $("#mobile").removeClass("ErrorInput")
        $('#MobileError').addClass("hidden")
    })
    $('#contactForm textarea').keyup(function(){
        $("#message").removeClass("ErrorInput")
        $('#MessageError').addClass("hidden")
    })
}

showError = () =>{
    if(!$('#contactForm input#username').val()){
        $("#username").addClass("ErrorInput")
        $('#UsernameError').removeClass("hidden")
    }
    if(!$('#contactForm input#mobile').val()){
        $("#mobile").addClass("ErrorInput")
        $('#MobileError').removeClass("hidden")
    }
    if(!$('#contactForm textarea').val()){
        $("#message").addClass("ErrorInput")
        $('#MessageError').removeClass("hidden")
    }

    
}