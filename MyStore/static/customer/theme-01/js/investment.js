toastr.options = {
    timeOut: 4000,
    progressBar: true,
    showMethod: "slideDown",
    hideMethod: "slideUp",
    showDuration: 200,
    hideDuration: 200
};


// level1
$("#buttonLevel1 .continue_investment").click(function () {
    let amount_user_gold = parseFloat($("#amount_user_gold").text())
    let profit = $("#profit").text()
    let profitperiod = $("#profitperiod").text()
    let totalprofit = $("#totalprofit").text()
    let Insurance = $("#Insurance").text()
    let totalprice = $("#totalprice").text()
    let amount = $("#amountInvestment").val()
    let type = $("#typeInvestment option:selected").text()
    let time = $("input[name='time']:checked").attr("data-value");

    if (amount <= 0 || amount.length <= 0) {
        $(".error_amount").show()
        toastr.error("مقدار گرم طلا را وارد نکرده اید.")
        $(".package_select .input_form.amount_input").addClass("error")
    } else {
        if (amount > amount_user_gold) {
            toastr.error("مقدار گرم وارد شده بیشتر از موجودی کیف پول شما میباشد.");
        } else {
            $("#First_Level_Investment").addClass("hide_level")
            $("#Second_Level_Investment").removeClass("hide_level")
            $("#third_Level_Investment").addClass("hide_level")


            $("#buttonLevel1").addClass("hide_level")
            $("#buttonLevel2").removeClass("hide_level")
            $("#buttonLevel3").addClass("hide_level")

            $(".first_level").removeClass("currently")
            $(".first_level").addClass("checked")
            $(".first_level .box_level").html(`
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.02 16.5h-15c-1.655 0-3-1.345-3-3v-3c0-1.655 1.345-3 3-3h15c1.654 0 3 1.345 3 3v3c0 1.655-1.346 3-3 3Zm-15-6v3H38.02v-3H23.019Z" fill="#EAB600"/><path d="M41.018 27a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 1 1 0-3h3c.83 0 1.5.672 1.5 1.5Zm-1.5 4.5h-3a1.5 1.5 0 1 0 0 3h3a1.5 1.5 0 1 0 0-3Zm0 6h-3a1.5 1.5 0 1 0 0 3h3a1.5 1.5 0 1 0 0-3ZM45.513 6v36c0 2.475-2.01 4.5-4.5 4.5h-30.06a4.513 4.513 0 0 1-4.5-4.5v-1.5c0-.585.12-1.155.33-1.665a4.491 4.491 0 0 1-3.33-4.335V33c0-2.07 1.41-3.825 3.33-4.335-.21-.51-.33-1.08-.33-1.665v-1.5c0-2.475 2.025-4.5 4.5-4.5h4.56V6c0-2.475 2.025-4.5 4.5-4.5h21c2.49 0 4.5 2.025 4.5 4.5ZM9.453 27c0 .825.675 1.5 1.5 1.5h15.09c.78 0 1.41-.6 1.485-1.35-.015-.045-.015-.105-.015-.15 0-.105.015-.21.03-.3v-1.2c0-.825-.675-1.5-1.5-1.5h-15.09c-.825 0-1.5.675-1.5 1.5V27Zm-1.5 9h15.09c.825 0 1.5-.675 1.5-1.5V33c0-.825-.675-1.5-1.5-1.5H7.953c-.825 0-1.5.675-1.5 1.5v1.5c0 .825.675 1.5 1.5 1.5Zm19.59 4.5c0-.825-.675-1.5-1.5-1.5h-15.09c-.825 0-1.5.675-1.5 1.5V42c0 .825.675 1.5 1.5 1.5h15.09c.825 0 1.5-.675 1.5-1.5v-1.5ZM42.513 6c0-.825-.675-1.5-1.5-1.5h-21c-.825 0-1.5.675-1.5 1.5v15h1.5c0-.825.675-1.5 1.5-1.5h3c.84 0 1.5.675 1.5 1.5h.03c.525 0 1.035.09 1.5.27-.015-.09-.03-.18-.03-.27 0-.825.675-1.5 1.5-1.5h3c.84 0 1.5.675 1.5 1.5s-.66 1.5-1.5 1.5h-2.625a4.476 4.476 0 0 1 1.155 3h1.47c.84 0 1.5.675 1.5 1.5s-.66 1.5-1.5 1.5h-1.74a4.463 4.463 0 0 1-3.06 2.835c.195.465.3.96.315 1.485.09-.735.72-1.32 1.485-1.32h3c.84 0 1.5.675 1.5 1.5s-.66 1.5-1.5 1.5h-3c-.72 0-1.335-.51-1.47-1.2v1.2c0 .585-.12 1.155-.33 1.665.855.225 1.605.69 2.175 1.335h2.625c.84 0 1.5.675 1.5 1.5s-.66 1.5-1.5 1.5h-1.47V42c0 .525-.09 1.035-.27 1.5h10.74c.825 0 1.5-.675 1.5-1.5V6Zm-6 16.5h3c.84 0 1.5-.675 1.5-1.5s-.66-1.5-1.5-1.5h-3c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5Z" fill="#fff"/></svg>
    
    `)

            $(".second_level").addClass("currently")
            $(".second_level .box_level").html(`
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.5 37.5A1.52 1.52 0 0 1 37 36V12a6.52 6.52 0 0 0-6.5-6.5h-22a1.5 1.5 0 0 1 0-3h22A9.5 9.5 0 0 1 40 12v24a1.52 1.52 0 0 1-1.5 1.5ZM38.5 45.5h-21A6.52 6.52 0 0 1 11 39V20a1.5 1.5 0 1 1 3 0v19a3.52 3.52 0 0 0 3.5 3.5h21a1.5 1.5 0 1 1 0 3Z" fill="#165425"/><path d="M12.5 21.5h-7A2.5 2.5 0 0 1 3 19V8a5.5 5.5 0 1 1 11 0v6a1.5 1.5 0 1 1-3 0V8a2.5 2.5 0 0 0-5 0v10.5h6.5a1.5 1.5 0 1 1 0 3ZM39.5 45.5h-21a1.48 1.48 0 0 1-1.22-.62 1.46 1.46 0 0 1-.2-1.34 1.64 1.64 0 0 1 1.14-1.12A3.5 3.5 0 0 0 21 39v-2a2.5 2.5 0 0 1 2.5-2.5h20A2.5 2.5 0 0 1 46 37v2a6.52 6.52 0 0 1-6.5 6.5Zm-16.54-3H39.5A3.52 3.52 0 0 0 43 39v-1.5H24V39a6.42 6.42 0 0 1-1.04 3.5Z" fill="#165425"/><path d="M31.5 14.5h-12a1.5 1.5 0 1 1 0-3h12a1.5 1.5 0 1 1 0 3ZM25.5 28.5h-6a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 1 1 0 3ZM31.5 21.5h-12a1.5 1.5 0 1 1 0-3h12a1.5 1.5 0 1 1 0 3Z" fill="#EAB600"/></svg>
    `)
            $(".investment_levels .second_level").addClass("befor")

            $(".first_level").find(".icon_check").show()

            $("#amount_invoice").text(amount)
            $("#type_invoice").text("طلای آب شده (18 عیار)")
            $("#time_invoice").text(time)
            $("#profit_invoice").text(profit)
            $("#profitperiod_invoice").text(profitperiod)
            $("#totalprofit_invoice").text(totalprofit)
            $("#Insurance_invoice").text(Insurance)
            $("#totalprice_invoice").text(totalprice)
        }
    }
})

