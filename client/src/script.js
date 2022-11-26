var btn = document.getElementById("btnFollow");
btn.addEventListener("mouseover", function () {
  btn.textContent = "Unfollow";
});
btn.addEventListener("mouseout", function () {
  btn.textContent = "Followed";
});

console.log(document.getElementById("headerHome"));
