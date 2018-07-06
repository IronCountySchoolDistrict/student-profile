import $ from 'jquery';

export default function(profileIFrameUrl) {
  if (btnPrint) {
    const btnPrint = document.getElementById('btnPrint');
    btnPrint.href = profileIFrameUrl;
    btnPrint.target = '_blank';
  } else {
    const btnPrint = $('.icon-btn-print').find('a').get(0);
    btnPrint.href = profileIFrameUrl;
    btnPrint.target = '_blank';
  }
}