//level2
$("#buttonLevel2 .continue_investment").click(function () {
    let InvestmentAdd = $('#InvestmentAdd');
    let formData = new FormData(InvestmentAdd[0]);

    $("#buttonLevel2 .continue_investment").attr("disabled", "disabled")
    $("#buttonLevel2 .continue_investment").html('در حال پرداخت');
    $.ajax({
        type: InvestmentAdd.attr('method'),
        url: InvestmentAdd.attr('action'),
        contentType: false,
        processData: false,
        dataType: 'json',
        data: formData,
        success: function (data) {
            if (data.type == 'success') {
                toastr.success(data.msg);
                $("#First_Level_Investment").addClass("hide_level")
                $("#Second_Level_Investment").addClass("hide_level")
                $("#third_Level_Investment").removeClass("hide_level")


                $("#buttonLevel1").addClass("hide_level")
                $("#buttonLevel2").addClass("hide_level")
                $("#buttonLevel3").removeClass("hide_level")



                $(".second_level").removeClass("currently")
                $(".second_level").addClass("checked")
                $(".second_level .box_level").html(`
                <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.5 37.5A1.52 1.52 0 0 1 37 36V12a6.52 6.52 0 0 0-6.5-6.5h-22a1.5 1.5 0 0 1 0-3h22A9.5 9.5 0 0 1 40 12v24a1.52 1.52 0 0 1-1.5 1.5ZM38.5 45.5h-21A6.52 6.52 0 0 1 11 39V20a1.5 1.5 0 1 1 3 0v19a3.52 3.52 0 0 0 3.5 3.5h21a1.5 1.5 0 1 1 0 3Z" fill="#fff"/><path d="M12.5 21.5h-7A2.5 2.5 0 0 1 3 19V8a5.5 5.5 0 1 1 11 0v6a1.5 1.5 0 1 1-3 0V8a2.5 2.5 0 0 0-5 0v10.5h6.5a1.5 1.5 0 1 1 0 3ZM39.5 45.5h-21a1.48 1.48 0 0 1-1.22-.62 1.46 1.46 0 0 1-.2-1.34 1.642 1.642 0 0 1 1.14-1.12A3.5 3.5 0 0 0 21 39v-2a2.5 2.5 0 0 1 2.5-2.5h20A2.5 2.5 0 0 1 46 37v2a6.52 6.52 0 0 1-6.5 6.5Zm-16.54-3H39.5A3.52 3.52 0 0 0 43 39v-1.5H24V39a6.42 6.42 0 0 1-1.04 3.5Z" fill="#fff"/><path d="M31.5 14.5h-12a1.5 1.5 0 1 1 0-3h12a1.5 1.5 0 1 1 0 3ZM25.5 28.5h-6a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 1 1 0 3ZM31.5 21.5h-12a1.5 1.5 0 1 1 0-3h12a1.5 1.5 0 1 1 0 3Z" fill="#EAB600"/></svg>
                
                `)

                $(".third_level").addClass("checked")
                $(".third_level .box_level").html(`
                <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.859 16.6h13.526a2.58 2.58 0 0 0 2.578-2.578V8.31a2.58 2.58 0 0 0-2.578-2.578H7.86A2.58 2.58 0 0 0 5.28 8.31v5.712A2.58 2.58 0 0 0 7.86 16.6Zm-.515-8.29c0-.284.23-.515.515-.515h13.526c.284 0 .515.231.515.515v5.712a.516.516 0 0 1-.514.515H7.859a.516.516 0 0 1-.515-.515V8.31ZM14.492 32.135H6.77a1.031 1.031 0 1 0 0 2.062h7.722a1.031 1.031 0 0 0 0-2.062ZM6.54 22.072h8.935a1.031 1.031 0 0 0 0-2.062H6.54a1.031 1.031 0 1 0 0 2.062ZM6.54 28.135h8.935a1.031 1.031 0 0 0 0-2.063H6.54a1.031 1.031 0 1 0 0 2.063ZM19.569 38.197h-12.8a1.031 1.031 0 1 0 0 2.063h12.8a1.031 1.031 0 0 0 0-2.063Z" fill="#EAB600"/><path d="m47.32 36.057-2.88-2.88a13.357 13.357 0 0 0 1.523-6.207c0-5.63-3.48-10.462-8.402-12.46V5.277A4.772 4.772 0 0 0 32.794.51H5.262A4.772 4.772 0 0 0 .496 5.276v37.447a4.772 4.772 0 0 0 4.766 4.766h27.532a4.772 4.772 0 0 0 4.767-4.766V39.43c.41-.166.812-.353 1.201-.558l2.872 2.872a4.008 4.008 0 0 0 2.843 1.176c1.03 0 2.06-.392 2.843-1.176a4.025 4.025 0 0 0 0-5.686ZM43.9 26.97c0 6.274-5.104 11.377-11.377 11.377-6.274 0-11.378-5.103-11.378-11.377 0-6.274 5.104-11.378 11.378-11.378 6.273 0 11.377 5.104 11.377 11.378Zm-8.402 15.753a2.707 2.707 0 0 1-2.704 2.704H5.262a2.707 2.707 0 0 1-2.703-2.704V5.276a2.707 2.707 0 0 1 2.703-2.704h27.532a2.707 2.707 0 0 1 2.704 2.704v8.586a13.436 13.436 0 0 0-2.975-.332c-7.411 0-13.44 6.03-13.44 13.44 0 7.41 6.029 13.44 13.44 13.44a13.43 13.43 0 0 0 2.975-.332v2.645Zm10.364-2.438a1.96 1.96 0 0 1-2.77 0l-2.541-2.542a13.56 13.56 0 0 0 2.765-2.774l2.546 2.546c.37.37.573.862.573 1.385s-.203 1.015-.573 1.385Z" fill="#fff"/><path d="M23.66 26.97c0 4.886 3.976 8.861 8.862 8.861 4.887 0 8.862-3.975 8.862-8.862 0-4.886-3.975-8.862-8.862-8.862-4.886 0-8.862 3.976-8.862 8.862Zm2.063 0c0-3.75 3.05-6.8 6.8-6.8 1.053 0 2.052.241 2.944.671v12.257c-.892.43-1.89.67-2.945.67-3.75 0-6.8-3.05-6.8-6.799Zm13.599 0c0 1.77-.68 3.383-1.793 4.594v-9.19a6.773 6.773 0 0 1 1.792 4.595Z" fill="#fff"/></svg>
                
                `)
                $(".investment_levels .second_level").addClass("beforafter")

                $(".second_level").find(".icon_check").show()
                $(".third_level").find(".icon_check").show()

                $("#buttonLevel2 .continue_investment").removeAttr("disabled")
                $("#buttonLevel2 .continue_investment").html('پرداخت');

            }
            else if (data.type == 'danger') {

                toastr.error(data.msg);
                setTimeout(function () {
                    $("#buttonLevel2 .continue_investment").removeAttr("disabled")
                    $("#buttonLevel2 .continue_investment").html('پرداخت');
                }, 2000)

            }

        }
    });

})

