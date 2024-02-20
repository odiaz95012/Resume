function downloadResume() {
  const baseUrl = window.location.origin;
  const link = document.createElement("a");
  link.href = baseUrl + "/oscar_diaz_vega_resume.pdf";
  link.download = "oscar_diaz_vega_resume.pdf";
  link.click();
}


