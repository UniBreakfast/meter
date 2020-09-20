const meterBtn = document.querySelector(".meter-test-btn");
const meter = document.querySelector("#path2253");

meterBtn.addEventListener("click", () => {
  const angle = Math.floor(Math.random() * 180 - 90);
  console.log(angle);
  document
    .querySelector(".needle")
    .style.setProperty("--rotate", `rotate(${angle}deg)`);
});

// setInterval(() => {
//   document
//     .querySelector(".needle")
//     .style.setProperty(
//       "--rotate",
//       `rotate(${Math.floor(Math.random() * 180 - 90)}deg)`
//     );
// }, 2000);
