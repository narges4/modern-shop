
$('.content-transfer-convert .guide.guid_swap').html($('.convert-select-coin.convert-coin-1 span.guide_item').text())
$('.content-transfer-convert .guide.guid_transfer').html($('.convert-select-coin.transfer-coin span.guide_item').text())

$('.convert-select-coin').click(function () {
    $(this).siblings('.convert-drop-down').slideToggle();
})
$('.convert-drop-down .item').click(function () {
    let src = $(this).find('img').attr('src')
    let name = $(this).find('.name-fa').text()
    let symbol = $(this).find('.name-en').text()
    let symbol_input = $(this).find('.symbol').text()
    let price = $(this).find('.price').text()
    let fee = $(this).find('.fee-coin').text()
    let holding = $(this).find('.holding').text()
    let guide = $(this).find('.guide_item').text()

    $(this).parent('.convert-drop-down').siblings('.convert-select-coin').find('img').attr('src', src)
    $(this).parent('.convert-drop-down').siblings('.convert-select-coin').find('.name-fa').text(name)
    $(this).parent('.convert-drop-down').siblings('.convert-select-coin').find('.name-en').text(symbol)
    $(this).parent('.convert-drop-down').siblings('.convert-select-coin').find('.price').text(price)
    $(this).parent('.convert-drop-down').siblings('.convert-select-coin').find('.fee-coin').text(fee)
    $(this).parent('.convert-drop-down').siblings('.convert-select-coin').find('.holding').text(holding)
    $(this).parent('.convert-drop-down').siblings('.convert-select-coin').find('.symbol').text(symbol_input)
    $(this).parent('.convert-drop-down').siblings('.convert-select-coin').find('.guide_item').text(guide)
    $(this).parent('.convert-drop-down').siblings('input.value_input').val(symbol_input)


    if ($(this).parent('.convert-drop-down').hasClass("item_Convert_1")) {
        $('.item_Convert_2 .item').show()
        $('.item_Convert_2').find('#item2_' + symbol_input).hide()
    }
    // if ($(this).parent('.convert-drop-down').hasClass("item_Convert_2")) {
    //     $('.item_Convert_1 .item').show()
    //     $('.item_Convert_1').find('#item1_' + symbol_input).hide()
    // }


    $(this).parent('.convert-drop-down').slideToggle()
    $('.content-transfer-convert .guide').html(guide)

    $('.info-convert .amount-received').text('0');
    $('.info-convert .fee').text('0');
    $('.symbol-amount').text('');
    $('.input-convert .input-number').val('')
    $('.holding-currency').text($('.convert-coin-1 .holding').text())

    if ($('.convert-coin-1 .name-fa').text() == $('.convert-coin-2 .name-fa').text()) {
        $('.input-convert .input-number').attr({ 'disabled': 'disabled', "placeholder": "ارز انتخابی صحیح نیست" })
        $('.input-convert .btn-max').off("click");
        $('.input-convert .input-number').val('')
    } else if ($('.convert-coin-1 .name-fa').text() != $('.convert-coin-2 .name-fa').text()) {
        $('.input-convert .input-number').removeAttr('disabled')
        $('.input-convert .input-number').attr({ "placeholder": "0" })
        $('.input-convert .btn-max').bind("click", btn_max_holding());
    }
})

