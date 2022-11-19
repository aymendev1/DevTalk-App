alert("hello");

var btn = document.getElementById("btnFollow");
console.log(btn);

btn.addEventListener("mouseover", function () {
  btn.textContent = "Unfollow";
});
btn.addEventListener("mouseout", function () {
  btn.textContent = "Followed";
});
