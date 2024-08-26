//Calculetor buy sell

let priceBuy = parseFloat($("#amountBuy").text().replace(/,/g, ''))
let priceSell = parseFloat($("#amountSell").text().replace(/,/g, ''))
let time = 0

$("#type").change(function () {
  let type = $("#type").val()
  Object.values(price[0]).map((item, i) => {
    if (item.name === type) {
      priceBuy = parseFloat((item.pricebuy).replace(/,/g, ''))
      priceSell = parseFloat((item.pricesell).replace(/,/g, ''))

      $("#amountSell").text((item.pricesell).toLocaleString())
      $("#amountBuy").text((item.pricebuy).toLocaleString())
    }
  })
})
$('#amount').keyup(function (event) {
  var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
  var key = String.fromCharCode(event.which);

  var vCoin = event.key;
  var amount = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));

  // let amount = $(this).val()
  let totalpricesell = parseFloat(amount) * parseFloat((priceSell))
  let totalpricebuy = parseFloat(amount) * parseFloat((priceBuy))

  if (event.key == 'Backspace' || event.key == 'Delete') {
    if (($("#amount").val()).replace(/,/g, '').length != 0) {
      if ($('#amount').val().substr(0, 1) === ".") {
        $('#amount').val("0.")
      } else {
        $("#amountSell").text(totalpricesell.toLocaleString())
        $("#amountBuy").text(totalpricebuy.toLocaleString())
      }

    } else {
      $("#amountSell").text(0)
      $("#amountBuy").text(0)
    }
  }
  if (persianAlphabetAndWhiteSpace.test(event.key)) {
    if (($("#amount").val()).replace(/,/g, '').length != 0) {
      if ($('#amount').val().substr(0, 1) === ".") {
        $('#amount').val("0.")
      } else {
        $("#amountSell").text(totalpricesell.toLocaleString())
        $("#amountBuy").text(totalpricebuy.toLocaleString())
      }

    } else {
      $("#amountSell").text(0)
      $("#amountBuy").text(0)
    }
  } else if (!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && !event.keyCode == 46) {
    event.preventDefault();
  }

})

//Calculetor Deposit

$('#timeInvestment').empty()
Object.values(deposit[0]).map(currency => {
  currency.map((item, i) => {
    if (item.name === $('#typeInvestment').val()) {
      let option = `<option value="${item.time}" class="bg-white text-ColorText">${item.time} ماهه</option>`
      $('#timeInvestment').append(option)
      if (i == 0) {
        $('#profit').text((item.profit))
        $('#Insurance_none').text((item.insurance))
      }
      $("#totalprofit").text(0)
      $("#totalprice").text(0)
    }
  })
})
let Insurancechange = parseFloat($('#Insurance_none').text())
$("#profitperiod").text((parseFloat($('#timeInvestment').val() / 12) * (parseFloat($("#profit").text()))))

$('#typeInvestment').change(function () {
  if ($(this).val() != 0) {
    $('#amountInvestment').val("")
    $("#totalprofit").text(0)
    $("#totalprice").text(0)
    $('#timeInvestment').empty()
    Object.values(deposit[0]).map(currency => {
      currency.map((item, i) => {
        if (item.name === $('#typeInvestment').val()) {
          let option = `<option value="${item.time}" class="bg-white text-ColorText">${item.time} ماهه</option>`
          $('#timeInvestment').append(option)
          $('#profit').text((item.profit))
          // $('#Insurance').text((item.insurance))
          // Insurancechange = item.Insurance
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
  } else {
  }
})

$('#timeInvestment').change(function () {
  $('#amountInvestment').val("")
  $("#totalprofit").text(0)
  $("#totalprice").text(0)
  if ($(this).val() != 0) {
    time = parseFloat($(this).val() / 12)
    Object.values(deposit[0]).map(currency => {
      currency.map(item => {
        if (item.name === $('#typeInvestment').val() && item.time === Number($('#timeInvestment').val())) {
          $('#profit').text((item.profit))
          $('#Insurance').text((0))
          $('#Insurance_none').text((item.insurance))
          Insurancechange = item.insurance
          $("#profitperiod").text((time * (item.profit)))
        }
      })
    })
  }
})

$('#amountInvestment').keyup(function (event) {
  var persianAlphabetAndWhiteSpace = /[0-9 , '.']/g;
  var key = String.fromCharCode(event.which);

  var vCoin = event.key;
  var amountInvestment = parseFloat(($(this).val() + vCoin).slice(0, -1).replace(/,/g, ''));

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
          let profitPeriod = parseFloat($("#profitperiod").text())

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
    } else {
      $("#totalprofit").text(0)
      $("#totalprice").text(0)
      $('#Insurance').text(0)
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
          let profitPeriod = parseFloat($("#profitperiod").text())

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
    } else {
      $("#totalprofit").text(0)
      $("#totalprice").text(0)
      $('#Insurance').text(0)
    }
  } else if (!persianAlphabetAndWhiteSpace.test(key) && !event.keyCode == 8 && !event.keyCode == 46) {
    event.preventDefault();
  }

})

//Chart

new Chart("myChart", {
  type: "bar",
  data: {
    labels: data.map((row) => row.name),
    datasets: [
      {
        data: data.map((row) => row.count),
        backgroundColor: data.map((row) => row.bgColor),
        borderColor: data.map((row) =>
          row.borderColor ? row.borderColor : row.bgColor
        ),
        borderWidth: 4,
        borderRadius: 8,
        barThickness: 56,
        hoverBackgroundColor: data.map((row) => row.bgColor),
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 200,
        suggestedStep: 20,
        position: "right",
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        title: {
          display: true,
        },
      },
    },
    legend: {
      display: false,
    },
    plugins: {
      tooltip: {
        backgroundColor: "#222222",
        displayColors: false,
        yAlign: "bottom",
        xAlign: "center",
        padding: 10,
      },
    },
  },
  responsive: true,
});



// Change Tab Comparison
$("#Tab1NavigationComparison").click(function () {
  $("#Tab1NavigationComparison span").addClass("ActiveNavComparison");
  $("#Tab1NavigationComparison span").removeClass("NotActiveComparison");

  $("#Tab2NavigationComparison span").addClass("NotActiveComparison");
  $("#Tab2NavigationComparison span").removeClass("ActiveNavComparison");

  $("#Tab1Comparison").removeClass("hidden");
  $("#Tab2Comparison").addClass("hidden");
});

$("#Tab2NavigationComparison").click(function () {
  $("#Tab2NavigationComparison span").addClass("ActiveNavComparison");
  $("#Tab2NavigationComparison span").removeClass("NotActiveComparison");

  $("#Tab1NavigationComparison span").addClass("NotActiveComparison");
  $("#Tab1NavigationComparison span").removeClass("ActiveNavComparison");

  $("#Tab2Comparison").removeClass("hidden");
  $("#Tab1Comparison").addClass("hidden");
});

// QrCode
$(function () {
  $("#qrcodeAndroid").qrcode(`${AndroidLink}`);
  $("#qrcodeAndroid canvas").css({
    width: "100%",
    height: "100%",
    "margin-right": "auto",
  });
});

$(function () {
  $("#qrcodeIOS").qrcode(`${IOSLink}`);
  $("#qrcodeIOS canvas").css({
    width: "100%",
    height: "100%",
    "margin-right": "auto",
  });
});