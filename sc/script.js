const add = document.getElementById("add");
const text = document.getElementById("todo");
const wadah = document.getElementById("list");
const clearAll = document.getElementById("clearAll");
//menambah todolist
add.addEventListener("click", function () {
  if (text.value === "") {
    alert("masukan tulisan dulu blok");
  } else {
    let newtodo = `<div class="alert alert-info d-flex" role="alert" ><p class="fw-bold w-75">${text.value}</p><button type="submit"  class="ms-auto btn btn-danger" onclick="hapus(this)">X</button><button type="submit" onclick="warna(this)"class="ms-auto btn btn-success">V</button></div>`;
    wadah.insertAdjacentHTML("afterbegin", newtodo);
    text.value = "";
  }
});
//menghapus todolist
function hapus(el) {
  el.parentElement.remove();
}
//berubah warna jika di pencet /sudah di lakukan
function warna(el) {
  el.parentElement.classList.toggle("selesai");
}
//menghapus semua list
clearAll.addEventListener('click',function(){
  /*wadah.removeChild(wadah.firstChild);*/
  alert('fitur sedang maintenance')
});