function __test() {

  // setInterval(function() {
  //   let xAxis = document.documentElement.clientWidth;
  //   let yAxis = document.documentElement.clientHeight;
  //
  //   let xPoint = Math.floor(Math.random() * xAxis);
  //   let yPoint = Math.floor(Math.random() * yAxis);// + yAxis;
  //
  //   let drop = document.createElement('DIV');
  //   drop.setAttribute('class', '__rain-drop');
  //   drop.setAttribute('style', 'top: ' + yPoint + 'px; left: ' + xPoint + 'px');
  //
  //   document.querySelector('.__main-rain').appendChild(drop);
  //
  //   let arrayDrops = document.querySelectorAll('.__rain-drop');
  //
  //   for (var i = 0; i < arrayDrops.length; i++) {
  //     console.log(arrayDrops[i].offsetY);
  //   }
  // }, 1000);




  //document.getElementsByClassName('__rain-drop');
}

function __visible(e) {
  //let nodes = e.childNodes;
  //let nodes = document.querySelector('.__main-rain');
  console.log(e);
  // Определили высоту экрана пользователя
  // Определяем динамически скроллинг
  let height = document.documentElement.clientHeight;
  let scroll = document.documentElement.scrollTop;

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'div') {
      // Нашли отступ элемента от верха и добавили offset 100px
      // Определили высоту элемента
      let offsetTop = nodes[i].offsetTop + 100;
      let nodeHeight = nodes[i].offsetHeight;

      if (scroll + height >= offsetTop && scroll + 200 <= offsetTop + nodeHeight) {
        nodes[i].style.background = 'blue';
      } else {
        nodes[i].style.background = 'red';
      }
      //...
    }
  }
}


function __setRainWeather(particles, speed) {
  let xAxis = document.documentElement.clientWidth;
  let yAxis = document.documentElement.clientHeight;

  let xPoint = Math.floor(Math.random() * xAxis);
  let yPoint = Math.floor(Math.random() * yAxis);//- yAxis;

  function __setElementParticles() {
    /* Array of attributes and values */
    let array = [
     ['class', '__rain-drop'],
     ['style', 'top: ' + yPoint + 'px; left: 50%']
    ];
    /* Creating amount of particles */
    for (let p = 0; p < particles; p++) {
      let particle = document.createElement('DIV');
      /* Applying attributes for future particle */
      for (let i = 0; i < array.length; i++) {
        particle.setAttribute(array[i][0], array[i][1]);
      }
      /* Appeding particle in selected div */
      document.querySelector('.__main-rain-container').appendChild(particle);
    }
  }

  function __setElementAnimation() {
    let array = document.querySelector('.__main-rain-container').childNodes;

    for (let i = 0; i < array.length; i++) {
      if (array[i].nodeName.toLowerCase() == 'div') {
        let position = 0;
        let animation = setInterval(__animationFrame, 1);

        function __animationFrame() {
          let k = 1;
          if (position === 1000) {
            clearInterval(animation);
          } else {
            position++;
            console.log(array[k]);
            array[k].style.top = position + 'px';
          }
          k++;
        }
      }
    }
  }

  __setElementParticles();
  __setElementAnimation();

  setInterval(function() {
    let xAxis = document.documentElement.clientWidth;
    let yAxis = document.documentElement.clientHeight;

    let xPoint = Math.floor(Math.random() * xAxis);
    let yPoint = Math.floor(Math.random() * yAxis) - yAxis;

    function __setElement() {
      let element = document.createElement('DIV');
      //Set attributes for element
      attrs = ['class', 'style'];
      values = ['__rain-drop', 'top: ' + yPoint + 'px; left: ' + xPoint + 'px'];
      //Applying attributes for element
      for (var i = 0; i < attrs.length; i++) {
        element.setAttribute(attrs[i], values[i]);
      }
      //Append element in document
      document.querySelector('.__main-rain-container').appendChild(element);

      let animation = setInterval(frame, 10);
      function frame() {

      }

    }

    function __isRainVisible() {
      let rainDrops = document.querySelector('.__main-rain-container').childNodes;
      let scroll = document.documentElement.scrollTop;

      for (var i = 0; i < rainDrops.length; i++) {
        if (rainDrops[i].nodeName.toLowerCase() == 'div') {
          // Нашли отступ элемента от верха и добавили offset 100px
          // Определили высоту элемента
          let elementTop = rainDrops[i].offsetTop + 100;
          let elementHeight = rainDrops[i].offsetHeight;

          if (scroll + yAxis >= elementTop && scroll + 200 <= elementTop + elementHeight) {
            rainDrops[i].style.background = 'blue';
          } else {
            rainDrops[i].style.background = 'red';
          }
        }
      }
    }

    // __setElement();
    //__isRainVisible();


  }, 1000);

}