$("#buttonLevel2 .cancell_investment").click(function () {
    $("#First_Level_Investment").removeClass("hide_level")
    $("#Second_Level_Investment").addClass("hide_level")
    $("#third_Level_Investment").addClass("hide_level")


    $("#buttonLevel1").removeClass("hide_level")
    $("#buttonLevel2").addClass("hide_level")
    $("#buttonLevel3").addClass("hide_level")

    $(".first_level").addClass("currently")
    $(".first_level").removeClass("checked")
    $(".first_level .box_level").html(`
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.02 16.5h-15c-1.655 0-3-1.345-3-3v-3c0-1.655 1.345-3 3-3h15c1.654 0 3 1.345 3 3v3c0 1.655-1.346 3-3 3Zm-15-6v3H38.02v-3H23.019Z" fill="#EAB600"/><path d="M41.02 27a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 1 1 0-3h3c.829 0 1.5.672 1.5 1.5Zm-1.5 4.5h-3a1.5 1.5 0 1 0 0 3h3a1.5 1.5 0 1 0 0-3Zm0 6h-3a1.5 1.5 0 1 0 0 3h3a1.5 1.5 0 1 0 0-3ZM45.514 6v36c0 2.475-2.01 4.5-4.5 4.5h-30.06a4.513 4.513 0 0 1-4.5-4.5v-1.5c0-.585.12-1.155.33-1.665a4.491 4.491 0 0 1-3.33-4.335V33c0-2.07 1.41-3.825 3.33-4.335-.21-.51-.33-1.08-.33-1.665v-1.5c0-2.475 2.025-4.5 4.5-4.5h4.56V6c0-2.475 2.025-4.5 4.5-4.5h21c2.49 0 4.5 2.025 4.5 4.5ZM9.455 27c0 .825.675 1.5 1.5 1.5h15.09c.78 0 1.41-.6 1.485-1.35-.015-.045-.015-.105-.015-.15 0-.105.015-.21.03-.3v-1.2c0-.825-.675-1.5-1.5-1.5h-15.09c-.825 0-1.5.675-1.5 1.5V27Zm-1.5 9h15.09c.825 0 1.5-.675 1.5-1.5V33c0-.825-.675-1.5-1.5-1.5H7.955c-.825 0-1.5.675-1.5 1.5v1.5c0 .825.675 1.5 1.5 1.5Zm19.59 4.5c0-.825-.675-1.5-1.5-1.5h-15.09c-.825 0-1.5.675-1.5 1.5V42c0 .825.675 1.5 1.5 1.5h15.09c.825 0 1.5-.675 1.5-1.5v-1.5ZM42.515 6c0-.825-.675-1.5-1.5-1.5h-21c-.825 0-1.5.675-1.5 1.5v15h1.5c0-.825.675-1.5 1.5-1.5h3c.84 0 1.5.675 1.5 1.5h.03c.525 0 1.035.09 1.5.27-.015-.09-.03-.18-.03-.27 0-.825.675-1.5 1.5-1.5h3c.84 0 1.5.675 1.5 1.5s-.66 1.5-1.5 1.5H29.39a4.476 4.476 0 0 1 1.155 3h1.47c.84 0 1.5.675 1.5 1.5s-.66 1.5-1.5 1.5h-1.74a4.463 4.463 0 0 1-3.06 2.835c.195.465.3.96.315 1.485.09-.735.72-1.32 1.485-1.32h3c.84 0 1.5.675 1.5 1.5s-.66 1.5-1.5 1.5h-3c-.72 0-1.335-.51-1.47-1.2v1.2c0 .585-.12 1.155-.33 1.665.855.225 1.605.69 2.175 1.335h2.625c.84 0 1.5.675 1.5 1.5s-.66 1.5-1.5 1.5h-1.47V42c0 .525-.09 1.035-.27 1.5h10.74c.825 0 1.5-.675 1.5-1.5V6Zm-6 16.5h3c.84 0 1.5-.675 1.5-1.5s-.66-1.5-1.5-1.5h-3c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5Z" fill="#005C55"/></svg>
    
    `)

    $(".second_level").removeClass("currently")
    $(".second_level").addClass("disable")
    $(".second_level .box_level").html(`
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.5 37.5A1.52 1.52 0 0 1 37 36V12a6.52 6.52 0 0 0-6.5-6.5h-22a1.5 1.5 0 0 1 0-3h22A9.5 9.5 0 0 1 40 12v24a1.52 1.52 0 0 1-1.5 1.5ZM38.5 45.5h-21A6.52 6.52 0 0 1 11 39V20a1.5 1.5 0 1 1 3 0v19a3.52 3.52 0 0 0 3.5 3.5h21a1.5 1.5 0 1 1 0 3Z" fill="#999"/><path d="M12.5 21.5h-7A2.5 2.5 0 0 1 3 19V8a5.5 5.5 0 1 1 11 0v6a1.5 1.5 0 1 1-3 0V8a2.5 2.5 0 0 0-5 0v10.5h6.5a1.5 1.5 0 1 1 0 3ZM39.5 45.5h-21a1.48 1.48 0 0 1-1.22-.62 1.46 1.46 0 0 1-.2-1.34 1.642 1.642 0 0 1 1.14-1.12A3.5 3.5 0 0 0 21 39v-2a2.5 2.5 0 0 1 2.5-2.5h20A2.5 2.5 0 0 1 46 37v2a6.52 6.52 0 0 1-6.5 6.5Zm-16.54-3H39.5A3.52 3.52 0 0 0 43 39v-1.5H24V39a6.42 6.42 0 0 1-1.04 3.5Z" fill="#999"/><path d="M31.5 14.5h-12a1.5 1.5 0 1 1 0-3h12a1.5 1.5 0 1 1 0 3ZM25.5 28.5h-6a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 1 1 0 3ZM31.5 21.5h-12a1.5 1.5 0 1 1 0-3h12a1.5 1.5 0 1 1 0 3Z" fill="#777"/></svg>
    `)
    $(".investment_levels .second_level").removeClass("befor")

    $(".first_level").find(".icon_check").hide()
    $(".second_level").find(".icon_check").hide()
    $(".third_level").find(".icon_check").hide()
})

