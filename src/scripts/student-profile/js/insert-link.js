import $ from 'jquery';

export default function() {
  const template = $('#new-prof-template').html();
  const select = $('#std_information');
  select.prepend(template);
}
