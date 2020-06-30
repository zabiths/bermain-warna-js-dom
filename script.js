// Button Ubah Warna.
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function () {
 // document.body.style.backgroundColor = 'lightblue';
 // document.body.setAttribute('class', 'biru-muda');
 document.body.classList.toggle('biru-muda');
}


// Button Acak Wana.
// kita buat dulu buttonnya.
const tAcakWarna = document.createElement('button');
// lalu kita buat textnode nya.
const teksTombol = document.createTextNode('Acak Warna');
// selanjutnya kita gabungan kan textnode dan buttonnya.
tAcakWarna.appendChild(teksTombol);
// lanjut kita buat buat tipe attributenya.
tAcakWarna.setAttribute('type', 'button');

// lalu kita letakan posisi nya setelah buttton tUbahWarna.
tUbahWarna.after(tAcakWarna);

// lalu button yg baru kita buat tadi kita buat fungsi nya yaitu menghasilkan warna random setiap kita klik tombol nya.
tAcakWarna.addEventListener('click', function () {
 // dibawah ini berfungsi meembuat warna random.
 // Math.round digunakan untuk membuat bilangan bulat.
 const r = Math.round(Math.random() * 255 + 1);
 const g = Math.round(Math.random() * 255 + 1);
 const b = Math.round(Math.random() * 255 + 1);
 // lalu dibawah ini merupakan perintah untuk merubah warna nya mengunakan warna rgb.
 document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})


// Slider Range
// Kita tankap dulu slidernya menggunakan querySelector karna dia ga punya id dan class. 
// Javacript tolong carikan saya input yang "name" nya adalah sMerah, sHijau, sBiru.
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// dibawah ini syntax untuk menjalankan "event"nya menggunakan addEventListener. lalu di"html"nya kita beri nilai "min" dan "max"nya untuk memberi batasan slidernya 
sMerah.addEventListener('input', function () {
 // value dibawah  ini berfumgsi untuk mengambil nilai yg ada didalam element input, apapun elemen input nya mau texfield, comboBox, radioButton, checkBox kita bisa ambil valuenya.
 const r = sMerah.value;
 const g = sHijau.value;
 const b = sBiru.value;
 // dibawah ini syntax untuk mengubah warna "red" nya.
 document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});

sHijau.addEventListener('input', function () {
 const r = sMerah.value;
 const g = sHijau.value;
 const b = sBiru.value;
 document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});

sBiru.addEventListener('input', function () {
 const r = sMerah.value;
 const g = sHijau.value;
 const b = sBiru.value;
 document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});


document.body.addEventListener('mousemove', function (event) {
 // posisi mouse
 // // ada dua yaitu sumbu X (tas, bawah)dan sumbu Y(kiri, kanan).
 // consoleg.log(event.clienX);
 // ukuran browser
 // console.log(window.innerWidth);
 // innnerWidht dsni berfungsi untuk mengetahui "lebar dari document" tapi ia dikelola oleh window jadi perintahnya "window". begitu juga dengan innerHeight.
 // xPos disini maksudnya posisi sumbu X.
 // YPos disini maksudnya posisi sumbu Y.
 // sumbu X akan mengganti "red", sumbu Y mengganti "gree", dan warna "blue"nya kita buat 100 saja.  
 const xPos = Math.round((event.clientX / window.innerWidth) * 255);
 const yPos = Math.round((event.clientY / window.innerHeight) * 255);
 document.body.style.backgroundColor = 'rgb(' + xPos + ', ' + yPos + ',100)';
});