$(".convert input.input-number").keyup(function (event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);


    var vCoin = event.key;
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));

    var pric_coin_1 = parseFloat($('.convert-coin-1').children('span.price').text());
    var pric_coin_2 = parseFloat($('.convert-coin-2').children('span.price').text());
    var fee_coin = parseFloat($('.convert-coin-1').children('span.fee-coin').text());
    var symbol_amount_1 = $('.convert-coin-1').children('span.name-fa').text();
    var symbol_amount_2 = $('.convert-coin-2').children('span.name-fa').text();

    let amount = (number * pric_coin_1) / pric_coin_2;
    let total = (amount) < 0 ? 0 : (amount)
    if ($(".convert input.input-number").val().length <= 0) {
        $('.convert .info-convert .amount-received').text(0);
        $('.convert .info-convert .fee').text(0);
    } else {
        $('.convert .info-convert .amount-received').text(addCommas(total.toFixed(3)));
        $('.convert .info-convert .fee').text(addCommas(fee_coin));
        $('.convert .fee').siblings('span.symbol-amount').text(symbol_amount_1);
        $('.convert .amount-received').siblings('span.symbol-amount').text(symbol_amount_2);
    }

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if ($(".convert input.input-number").val().length <= 0) {
            $('.convert .info-convert .amount-received').text(0);
            $('.convert .info-convert .fee').text(0);
        } else {
            convert(number)
        }
    }


    if (persianAlphabetAndWhiteSpace.test(event.key)) {
        let amount = (number * pric_coin_1) / pric_coin_2;
        let total = (amount) < 0 ? 0 : (amount)
        $('.convert .info-convert .amount-received').text(addCommas(total.toFixed(3)));
        $('.convert .info-convert .fee').text(addCommas(fee_coin));
        $('.convert .fee').siblings('span.symbol-amount').text(symbol_amount_1);
        $('.convert .amount-received').siblings('span.symbol-amount').text(symbol_amount_2);

    }
    else if (!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && !event.keyCode == 46) {
        event.preventDefault();
    }

})


$(".transfer input.input-number").keyup(function (event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);


    var vCoin = event.key;
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));


    var pric_coin = parseFloat($('.transfer-coin').children('span.price').text().replace(/,/g, ''));
    var fee_coin = parseFloat($('.transfer-coin').children('span.fee-coin').text().replace(/,/g, ''));
    var symbol_amount = $('.transfer-coin').children('span.name-fa').text();


    let amount = (number * pric_coin);
    let total = amount

    if ($(".transfer input.input-number").val().length <= 0) {
        $('.transfer .info-convert .amount-received').text(0);
        $('.transfer .info-convert .fee').text(0);
    } else {
        $('.transfer .info-convert .amount-received').text(addCommas(total.toFixed(3)));
        $('.transfer .info-convert .fee').text(addCommas(fee_coin));
        $('.transfer .symbol-amount').text(symbol_amount);

    }

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if ($(".transfer input.input-number").val().length <= 0) {
            $('.transfer .info-convert .amount-received').text(0);
            $('.transfer .info-convert .fee').text(0);
        } else {
            let amount = (number * pric_coin);
            let total = amount
            $('.transfer .info-convert .amount-received').text(total.toLocaleString('en-US', { maximumFractionDigits: 3 }));
            $('.transfer .info-convert .fee').text(fee_coin.toLocaleString('en-US', { maximumFractionDigits: 3 }));
            $('.transfer .symbol-amount').text(symbol_amount);
        }
    }


    if (persianAlphabetAndWhiteSpace.test(event.key)) {
        let amount = (number * pric_coin);
        let total = amount
        $('.transfer .info-convert .amount-received').text(addCommas(total.toFixed(3)));
        $('.transfer .info-convert .fee').text(addCommas(fee_coin));
        $('.transfer .symbol-amount').text(symbol_amount);

    }
    else if (!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && !event.keyCode == 46) {
        event.preventDefault();
    }

})

$("#paymentMethod").change(function () {
    let number = parseFloat($(".input-buy-in-site input").val().replace(/,/g, ''))
    if ($(".input-buy-in-site input").val().length <= 0) {
        currency_buy(0)
    } else {
        currency_buy(number)
    }


})

$("#payment_type").change(function () {
    let balance = parseFloat($('.alert-harvest .balance').text().replace(/,/g, ''))
    let number = parseFloat($("#withdrawinput").val().replace(/,/g, ''))
    if ($("#withdrawinput").val().length <= 0) {
        harvest(0, balance)
    } else {
        harvest(number, balance)
    }



})

