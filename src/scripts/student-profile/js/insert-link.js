import $ from 'jquery';

export default function() {
  var template = $('#new-prof-template').html();
  var select = $('#std_information');
  select.prepend(template);
}
