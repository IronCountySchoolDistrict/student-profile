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

  Promise.all([
      window.fetch('../html/content.html')
      .then(r => r.text()),

      window.fetch('/admin/students/student-profile/json/overview/general.json?students_dcid=' + studentsDcid, {
        credentials: 'include'
      })
      .then(r => r.json()),

      window.fetch('/admin/students/student-profile/json/overview/contacts.json?students_dcid=' + studentsDcid, {
        credentials: 'include'
      })
      .then(r => r.json())
      .then(r => {
        r.pop();
        return r;
      }),

      window.fetch(`/admin/students/student-profile/json/overview/gpa.json?students_dcid=${studentsDcid}`, {
        credentials: 'include'
      })
      .then(r => r.json())
      .then(r => {
        r.pop();
        return r;
      })
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