$('.select_network_withdraw').change(function () {
    let fee_network = parseFloat($(".select_network_withdraw option:selected").attr("data-feeNetwork"));
    $('.fee_currency_withdraw p span').text(fee_network)
    $('#btn_withdraw').attr("disabled", "disabled")
    $('#btn_withdraw').addClass("disabled")
    $('h6.no_balance_withdraw').addClass('d-none')
    $('#withdraw-handly-input').val('')
})
$('.select_network_withdraw_kucoin').change(function () {

    let info_wallet = $(this).find("option:selected").attr('data-wallet')
    let balance = $(this).find("option:selected").attr('data-balance')
    let fee_network = parseFloat($(".select_network_withdraw_kucoin option:selected").attr("data-feeNetwork"));
    let minimum_amount = parseFloat($(".select_network_withdraw_kucoin option:selected").attr("data-min"));
    let Net = $(this).find("option:selected").text()
    let symbol = $('.symcol_page').text()

    $('.fee_currency_withdraw p span').text(fee_network)
    $('.min-withdrow-PS-PM .amount span').text(minimum_amount)
    $('#btn_withdraw').attr("disabled", "disabled")
    $('#btn_withdraw').addClass("disabled")
    $('h6.no_balance_withdraw').addClass('d-none')
    $('#withdrow-PS-PM').val('')

    if (info_wallet === "True") {

        let theURL = `/customer/direct/wallet/${Net}/`
        $.ajax({
            type: "GET",
            url: theURL,
            data: {},
            success: function (data) {
                if (data.type == 'success') {
                    let tabel = []
                    if (data.count === "0") {
                        toastr.error("برای برداشت میبایست ابتدا کیف پول خود را ایجاد نمایید.");
                        setTimeout(() => {
                            window.location.replace(`/customer/direct/wallet/address/${symbol}/`)
                        }, 2500);
                    } else {

                        $('.table-deposit-wallet').show()
                        $('span.balance-PS-PM').empty()
                        $('span.balance-PS-PM').append(`<span class="icon"><i class="fas fa-spinner"></i></span>`)
                        $('.table_wallet_add').empty()
                        data.wallet.map(wallet => {

                            tabel.push(`
                                <tr role="button">
                                                        
                                    <td>
                                        <span>#${wallet.wallet_id}</span>
                                    </td>
                                    <td>
                                        <span>${wallet.title}</span>
                                    </td>
                                    <td onclick="show_address('${wallet.address}')">
                                        <span><i class="fas fa-desktop"></i></span>
                                    </td>

                                    <td class="balance"> 
                                    ${(wallet.is_default) ? (
                                    `
                                            <input type="hidden" class="form-control" placeholder=" : آدرس کیف پول" autocomplete="off" name="wallet_addres" id="wallet_addres" value="${wallet.wallet_id}">
                                                <span class="icon"><i class="fas fa-check color_green"></i></span>
                                                <span class="border_blue balance_withdraw_wallet hidden" onclick="get_balance(this , ${wallet.wallet_id} , event)">انتخاب</span>
                                                    
                                            `
                                ) : (
                                    `
                                            <span class="border_blue balance_withdraw_wallet" onclick="get_balance(this , ${wallet.wallet_id} , event)">انتخاب</span>
                                                    
                                            `
                                )
                                }
                                    
                                    </td>
                                </tr>
                                `)
                            if (wallet.is_default) {
                                let symbol = $('.symcol_page').text()
                                let theURL = `/customer/wallet/balance/${wallet.wallet_id}/${symbol}`
                                $.ajax({
                                    type: "GET",
                                    url: theURL,
                                    data: {},
                                    success: function (data) {
                                        if (data.type == 'success') {
                                            $('span.balance-PS-PM').empty()
                                            $('span.balance-PS-PM').text(data.balance)
                                        }

                                    }
                                });

                            }

                        })
                        $('.table_wallet_add').append(tabel)
                    }

                }

            }
        });
    } else {

        $('.table-deposit-wallet').hide()
        $('.balance-PS-PM').text((balance))
    }

})
$('.select_network_qrCode').change(function () {
    let qrCode = $(".select_network_qrCode option:selected").attr("data-qrCode");
    let value = $(".select_network_qrCode option:selected").attr("value");
    let info_wallet = $(this).find("option:selected").attr('data-wallet')
    let Net = $(this).find("option:selected").text()
    if (value === "chain") {
        $("#qr_code_default").removeClass("d-none")
        $("#qr_code_default").siblings('.barcode-withdrawal').addClass("d-none")
        $('.address_qrCode_deposit').text(qrCode)
    } else {
        $('.address_qrCode_deposit').text(qrCode)
        $('.barcode-withdrawal#' + value).removeClass("d-none")
        $('.barcode-withdrawal#' + value).siblings('.barcode-withdrawal').addClass("d-none")
    }
    if (info_wallet === "True") {
        $('.qr_code_link').hide()
        $('.table_wallet_add').empty()
        let theURL = `/customer/direct/wallet/${Net}/`
        $.ajax({
            type: "GET",
            url: theURL,
            data: {},
            success: function (data) {
                if (data.type == 'success') {
                    let tabel = []
                    data.wallet.map(wallet => (
                        tabel.push(`
                            <tr >
                                <td>
                                    <span>#${wallet.wallet_id}</span>
                                </td>
                                <td>
                                    <span>${wallet.title}</span>
                                </td>
                                <td>
                                    <span >
                                        <a type="button" onclick="qrCode_modal_show(this)" class="qrCode_modal_show" data-toggle="modal" data-target=".show_qrCode_modal" data-qrCodeWallet="${wallet.address}"> <i class="fas fa-qrcode h5 text-dark"></i></a>
                                    </span>
                                </td>
                            </tr>
                            `)
                    ))
                    $('.table_wallet_add').append(tabel)

                }

            }
        });

        $("#amount").hide()
        $(".network").addClass('active')
        $("#amount").attr("placeholder", "")
        $('.info-deposit').hide()
        $('.address-wallet').hide()
        $('button#btn_deposit').hide()
        $('.deposit').addClass("hide")
        $('.table-deposit-wallet').show()
        $('.add_wallet_btn').show()
        $('.network.active').css({ "background": "#d4edda" })

    } else {
        $("#amount").show()
        $(".network").removeClass('active')
        $("#amount").attr("placeholder", "میزان را وارد کنید")
        $('.info-deposit').show()
        $('.address-wallet').show()
        $('button#btn_deposit').show()
        $('.deposit').removeClass("hide")
        $('.table-deposit-wallet').hide()
        $('.add_wallet_btn').hide()
        $('.network').css({ "background": "#fff" })
    }

})

