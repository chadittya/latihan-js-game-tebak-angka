var chances = 3,
  pGuess = parseInt(prompt("Tebak Angka antar 1-10: ")),
  pChances = 1,
  output = "";

// get random number AI
var numAnswer = Math.floor(Math.random() * 10) + 1;
console.log(numAnswer);

while (pChances < chances) {
  if (pGuess == numAnswer) {
    pChances += 3;
    output = alert("Angka yang kamu tebak BENAR!!!\nAngkanya adalah: " + numAnswer);
  } else if (pGuess < numAnswer) {
    output = confirm("Angka kurang BESAR\nKesempatanmu tinggal: " + (chances - pChances) + "\nMau tebak lagi?");
    pGuess = parseInt(prompt("Tebak Angka antar 1-10: "));
  } else if (pGuess > numAnswer) {
    output = confirm("Angka kurang KECIL\nKesempatanmu tinggal: " + (chances - pChances) + "\nMau tebak lagi?");
    pGuess = parseInt(prompt("Tebak Angka antar 1-10: "));
  } else {
    pChances += 3;
    output = alert("Inputan bukan angka");
  }
  pChances++;
}
if (pChances >= chances && pGuess != numAnswer) {
  output = alert("Kesempatan habis, angka yang benar adalah: " + numAnswer + "\nTerimakasih sudah bermain!!!");
} else if (pChances >= chances && pGuess == numAnswer) {
  alert("Angka yang kamu tebak BENAR!!!\nAngkanya adalah: " + numAnswer + "\nTerimakasih sudah bermain!!!");
} else {
  alert("Terimakasih sudah bermain!!!");
}