//level3
$("#buttonLevel3 .cancell_investment").click(function () {
    $("#First_Level_Investment").addClass("hide_level")
    $("#Second_Level_Investment").removeClass("hide_level")
    $("#third_Level_Investment").addClass("hide_level")


    $("#buttonLevel1").addClass("hide_level")
    $("#buttonLevel2").removeClass("hide_level")
    $("#buttonLevel3").addClass("hide_level")


    $(".second_level").addClass("currently")
    $(".second_level").removeClass("checked")
    $(".second_level .box_level").html(`
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.5 37.5A1.52 1.52 0 0 1 37 36V12a6.52 6.52 0 0 0-6.5-6.5h-22a1.5 1.5 0 0 1 0-3h22A9.5 9.5 0 0 1 40 12v24a1.52 1.52 0 0 1-1.5 1.5ZM38.5 45.5h-21A6.52 6.52 0 0 1 11 39V20a1.5 1.5 0 1 1 3 0v19a3.52 3.52 0 0 0 3.5 3.5h21a1.5 1.5 0 1 1 0 3Z" fill="#165425"/><path d="M12.5 21.5h-7A2.5 2.5 0 0 1 3 19V8a5.5 5.5 0 1 1 11 0v6a1.5 1.5 0 1 1-3 0V8a2.5 2.5 0 0 0-5 0v10.5h6.5a1.5 1.5 0 1 1 0 3ZM39.5 45.5h-21a1.48 1.48 0 0 1-1.22-.62 1.46 1.46 0 0 1-.2-1.34 1.64 1.64 0 0 1 1.14-1.12A3.5 3.5 0 0 0 21 39v-2a2.5 2.5 0 0 1 2.5-2.5h20A2.5 2.5 0 0 1 46 37v2a6.52 6.52 0 0 1-6.5 6.5Zm-16.54-3H39.5A3.52 3.52 0 0 0 43 39v-1.5H24V39a6.42 6.42 0 0 1-1.04 3.5Z" fill="#165425"/><path d="M31.5 14.5h-12a1.5 1.5 0 1 1 0-3h12a1.5 1.5 0 1 1 0 3ZM25.5 28.5h-6a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 1 1 0 3ZM31.5 21.5h-12a1.5 1.5 0 1 1 0-3h12a1.5 1.5 0 1 1 0 3Z" fill="#EAB600"/></svg>
    
    `)

    $(".third_level").removeClass("checked")
    $(".third_level").addClass("disable")
    $(".third_level .box_level").html(`
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.859 16.6h13.526a2.58 2.58 0 0 0 2.578-2.578V8.31a2.58 2.58 0 0 0-2.578-2.578H7.86A2.58 2.58 0 0 0 5.28 8.31v5.712A2.58 2.58 0 0 0 7.86 16.6Zm-.515-8.29c0-.284.23-.515.515-.515h13.526c.284 0 .515.231.515.515v5.712a.516.516 0 0 1-.514.515H7.859a.516.516 0 0 1-.515-.515V8.31ZM14.492 32.135H6.77a1.031 1.031 0 1 0 0 2.062h7.722a1.031 1.031 0 0 0 0-2.062ZM6.541 22.072h8.936a1.031 1.031 0 0 0 0-2.062H6.541a1.031 1.031 0 1 0 0 2.062ZM6.541 28.135h8.936a1.031 1.031 0 0 0 0-2.063H6.541a1.031 1.031 0 1 0 0 2.063ZM19.569 38.197h-12.8a1.031 1.031 0 1 0 0 2.063h12.8a1.031 1.031 0 0 0 0-2.063Z" fill="#777"/><path d="m47.322 36.057-2.88-2.88a13.357 13.357 0 0 0 1.523-6.207c0-5.63-3.48-10.462-8.403-12.46V5.277A4.772 4.772 0 0 0 32.797.51H5.264A4.772 4.772 0 0 0 .498 5.276v37.447a4.772 4.772 0 0 0 4.766 4.766h27.532a4.772 4.772 0 0 0 4.767-4.766V39.43c.41-.166.811-.353 1.201-.558l2.872 2.872a4.008 4.008 0 0 0 2.843 1.176c1.03 0 2.06-.392 2.843-1.176a4.025 4.025 0 0 0 0-5.686Zm-3.42-9.087c0 6.274-5.104 11.377-11.377 11.377-6.274 0-11.378-5.103-11.378-11.377 0-6.274 5.104-11.378 11.378-11.378 6.273 0 11.377 5.104 11.377 11.378ZM35.5 42.723a2.707 2.707 0 0 1-2.704 2.704H5.264a2.707 2.707 0 0 1-2.703-2.704V5.276a2.707 2.707 0 0 1 2.703-2.704h27.532A2.707 2.707 0 0 1 35.5 5.276v8.586a13.436 13.436 0 0 0-2.975-.332c-7.411 0-13.44 6.03-13.44 13.44 0 7.41 6.029 13.44 13.44 13.44a13.43 13.43 0 0 0 2.975-.332v2.645Zm10.364-2.438a1.96 1.96 0 0 1-2.77 0l-2.541-2.542a13.56 13.56 0 0 0 2.765-2.774l2.546 2.546c.37.37.573.862.573 1.385s-.203 1.015-.573 1.385Z" fill="#999"/><path d="M23.662 26.97c0 4.886 3.976 8.861 8.862 8.861 4.887 0 8.862-3.975 8.862-8.862 0-4.886-3.975-8.862-8.862-8.862-4.886 0-8.862 3.976-8.862 8.862Zm2.063 0c0-3.75 3.05-6.8 6.8-6.8 1.053 0 2.052.241 2.943.671v12.257c-.89.43-1.89.67-2.944.67-3.75 0-6.8-3.05-6.8-6.799Zm13.599 0c0 1.77-.68 3.383-1.793 4.594v-9.19a6.773 6.773 0 0 1 1.793 4.595Z" fill="#999"/></svg>
    
    `)
    $(".investment_levels .second_level").addClass("befor")
    $(".investment_levels .second_level").removeClass("beforafter")

    $(".second_level").find(".icon_check").hide()
    $(".third_level").find(".icon_check").hide()
})

