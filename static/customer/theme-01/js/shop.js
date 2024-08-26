let URL_BUY = $('.calc-card .coin-1 .url_buy').text()
let URL_SELL = $('.calc-card .coin-1 .url_sell').text()
let URL_DETAIL = $('.calc-card .coin-1 .url_detail').text()
let ACTIVE_BUY = $('.calc-card .coin-1 .activate-buy').text()
let ACTIVE_SELL = $('.calc-card .coin-1 .activate-sell').text()
$('.btn-clc-coin-card a.buy').attr("href" , URL_BUY)
$('.btn-clc-coin-card a.sell').attr("href" , URL_SELL)
$('.btn-clc-coin-card a.viw_detail').attr("href" , URL_DETAIL)

if(ACTIVE_BUY == 'false'){
    $('.btn-clc-coin-card .buy').addClass('disabled')
}else if(ACTIVE_BUY == 'true'){
    $('.btn-clc-coin-card .buy').removeClass('disabled')
}

if(ACTIVE_SELL == 'false'){
    $('.btn-clc-coin-card .sell').addClass('disabled')
}else if(ACTIVE_SELL == 'true'){
    $('.btn-clc-coin-card .sell').removeClass('disabled')
}

$('.calc-card .coin-1').click(function(){

    $(this).next().slideToggle();
    $(this).children('i').toggleClass('rotated')
})

$('.currency-drop-down-coin-1 .item').click(function(){

    $('.input-price-coin-1 input').val('')
    
    let image = $(this).children('img').attr("src");
    let nameFa = $(this).children('span.name-fa').text();
    let nameEn = $(this).children('span.name-en').text();
    let price_buy = $(this).children('span.price-buy').text();
    let price_sell = $(this).children('span.price-sell').text();
    let activate_buy = $(this).children('span.activate-buy').text();
    let activate_sell = $(this).children('span.activate-sell').text();
    let url_buy = $(this).children('span.url_buy').text();
    let url_sell = $(this).children('span.url_sell').text();
    let url_detail = $(this).children('span.url_detail').text();


    let parentItem = $(this).parent();

    parentItem.prev().children('img').attr("src" ,image )
    parentItem.prev().children('span.name-fa').text(nameFa)
    parentItem.prev().children('span.name-en').text(nameEn)
    parentItem.prev().children('span.price-buy').text(price_buy)
    parentItem.prev().children('span.price-sell').text(price_sell)
    parentItem.prev().children('span.activate-sell').text(activate_sell)
    parentItem.prev().children('span.activate-buy').text(activate_buy)
    parentItem.prev().children('span.url_buy').text(url_buy)
    parentItem.prev().children('span.url_sell').text(url_sell)
    parentItem.prev().children('span.url_detail').text(url_detail)

    $('.btn-clc-coin-card a.buy').attr("href" , url_buy)
    $('.btn-clc-coin-card a.sell').attr("href" , url_sell)
    $('.btn-clc-coin-card a.viw_detail').attr("href" , url_detail)


    if(activate_buy == 'false'){
        $('.btn-clc-coin-card .buy').addClass('disabled')
    }else if(activate_buy == 'true'){
        $('.btn-clc-coin-card .buy').removeClass('disabled')
    }

    if(activate_sell == 'false'){
        $('.btn-clc-coin-card .sell').addClass('disabled')
    }else if(activate_sell == 'true'){
        $('.btn-clc-coin-card .sell').removeClass('disabled')
    }



    $('.show-price-buy h6').text(addCommas(price_buy))
    $('.show-price-sell h6').text(addCommas(price_sell));

    
    parentItem.slideToggle()
})

$("#input_shop_keypress").keyup(function(event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);


    var vCoin = event.key; 
    var totalCoin = ($(this).val() + vCoin).slice(0, -1);


    var pric_buy_eCoin = $('.coin-1').children('span.price-buy').text();
    var pric_sell_eCoin = $('.coin-1').children('span.price-sell').text();

    if (event.key == 'Backspace' || event.key == 'Delete') {
        let input_shop_val = $('#input_shop_keypress').val();
        if($('#input_shop_keypress').val().length <=0){
            $('.show-price-buy h6').text(addCommas(parseFloat(pric_buy_eCoin) * 1))
            $('.show-price-sell h6').text(addCommas(parseFloat(pric_sell_eCoin) * 1));
        }else{
            $('.show-price-buy h6').text(addCommas(parseFloat(pric_buy_eCoin) * input_shop_val))
            $('.show-price-sell h6').text(addCommas(parseFloat(pric_sell_eCoin) * input_shop_val));
        }

       

       
       
      
    }


    if(persianAlphabetAndWhiteSpace.test(event.key)){  

         
        $('.show-price-buy h6').text(addCommas(parseFloat(pric_buy_eCoin) * totalCoin))
        $('.show-price-sell h6').text(addCommas(parseFloat(pric_sell_eCoin) * totalCoin));
         
    }
    else if(!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && ! event.keyCode == 46){
        event.preventDefault();
    }

    });


$(document).on('keyup', '.input-search input', function() {
    var filter = $(this).val(), count = 0;
 
        $(".currency-drop-down-coin-1 .item , .currency-drop-convert-coin-1 .item , .currency-drop-convert-coin-2 .item").each(function(){
 
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
 
            } else {
                $(this).show();
                count++;
            }
        });
});

function addCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}