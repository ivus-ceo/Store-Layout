<?php
  declare(strict_types = 1);

  session_start();

  include 'includes/autoloader.php';

  $link = new DataBase();

  include 'scripts/functions.php';
  include 'scripts/login-user.php';
  include 'scripts/upload-user-image.php';

  require 'scripts/ExchangeRatesAPI/vendor/autoload.php';

  use \BenMajor\ExchangeRatesAPI\ExchangeRatesAPI;
  use \BenMajor\ExchangeRatesAPI\Response;
  use \BenMajor\ExchangeRatesAPI\Exception;

  $lookup = new ExchangeRatesAPI();
  $rates = $lookup->setBaseCurrency('USD')->fetch();

  $jsonRates = $rates->getRates();

  //var_dump($jsonRates);
  //echo $jsonRates['RUB'];
?>

<!DOCTYPE html>
<html lang="ru" dir="ltr">
  <head>
    <?php include 'includes/head.php' ?>
    <title>Store</title>
  </head>
  <body>
    <main class="__main-container-wrapper">
      <nav class="__navbar-container">
        <div class="__nav-upper-row">
          <div class="__upper-left-column">
            <menu class="__dropdown-menu">
              <div class="__menu-title"><img src="media/icons/flags/4-russia.png"><small>Русский<i class="fas fa-caret-down"></i></small></div>
              <div class="__menu-content">
                <a href="#"><img src="media/icons/flags/4-russia.png">Русский</a>
                <a href="#"><img src="media/icons/flags/5-kazakhstan.png">Казахский</a>
                <a href="#"><img src="media/icons/flags/1-usa.png">English (US)</a>
                <a href="#"><img src="media/icons/flags/2-canada.png">English (CA)</a>
                <a href="#"><img src="media/icons/flags/6-united-kingdom.png">English (UK)</a>
                <a href="#"><img src="media/icons/flags/3-australia.png">English (AU)</a>
              </div>
            </menu>

            <menu class="__dropdown-menu">
              <div class="__menu-title"><small>KZT<i class="fas fa-caret-down"></i></small></div>
              <div class="__menu-content">
                <a href="#">USD</a>
                <a href="#">CAD</a>
                <a href="#">RUB</a>
                <a href="#">KZT</a>
                <a href="#">GBP</a>
              </div>
            </menu>

            <a href="tel:123"><small>+7 (777) 577-99-81</small></a>
          </div>

          <div class="__upper-right-column">
            <a href="#"><small>Поддержка</small></a>
            <a href="#"><small>Доставка</small></a>
            <a href="#"><small>Гарантия</small></a>
            <a href="#"><small>Контакты</small></a>
          </div>
        </div>

        <div class="__nav-middle-row">
          <div class="__middle-logo">
            <a href="./"><h1>LOGO</h1></a>
          </div>

          <div class="__middle-search">
            <form action="./" method="POST">
              <input type="text" name="search-name" placeholder="Поиск" required>
              <button type="submit">Найти</button>
            </form>
          </div>

          <div class="__middle-buttons">
            <a href="#">
              <div class="__button">
                <i class="far fa-user"></i>
                <p>Войти</p>
              </div>
            </a>

            <a href="#">
              <div class="__button">
                <i class="far fa-shopping-cart"></i>
                <p>Корзина</p>
                <main>99</main>
              </div>
            </a>
          </div>
        </div>

        <div class="__nav-bottom-row">
          <ul>
            <li><a href="#"><i class="far fa-bars"></i>Все категории</a></li>
            <li><a href="#">Оборудование</a></li>
            <li><a href="#">Комплектующие</a></li>
            <li><a href="#">Пластики</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Адгезия</a></li>
            <li><a href="#">Аксессуары</a></li>
          </ul>
        </div>
      </nav>

      <header class="__header-slider-container">
        <div class="__slider-row">

        </div>
      </header>
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
