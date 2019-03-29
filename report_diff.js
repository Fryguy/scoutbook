(function() {
  function remove_completed_lines() {
    document.querySelectorAll('#report tr').forEach((row) => {
      var rowImages = Array.from(row.querySelectorAll('img.checkboxIcon'))
      if (rowImages.length > 0 && rowImages.every(image_is_complete)) {
        row.style.display = 'none'
      }
    })
  }

  function add_email_buttons() {
    var i = 0
    var mainRow = document.querySelector('#report tbody tr')
    mainRow.querySelectorAll("td").forEach((col) => {
      var button = document.createElement("button")
      button.style.width = "18px"
      button.style.height = "18px"
      button.style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAArUlEQVQ4jd3SsQ3CUAwE0BcEEkgwAiswAl0WQGzADmxDiYLEJimZgCodA1CQUGCJkBBBChpOcuGz72z5f/4GGUpUX0aJfd2gxKzHwAluMAgiwaqHwbqmJda6IP1CnEZv1TRYosA2NmoiiVoRvS0DmCPHEdNafRpcHj11TSsZY4cTFhGn4MYdmtcksME5YvOm/tHgEyqeT1Fh1EM88vg7hkEccPX++l3Tsx4Df4g7j1sv6gp0FnYAAAAASUVORK5CYII=)"
      button.onclick = generate_email
      button.scoutbook_report_column = i++
      col.appendChild(document.createElement("br"))
      col.appendChild(button)
    })
  }

  function generate_email() {
    var email = ""
    document.querySelectorAll('#report tr').forEach((row) => {
      var rowImages = Array.from(row.querySelectorAll('img.checkboxIcon'))
      if (rowImages.length > 0 && !image_is_complete(rowImages[this.scoutbook_report_column])) {
        desc = row.querySelector("th").innerHTML.trim()
        if (!desc.startsWith("<strong>") || !desc.includes("v201")) {
          email += desc + "\n"
        }
      }
    })
    copy_to_clipboard(email)
  }

  function image_is_complete(image) {
    return image.src.includes("checkboxapproved") || image.src.includes("checkboxawarded") || image.src.includes("checkboxemptygray")
  }

  function copy_to_clipboard(text) {
    const el = document.createElement('textarea')
    el.value = text;
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  remove_completed_lines()
  add_email_buttons()
})();
