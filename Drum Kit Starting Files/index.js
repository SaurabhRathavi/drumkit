let numberOfDrumButtons = document.querySelector(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("button was clicked");
  });
}
