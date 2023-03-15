function tambah(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 + a2;
    frm.hasil.value = total;
}

function kurang(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 - a2;
    frm.hasil.value = total;
}

/* tugas 4 
1. lengkapilaj form dari latihan 16js menggunakan css dan table
2. perbagus tampilannya
3. lengkapi perhitungannya dengan :
- pembagian
- perkalian
- pangkat
4. jika form input dari angka 1 dan 2 kosong dan user klik button,
maka tampilkan "Maaf angka belum terisi" 
*/
