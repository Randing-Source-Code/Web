console.log("Ini Eksternal");

let a = "40";
const b = 20;

let r = a / b;
console.log(b < 30);

var y = null;

let x;
console.log(y);
console.log(x);

function randing() {
  console.log("Nama saya rezieq");
  let f = "Jokwi ";
  let g = "3 periode";
  console.log(f + g);
}

randing();

function persegi(q) {
  return q * q;
}

console.log(persegi(3));

let mahasiswa = {
  nama: "Lutfi",
  prodi: "SI",
  angkatan: 2021,
};

delete mahasiswa.prodi;

console.log(mahasiswa);

let dosen = [
  {
    nama: "Pak putut",
    matkul: "web",
  },
  {
    nama: "Pak hario",
    matkul: "Keamaanan informasi",
  },
];

dosen.push = {
  nama: "Pak Irsyad",
  matkul: "PBO",
};

dosen.splice(0, 2);

console.log(dosen);

let p = 8;
let k = "rezieq";

if (k == "rezieq" && p > 10) {
  console.log("benar kamu");
} else if (p > 5) {
  console.log("hampir benar");
} else {
  console.log("salah");
}

let popup = document.getElementById("tombol");
popup.onclick = pesan;

function pesan() {
  alert("KOMAR");
}

let raja = document.getElementById("presiden");

raja.innerHTML = "Presiden ku Jokowi";

let tombol = document.getElementById("masuk");
tombol.onclick = login;

document.addEventListener("submit", function (e) {
  e.preventDefault();

  let namaLog = document.getElementById("nama").value;
  let passLog = document.getElementById("pass");

  if (namaLog == "taesar" && passLog.value == "123") {
    console.log("Benar");
    window.location.href = "beranda.html";
  } else {
    console.log("salah");
  }
});

try {
  let df = document.getElementById("mendaftar");
  df.onclick = daftar;
} catch (error) {}

try {
  let lg = document.getElementById("masuk");
  lg.onclick = login;
} catch (error) {}

function daftar(e) {
  e.preventDefault();

  let nama = document.getElementById("st_nama").value;
  let pass = document.getElementById("st_pass").value;

  if (nama.length == 0 && pass.length == 0) {
    console.log("Masukkan data");
    alert("tidak boleh kosong");
  } else {
    console.log("Berhasil daftar");
    localStorage.setItem("nama_user", nama);
    localStorage.setItem("pass_user", pass);
    alert("berhasil daftar");
  }
}

function login(e) {
  e.preventDefault();

  let namaLog = document.getElementById("nama").value;
  let passLog = document.getElementById("pass");

  let locNama = localStorage.getItem("nama_user");
  let locPass = localStorage.getItem("pass_user");

  if (namaLog == locNama && passLog.value == locPass) {
    alert("kamu berhasil masuk");
    window.location.href = "beranda.html";
  } else {
    alert("Salah");
  }
}
