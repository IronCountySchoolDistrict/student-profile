import $ from 'jquery';

export default function() {
    $(() => {
        const insertElem = $('#btn-studentBackpack');
        const spLinkTemplate = $('#sp-link-template').html();
        insertElem.after(spLinkTemplate);
    });
}