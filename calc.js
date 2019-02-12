$(document).ready(function(){
  
   $('.btn').click(function(){
    let val = $(this).html()
    let previousCalc = ''
    if (val === "CE") {
      if ($('.display-style').val() === 'Error') {
        $('.display-style').val('');
      }
      else {
        $('.display-style').val($('.display-style').val().substring(0, $('.display-style').val().length - 1));
      }
    }
    else if (val === "C") {
      $('.display-style').val(''); 
      $('.previous-calc').empty('');
    }
    else if (val === "=") {
      try {
        $('.previous-calc').empty('');
        let previousCalc = $('.display-style').val() + "=" + (eval($('.display-style').val()));
        $('.display-style').val(eval($('.display-style').val()));
        $('.previous-calc').append(previousCalc);
      } catch(err) {
        let previousCalc = $('.display-style').val() + '=' + 'Error';
        $('.display-style').val('Error');
        $('.previous-calc').append(previousCalc); 
      }
    }
    else {
      var total = $('.display-style').val($('.display-style').val() + val); 
    }
  });
  
});