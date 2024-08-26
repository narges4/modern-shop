
$("input#amount").keyup(function(event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);
    var vCoin = event.key; 
    var price_IR = parseFloat($('.currency_buy .price-buy-irt').text().replace(/,/g, ''))
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    var fee_currency_buy
    var procent_fee_currency_buy = parseFloat($('.procent_fee_currency_buy').text().replace(/,/g, ''))
    var lower_fee_currency_buy = parseFloat($('.lower_fee_currency_buy').text().replace(/,/g, ''))
    var upper_fee_currency_buy = parseFloat($('.upper_fee_currency_buy').text().replace(/,/g, ''))
    var procent_fee_ 


    if($(this).val().length  > 0){
        procent_fee_ = ((number * procent_fee_currency_buy) / 100)
        if(procent_fee_currency_buy <= 0){
            fee_currency_buy = 0
        }else{
            if(procent_fee_ > upper_fee_currency_buy){
                fee_currency_buy = upper_fee_currency_buy
            }else if(procent_fee_ < lower_fee_currency_buy){
                fee_currency_buy = lower_fee_currency_buy
            }else{
                fee_currency_buy = procent_fee_
            }
        }
    }else{
        procent_fee_ = 0
        fee_currency_buy = 0
    }
    fee_currency_buy = Math.round(fee_currency_buy * 100) / 100;

    $('.fee_currency_buy').text(parseFloat(fee_currency_buy).toLocaleString('en-US', {maximumFractionDigits:2}))

    if($(this).val().length <=0){

        $('#amount_payable').val('')
        $('.received_number_buyCurrency').text(0)
        $('.form_currency_buy button').attr('disabled','disabled')
        $('.form_currency_buy .error_currency').css({'display' : 'none'})
       
    }else{
        
        $('#amount_payable').val(((number + fee_currency_buy) * price_IR).toLocaleString('en-US', {maximumFractionDigits:3}))
        $('.received_number_buyCurrency').text((number).toLocaleString('en-US', {maximumFractionDigits:3}))
        buy_currency(number)
    }

    buy_currency(number)

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if($(this).val().length <=0){

            $('#amount_payable').val((price_IR.toLocaleString('en-US')))
            $('.received_number_buyCurrency').text(0)
            $('.form_currency_buy button').attr('disabled','disabled')
            $('.form_currency_buy .error_currency').css({'display' : 'none'})
           
        }else{
            
            $('#amount_payable').val(((number + fee_currency_buy) * price_IR).toLocaleString('en-US', {maximumFractionDigits:3}))
            $('.received_number_buyCurrency').text((number).toLocaleString('en-US', {maximumFractionDigits:3}))
            buy_currency(number , fee_currency_buy)
        }
    }

    if(persianAlphabetAndWhiteSpace.test(event.key)){  
        $('#amount_payable').val(((number + fee_currency_buy) * price_IR).toLocaleString('en-US', {maximumFractionDigits:3}))
        $('.received_number_buyCurrency').text((number).toLocaleString('en-US', {maximumFractionDigits:3})) 
        buy_currency(number , fee_currency_buy)         
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

})
$("#amount_payable").keyup(function(event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);
    var vCoin = event.key;    
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    var amount_currency = parseFloat($('input#amount').val().replace(/,/g, ''))

    var fee_currency_buy 
    var price_IR = parseFloat($('.currency_buy .price-buy-irt').text().replace(/,/g, ''))
    var procent_fee_currency_buy = parseFloat($('.procent_fee_currency_buy').text().replace(/,/g, ''))
    var lower_fee_currency_buy = parseFloat($('.lower_fee_currency_buy').text().replace(/,/g, ''))
    var upper_fee_currency_buy = parseFloat($('.upper_fee_currency_buy').text().replace(/,/g, ''))
    var amount_withoutFee  

    function chekedFee(T , l , u , fee){
        let P = 1 + fee / 100
        let amount = T / P
        F = fee * amount / 100
        F = Math.round(F * 100) / 100;

        if(fee <= 0){

        }else{
            if(F < l){
                F = l
                amount = T - F
            }else if(F > u){
                F = u
                amount = T - F
            }
        }
     
        fee_currency_buy = Math.round(F * 100) / 100
        if(amount <= 0){
            amount_withoutFee = 0
        }else{
            amount_withoutFee = Math.round(amount * 100) / 100
        }

        if(F <= 0){
            $('.fee_currency_buy').text(parseFloat(0).toLocaleString('en-US', {maximumFractionDigits:2}))
           
        }else{
            $('.fee_currency_buy').text(parseFloat(fee_currency_buy).toLocaleString('en-US', {maximumFractionDigits:2}))
        }

    }

    if($("#amount_payable").val().length > 0){
        let total_fee_amount = (number / price_IR)
        chekedFee(total_fee_amount ,lower_fee_currency_buy , upper_fee_currency_buy , procent_fee_currency_buy )
    }else{

    }

    if($(this).val().length <=0){

        $('input#amount').val('')
        $('.received_number_buyCurrency').text(0)
        $('.form_currency_buy button').attr('disabled','disabled')
        $('.form_currency_buy .error_currency').css({'display' : 'none'})
        $('.fee_currency_buy').text(0)
       
    }else{
        $('input#amount').val(amount_withoutFee) 
        $('.received_number_buyCurrency').text(amount_withoutFee)
        buy_currency(amount_withoutFee)
    }

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if($(this).val().length <=0){

            $('input#amount').val('')
            $('.received_number_buyCurrency').text(0)
            $('.form_currency_buy button').attr('disabled','disabled')
            $('.form_currency_buy .error_currency').css({'display' : 'none'})
            $('.fee_currency_buy').text(0)
           
        }else{
            $('input#amount').val(amount_withoutFee)
            $('.received_number_buyCurrency').text(amount_withoutFee)
            buy_currency(amount_withoutFee)
        }
    }

    if(persianAlphabetAndWhiteSpace.test(event.key)){  
        $('input#amount').val(amount_withoutFee)  
        $('.received_number_buyCurrency').text(amount_withoutFee)
        buy_currency(amount_withoutFee)
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

})
$("input#amount_sell").keyup(function(event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);
    var vCoin = event.key; 
    var price_IR = parseFloat($('.currency_sell .price-sell-irt').text().replace(/,/g, ''))
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));

    var fee_currency_sell 
    var procent_fee_currency_sell  = parseFloat($('.procent_fee_currency_sell ').text().replace(/,/g, ''))
    var lower_fee_currency_sell  = parseFloat($('.lower_fee_currency_sell ').text().replace(/,/g, ''))
    var upper_fee_currency_sell  = parseFloat($('.upper_fee_currency_sell ').text().replace(/,/g, ''))
    var procent_fee_ 

    if($(this).val().length  > 0){
        procent_fee_ = ((number * procent_fee_currency_sell ) / 100)
        if(procent_fee_currency_sell  <= 0){
            fee_currency_sell  = 0
        }else{
            if(procent_fee_ > upper_fee_currency_sell ){
                fee_currency_sell  = upper_fee_currency_sell 
            }else if(procent_fee_ < lower_fee_currency_sell ){
                fee_currency_sell  = lower_fee_currency_sell 
            }else{
                fee_currency_sell  = procent_fee_
            }
        }
    }else{
        procent_fee_ = 0
        fee_currency_sell  = 0
    }
    fee_currency_sell = Math.round(fee_currency_sell * 100) / 100;

    $('.fee_currency_sell ').text(parseFloat(fee_currency_sell).toLocaleString('en-US', {maximumFractionDigits:2}))
    if($(this).val().length <=0){

        $('#amount_sell_payable').val(price_IR.toLocaleString('en-US'))
        $('.form_currency_sell button').attr('disabled','disabled')
        $('.form_currency_sell .error_currency').css({'display' : 'none'})
       
    }else{
        sell_currency(number)
        let recive = (parseFloat((number - fee_currency_sell) * price_IR)).toLocaleString('en-US', {maximumFractionDigits:3})

        if(recive <= "0"){
            $('#amount_sell_payable').val(0)
        }else{
            $('#amount_sell_payable').val(recive)
        }
        
    }

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if($(this).val().length <=0){

            $('#amount_sell_payable').val(price_IR.toLocaleString('en-US'))
            $('.form_currency_sell button').attr('disabled','disabled')
            $('.form_currency_sell .error_currency').css({'display' : 'none'})
           
        }else{
            sell_currency(number)
           let recive = (parseFloat((number - fee_currency_sell) * price_IR)).toLocaleString('en-US', {maximumFractionDigits:3})
        if(recive <= "0"){
            $('#amount_sell_payable').val(0)
        }else{
            $('#amount_sell_payable').val(recive)
        }
    
           
        }
    }

    if(persianAlphabetAndWhiteSpace.test(event.key)){  
        sell_currency(number)
       let recive = (parseFloat((number - fee_currency_sell) * price_IR)).toLocaleString('en-US', {maximumFractionDigits:3})
        if(recive <= "0"){
            $('#amount_sell_payable').val(0)
        }else{
            $('#amount_sell_payable').val(recive)
        }                
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

})
$("input#amount_sell_payable").keyup(function(event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);
    var vCoin = event.key; 
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));

    var amount_currency = parseFloat($('input#amount_sell').val().replace(/,/g, ''))

    var fee_currency_sell 
    var price_IR = parseFloat($('.currency_sell .price-sell-irt').text().replace(/,/g, ''))
    var procent_fee_currency_sell = parseFloat($('.procent_fee_currency_sell').text().replace(/,/g, ''))
    var lower_fee_currency_sell = parseFloat($('.lower_fee_currency_sell').text().replace(/,/g, ''))
    var upper_fee_currency_sell = parseFloat($('.upper_fee_currency_sell').text().replace(/,/g, ''))
    var amount_withoutFee 
    function chekedFee(T , l , u , fee){
        let P = 1 - fee / 100
        let amount = T / P
        let F = fee * amount / 100
        F = Math.round(F * 100) / 100;
        if(fee <= 0){

        }else{
            if(F < l){
                F = l
                amount = T + F
            }else if(F > u){
                F = u
                amount = T + F
            }
        }

        
        fee_currency_sell = Math.round(F * 100) / 100
        if(amount <= 0){
            amount_withoutFee = 0
        }else{
            amount_withoutFee = Math.round(amount * 100) / 100
        }

        if(F <= 0){
            $('.fee_currency_sell').text(parseFloat(0).toLocaleString('en-US', {maximumFractionDigits:2}))
           
        }else{
            $('.fee_currency_sell').text(parseFloat(fee_currency_sell).toLocaleString('en-US', {maximumFractionDigits:2}))
        }

    }

    if($("input#amount_sell_payable").val().length > 0){
        let total_fee_amount = (number / price_IR)
        chekedFee(total_fee_amount ,lower_fee_currency_sell , upper_fee_currency_sell , procent_fee_currency_sell )
    }else{

    }
    

    $('.fee_currency_sell').text(parseFloat(fee_currency_sell).toLocaleString('en-US', {maximumFractionDigits:2}))


    if($(this).val().length <=0){

        $('input#amount_sell').val('')
        $('.form_currency_sell button').attr('disabled','disabled')
        $('.form_currency_sell .error_currency').css({'display' : 'none'})
        $('.fee_currency_sell').text(0)
       
    }else{
        $('input#amount_sell').val(amount_withoutFee) 
        sell_currency(number)
    }

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if($(this).val().length <=0){

            $('input#amount_sell').val('')
            $('.form_currency_sell button').attr('disabled','disabled')
            $('.form_currency_sell .error_currency').css({'display' : 'none'})
            $('.fee_currency_sell').text(0)
           
        }else{
            $('input#amount_sell').val(amount_withoutFee) 
            sell_currency(number)
        }
    }

    if(persianAlphabetAndWhiteSpace.test(event.key)){  
        $('input#amount_sell').val(amount_withoutFee)    
        sell_currency(number)   
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

})

