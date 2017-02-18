console.log('app.js connected')
$(document).ready(function() {
  console.log('hi')

const $selector = $('.selector');
const $foodCategory = $('.food-category');
const $locationCategory = $('.food-category');
const $submitButton = $('.submit-button');
const $results = $('.results');
const $theForm = $('.theForm');
const theAction = $selector.val();

// let whichAction = $selector.val();
// theForm.attr('action', `/wiki/category/${whichAction}`)

$selector.on('change', function() {
  if $selector === $foodCategory; {
    $theForm.attr('action', `/wiki/category/${whichAction}`)
  // $results.HTML(wiki.category.food)
  // } else {
  // $results.HTML(wiki.category.location)
});

};
