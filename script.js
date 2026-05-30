// ======================
// POLL PROJECT
// ======================

document.getElementById("yesBtn").onclick = function () {
  document.getElementById("heading").innerHTML =
    "Yes! JavaScript Is Easy If You Practice Daily.";
};

document.getElementById("noBtn").onclick = function () {
  document.getElementById("heading").innerHTML =
    "JavaScript Feels Difficult Without Practice.";
};

// ======================
// QR CODE GENERATOR
// ======================

function generateQRCode() {
  const text = document.getElementById("qrText").value;

  const qrContainer = document.getElementById("qrcode");

  qrContainer.innerHTML = "";

  if (text.trim() !== "") {
    new QRCode(qrContainer, {
      text: text,
      width: 180,
      height: 180,
    });
  } else {
    alert("Please Enter Text or URL");
  }
}
