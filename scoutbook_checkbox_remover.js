function scoutbook_checkbox_remover() {
  document.querySelectorAll('#report tr').forEach((row) => {
    var img = row.querySelector('img.checkboxIcon');
    if (img && (img.src.includes("checkboxapproved") || img.src.includes("checkboxawarded") || img.src.includes("checkboxemptygray"))) {
      row.style.display = 'none';
    }
  });
}();
