const container = document.getElementById("artistContainer");
const nextBtn = document.getElementById("nextArtist");
const prevBtn = document.getElementById("prevArtist");

nextBtn.addEventListener("click", () => {
  container.scrollBy({ left: 150, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  container.scrollBy({ left: -150, behavior: "smooth" });
});
const playPauseBtn = document.getElementById("playPause");
const icon = playPauseBtn.querySelector("i");

playPauseBtn.addEventListener("click", () => {
  if (icon.classList.contains("fa-play")) {
    icon.classList.remove("fa-play");
    icon.classList.add("fa-pause");
    // audio.play();
  } else {
    icon.classList.remove("fa-pause");
    icon.classList.add("fa-play");
    // audio.pause();
  }
});

function seek(e) {
  const bar = e.currentTarget;
  const clickX = e.offsetX;
  const width = bar.offsetWidth;
  const percent = (clickX / width) * 100;
  document.getElementById("progressBar").style.width = `${percent}%`;
}
