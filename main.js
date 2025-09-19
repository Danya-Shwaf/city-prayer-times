let date=new Date();
const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
};
const arabicDate = new Intl.DateTimeFormat('ar-EG' , options).format(date);
document.querySelector(".date").innerHTML =arabicDate;

let citySelected = document.getElementById("city-select");
function getTimings(city,country) {
      const url =`https://api.aladhan.com/v1/timingsByCity/{date}?city=${city} &country=${country}`;
      fetch(url)
      .then((response) => response.json())
      .then((myData) => {
            let timings = myData.data.timings;
            document.getElementById("alfajer").innerHTML = timings.Fajr;
            document.getElementById("alshrouk").innerHTML = timings.Sunrise;
            document.getElementById("althher").innerHTML = timings.Dhuhr;
            document.getElementById("alaser").innerHTML = timings.Asr;
            document.getElementById("almegreb").innerHTML = timings.Maghrib;
            document.getElementById("aleshaa").innerHTML = timings.Isha;
      })
      .catch((error) => {
            console.log(error);
      });
      };

getTimings("Saudi Arabia", "SA");
citySelected.onchange = function (ele) {
      let city = document.getElementById("city-select").value.split("-")[0];
      let country = document.getElementById("city-select").value.split("-")[1];
      console.log(city,country);
      getTimings(city,country);
}