$(".input-buy-in-site input").keyup(function (event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);


    var vCoin = event.key;
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    let min_buy = parseFloat($('.form-buy-in-site .info-buy-in-site .min-buy p span').text())
    var removable_amount = currency_buy(number)
    $('.form-buy-in-site .info-buy-in-site .amount-deposit p span').text(addCommas(number))
    $('.form-buy-in-site .info-buy-in-site .removable-amount p span').text(addCommas(removable_amount.toFixed(3)))


    if (event.key == 'Backspace' || event.key == 'Delete') {

        if ($(this).val().length <= 0) {

            $('.form-buy-in-site .info-buy-in-site .amount-deposit p span').text(0)
            $('.form-buy-in-site .info-buy-in-site .removable-amount p span').text(0)

            $('.form-buy-in-site .info-buy-in-site .balance h6').addClass('d-none')
            $('.removable-buy-in-site form button').attr("disabled", "disabled")
            $('.removable-buy-in-site .alert-error').hide()


        } else {
            if (number < min_buy) {
                $('.removable-buy-in-site .alert-error').show()
                $('.removable-buy-in-site .alert-error p').text('میزان وارد شده کمتر از حداقل میزان قابل خرید است')
            }
            $('.form-buy-in-site .info-buy-in-site .amount-deposit p span').text(number.toLocaleString('en-US', { maximumFractionDigits: 3 }))
            $('.form-buy-in-site .info-buy-in-site .removable-amount p span').text(removable_amount.toLocaleString('en-US', { maximumFractionDigits: 3 }))
        }
    }


    if (persianAlphabetAndWhiteSpace.test(event.key)) {
        $('.form-buy-in-site .info-buy-in-site .amount-deposit p span').text(addCommas(number))
        $('.form-buy-in-site .info-buy-in-site .removable-amount p span').text(addCommas(removable_amount))
    }
    else if (!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && !event.keyCode == 46) {
        event.preventDefault();
    }

})
$(".input-sell-in-site input").keyup(function (event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);


    var vCoin = event.key;
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    let price = parseFloat($('.form-buy-in-site .price-usd-ir span.price-sell-irt').text().replace(/,/g, ''))
    let min_sell = parseFloat($('.form-buy-in-site .info-buy-in-site .min-sell p span').text())
    var removable_amount_sell = number * price;
    $('.form-buy-in-site .info-buy-in-site .removable-amount-sell p span').text(addCommas(removable_amount_sell))

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if ($(this).val().length <= 0) {

            $('.form-buy-in-site .info-buy-in-site .removable-amount-sell p span').text(0)

        } else {
            $('.form-buy-in-site .info-buy-in-site .removable-amount-sell p span').text(removable_amount_sell.toLocaleString('en-US', { maximumFractionDigits: 3 }))
        }
    }


    if (persianAlphabetAndWhiteSpace.test(event.key)) {
        $('.form-buy-in-site .info-buy-in-site .removable-amount-sell p span').text(addCommas(removable_amount_sell))
    }
    else if (!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && !event.keyCode == 46) {
        event.preventDefault();
    }

})
$("#withdrawinput").keyup(function (event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);


    var vCoin = event.key;
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    let balance = parseFloat($('.alert-harvest .balance').text().replace(/,/g, ''))
    harvest(number, balance)

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if ($(this).val().length <= 0) {
            $('#withdrawform button').attr("disabled", "disabled");
            $('.harvest .alert-error').hide()


        } else {
            harvest(number, balance)
        }
    }


    if (persianAlphabetAndWhiteSpace.test(event.key)) {
        harvest(number, balance)

    }
    else if (!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && !event.keyCode == 46) {
        event.preventDefault();
    }

})

