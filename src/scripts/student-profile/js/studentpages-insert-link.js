/* global students_dcid */
import $ from 'jquery';
import { template } from 'underscore';

/**
 * sort two DOM Elements based on the unicode sort of the their innerHTML text
 * @param  {Element} a
 * @param  {Element} b
 * @return {number}
 */
function _sortAlpha(a, b) {
  return a.innerHTML.toLowerCase() > b.innerHTML.toLowerCase() ? 1 : -1;
}

/**
 * removes extra <option> elements from the [name="page"] select,
 * inserts @param insertOption into the select element, sorts it,
 * then replaces the unsorted <option> elements with the newly sorted
 * collection of option elements
 *
 * @param {jQuery} [name="page"] select
 * @param {jQuery} option to be inserted into @param pageSelect
 * @return {null} modifies DOM, so return null
 */
function _alphabeticOptionInsert(pageSelect, insertOption) {
  // remove extra option elements
  const selectScreensOptions = pageSelect.find('option:contains("Select screens")');
  const selectScreensSeparator = selectScreensOptions.next();
  const formsOptionsGroup = pageSelect.find('optgroup');
  const formsOptions = formsOptionsGroup.length ? formsOptionsGroup.nextAll() : $();

  if (selectScreensOptions.length) {
    selectScreensOptions.remove();
  }
  if (selectScreensSeparator.length) {
    selectScreensSeparator.remove();
  }
  if (formsOptionsGroup.length) {
    formsOptionsGroup.remove();
  }
  if (formsOptions.length) {
    formsOptions.remove();
  }
  

  // insert new option into DOM
  pageSelect.append(insertOption);
  // sort options, which now includes the new insertOption
  const sortedOptions = pageSelect.find('option').sort(_sortAlpha);
  // remove unsorted options
  pageSelect.find('option').remove();

  // insert newly sorted options
  pageSelect.append(sortedOptions);

  // restore extra options
  if (selectScreensOptions.length) {
    pageSelect.prepend(selectScreensSeparator);
  }

  if (selectScreensSeparator.length) {
    pageSelect.prepend(selectScreensOptions);
  }
  if (formsOptionsGroup.length) {
    pageSelect.append(formsOptionsGroup);
    if (formsOptions.length) {
      pageSelect.append(formsOptions);
    }
  }
}

export default function() {
  let contentDocument;
  
  // Detect if this script is running on a page with frames
  if ($(top.document).find('frame').length) {
    contentDocument = top.frames['content'].document;
  } else {
    contentDocument = document;
  }
  
  const pageSelect = $(contentDocument).find('[name="page"]');
  if (pageSelect.length) {
    fetch('/scripts/student-profile/html/studentpages-student-profile.html', {
      credentials: 'include'
    })
      .then(r => r.text())
      .then(r => {
        const renderedTemplate = template(r);
        const compiledTemplate = renderedTemplate({
          students_dcid: students_dcid
        });
        _alphabeticOptionInsert(pageSelect, compiledTemplate);
      });
  }
}