$( "#paymentMethodD").change(function(){
    let number = parseFloat($("input#amount").val().replace(/,/g, ''))
    if($("input#amount").val().length <= 0){
        buy_currency(0)
    }else{
        buy_currency(number)
    }
})


function buy_currency(number){
    let min_buy = parseFloat($('.min_buy_currency').text().replace(/,/g, ''))
    var wallet_balance = parseFloat($('.wallet_balance').text().replace(/,/g, ''))
    var fee_currency_buy = parseFloat($('.fee_currency_buy').text().replace(/,/g, ''))
    var amount_payable = parseFloat($('#amount_payable').val().replace(/,/g, ''))
    var paymentMethod = $('#paymentMethodD').val()
    if(number >= min_buy){
        if(paymentMethod == "gateWay"){
            if(amount_payable > 100000000){
                $('.form_currency_buy button').attr('disabled','disabled')
                $('.form_currency_buy .error_currency').css({'display' : 'block'})
                $('.form_currency_buy .error_currency p').text('حداکثر مبلغ پرداخت از طریق درگاه بانکی 100,000,000 تومان است')
            }else{
                $('.form_currency_buy button').removeAttr('disabled')
                $('.form_currency_buy .error_currency').css({'display' : 'none'})
            }

        }else if(paymentMethod == "Wallet"){
            if(wallet_balance < amount_payable){
                $('.form_currency_buy button').attr('disabled','disabled')
                $('.form_currency_buy .error_currency').css({'display' : 'block'})
                $('.form_currency_buy .error_currency p').text('موجودی کیف پول کافی نیست')
            }else{
                $('.form_currency_buy button').removeAttr('disabled')
                $('.form_currency_buy .error_currency').css({'display' : 'none'})
            }
        }else{
            $('.form_currency_buy button').removeAttr('disabled')
            $('.form_currency_buy .error_currency').css({'display' : 'none'})
        }
    }
    else{
        $('.form_currency_buy button').attr('disabled','disabled')
        $('.form_currency_buy .error_currency').css({'display' : 'block'})
        $('.form_currency_buy .error_currency p').text('میزان وارد شده کمتر از حداقل میزان قابل خرید است.')
    }
    if(number <= 0 || number.length <= 0 || !number || number == NaN ){
        $('.received_number_buyCurrency').text(0)
    }else{
        $('.received_number_buyCurrency').text((number).toLocaleString('en-US', {maximumFractionDigits:3})) 
    }
    
}
function sell_currency(number){
    let min_buy = parseFloat($('.min_sell_currency').text().replace(/,/g, ''))
    var wallet_sell_balance = parseFloat($('.wallet_sell_balance').text().replace(/,/g, ''))
    if(number >= min_buy){
        if(wallet_sell_balance < number){
            $('.form_currency_sell button').attr('disabled','disabled')
            $('.form_currency_sell .error_currency').css({'display' : 'block'})
            $('.form_currency_sell .error_currency p').text('موجودی کیف پول کافی نیست')
        }else{
            $('.form_currency_sell button').removeAttr('disabled')
            $('.form_currency_sell .error_currency').css({'display' : 'none'})
        }
    }
    else{
        $('.form_currency_sell button').attr('disabled','disabled')
        $('.form_currency_sell .error_currency').css({'display' : 'block'})
        $('.form_currency_sell .error_currency p').text('میزان وارد شده کمتر از حداقل میزان قابل فروش است.')
    }
}

