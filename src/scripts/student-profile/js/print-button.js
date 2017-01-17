
export default function(profileIFrameUrl) {
  const btnPrint = document.getElementById('btnPrint');
  btnPrint.href = profileIFrameUrl;
  btnPrint.target = '_blank';
}