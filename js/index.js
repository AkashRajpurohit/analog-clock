function clock()
    {
      var hourhand = document.getElementById("hourhand");
      var minutehand = document.getElementById("minutehand");
      var secondhand = document.getElementById("secondhand");

      var timing = new Date();
      var hrs = timing.getHours() % 12; // 0 - 23
      var min = timing.getMinutes();
      var sec = timing.getSeconds();

      var hrDeg = (hrs * 30) + (0.5 * min); // every hour, 30 deg. 30 / 60
      var minDeg = (min * 6) + (0.1 * sec); // every minute, 6 deg. 6 / 60
      var secDeg = sec * 6; // 360 / 60

      hourhand.style.transform = 'rotate(' + hrDeg + 'deg)';
      minutehand.style.transform = 'rotate(' + minDeg + 'deg)';
      secondhand.style.transform = 'rotate(' + secDeg + 'deg)';

      setTimeout(clock,1000);
    };
    
clock();