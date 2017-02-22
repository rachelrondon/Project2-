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

    const body = document.querySelector('body')
    console.log('hello', body)

$theButton.on('click', (e)=> {
  console.log('hello')
})
  // $.ajax({
  //   url: `http://localhost:3000/wiki/ + ${results}`,
  //   dataType: 'json',
  //   method:'GET',
  // })
  // .then((response) => {
  //   console.log(resonse)
  // })
  // .catch((err) => {
  //   console.log('ERROR')
  // })


console.log('hi')

});
