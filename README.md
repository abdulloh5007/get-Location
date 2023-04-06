` This site can detect your country
 This site can pick the color`

<h2 align='center'>Here is code</h2>

# HTML

```htm
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="mobile-web-app-capable" content="no" />
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css" />
  </head>

  <body>
    <div class="container">
      <div class="wrapper">
        <button class="btn1">Click</button>
        <button class="btn2">Eye</button>
        <div class="move"></div>
        <h2 class="text" data-text="Text Glitch">Text Glitch</h2>
      </div>
    </div>
  </body>
  <script src="./js/main.js"></script>
</html>
```

# CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

body {
  font-family: "Roboto", sans-serif;
  background-color: #000;
}

.container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.move {
  position: absolute;
  left: 30%;
  top: 40%;
  margin-top: 20px;
  width: 300px;
  height: 300px;
  background-color: aqua;
  cursor: all-scroll;
}

.text {
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 45px;
  transform: scale(2);
  padding: 30px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.text:before,
.text:after {
  padding: 30px;
  color: white;
  content: attr(data-text);
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  overflow: hidden;
  top: 0;
}

.text:before {
  left: 3px;
  text-shadow: -2px 0 red;
  animation: glitch-1 2s linear infinite reverse;
}

.text:after {
  left: -3px;
  text-shadow: -2px 0 blue;
  animation: glitch-2 2s linear infinite reverse;
}

@keyframes glitch-1 {
  0% {
    clip: rect(132px, auto, 101px, 30px);
  }

  5% {
    clip: rect(17px, auto, 94px, 30px);
  }

  10% {
    clip: rect(40px, auto, 66px, 30px);
  }

  15% {
    clip: rect(87px, auto, 82px, 30px);
  }

  20% {
    clip: rect(137px, auto, 61px, 30px);
  }

  25% {
    clip: rect(34px, auto, 14px, 30px);
  }

  30% {
    clip: rect(133px, auto, 74px, 30px);
  }

  35% {
    clip: rect(76px, auto, 107px, 30px);
  }

  40% {
    clip: rect(59px, auto, 130px, 30px);
  }

  45% {
    clip: rect(29px, auto, 84px, 30px);
  }

  50% {
    clip: rect(22px, auto, 67px, 30px);
  }

  55% {
    clip: rect(67px, auto, 62px, 30px);
  }

  60% {
    clip: rect(10px, auto, 105px, 30px);
  }

  65% {
    clip: rect(78px, auto, 115px, 30px);
  }

  70% {
    clip: rect(105px, auto, 13px, 30px);
  }

  75% {
    clip: rect(15px, auto, 75px, 30px);
  }

  80% {
    clip: rect(66px, auto, 39px, 30px);
  }

  85% {
    clip: rect(133px, auto, 73px, 30px);
  }

  90% {
    clip: rect(36px, auto, 128px, 30px);
  }

  95% {
    clip: rect(68px, auto, 103px, 30px);
  }

  100% {
    clip: rect(14px, auto, 100px, 30px);
  }
}

@keyframes glitch-2 {
  0% {
    clip: rect(129px, auto, 36px, 30px);
  }

  5% {
    clip: rect(36px, auto, 4px, 30px);
  }

  10% {
    clip: rect(85px, auto, 66px, 30px);
  }

  15% {
    clip: rect(91px, auto, 91px, 30px);
  }

  20% {
    clip: rect(148px, auto, 138px, 30px);
  }

  25% {
    clip: rect(38px, auto, 122px, 30px);
  }

  30% {
    clip: rect(69px, auto, 54px, 30px);
  }

  35% {
    clip: rect(98px, auto, 71px, 30px);
  }

  40% {
    clip: rect(146px, auto, 34px, 30px);
  }

  45% {
    clip: rect(134px, auto, 43px, 30px);
  }

  50% {
    clip: rect(102px, auto, 80px, 30px);
  }

  55% {
    clip: rect(119px, auto, 44px, 30px);
  }

  60% {
    clip: rect(106px, auto, 99px, 30px);
  }

  65% {
    clip: rect(141px, auto, 74px, 30px);
  }

  70% {
    clip: rect(20px, auto, 78px, 30px);
  }

  75% {
    clip: rect(133px, auto, 79px, 30px);
  }

  80% {
    clip: rect(78px, auto, 52px, 30px);
  }

  85% {
    clip: rect(35px, auto, 39px, 30px);
  }

  90% {
    clip: rect(67px, auto, 70px, 30px);
  }

  95% {
    clip: rect(71px, auto, 103px, 30px);
  }

  100% {
    clip: rect(83px, auto, 40px, 30px);
  }
}
```

# JavaScript

```javascript
const button1 = document.querySelector(".btn1");
const button2 = document.querySelector(".btn2");

button1.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.table(data.address);
      })
      .catch(() => {
        console.log("error");
      });
  });
});

const pickColor = async () => {
  const eyeDropper = new EyeDropper();
  const { sRGBHex } = await eyeDropper.open();
  console.log(sRGBHex);
};

button2.addEventListener("click", pickColor);

const div = document.querySelector(".move");
let offsetX, offsetY;

const move = (e) => {
  div.style.left = `${e.clientX - offsetX}px`;
  div.style.top = `${e.clientY - offsetY}px`;
};

div.addEventListener("mousedown", (q) => {
  offsetX = q.clientX - div.offsetLeft;
  offsetY = q.clientY - div.offsetTop;
  document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", move);
});
```
