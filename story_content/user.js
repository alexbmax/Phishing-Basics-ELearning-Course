function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5zhwh4pn8oY":
        Script1();
        break;
  }
}

function Script1()
{
  var date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0');
var yyyy = date.getFullYear();
date = mm + '/' + dd + '/' + yyyy;
var player = GetPlayer();
var name = player.GetVar("UserName");
var doc = new jsPDF({
    orientation: 'landscape'
})
    var img = new Image;
img.onload = function() {
    doc.addImage(this, 0, 0, 297, 210);
    doc.setFontSize(27);
    doc.setTextColor(0, 0, 0);
    doc.setFont('verdana-bold', 'normal'); 
    doc.text(name, (doc.internal.pageSize.width / 2), 98, null, null, 'center');
    doc.setFont('verdana', 'regular'); 
doc.setFontSize(13);
doc.text(date, (doc.internal.pageSize.width / 2), 155, null, null, 'center');
doc.save("PhishingCertificate.pdf");
}; 
img.crossOrigin = ""; 
img.src = "Phishing Course Certificate.png"; 
}