$('.input-convert .btn-max').on('click', function () {
    $('.input-convert .input-number').val($('.holding-currency').text())
    var number_max = parseFloat($('.holding-currency').text().replace(/,/g, ''))
    convert(number_max)
})

$("#withdrow-PS-PM").keyup(function (event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);


    var vCoin = event.key;
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    withdraw_balance(number)

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if ($("#withdrow-PS-PM").val().length <= 0) {
            $('#btn_withdraw').attr("disabled")
            $('#btn_withdraw').addClass("disabled")
            $('h6.no_balance_withdraw').addClass('d-none')
            $('.deposit .alert-error').hide()
        } else {
            withdraw_balance(number)
        }
    }


    if (persianAlphabetAndWhiteSpace.test(event.key)) {
        withdraw_balance(number)

    }
    else if (!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && !event.keyCode == 46) {
        event.preventDefault();
    }

})
$("#withdraw-handly-input").keyup(function (event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);


    var vCoin = event.key;
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    let min_withdrow_PS_PM = parseFloat($('.min-withdrow-PS-PM p span').text())
    let balance = parseFloat($('.balance-PS-PM').text())
    let fee_currency_withdraw = parseFloat($('.fee_currency_withdraw p span').text())

    // console.log(number , min_withdrow_PS_PM ,balance , fee_currency_withdraw )

    if (number >= min_withdrow_PS_PM) {
        if (number <= balance - fee_currency_withdraw) {
            $('#btn_withdraw').removeAttr("disabled")
            $('#btn_withdraw').removeClass("disabled")
            $('h6.no_balance_withdraw').addClass('d-none')
            $('.deposit .alert-error').hide()
        } else {
            $('#btn_withdraw').attr("disabled")
            $('#btn_withdraw').addClass("disabled")
            $('h6.no_balance_withdraw').removeClass('d-none')
            $('.deposit .alert-error').hide()
        }
    } else {
        $('#btn_withdraw').attr("disabled")
        $('#btn_withdraw').addClass("disabled")
        $('h6.no_balance_withdraw').addClass('d-none')
        $('.deposit .alert-error').show()
        $('.deposit .alert-error p').text('میزان وارد شده کمتر از حداقل میزان قابل برداشت است')
    }

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if ($("#withdraw-handly-input").val().length <= 0) {
            $('#btn_withdraw').attr("disabled")
            $('#btn_withdraw').addClass("disabled")
            $('h6.no_balance_withdraw').addClass('d-none')
            $('.deposit .alert-error').hide()
        } else {
            if (number >= min_withdrow_PS_PM) {
                if (number <= balance - fee_currency_withdraw) {
                    $('#btn_withdraw').removeAttr("disabled")
                    $('#btn_withdraw').removeClass("disabled")
                    $('h6.no_balance_withdraw').addClass('d-none')
                    $('.deposit .alert-error').hide()
                } else {
                    $('#btn_withdraw').attr("disabled")
                    $('#btn_withdraw').addClass("disabled")
                    $('h6.no_balance_withdraw').removeClass('d-none')
                    $('.deposit .alert-error').hide()
                }
            } else {
                if (number < min_withdrow_PS_PM) {
                    $('.deposit .alert-error').show()
                    $('.deposit .alert-error p').text('میزان وارد شده کمتر از حداقل میزان قابل برداشت است')
                }
                $('#btn_withdraw').attr("disabled")
                $('#btn_withdraw').addClass("disabled")
                $('h6.no_balance_withdraw').addClass('d-none')
            }
        }
    }


    if (persianAlphabetAndWhiteSpace.test(event.key)) {
        if (number >= min_withdrow_PS_PM) {
            if (number <= balance - fee_currency_withdraw) {
                $('#btn_withdraw').removeAttr("disabled")
                $('#btn_withdraw').removeClass("disabled")
                $('h6.no_balance_withdraw').addClass('d-none')
                $('.deposit .alert-error').hide()
            } else {
                $('#btn_withdraw').attr("disabled")
                $('#btn_withdraw').addClass("disabled")
                $('h6.no_balance_withdraw').removeClass('d-none')
                $('.deposit .alert-error').hide()
            }
        } else {
            $('#btn_withdraw').attr("disabled")
            $('#btn_withdraw').addClass("disabled")
            $('h6.no_balance_withdraw').addClass('d-none')
            $('.deposit .alert-error').show()
            $('.deposit .alert-error p').text('میزان وارد شده کمتر از حداقل میزان قابل برداشت است')
        }

    }
    else if (!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && !event.keyCode == 46) {
        event.preventDefault();
    }

})
$("#withdraw-kucoin-input").keyup(function (event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);

    var vCoin = event.key;
    var number = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    let min_withdrow_PS_PM = parseFloat($('.min-withdrow-PS-PM p span').text())
    let balance = parseFloat($('.balance-PS-PM').text())
    let fee_currency_withdraw = parseFloat($('.fee_currency_withdraw p span').text()) || 0

    withdraw_balance(number)

    if (event.key == 'Backspace' || event.key == 'Delete') {

        if ($("#withdraw-kucoin-input").val().length <= 0) {
            $('#btn_withdraw').attr("disabled")
            $('#btn_withdraw').addClass("disabled")
            $('h6.no_balance_withdraw').addClass('d-none')
            $('.deposit .alert-error').hide()
        } else {
            withdraw_balance(number)
        }
    }


    if (persianAlphabetAndWhiteSpace.test(event.key)) {
        withdraw_balance(number)

    }
    else if (!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && !event.keyCode == 46) {
        event.preventDefault();
    }


})


