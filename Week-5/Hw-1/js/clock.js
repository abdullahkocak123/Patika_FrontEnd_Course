let userName = prompt("Adınız nedir?");
document.getElementById("myName").textContent = userName;

function showTime() {
  let now = new Date();
  //   to use time and date without any change:
  //   document.getElementById("myClock").textContent = now;

  // to use formatted time and day:

  // time:
  let time = now.toLocaleTimeString("tr-TR");

  // day in Turkish:
  let day = now.toLocaleDateString("tr-TR", { weekday: "long" });

  document.getElementById("myClock").textContent = time + " " + day;
}

showTime();

// to update in every second:
setInterval(showTime, 1000);
