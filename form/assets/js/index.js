document.addEventListener("DOMContentLoaded", function () {
  const inputMaxLengthOnLoad = document.getElementById("inputNama").maxLength;
  document.getElementById("sisaKarakter").innerText = inputMaxLengthOnLoad;

  // oninput
  document.getElementById("inputNama").addEventListener("input", function () {
    const jumlahKarakterDiketik = document.getElementById("inputNama").value.length;
    const jumlahKarakterMaksimal = document.getElementById("inputNama").maxLength;

    console.log("Jumlah karakter diketik: " + jumlahKarakterDiketik);
    console.log("Jumlah karakter maksimal: " + jumlahKarakterMaksimal);

    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    document.getElementById("sisaKarakter").innerText = sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate == 0) {
      document.getElementById("sisaKarakter").innerText = "Anda mencapai batas karakter!";
    } else if (sisaKarakterUpdate <= 5) {
      document.getElementById("notifikasiSisaKarakter").style.color = "red";
    } else {
      document.getElementById("notifikasiSisaKarakter").style.color = "black";
    }
  });

  // onfocus
  document.getElementById("inputNama").addEventListener("focus", function () {
    console.log("Input nama sedang fokus");
    document.getElementById("notifikasiSisaKarakter").style.visibility = "visible";
  });

  // onblur
  document.getElementById("inputNama").addEventListener("blur", function () {
    console.log("Input nama tidak fokus lagi");
    document.getElementById("notifikasiSisaKarakter").style.visibility = "hidden";
  });
});
