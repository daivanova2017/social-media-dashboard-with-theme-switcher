$(function(){

  $('.main__heading__dark-mode__switch__toggle').change(function(){

    if (this.checked) {
      $('body').removeClass('dark-mode-body');
      $('body').addClass('light-mode-body'); 
      $('.today-overview__section__overview-card').addClass('light-mode');
      $('.social-media-card_facebook').addClass('light-mode');
      $('.social-media-card_twitter').addClass('light-mode');
      $('.today-overview__header').addClass('light-mode');
      $('.social-media-card_instagram').addClass('light-mode');
      $('.social-media-card_youtube').addClass('light-mode');
      $('.main__heading__dark-mode__switch__toggle').addClass('light-mode');
      $('.social-media-card__followers').addClass('light-mode');
      $(`.social-media-card__profile, .overview-card__text, 
      .main__followers, .main__heading__dark-mode__text`).addClass('light-mode');
      $('.today-overview__section__overview-card').addClass('light-mode');

    } 
    else {
      $('body').removeClass('light-mode-body');
      $('.social-media-card_facebook').removeClass('light-mode');
      $('.social-media-card_twitter').removeClass('light-mode');
      $('.social-media-card_instagram').removeClass('light-mode');
      $('.today-overview__header').removeClass('light-mode');
      $('.social-media-card_youtube').removeClass('light-mode');
      $('.main__heading__dark-mode__switch__toggle').removeClass('light-mode');
      $(`.social-media-card__profile, .overview-card__text, 
      .main__followers, .main__heading__dark-mode__text`).removeClass('light-mode');
      $('.social-media-card__followers').removeClass('light-mode');
      $('.today-overview__section__overview-card').removeClass('light-mode');
      $('body').addClass('dark-mode-body');
    }
  });

})