footerDateAndTime();

function footerDateAndTime()
{
  document.getElementById("date-time").innerHTML = date();
  document.getElementById("year").innerHTML = date(true);
}

function date(yearOnly = false)
{
  var dt = new Date();
  year = dt.getFullYear();
  if (yearOnly)
  {
    return year;
  }
  month = dt.getMonth() + 1;
  day = dt.getDate();
  hour = dt.getHours();
  hour = hour < 10 ? `0${hour}` : hour;
  minute = dt.getMinutes();
  minute = minute < 10 ? `0${minute}` : minute;
  second = dt.getSeconds();
  second = second < 10 ? `0${second}` : second;
  return `${month}/${day}/${year} ${hour}:${minute}:${second}`;
}
