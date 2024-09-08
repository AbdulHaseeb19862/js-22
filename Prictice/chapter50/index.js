function setAreaNum() {
  var zipcode = +document.getElementById("zipcode").value;
  var area = document.getElementById("area");
  if (zipcode === 45200) {
    area.value = "Golra";
  } else if (zipcode === 45201) {
    area.value = "Isalamabad F-7 Markaz";
  } else if (zipcode === 45320) {
    area.value = "Isalamabad Federal Board";
  } else if (zipcode === 44310) {
    area.value = "Isalamabad Allama Iqbal Open University";
  } else {
    alert("Unvalid Zip Code!");
  }
}
