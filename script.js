const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-06-22T10:00:00+07:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  let displayText = '';
  let titleText = '';

  if (distance < 0) {
    const elapsed = Math.abs(distance);

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    displayText = `🚢💕 Kapal sedang berlayar <br>selama ${days} hari ${hours} jam ${minutes} menit ${seconds} detik!`;
    titleText = `Kapal sudah berlayar! 🚢🥰`;

  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    displayText = `Hitung mundur menuju pelayaran! 🚢💍<br>${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
    titleText = `Kapal menunggu pelayaran 🚢`;
  }

  countdown.innerHTML = displayText;
  document.title = titleText;
}

updateCountdown();
setInterval(updateCountdown, 1000);
