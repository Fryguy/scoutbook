function scoutbook_checkbox_remover() {
  document.querySelectorAll('#report tr').forEach((row) => {
    var rowImages = Array.from(row.querySelectorAll('img.checkboxIcon'));
    var rowComplete = rowImages.length > 0 && rowImages.every((i) => {
      return i.src.includes("checkboxapproved") || i.src.includes("checkboxawarded") || i.src.includes("checkboxemptygray")
    });
    if (rowComplete) {
      row.style.display = 'none';
    }
  })
}

scoutbook_checkbox_remover();
