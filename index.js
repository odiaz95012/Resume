function downloadResume() {
  const link = document.createElement("a");
  link.href = "/oscar_diaz_vega_resume.pdf";
  link.download = "oscar_diaz_vega_resume.pdf";
  link.click();
}
function copyToClipboard(email) {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      alert("Email copied to clipboard: " + email);
    })
    .catch((err) => {
      console.error("Unable to copy to clipboard", err);
    });
}
