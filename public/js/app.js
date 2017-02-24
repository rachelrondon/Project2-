$(document).ready(function() {
  console.log('app.js connected')
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('select').material_select();
    $('.collapsible').collapsible();

    const $titleInputField = $('.title-input-field')
    const $searchButton = $('#the-search-button');
    const $theButton = $('#the-button')
    const $newPostButton = $('#new-post-submit-button');

});
