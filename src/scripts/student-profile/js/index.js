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
      window.fetch('../html/content.html').then(r => r.text()),

      window.fetch('/admin/students/student-profile/json/profile-overview.json?students_dcid=' + studentsDcid, {
        credentials: 'include'
      })
      .then(r => r.json())
    ])
    .then(results => ({
      contentHtml: results[0],
      profileOverview: results[1]
    }))
    .then(data => {
      var source = $(data.contentHtml).html();
      var template = Handlebars.compile(source);
      var html = template(data.profileOverview);
      console.log(html);
      $('body').append(html);
    });

}())
