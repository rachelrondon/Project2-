console.log('app.js connected')
$(document).ready(function() {
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
    $('select').material_select();
    const $searchBar =  $('#search')
    const $searchButton = $('#the-search-button');
    materialize.toast('I am a toast!', 4000);
    // $(".context").mark("donut");

let timeInMs = Date.now();

if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
    console.log(Date.now)
  };
}

  // const theSearchBar = (e) => {
  //   if ($searchBar.va() === "") {
  //     $searchBar.addClass('empty');
  //   } else {
  //     $(this).val("").removeClass('empty');
  //   }
  // }
// searchButton.on('click', (e)=> {
//   // searBar.querySelecrtor(searchBar);
//   console.log(searcBar);

  // searcBar.on('blur', (e) => {

  // });
// });

console.log('hi')
  //
  // const $newForm = $('#new-form');
  //
  // if ($newForm.length >= 1){
  //   var dateInput = $newForm.find('input[type=hidden]');
  //   dateInput.val(new Date());
  // }
  // $newForm.on('submit', (e) => {
  //
  // });
  //
  // const getDate = () => {
  //   let date = new Date();
  //   console.log(this)
  // }

// const $selector = $('.selector');
// const $foodCategory = $('.food-category');
// const $locationCategory = $('.food-category');
// const $submitButton = $('.submit-button');
// const $results = $('.results');
// const $theForm = $('.theForm');
// const theAction = $selector.val();

// let whichAction = $selector.val();
// theForm.attr('action', `/wiki/category/${whichAction}`)

// $selector.on('change', function() {
//   if $selector === $foodCategory; {
//     $theForm.attr('action', `/wiki/category/${whichAction}`)
  // $results.HTML(wiki.category.food)
  // } else {
  // $results.HTML(wiki.category.location)
// });
//
});
