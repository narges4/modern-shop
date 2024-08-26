let balance_wallet_market =parseFloat($('.balance_buy').text().replace(/,/g, ''))
let price_market_buy = parseFloat($('.is_currency .price_market_buy').text().replace(/,/g, ''))

let balance_wallet_market_sell =parseFloat($('.balance_sell').text().replace(/,/g, ''))
let price_market_sell = parseFloat($('.is_currency .price_market_sell').text().replace(/,/g, ''))




$('.form_market_buy .percentage').click(function(){
    let percentage =parseFloat($(this).text().replace(/%/g, ''))
    $('.form_market_buy button').removeAttr('disabled')
    $('.form_market_buy button').removeClass('disabled')
    $('.form_market_buy button').text('ثبت سفارش')
    
    $('#amount_market_buy').val(Math.round(((balance_wallet_market * percentage)/100)).toLocaleString('en-US'))
    
    if($('#price_input_market_buy').val() <=0){
        
    }else{
        let price_input_market = parseFloat($('#price_input_market_buy').val().replace(/,/g, ''))
        let amount_market = parseFloat($('#amount_market_buy').val().replace(/,/g, ''))
       
        $('#mizan_market_buy').val((amount_market / price_input_market).toLocaleString('en-US'))
    }
    
})


$('.form_market_sell .percentage').click(function(){
    let percentage =parseFloat($(this).text().replace(/%/g, ''))
    $('.form_market_sell button').removeAttr('disabled')
    $('.form_market_sell button').removeClass('disabled')
    $('.form_market_sell button').text('ثبت سفارش')
    $('#amount_market_sell').val(((balance_wallet_market_sell * percentage)/100).toLocaleString('en-US'))
    if($('#price_input_market_sell').val() <=0){
        
    }else{
        let price_input_market = parseFloat($('#price_input_market_sell').val().replace(/,/g, ''))
        let amount_market = parseFloat($('#amount_market_sell').val().replace(/,/g, ''))
        $('#total_input_market_sell').val(((price_input_market) * amount_market).toLocaleString('en-US' , {maximumFractionDigits:0}));
    }
    
})

$('.btn_price_market_buy').click(function(){
   
    $('#price_input_market_buy').val((price_market_buy).toLocaleString('en-US'))
    
    let price = parseFloat($('#price_input_market_buy').val().replace(/,/g, ''))


    if( $('#amount_market_buy').val().length <= 0){
        $('#mizan_market_buy').val('')
        $('.form_market_buy button').text('ثبت سفارش')
      
    }else {
        let amount_market = parseFloat($('#amount_market_buy').val().replace(/,/g, ''))
        if($('#mizan_market_buy').val().length > 0){
            $('#mizan_market_buy').val('')
            $('#mizan_market_buy').val((amount_market / price).toLocaleString('en-US'))
        }else {
            $('#mizan_market_buy').val((amount_market / price).toLocaleString('en-US'))
        }
        if(amount_market <= balance_wallet_market){
            $('.form_market_buy button').removeAttr('disabled')
            $('.form_market_buy button').removeClass('disabled')
            $('.form_market_buy button').text('ثبت سفارش')
        }else{
            $('.form_market_buy button').attr('disabled','disabled')
            $('.form_market_buy button').addClass('disabled')
            $('.form_market_buy button').text('موجودی کافی نیست')
        }
    }

    
})

$('.btn_price_market_sell').click(function(){
    $('#price_input_market_sell').val((price_market_sell).toLocaleString('en-US'))
    if($('#amount_market_sell').val() <=0){
        
    }else{
        let amount_market = parseFloat($('#amount_market_sell').val().replace(/,/g, ''))
        $('#total_input_market_sell').val(((amount_market) * price_market_sell).toLocaleString('en-US', {maximumFractionDigits:0}));
    }
})


