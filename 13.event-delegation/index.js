let element = document.getElementById("parent");

element.addEventListener("click", (data) => {
  console.log(data.target);
});