function btn_max_holding() {
    $('.input-convert .btn-max').on('click', function () {
        $('.input-convert .input-number').val($('.holding-currency').text())
        var number_max = $('.holding-currency').text()
        convert(number_max)
    })
}

function convert(number) {

    var pric_coin_1_max = parseFloat($('.convert-coin-1').children('span.price').text());
    var pric_coin_2_max = parseFloat($('.convert-coin-2').children('span.price').text());
    var fee_coin_max = parseFloat($('.convert-coin-1').children('span.fee-coin').text());
    var symbol_amount_1_max = $('.convert-coin-1').children('span.name-fa').text();
    var symbol_amount_2_max = $('.convert-coin-2').children('span.name-fa').text();


    let amount = (number * pric_coin_1_max) / pric_coin_2_max;
    let total = amount
    $('.convert .info-convert .amount-received').text(addCommas(total));
    $('.convert .info-convert .fee').text(addCommas(fee_coin_max));
    $('.convert .fee').siblings('span.symbol-amount').text(symbol_amount_1_max);
    $('.convert .amount-received').siblings('span.symbol-amount').text(symbol_amount_2_max);
}

function currency_buy(number) {
    $('.form-buy-in-site .info-buy-in-site .balance h6').addClass('d-none')
    let balance = parseFloat($('.form-buy-in-site .info-buy-in-site .balance p span').text().replace(/,/g, ''))
    let price = parseFloat($('.form-buy-in-site .price-usd-ir span.price-buy-irt').text().replace(/,/g, ''))
    let fee = parseFloat($('.form-buy-in-site .info-buy-in-site .network-fee p span').text())
    let value_paymentMethod = $("#paymentMethod option:selected").attr("value");
    let removable_amount = (number + fee) * price;
    let min_buy = parseFloat($('.form-buy-in-site .info-buy-in-site .min-buy p span').text())

    if (number >= min_buy) {
        if (value_paymentMethod == "gateWay") {
            if (removable_amount > 100000000) {
                $('.removable-buy-in-site form button').attr("disabled", "disabled");
                $('.removable-buy-in-site .alert-error').show()
                $('.removable-buy-in-site .alert-error p').text('حداکثر مبلغ پرداخت از طریق درگاه بانکی 100,000,000 تومان است')
            } else {
                $('.removable-buy-in-site form button').removeAttr("disabled")
                $('.removable-buy-in-site .alert-error').hide()
            }
        } else if (value_paymentMethod == "Wallet") {
            if (balance <= removable_amount) {
                $('.form-buy-in-site .info-buy-in-site .balance h6').removeClass('d-none')
                $('.removable-buy-in-site form button').attr("disabled", "disabled");
                $('.removable-buy-in-site .alert-error').hide()
            } else {
                $('.form-buy-in-site .info-buy-in-site .balance h6').addClass('d-none')
                $('.removable-buy-in-site form button').removeAttr("disabled")
                $('.removable-buy-in-site .alert-error').hide()
            }
        }
    } else {
        if (number < min_buy) {
            $('.removable-buy-in-site .alert-error').show()
            $('.removable-buy-in-site .alert-error p').text('میزان وارد شده کمتر از حداقل میزان قابل خرید است')
        }
        $('.removable-buy-in-site form button').attr("disabled", "disabled");
    }



    return removable_amount
}