function received_number_buyCurrency(total , fee){
    var price_IR = parseFloat($('.currency_buy .price-buy-irt').text().replace(/,/g, ''))
    total = parseFloat(total)
    let number = parseFloat((total / price_IR) - fee)
    if(number <= 0 || number.length <= 0 || !number || number == NaN){
        $("input#amount").val(0)
    }else{
        $("input#amount").val(number.toLocaleString('en-US', {maximumFractionDigits:3}))
    }
    buy_currency(number)
}
function received_number_sellCurrency(total , fee){
   
    var price_IR = parseFloat($('.currency_sell .price-sell-irt').text().replace(/,/g, ''))
    total = parseFloat(total)
    let number = parseFloat((total / price_IR) + fee)
    if(number <=0 || number.length <= 0 || !number || number == NaN ){
        $("input#amount_sell").val(0)
    }else{
        $("input#amount_sell").val(number.toLocaleString('en-US', {maximumFractionDigits:3}))
    }
    sell_currency(number)
}


$('.currency_buy .selected_percentage p').click(function(){
    
    var fee_currency_buy = 0
    var procent_fee_currency_buy = parseFloat($('.procent_fee_currency_buy').text().replace(/,/g, ''))
    var lower_fee_currency_buy = parseFloat($('.lower_fee_currency_buy').text().replace(/,/g, ''))
    var upper_fee_currency_buy = parseFloat($('.upper_fee_currency_buy').text().replace(/,/g, ''))
    var amount_currency = parseFloat($('input#amount').val().replace(/,/g, ''))
    var procent_fee_ = 0

    if($("#amount_payable").val().length > 0){
        if($('input#amount').val().length  > 0){
            procent_fee_ = ((amount_currency * procent_fee_currency_buy) / 100)
            if(procent_fee_currency_buy <= 0){
                fee_currency_buy = 0
               
            }else{
                if(procent_fee_ > upper_fee_currency_buy){
                    fee_currency_buy = upper_fee_currency_buy
                }else if(procent_fee_ < lower_fee_currency_buy){
                    fee_currency_buy = lower_fee_currency_buy
                }else{
                    fee_currency_buy = procent_fee_
                }
            }
        }else{
            procent_fee_ = 0
            fee_currency_buy = 0
        }
    }else{

    }
   

    $('.fee_currency_buy').text(parseFloat(fee_currency_buy).toLocaleString('en-US', {maximumFractionDigits:2}))

    var wallet_balance = parseFloat($('.wallet_balance').text().replace(/,/g, ''))
    let percentage_buy_currency =$(this).text().replace(/%/g, '')
    $('#amount_payable').val((Math.floor((wallet_balance * percentage_buy_currency)/100)).toLocaleString('en-US'))
   
    received_number_buyCurrency(parseFloat($('#amount_payable').val().replace(/,/g, '')) , fee_currency_buy)
})
$('.currency_sell .selected_percentage p').click(function(){
    var wallet_sell_balance = parseFloat($('.wallet_sell_balance').text().replace(/,/g, ''))
    let percentage_sell_currency =$(this).text().replace(/%/g, '')
   
    var amount_currency = parseFloat($('input#amount_sell').val().replace(/,/g, ''))

    var fee_currency_sell = 0
    var procent_fee_currency_sell = parseFloat($('.procent_fee_currency_sell').text().replace(/,/g, ''))
    var lower_fee_currency_sell = parseFloat($('.lower_fee_currency_sell').text().replace(/,/g, ''))
    var upper_fee_currency_sell = parseFloat($('.upper_fee_currency_sell').text().replace(/,/g, ''))
    var procent_fee_ = 0
    

    if($("input#amount_sell_payable").val().length > 0){
        if($('input#amount_sell').val().length  > 0){
            procent_fee_ = ((amount_currency * procent_fee_currency_sell) / 100)
           
            if(procent_fee_currency_sell <= 0){
                fee_currency_sell = 0
               
            }else{
                if(procent_fee_ > upper_fee_currency_sell){
                    fee_currency_sell = upper_fee_currency_sell
                }else if(procent_fee_ < lower_fee_currency_sell){
                    fee_currency_sell = lower_fee_currency_sell
                }else{
                    fee_currency_sell = procent_fee_
                }
            }
        }else{
            procent_fee_ = 0
            fee_currency_sell = 0
        }
    }else{

    }

    $('.fee_currency_sell').text(parseFloat(fee_currency_sell).toLocaleString('en-US', {maximumFractionDigits:2}))

    var price_IR = parseFloat($('.currency_sell .price-sell-irt').text().replace(/,/g, ''))
    $('#amount_sell').val((Math.floor((wallet_sell_balance * percentage_sell_currency)/100)).toLocaleString('en-US'))
    var number = parseFloat($('#amount_sell').val().replace(/,/g, ''));
    let recive = (parseFloat((number - fee_currency_sell) * price_IR)).toLocaleString('en-US')

    if(recive <= "0" ){
        $('#amount_sell_payable').val(0)
    }else{
        $('#amount_sell_payable').val(recive)
    }
    
    sell_currency(number)
})


