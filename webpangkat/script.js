const tombol = document.getElementById('tombol');
tombol.addEventListener('click',function pangkat(){
    const display = document.getElementById('hasil');
    const angka = document.getElementById('number').value
    const power = document.getElementById('power').value
    const hasil = angka** power;
    display.innerText = `hasil dari ${angka} pangkat ${power} adalah ${hasil}`
    console.log(angka)
}
)