$("input#price_input_market_buy").keyup(function(event) {

    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);

    var vCoin = event.key; 
   
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));

    if($(this).val().length <=0){

        $('.form_market_buy button').attr('disabled','disabled')
        $('.form_market_buy button').addClass('disabled')
        $('.form_market_buy button').text('ثبت سفارش')
       
    }else{
        if( $('#amount_market_buy').val().length <= 0){
            $('#mizan_market_buy').val('')
            $('.form_market_buy button').text('ثبت سفارش')
      
        }else {
            let amount_market = parseFloat($('#amount_market_buy').val().replace(/,/g, ''))
            if($('#mizan_market_buy').val().length > 0){
                $('#mizan_market_buy').val('')
                $('#mizan_market_buy').val((amount_market / number).toLocaleString('en-US'))
            }else {
                $('#mizan_market_buy').val((amount_market / number).toLocaleString('en-US'))
            }
            if(amount_market <= balance_wallet_market){
                $('.form_market_buy button').removeAttr('disabled')
                $('.form_market_buy button').removeClass('disabled')
                $('.form_market_buy button').text('ثبت سفارش')
            }else{
                $('.form_market_buy button').attr('disabled','disabled')
                $('.form_market_buy button').addClass('disabled')
                $('.form_market_buy button').text('موجودی کافی نیست')
            }
        }

    }

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if($(this).val().length <=0){

            $('.form_market_buy button').attr('disabled','disabled')
            $('.form_market_buy button').addClass('disabled')
            $('.form_market_buy button').text('ثبت سفارش')
            $('#mizan_market_buy').val('')
            $('#amount_market_buy').val('')
           
        }else{
            if( $('#amount_market_buy').val().length <= 0){
                $('#mizan_market_buy').val('')
                $('.form_market_buy button').text('ثبت سفارش')
      
            }else {
                let amount_market = parseFloat($('#amount_market_buy').val().replace(/,/g, ''))
                if($('#mizan_market_buy').val().length > 0){
                    $('#mizan_market_buy').val('')
                    $('#mizan_market_buy').val((amount_market / number).toLocaleString('en-US'))
                }else {
                    $('#mizan_market_buy').val((amount_market / number).toLocaleString('en-US'))
                }
                if(amount_market <= balance_wallet_market){
                    $('.form_market_buy button').removeAttr('disabled')
                    $('.form_market_buy button').removeClass('disabled')
                    $('.form_market_buy button').text('ثبت سفارش')
                }else{
                    $('.form_market_buy button').attr('disabled','disabled')
                    $('.form_market_buy button').addClass('disabled')
                    $('.form_market_buy button').text('موجودی کافی نیست')
                }
            }
        }
    }

    if(persianAlphabetAndWhiteSpace.test(event.key)){  
        if( $('#amount_market_buy').val().length <= 0){
            $('#mizan_market_buy').val('')
            $('.form_market_buy button').text('ثبت سفارش')
      
        }else {
            let amount_market = parseFloat($('#amount_market_buy').val().replace(/,/g, ''))
            if($('#mizan_market_buy').val().length > 0){
                $('#mizan_market_buy').val('')
                $('#mizan_market_buy').val((amount_market / number).toLocaleString('en-US'))
            }else {
                $('#mizan_market_buy').val((amount_market / number).toLocaleString('en-US'))
            }
            if(amount_market <= balance_wallet_market){
                $('.form_market_buy button').removeAttr('disabled')
                $('.form_market_buy button').removeClass('disabled')
                $('.form_market_buy button').text('ثبت سفارش')
            }else{
                $('.form_market_buy button').attr('disabled','disabled')
                $('.form_market_buy button').addClass('disabled')
                $('.form_market_buy button').text('موجودی کافی نیست')
            }
        }
             
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

})

$("input#price_input_market_sell").keyup(function(event) {

    let amount_market;
    if($('#amount_market_sell').val() <=0){
        amount_market = 0
    }else{
        amount_market =parseFloat($('#amount_market_sell').val().replace(/,/g, ''))
    }


   
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);

    var vCoin = event.key; 
   
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    if($(this).val().length <=0){

        $('.form_market_sell button').attr('disabled','disabled')
        $('.form_market_sell button').addClass('disabled')
        $('#total_input_market_sell').val('')
        $('.form_market_sell button').text('ثبت سفارش')
       
    }else{
        $('#total_input_market_sell').val(((amount_market) * number).toLocaleString('en-US', {maximumFractionDigits:0}));
    }

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if($(this).val().length <=0){

            $('.form_market_sell button').attr('disabled','disabled')
            $('.form_market_sell button').addClass('disabled')
            $('#total_input_market_sell').val('')
            $('.form_market_sell button').text('ثبت سفارش')
           
        }else{
            $('#total_input_market_sell').val(((amount_market) * number).toLocaleString('en-US', {maximumFractionDigits:0}));
        }
    }

    if(persianAlphabetAndWhiteSpace.test(event.key)){  
        $('#total_input_market_sell').val(((amount_market) * number).toLocaleString('en-US', {maximumFractionDigits:0}));
             
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

})


