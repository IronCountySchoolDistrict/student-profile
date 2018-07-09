import $ from 'jquery';
import Cookie from 'jquery.cookie';
import guardianLinkTemplate from '../html/guardian-link-template.html';

import guardianSass from '../sass/guardian.scss';

$(() => {
    const insertElem = $('#btn-studentBackpack');
    insertElem.after(guardianLinkTemplate);
});