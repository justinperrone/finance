/*jslint node: true */
/*global $, jQuery, alert */

"use strict";

$(function () {
  // Get the form.
  var form = $('#ajax-contact'),
      // Get the messages div.
    formMessages = $('#form-messages');
  // Set up an event listener for the contact form.
  $(form).submit(function (e) {
    // Stop the browser from submitting the form.
    e.preventDefault();
    // Serialize the form data.
    var formData = $(form).serialize();
    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    }).done(function (response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('error');
      $(formMessages).addClass('success');
      // Set the message text.
      $(formMessages).text(response);
      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    }).fail(function (data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('success');
      $(formMessages).addClass('error');
      // Set the message text.
      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occurred and your message could not be sent.');
      }
    });
  });
});

/*Header*/

/*$('#sticker').sticky({topSpacing:0});*/



/*Sports Page*/

$('.jets-vote').click(function () {
  alert("Your vote doesn't matter.");
});

/*Wrapper Height*/
var vpw = $(window).width();
var vph = $(window).height();


$('#home-wrapper').height(vph);
//$('#about-wrapper').height(vph);
//$('#portfolio-wrapper').height(vph);
//$('#contact-wrapper').height(vph);

/*Index Page*/

/*$(".logo").one("click", function() {
  $(this).addClass("imageRot");
  $('body').css({
    'background': 'rgba(0,0,0,.7)',
    'transition': '3s'
  });
});*/

$('#sports').on('mouseenter', function () {
  $('#sports p').css('display', 'inline');
  $('#sports h1').css('display', 'none');
}).on('mouseleave', function () {
  $('#sports p').css('display', 'none');
  $('#sports h1').css('display', 'inline');
});

$('#finance').on('mouseenter', function () {
  $('#finance p').css('display', 'inline');
  $('#finance h1').css('display', 'none');
}).on('mouseleave', function () {
  $('#finance p').css('display', 'none');
  $('#finance h1').css('display', 'inline');
});

$('#dumpster').on('mouseenter', function () {
  $('#dumpster p').css('display', 'inline');
  $('#dumpster h1').css('display', 'none');
}).on('mouseleave', function () {
  $('#dumpster p').css('display', 'none');
  $('#dumpster h1').css('display', 'inline');
});

$('#codepen').on('mouseenter', function () {
  $('#codepen p').css('display', 'inline');
  $('#codepen h1').css('display', 'none');
}).on('mouseleave', function () {
  $('#codepen p').css('display', 'none');
  $('#codepen h1').css('display', 'inline');
});



/*Finance Page*/

var yahoo = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22YHOO%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var google = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22GOOG%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var amazon = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AMZN%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var twitter = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22TWTR%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var facebook = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22FB%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var apple = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var jp = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22JPM%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var goldman = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22GS%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

var boa = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22BAC%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";

