function startTime() {
    const today = new Date();
    let h = today.getHours(); 
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s + " CEST";
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  
  document.querySelectorAll(".accordion-item").forEach((item) => {
    item.querySelector(".accordion-item-header").addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
  
  const backToTopButton = document.querySelector("#back-to-top");
  
  backToTopButton.onclick = () =>
    document.documentElement.scroll({
      top: 0,
      behavior: "smooth"
    });