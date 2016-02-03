/*global $j*/
(function() {
    'use strict';
    var template = $j($j('#template').html());
    var select = $j('#std_information');
    select.prepend(template);
}());