function searchQuote() {
  var name = $('select').val(),
    url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + name + "%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",
    stocks = function (data) {
      $('select').change();
      $(".stock-name").html(data.query.results.quote.Symbol);
      $(".result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
      $(".result").hide().fadeIn(500);
      $(".time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
      $(".change").html("Change: " + data.query.results.quote.Change);
      $(".percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
      $(".year-low").html("Year Low: " + data.query.results.quote.YearLow);
      $(".year-high").html("Year High: " + data.query.results.quote.YearHigh);
      if (data.query.results.quote.Change < 0) {
        $(".change").css({color: "red"});
        $(".percent").css({color: "red"});
      } else if (data.query.results.quote.Change > 0) {
        $(".change").css({color: "green"});
        $(".percent").css({color: "green"});
      }
    };

  $.getJSON(url, stocks);
  setTimeout(searchQuote, 6000);
}
searchQuote();

function yahooQuote() {
  var stocks = function (data) {
    $(".y-stock-name").html(data.query.results.quote.Name);
    $(".y-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".y-result").hide().fadeIn(500);
    $(".y-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".y-change").html("Change: " + data.query.results.quote.Change);
    $(".y-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".y-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".y-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".y-change").css({color: "red"});
      $(".y-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".y-change").css({color: "green"});
      $(".y-percent").css({color: "green"});
    }
  };
  $.getJSON(yahoo, stocks);
  setTimeout(yahooQuote, 6000);
}
yahooQuote();

function googleQuote() {
  var stocks = function (data) {
    $(".g-stock-name").html(data.query.results.quote.Name);
    $(".g-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".g-result").hide().fadeIn(500);
    $(".g-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".g-change").html("Change: " + data.query.results.quote.Change);
    $(".g-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".g-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".g-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".g-change").css({color: "red"});
      $(".g-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".g-change").css({color: "green"});
      $(".g-percent").css({color: "green"});
    }
  };
  $.getJSON(google, stocks);
  setTimeout(googleQuote, 6000);
}
googleQuote();

function goldmanQuote() {
  var stocks = function (data) {
    $(".gd-stock-name").html(data.query.results.quote.Name);
    $(".gd-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".gd-result").hide().fadeIn(500);
    $(".gd-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".gd-change").html("Change: " + data.query.results.quote.Change);
    $(".gd-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".gd-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".gd-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".gd-change").css({color: "red"});
      $(".gd-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".gd-change").css({color: "green"});
      $(".gd-percent").css({color: "green"});
    }
  };
  $.getJSON(goldman, stocks);
  setTimeout(goldmanQuote, 6000);
}
goldmanQuote();

function appleQuote() {
  var stocks = function (data) {
    $(".a-stock-name").html(data.query.results.quote.Name);
    $(".a-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".a-result").hide().fadeIn(500);
    $(".a-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".a-change").html("Change: " + data.query.results.quote.Change);
    $(".a-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".a-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".a-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".a-change").css({color: "red"});
      $(".a-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".a-change").css({color: "green"});
      $(".a-percent").css({color: "green"});
    }
  };
  $.getJSON(apple, stocks);
  setTimeout(appleQuote, 6000);
}
appleQuote();

function amazonQuote() {
  var stocks = function (data) {
    $(".am-stock-name").html(data.query.results.quote.Name);
    $(".am-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".am-result").hide().fadeIn(500);
    $(".am-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".am-change").html("Change: " + data.query.results.quote.Change);
    $(".am-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".am-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".am-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".am-change").css({color: "red"});
      $(".am-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".am-change").css({color: "green"});
      $(".am-percent").css({color: "green"});
    }
  };
  $.getJSON(amazon, stocks);
  setTimeout(amazonQuote, 6000);
}
amazonQuote();

function jpmQuote() {
  var stocks = function (data) {
    $(".j-stock-name").html(data.query.results.quote.Name);
    $(".j-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".j-result").hide().fadeIn(500);
    $(".j-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".j-change").html("Change: " + data.query.results.quote.Change);
    $(".j-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".j-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".j-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".j-change").css({color: "red"});
      $(".j-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".j-change").css({color: "green"});
      $(".j-percent").css({color: "green"});
    }
  };
  $.getJSON(jp, stocks);
  setTimeout(jpmQuote, 6000);
}
jpmQuote();

function twitterQuote() {
  var stocks = function (data) {
    $(".t-stock-name").html(data.query.results.quote.Name);
    $(".t-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".t-result").hide().fadeIn(500);
    $(".t-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".t-change").html("Change: " + data.query.results.quote.Change);
    $(".t-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".t-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".t-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".t-change").css({color: "red"});
      $(".t-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".t-change").css({color: "green"});
      $(".t-percent").css({color: "green"});
    }
  };
  $.getJSON(twitter, stocks);
  setTimeout(twitterQuote, 6000);
}
twitterQuote();

function fbQuote() {
  var stocks = function (data) {
    $(".f-stock-name").html(data.query.results.quote.Name);
    $(".f-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".f-result").hide().fadeIn(500);
    $(".f-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".f-change").html("Change: " + data.query.results.quote.Change);
    $(".f-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".f-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".f-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".f-change").css({color: "red"});
      $(".f-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".f-change").css({color: "green"});
      $(".f-percent").css({color: "green"});
    }
  };
  $.getJSON(facebook, stocks);
  setTimeout(fbQuote, 6000);
}
fbQuote();

function boaQuote() {
  var stocks = function (data) {                  
    $(".b-stock-name").html(data.query.results.quote.Name);
    $(".b-result").html("Live Price: $" + data.query.results.quote.LastTradePriceOnly);
    $(".b-result").hide().fadeIn(500);
    $(".b-time").html("Valid Time: " + data.query.results.quote.LastTradeTime);
    $(".b-change").html("Change: " + data.query.results.quote.Change);
    $(".b-percent").html("Percent: " + data.query.results.quote.ChangeinPercent);
    $(".b-year-low").html("Year Low: " + data.query.results.quote.YearLow);
    $(".b-year-high").html("Year High: " + data.query.results.quote.YearHigh);
    if (data.query.results.quote.Change < 0) {
      $(".b-change").css({color: "red"});
      $(".b-percent").css({color: "red"});
    } else if (data.query.results.quote.Change > 0) {
      $(".b-change").css({color: "green"});
      $(".b-percent").css({color: "green"});
    }
  };
  $.getJSON(boa, stocks);
  setTimeout(boaQuote, 6000);
}
boaQuote();