const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const dateTime = new Date('22 may 2022')
function countDown() {
  const currentDate = new Date();
  const eventDate = new Date(dateTime)
  const totalSeconds = (eventDate - currentDate) / 1000;

  const eventDays = Math.floor((totalSeconds / 3600)/24);
  const eventHours = Math.floor((totalSeconds / 3600)%24);
  const eventMinutes = Math.floor((totalSeconds / 60)%60);
  const eventSeconds = Math.floor(totalSeconds % 60);

  days.innerHTML = eventDays
  hours.innerHTML = formatTime(eventHours);
  minutes.innerHTML = formatTime(eventMinutes);
  seconds.innerHTML = formatTime(eventSeconds);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
}

countDown()

setInterval(countDown, 1000);