//checkbox
$('#accept_rulls').change(function () {
    if ($(this).prop('checked')) {
        $("#buttonLevel2 .continue_investment").removeAttr("disabled")
    } else {
        $("#buttonLevel2 .continue_investment").attr("disabled", "disabled")
    }
})

//calculator
let time = 0

Object.values(deposit[0]).map(currency => {
    currency.map((item, i) => {
        if (item.name === $('#typeInvestment').val()) {
            if (i == 0) {
                $('#profit').text((item.profit))
                $('#Insurance_none').text((item.insurance))
            }
            $("#totalprofit").text(0)
            $("#totalprice").text(0)
            let time = `
            <div class="col-md-3 col-lg-6 col-xl-3 col_50 col-6">
                <div class="timer_select available ${i == 0 && `selected`}">
                    <label for="time_${item.time}" class="w-100 h-00 d-inline-block">
                        <div class="time_investment available ${i == 0 ? `selected` : ''}"> ${item.time} ماهه</div>
                    </label>
                    <input type="radio" value="${item.pk}" data-value="${item.time}" name="time" onclick="change_time(this)" id="time_${item.time}" ${i == 0 ? `checked` : ``} class="d-none">
                </div>
            </div>
            `
            $(".row_time").append(time)
        }
    })
})
Object.values(price[0]).map(currency => {
    if (currency.name === $('#typeInvestment').val()) {
        $(".price_online strong").text(currency.pricebuy)
        $("#amount_user_gold").text(currency.walletBalance)
        $(".incress").attr('href', `/customer/buy/sell/currency/${currency.name}/`)
    }
})