$("input#amount_market_buy").keyup(function(event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);

    var vCoin = event.key; 
   
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if($(this).val().length <=0){

            $('.form_market_buy button').attr('disabled','disabled')
            $('.form_market_buy button').addClass('disabled')
            $('.form_market_buy button').text('ثبت سفارش')
            $('#mizan_market_buy').val('')
            $('#price_input_market_buy').val('')
           
        }else{

            if( $('#price_input_market_buy').val().length <= 0){
                $('.form_market_buy button').text('ثبت سفارش')
                $('#mizan_market_buy').val('')
      
            }else {
                let price = parseFloat($('#price_input_market_buy').val().replace(/,/g, ''))
                $('#mizan_market_buy').val((number / price).toLocaleString('en-US'))
                if(number <= balance_wallet_market){
                    $('.form_market_buy button').removeAttr('disabled')
                    $('.form_market_buy button').removeClass('disabled')
                    $('.form_market_buy button').text('ثبت سفارش')
                }else{
                    $('.form_market_buy button').attr('disabled','disabled')
                    $('.form_market_buy button').addClass('disabled')
                    $('.form_market_buy button').text('موجودی کافی نیست')
                }
            }

        }
    }

    if($(this).val().length <=0){

        $('.form_market_buy button').attr('disabled','disabled')
        $('.form_market_buy button').addClass('disabled')
        $('#mizan_market_buy').val('')
       
    }else{
        if( $('#price_input_market_buy').val().length <= 0){
            $('.form_market_buy button').text('ثبت سفارش')
            $('#mizan_market_buy').val('')
      
        }else {
            let price = parseFloat($('#price_input_market_buy').val().replace(/,/g, ''))
            $('#mizan_market_buy').val((number / price).toLocaleString('en-US'))
            if(number <= balance_wallet_market){
                $('.form_market_buy button').removeAttr('disabled')
                $('.form_market_buy button').removeClass('disabled')
                $('.form_market_buy button').text('ثبت سفارش')
            }else{
                $('.form_market_buy button').attr('disabled','disabled')
                $('.form_market_buy button').addClass('disabled')
                $('.form_market_buy button').text('موجودی کافی نیست')
            }
        }
    }

    if(persianAlphabetAndWhiteSpace.test(event.key)){  
        if( $('#price_input_market_buy').val().length <= 0){   
            $('.form_market_buy button').text('ثبت سفارش')
            $('#mizan_market_buy').val('')
        }else {
            let price = parseFloat($('#price_input_market_buy').val().replace(/,/g, ''))
            $('#mizan_market_buy').val((number / price).toLocaleString('en-US'))
            if(number <= balance_wallet_market){
                $('.form_market_buy button').removeAttr('disabled')
                $('.form_market_buy button').removeClass('disabled')
                $('.form_market_buy button').text('ثبت سفارش')
            }else{
                $('.form_market_buy button').attr('disabled','disabled')
                $('.form_market_buy button').addClass('disabled')
                $('.form_market_buy button').text('موجودی کافی نیست')
            }
        }
             
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

})

$("input#amount_market_sell").keyup(function(event) {
    let price_input_market;
   if($('#price_input_market_sell').val() <=0){
        price_input_market = 0
   }else{
        price_input_market = parseFloat($('#price_input_market_sell').val().replace(/,/g, ''))
   }
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);

    var vCoin = event.key; 
   
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if($(this).val().length <=0){

            $('.form_market_sell button').attr('disabled','disabled')
            $('.form_market_sell button').addClass('disabled')
            $('#total_input_market_sell').val('')
            $('.form_market_sell button').text('ثبت سفارش')
           
        }else{
            $('#total_input_market_sell').val(((price_input_market) * number).toLocaleString('en-US', {maximumFractionDigits:0}));
            if(number <= balance_wallet_market_sell){
                $('.form_market_sell button').removeAttr('disabled')
                $('.form_market_sell button').removeClass('disabled')
                $('.form_market_sell button').text('ثبت سفارش')
            }else{
                $('.form_market_sell button').attr('disabled','disabled')
                $('.form_market_sell button').addClass('disabled')
                $('.form_market_sell button').text('موجودی کافی نیست')
            }
        }
    }

    if($(this).val().length <=0){

        $('.form_market_sell button').attr('disabled','disabled')
        $('.form_market_sell button').addClass('disabled')
        $('#total_input_market_sell').val('')
       
    }else{
        $('#total_input_market_sell').val(((price_input_market) * number).toLocaleString('en-US', {maximumFractionDigits:0})); 
        if(number <= balance_wallet_market_sell){
            $('.form_market_sell button').removeAttr('disabled')
            $('.form_market_sell button').removeClass('disabled')
            $('.form_market_sell button').text('ثبت سفارش')
        }else{
            $('.form_market_sell button').attr('disabled','disabled')
            $('.form_market_sell button').addClass('disabled')
            $('.form_market_sell button').text('موجودی کافی نیست')
        }
    }

    if(persianAlphabetAndWhiteSpace.test(event.key)){  
        $('#total_input_market_sell').val(((price_input_market) * number).toLocaleString('en-US', {maximumFractionDigits:0}));

        if(number <= balance_wallet_market_sell){
            $('.form_market_sell button').removeAttr('disabled')
            $('.form_market_sell button').removeClass('disabled')
            $('.form_market_sell button').text('ثبت سفارش')
        }else{
            $('.form_market_sell button').attr('disabled','disabled')
            $('.form_market_sell button').addClass('disabled')
            $('.form_market_sell button').text('موجودی کافی نیست')
        }
        
             
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

})


