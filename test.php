<!DOCTYPE html>
<html lang="ru" dir="ltr">
  <head>
    <?php include 'includes/head.php' ?>
    <title>Store</title>
  </head>
  <body onload="__setRainWeather(3)">
    <main class="__main-rain-container">

    </main>

    <script>
      AOS.init({
        duration: 400,
        once: true,
        offset: 300
      });
    </script>

    <script src="js/main.js"></script>
    <script src="js/ajax.js"></script>
  </body>
</html>