let Insurancechange = parseFloat($('#Insurance_none').text())
$("#profitperiod").text((parseFloat($("input[name='time']:checked").attr("data-value") / 12) * (parseFloat($("#profit").text()))))


$("#amountInvestment").keyup(function (event) {
    var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
    var key = String.fromCharCode(event.which);

    var vCoin = event.key;
    var amountInvestment = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));
    let amount_user_gold = parseFloat($("#amount_user_gold").text())


    if (event.key == 'Backspace' || event.key == 'Delete') {
        if (($("#amountInvestment").val()).replace(/,/g, '').length != 0) {
            if ($('#amountInvestment').val().substr(0, 1) === ".") {
                $('#amountInvestment').val("0.")
            } else {
                if ($('#typeInvestment').val() === 0 || $('#timeInvestment').val() === 0) {

                } else {
                    let amount = parseFloat(amountInvestment)
                    let profit = parseFloat($('#profit').text())
                    let Insurance = parseFloat($('#Insurance_none').text())
                    let profitPeriod = (parseFloat($("input[name='time']:checked").attr("data-value") / 12) * (parseFloat($("#profit").text())))

                    let totalprofit = ((amount * profitPeriod) / 100) + amount
                    let a =  ((amount * profitPeriod) / 100)
                    let totalInsurance = (a * Insurancechange) / 100
                    let total = totalprofit - totalInsurance


                    if (totalprofit % 1 != 0) {
                        totalprofit = parseFloat(totalprofit.toFixed(3))
                        $("#totalprofit").text(totalprofit.toLocaleString())
                    } else {
                        $("#totalprofit").text(totalprofit.toLocaleString())
                    }
                    if (total % 1 != 0) {
                        total = parseFloat(total.toFixed(3))
                        $("#totalprice").html(total.toLocaleString())
                    } else {
                        $("#totalprice").html(total.toLocaleString())
                    }
                    if (totalInsurance % 1 != 0) {
                        $("#Insurance").text(totalInsurance.toFixed(3))
                    } else {
                        $("#Insurance").text(totalInsurance.toLocaleString())
                    }
                }
            }
            $(".error_amount").hide()
            $(".package_select .input_form.amount_input").removeClass("error")
        } else {
            $("#totalprofit").text(0)
            $("#totalprice").text(0)
            $('#Insurance').text(0)
            // $(".error_amount").show()
            // $(".package_select .input_form.amount_input").addClass("error")
        }
    }

    if (persianAlphabetAndWhiteSpace.test(event.key)) {
        if (($("#amountInvestment").val()).replace(/,/g, '').length != 0) {
            if ($('#amountInvestment').val().substr(0, 1) === ".") {
                $('#amountInvestment').val("0.")
            } else {
                if ($('#typeInvestment').val() === 0 || $('#timeInvestment').val() === 0) {

                } else {
                    let amount = parseFloat(amountInvestment)
                    let profit = parseFloat($('#profit').text())
                    let Insurance = parseFloat($('#Insurance_none').text())
                    let profitPeriod = (parseFloat($("input[name='time']:checked").attr("data-value") / 12) * (parseFloat($("#profit").text())))

                    let totalprofit = ((amount * profitPeriod) / 100) + amount
                    let a =  ((amount * profitPeriod) / 100)
                    let totalInsurance = (a * Insurancechange) / 100
                    let total = totalprofit - totalInsurance

                    if (totalprofit % 1 != 0) {
                        totalprofit = parseFloat(totalprofit.toFixed(3))
                        $("#totalprofit").text(totalprofit.toLocaleString())
                    } else {
                        $("#totalprofit").text(totalprofit.toLocaleString())
                    }
                    if (total % 1 != 0) {
                        total = parseFloat(total.toFixed(3))
                        $("#totalprice").html(total.toLocaleString())
                    } else {
                        $("#totalprice").html(total.toLocaleString())
                    }
                    if (totalInsurance % 1 != 0) {
                        $("#Insurance").text(totalInsurance.toFixed(3))
                    } else {
                        $("#Insurance").text(totalInsurance.toLocaleString())
                    }
                }
            }
            $(".error_amount").hide()
            $(".package_select .input_form.amount_input").removeClass("error")
        } else {
            $("#totalprofit").text(0)
            $("#totalprice").text(0)
            $('#Insurance').text(0)
            $(".error_amount").show()
            $(".package_select .input_form.amount_input").addClass("error")
        }
    } else if (!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && !event.keyCode == 46) {
        event.preventDefault();
    }

})