$("input#amount_sell_PM_SV").keyup(function(event) {
    $('.form_currency_sell button').removeAttr('disabled')
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);
    var vCoin = event.key; 
    var price_IR = parseFloat($('.currency_sell .price-sell-irt').text().replace(/,/g, ''))
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    var fee_currency_sell 
    var procent_fee_currency_sell  = parseFloat($('.procent_fee_currency_sell ').text().replace(/,/g, ''))
    var lower_fee_currency_sell  = parseFloat($('.lower_fee_currency_sell ').text().replace(/,/g, ''))
    var upper_fee_currency_sell  = parseFloat($('.upper_fee_currency_sell ').text().replace(/,/g, ''))
    var procent_fee_ 

    if($(this).val().length  > 0){
        procent_fee_ = ((number * procent_fee_currency_sell ) / 100)
        if(procent_fee_currency_sell  <= 0){
            fee_currency_sell  = 0
        }else{
            if(procent_fee_ > upper_fee_currency_sell ){
                fee_currency_sell  = upper_fee_currency_sell 
            }else if(procent_fee_ < lower_fee_currency_sell ){
                fee_currency_sell  = lower_fee_currency_sell 
            }else{
                fee_currency_sell  = procent_fee_
            }
        }
    }else{
        procent_fee_ = 0
        fee_currency_sell  = 0
    }
    fee_currency_sell = Math.round(fee_currency_sell * 100) / 100;

    $('.fee_currency_sell ').text(parseFloat(fee_currency_sell).toLocaleString('en-US', {maximumFractionDigits:2}))
    let recivee = (parseFloat((number - fee_currency_sell) * price_IR)).toLocaleString('en-US', {maximumFractionDigits:3})
    if(recivee <= "0" || recivee.length <= 0 || !recivee || recivee == "NaN"){
        $('#amount_sell_payable_PM_SV').val(0)
    }else{
        $('#amount_sell_payable_PM_SV').val(recivee)
    }
    

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if($(this).val().length <=0){

            $('#amount_sell_payable_PM_SV').val((price_IR).toLocaleString('en-US'))
            $('.form_currency_sell button').removeAttr('disabled')
            $('.form_currency_sell .error_currency').css({'display' : 'none'})
           
        }else{
          
           let recive = (parseFloat((number - fee_currency_sell) * price_IR)).toLocaleString('en-US', {maximumFractionDigits:3})
    if(recive <= "0" || recivee.length <= 0 || !recivee || recivee == "NaN"){
        $('#amount_sell_payable_PM_SV').val(0)
    }else{
        $('#amount_sell_payable_PM_SV').val(recive)
    }
    
           
        }
    }

    if(persianAlphabetAndWhiteSpace.test(event.key)){  

       let recive = (parseFloat((number - fee_currency_sell) * price_IR)).toLocaleString('en-US', {maximumFractionDigits:3})
    if(recive <= "0" || recivee.length <= 0 || !recivee || recivee == "NaN"){
        $('#amount_sell_payable_PM_SV').val(0)
    }else{
        $('#amount_sell_payable_PM_SV').val(recive)
    }                
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

})
$("input#amount_sell_payable_PM_SV").keyup(function(event) {
    $('.form_currency_sell button').removeAttr('disabled')
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);
    var vCoin = event.key; 
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    var price_IR = parseFloat($('.currency_sell .price-sell-irt').text().replace(/,/g, ''))

    var amount_currency = parseFloat($('input#amount_sell_PM_SV').val().replace(/,/g, ''))

    var fee_currency_sell 
    var procent_fee_currency_sell = parseFloat($('.procent_fee_currency_sell').text().replace(/,/g, ''))
    var lower_fee_currency_sell = parseFloat($('.lower_fee_currency_sell').text().replace(/,/g, ''))
    var upper_fee_currency_sell = parseFloat($('.upper_fee_currency_sell').text().replace(/,/g, ''))
    var amount_withoutFee 
    function chekedFee(T , l , u , fee){
        let P = 1 - fee / 100
        let amount = T / P
        let F = fee * amount / 100
        F = Math.round(F * 100) / 100;

        if(fee <= 0){

        }else{
            if(F < l){
                F = l
                amount = T + F
            }else if(F > u){
                F = u
                amount = T + F
            }
        }
        
        fee_currency_sell = Math.round(F * 100) / 100
        if(amount <= 0 || amount.length <= 0 || !amount || amount == "NaN"){
            amount_withoutFee = 0
        }else{
            amount_withoutFee = Math.round(amount * 100) / 100
        }

        if(F <= 0){
            $('.fee_currency_sell').text(parseFloat(0).toLocaleString('en-US', {maximumFractionDigits:2}))
           
        }else{
            $('.fee_currency_sell').text(parseFloat(fee_currency_sell).toLocaleString('en-US', {maximumFractionDigits:2}))
        }

    }
    

    if($("input#amount_sell_payable_PM_SV").val().length > 0){
        let total_fee_amount = (number / price_IR)
        chekedFee(total_fee_amount ,lower_fee_currency_sell , upper_fee_currency_sell , procent_fee_currency_sell )
    }else{

    }

    $('.fee_currency_sell').text(parseFloat(fee_currency_sell).toLocaleString('en-US', {maximumFractionDigits:2}))

   
    // let total = parseFloat((number / price_IR) - fee_currency_sell)
    // let min_buy = parseFloat($('.min_sell_currency').text().replace(/,/g, ''))

    if($(this).val().length <=0){
        $("input#amount_sell_PM_SV").val(0)
    }else{
        $("input#amount_sell_PM_SV").val(amount_withoutFee.toLocaleString('en-US', {maximumFractionDigits:3}))
        sell_currency(number)
    }

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if($(this).val().length <=0){
            $('.fee_currency_sell').text(0)
            $('input#amount_sell_PM_SV').val('')
            $('.form_currency_sell button').removeAttr('disabled')
            $('.form_currency_sell .error_currency').css({'display' : 'none'})
           
        }
    }

    if(persianAlphabetAndWhiteSpace.test(event.key)){  
       
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

})
$('.currency_sell .selected_percentage_PM_SV p').click(function(){
    var wallet_sell_balance = parseFloat($('.wallet_sell_balance').text().replace(/,/g, ''))
    let percentage_sell_currency =$(this).text().replace(/%/g, '')
   
    var amount_currency = parseFloat($('input#amount_sell_PM_SV').val().replace(/,/g, ''))

    var fee_currency_sell =0
    var procent_fee_currency_sell = parseFloat($('.procent_fee_currency_sell').text().replace(/,/g, ''))
    var lower_fee_currency_sell = parseFloat($('.lower_fee_currency_sell').text().replace(/,/g, ''))
    var upper_fee_currency_sell = parseFloat($('.upper_fee_currency_sell').text().replace(/,/g, ''))
    var procent_fee_ = 0
    

    if($("input#amount_sell_payable_PM_SV").val().length > 0){
        if($('input#amount_sell_PM_SV').val().length  > 0){
            procent_fee_ = ((amount_currency * procent_fee_currency_sell) / 100)
           
            if(procent_fee_currency_sell <= 0){
                fee_currency_sell = 0
               
            }else{
                if(procent_fee_ > upper_fee_currency_sell){
                    fee_currency_sell = upper_fee_currency_sell
                }else if(procent_fee_ < lower_fee_currency_sell){
                    fee_currency_sell = lower_fee_currency_sell
                }else{
                    fee_currency_sell = procent_fee_
                }
            }
        }else{
            procent_fee_ = 0
            fee_currency_sell = 0
        }
    }else{

    }

    $('.fee_currency_sell').text(parseFloat(fee_currency_sell).toLocaleString('en-US', {maximumFractionDigits:2}))


    var price_IR = parseFloat($('.currency_sell .price-sell-irt').text().replace(/,/g, ''))
    $('#amount_sell_PM_SV').val(((wallet_sell_balance * percentage_sell_currency)/100).toLocaleString('en-US'))
    var number = parseFloat($('#amount_sell_PM_SV').val().replace(/,/g, ''));
    let recive = (parseFloat((number - fee_currency_sell) * price_IR)).toLocaleString('en-US')
   
    if(recive <= "0" ){
        $('#amount_sell_payable_PM_SV').val(0)
    }else{
        $('#amount_sell_payable_PM_SV').val(recive)
    }
    
})
 