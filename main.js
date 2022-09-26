let clockSound = new Audio("watch.mp3");
setInterval(() => {
  clockSound.play();
  clockSound.loop = true;
  date = new Date();
  htime = date.getHours();
  mtime = date.getMinutes();
  stime = date.getSeconds();
  hrort = 30 * htime + mtime / 2;
  mrot = 6 * mtime;
  srot = 6 * stime;
  hour.style.transform = `rotate(${hrort}deg)`;
  minute.style.transform = `rotate(${mrot}deg)`;
  second.style.transform = `rotate(${srot}deg)`;
}, 1000);
