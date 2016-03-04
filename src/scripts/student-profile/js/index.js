function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

(function () {
  var studentsDcid = getParameterByName('frn')
    .slice(3);
  var yearId = getParameterByName('yearid');

  Promise.all([
      window.fetch('../html/content.html')
      .then(r => r.text()),

      window.fetch('/ws/schema/query/com.icsd.sp.overview.general', {
        credentials: 'include',
        method: 'post',
        body: JSON.stringify({
          students_dcid: studentsDcid
        })
      })
      .then(r => r.json()),

      window.fetch('/ws/schema/query/com.icsd.sp.overview.contacts', {
        credentials: 'include',
        method: 'post',
        body: JSON.stringify({
          students_dcid: studentsDcid
        })
      })
      .then(r => r.json()),

      window.fetch('/ws/schema/query/com.icsd.sp.overview.gpa', {
        credentials: 'include',
        method: 'post',
        body: JSON.stringify({
          students_dcid: studentsDcid,
          yearid: yearId
        })
      })
      .then(r => r.json())
    ])
    .then(results => ({
      contentHtml: results[0],
      context: {
        profileOverview: results[1],
        studentContacts: results[2],
        gpa: results[3]
      }
    }))
    .then(data => {
      var source = $(data.contentHtml)
        .html();
      var template = Handlebars.compile(source);
      var html = template(data.context);
      $('body')
      .append(html);
    });

}())