function harvest(number, balance) {
    let value_option = $("#payment_type option:selected").attr("data-option")
    let max_harvest;
    if ($("#payment_type").val() == 0) {
        $('#withdrawform button').attr("disabled", "disabled");
    } else {
        max_harvest = $(".max-harvest").find("[data-name='" + value_option + "']").text()
        if (number <= balance) {
            if (max_harvest == "نامحدود") {
                $('#withdrawform button').removeAttr("disabled", "disabled")
                $('.harvest .alert-error').hide()
            } else {
                max_harvest = parseFloat($(".max-harvest").find("[data-name='" + value_option + "']").text().replace(/,/g, ''))
                if (number <= max_harvest) {
                    $('#withdrawform button').removeAttr("disabled", "disabled")
                    $('.harvest .alert-error').hide()
                }
                else {
                    $('#withdrawform button').attr("disabled", "disabled");
                    $('.harvest .alert-error').show()
                    $('.harvest .alert-error p').text('مقدار وارد شده بیشتر از سقف برداشت است')
                }
            }
        } else {
            $('.harvest .alert-error').show()
            $('.harvest .alert-error p').text('موجودی کیف پول کافی نیست')
            $('#withdrawform button').attr("disabled", "disabled");
        }
    }

}
function withdraw_balance(number) {
    let min_withdrow_PS_PM = parseFloat($('.min-withdrow-PS-PM p span').text())
    let balance = parseFloat($('.balance-PS-PM').text())

    if (number >= min_withdrow_PS_PM) {
        if (number <= balance) {
            $('#btn_withdraw').removeAttr("disabled")
            $('#btn_withdraw').removeClass("disabled")
            $('h6.no_balance_withdraw').addClass('d-none')
            $('.deposit .alert-error').hide()
        } else {
            $('#btn_withdraw').attr("disabled", "disabled")
            $('#btn_withdraw').addClass("disabled")
            $('h6.no_balance_withdraw').removeClass('d-none')
            $('.deposit .alert-error').hide()
        }
    } else {
        if (number < min_withdrow_PS_PM) {
            $('.deposit .alert-error').show()
            $('.deposit .alert-error p').text('میزان وارد شده کمتر از حداقل میزان قابل برداشت است')
        }
        $('#btn_withdraw').attr("disabled", "disabled")
        $('#btn_withdraw').addClass("disabled")
        $('h6.no_balance_withdraw').addClass('d-none')
    }

}