$('#typeInvestment').change(function () {
    if ($(this).val() != 0) {
        $('#amountInvestment').val("")
        $("#totalprofit").text(0)
        $("#totalprice").text(0)
        $(".row_time").empty()
        Object.values(deposit[0]).map(currency => {
            currency.map((item, i) => {
                if (item.name === $('#typeInvestment').val()) {
                    let time = `
            <div class="col-md-3 col-lg-6 col-xl-3 col_50 col-6">
                <div class="timer_select available ${i == 0 && `selected`}">
                    <label for="time_${item.time}" class="w-100 h-00 d-inline-block">
                        <div class="time_investment available ${i == 0 ? `selected` : ''}"> ${item.time} ماهه</div>
                    </label>
                    <input type="radio" value="${item.pk}" name="time" data-value="${item.time}" onclick="change_time(this)" id="time_${item.time}" ${i == 0 ? `checked` : ``} class="d-none">
                </div>
            </div>
            `
                    $(".row_time").append(time)
                    $('#profit').text((item.profit))
                    $("#totalprofit").text(0)
                    $("#totalprice").text(0)
                    if (i == 0) {
                        $('#Insurance').text((0))
                        $('#Insurance_none').text((item.insurance))
                        Insurancechange = item.insurance
                        $("#profitperiod").text((parseFloat(item.time / 12) * (parseFloat($("#profit").text()))))
                    }
                }
            })

        })
        Object.values(price[0]).map(currency => {
            if (currency.name === $('#typeInvestment').val()) {
                $(".price_online strong").text(currency.pricebuy)
                $("#amount_user_gold").text(currency.walletBalance)
                $(".incress").attr('href', `/customer/buy/sell/currency/${currency.name}/`)
            }
        })
    } else {
    }
})

change_time = (element) => {
    $(".time_investment").removeClass("selected")
    $('#amountInvestment').val("")
    $("#totalprofit").text(0)
    $("#totalprice").text(0)
    $(element).siblings("label").find(".time_investment").addClass("selected")
    if ($(element).val() != 0) {
        time = parseFloat($(element).val()) / 12
        Object.values(deposit[0]).map(currency => {
            currency.map(item => {
                if (item.name === $('#typeInvestment').val() && item.time === Number($("input[name='time']:checked").attr("data-value"))) {
                    $('#profit').text((item.profit))
                    $('#Insurance').text((0))
                    $('#Insurance_none').text((item.insurance))
                    Insurancechange = item.insurance
                    $("#profitperiod").text((((parseFloat($(element).attr("data-value"))) / 12) * (parseFloat(item.profit))))
                }
            })
        })
    }
}