$(function(){

  $('.main__heading__dark-mode__switch__toggle').change(function(){

    if (this.checked) {
      $('body').removeClass('dark-mode-body');
      $('body').addClass('light-mode-body');

      $('div').addClass('light-mode');
      $('h1').addClass('light-mode');
      $('h2').addClass('light-mode');
      $('p').addClass('light-mode');
      $('label').addClass('light-mode');
      $('span').addClass('light-mode');
      $('header').addClass('light-mode');
      $('input').addClass('light-mode');
    } 
    else {
      $('body').removeClass('light-mode-body');

      $('div').removeClass('light-mode');
      $('h1').removeClass('light-mode');
      $('h2').removeClass('light-mode');
      $('label').removeClass('light-mode');
      $('p').removeClass('light-mode');
      $('span').removeClass('light-mode');
      $('header').removeClass('light-mode');
      $('input').removeClass('light-mode');

      $('body').addClass('dark-mode-body');
    }
  });

})