$('.withdraw-btn-max').on('click', function () {
    let balance = parseFloat($('.balance-PS-PM').text())
    let fee_currency_withdraw = parseFloat($('.fee_currency_withdraw p span').text())
    var procent_fee_
    var fee_currency_sell
    var lower_fee_currency_sell = parseFloat($('.lower_fee_currency_withdraw ').text().replace(/,/g, '')) || 0
    var upper_fee_currency_sell = parseFloat($('.upper_fee_currency_withdraw ').text().replace(/,/g, '')) || 0
    procent_fee_ = ((balance * fee_currency_withdraw) / 100)

    if (procent_fee_ > upper_fee_currency_sell) {
        fee_currency_sell = upper_fee_currency_sell
    } else if (procent_fee_ < lower_fee_currency_sell) {
        fee_currency_sell = lower_fee_currency_sell
    } else {
        fee_currency_sell = procent_fee_
    }

    $('#withdrow-PS-PM').val(balance)
    withdraw_balance($('#withdrow-PS-PM').val())
})
$('.handly-withdraw-btn-max').on('click', function () {
    let balance = parseFloat($('.balance-PS-PM').text())
    let fee_currency_withdraw = parseFloat($('.fee_currency_withdraw p span').text())
    if (balance - ((balance * fee_currency_withdraw) / 100) <= 0) {
        $('#withdraw-handly-input').val(0)
    } else {
        $('#withdraw-handly-input').val(balance - ((balance * fee_currency_withdraw) / 100))
    }

    withdraw_balance($('#withdraw-handly-input').val())
})
$('.kucoin-withdraw-btn-max').on('click', function () {
    let balance = parseFloat($('.balance-PS-PM').text()) || 0
    let info_wallet = $('.select_network_withdraw_kucoin').find("option:selected").attr('data-wallet')
    let fee_currency_withdraw = parseFloat($('.fee_currency_withdraw p span').text()) || 0
    if (balance - fee_currency_withdraw <= 0) {
        $('#withdraw-kucoin-input').val(0)
    } else {
        if (info_wallet === 'True') {
            $('#withdraw-kucoin-input').val(balance)
        } else {
            $('#withdraw-kucoin-input').val(balance - fee_currency_withdraw)
        }

    }
    withdraw_balance($('#withdraw-kucoin-input').val())
})

let price_irt = parseFloat($('.price-usd-ir .price-buy-irt').text())
$('.price-usd-ir .price-buy-irt').text(price_irt.toLocaleString('en-US', { maximumFractionDigits: 2 }))

let balance = parseFloat($('.form-buy-in-site .info-buy-in-site .balance p span').text())
$('.form-buy-in-site .info-buy-in-site .balance p span').text(balance.toLocaleString('en-US', { maximumFractionDigits: 2 }))

let price_sell_irt = parseFloat($('.price-usd-ir .price-sell-irt').text())
$('.price-usd-ir .price-sell-irt').text(price_sell_irt.toLocaleString('en-US', { maximumFractionDigits: 2 }))

function addCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
