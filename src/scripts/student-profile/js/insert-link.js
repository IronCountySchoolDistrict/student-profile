import $ from 'jquery';

$(() => {
  const template = $('#new-prof-template').html();
  const select = $('#std_information');
  select.prepend(template);
});