$("input#mizan_market_buy").keyup(function(event) {

    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);

    var vCoin = event.key; 
   
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    if($(this).val().length <=0){

        $('.form_market_buy button').attr('disabled','disabled')
        $('.form_market_buy button').addClass('disabled')
        $('#total_input_market_buy').val('')
        $('.form_market_buy button').text('ثبت سفارش')
       
    }else{

        if( $('#price_input_market_buy').val().length <= 0){
            $('#amount_market_buy').val('')
            $('.form_market_buy button').attr('disabled','disabled')
            $('.form_market_buy button').addClass('disabled')
            $('.form_market_buy button').text('ابتدا قیمت واحد را وارد نمایید')
      
        }else {
            $('#amount_market_buy').val('')
            let price = parseFloat($('#price_input_market_buy').val().replace(/,/g, ''))
            $('#amount_market_buy').val((Math.round(number * price)).toLocaleString('en-US'))
            let amount_market_buy = parseFloat($('#amount_market_buy').val().replace(/,/g, ''))
            if(amount_market_buy <= balance_wallet_market){
                $('.form_market_buy button').removeAttr('disabled')
                $('.form_market_buy button').removeClass('disabled')
                $('.form_market_buy button').text('ثبت سفارش')
            }else{
                $('.form_market_buy button').attr('disabled','disabled')
                $('.form_market_buy button').addClass('disabled')
                $('.form_market_buy button').text('موجودی کافی نیست')
            }
        }
        
    }

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if($(this).val().length <=0){

            $('.form_market_buy button').attr('disabled','disabled')
            $('.form_market_buy button').addClass('disabled')
            $('#price_input_market_buy').val('')
            $('#amount_market_buy').val('')
            $('.form_market_buy button').text('ثبت سفارش')
           
        }else{
           
            if( $('#price_input_market_buy').val().length <= 0){
                $('#amount_market_buy').val('')
                $('.form_market_buy button').attr('disabled','disabled')
                $('.form_market_buy button').addClass('disabled')
                $('.form_market_buy button').text('ابتدا قیمت واحد را وارد نمایید')
          
            }else {
                $('#amount_market_buy').val('')
                let price = parseFloat($('#price_input_market_buy').val().replace(/,/g, ''))
                $('#amount_market_buy').val((Math.round(number * price)).toLocaleString('en-US'))
                let amount_market_buy = parseFloat($('#amount_market_buy').val().replace(/,/g, ''))
                if(amount_market_buy <= balance_wallet_market){
                    $('.form_market_buy button').removeAttr('disabled')
                    $('.form_market_buy button').removeClass('disabled')
                    $('.form_market_buy button').text('ثبت سفارش')
                }else{
                    $('.form_market_buy button').attr('disabled','disabled')
                    $('.form_market_buy button').addClass('disabled')
                    $('.form_market_buy button').text('موجودی کافی نیست')
                }
            }
        }
    }

    if(persianAlphabetAndWhiteSpace.test(event.key)){  
        
        if( $('#price_input_market_buy').val().length <= 0){
            $('#amount_market_buy').val('')
            $('.form_market_buy button').attr('disabled','disabled')
            $('.form_market_buy button').addClass('disabled')
            $('.form_market_buy button').text('ابتدا قیمت واحد را وارد نمایید')
      
        }else {
            $('#amount_market_buy').val('')
            let price = parseFloat($('#price_input_market_buy').val().replace(/,/g, ''))
            $('#amount_market_buy').val((Math.round(number * price)).toLocaleString('en-US'))
            let amount_market_buy = parseFloat($('#amount_market_buy').val().replace(/,/g, ''))
            if(amount_market_buy <= balance_wallet_market){
                $('.form_market_buy button').removeAttr('disabled')
                $('.form_market_buy button').removeClass('disabled')
                $('.form_market_buy button').text('ثبت سفارش')
            }else{
                $('.form_market_buy button').attr('disabled','disabled')
                $('.form_market_buy button').addClass('disabled')
                $('.form_market_buy button').text('موجودی کافی نیست')
            }
        }
             
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

})

$('#select_type_market_buy').change(function(){
    let val_select = $('#select_type_market_buy').val();
    $('#'+val_select+'_content_buy').css({'display' : 'block'})
    $('#'+val_select+'_content_buy').siblings('div').css({'display' : 'none'})
})
$('#select_type_market_sell').change(function(){
    let val_select = $('#select_type_market_sell').val();
    $('#'+val_select+'_content_sell').css({'display' : 'block'})
    $('#'+val_select+'_content_sell').siblings('div').css({'display' : 'none'})
})