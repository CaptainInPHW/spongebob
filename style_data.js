!function () {
    window.code = `/*
 *
 *  今天我们来画一只可爱的海绵宝宝!
 *
 */

/* 首先，先将画板调成橙黄色 */

body  {
    background: rgba(253,219,33,1);
}

/* 然后，准备一张白纸 */

#container {
    opacity: 0.5;
}

.black  {
    background: black;
}

/* 先画海绵宝宝的头部 */

.head {
    position: relative;
    width: 300px;
    height: 240px;
    margin: 100px auto 0;
}

/* 再画脸部的斑点 */

.pores {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 240px;
}

.pores > * {
    position: absolute;
    border-radius: 50%;
    background: rgb(174,172,12);
}

.pore-1 {
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
}

.pore-2 {
    top: 60px;
    left: 10px;
    width: 20px;
    height: 20px;
}

.pore-3 {
    bottom: 60px;
    left: 10px;
    width: 15px;
    height: 15px;
}

.pore-4 {
    bottom: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
}

.pore-5 {
    top: 20px;
    right: 10px;
    width: 15px;
    height: 15px;
}

.pore-6 {
    bottom: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
}

.pore-7 {
    bottom: 10px;
    right: 20px;
    width: 20px;
    height: 20px;
}

/* 画海绵宝宝的眼睛 */

.upper-face {
    position: relative;
    height: 100px;
}

.upper-face > * {
    position: absolute;
    height: 100%;
    width: 100px;
    background: white;
    border-radius: 50%;
    border: 3px solid black;
}

.left-eye {
    right: 50%;
}

.left-eye::before {
    position: absolute;
    display: block;
    content: '';
    top: calc(50% - 19px);
    left: calc(50% - 19px);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid black;
    background: #0099ff;
}

.left-eye::after {
    position: absolute;
    display: block;
    content: '';
    top: calc(50% - 6px);
    left: calc(50% - 6px);
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: black;
}

.right-eye {
    left: 50%;
}

.right-eye::before {
    position: absolute;
    display: block;
    content: '';
    top: calc(50% - 19px);
    left: calc(50% - 19px);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid black;
    background: #0099ff;
}

.right-eye::after {
    position: absolute;
    display: block;
    content: '';
    top: calc(50% - 6px);
    left: calc(50% - 6px);
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: black;
}

/* 画海绵宝宝的睫毛 */

.eyebrow {
    position: absolute;
    bottom: 100%;
    left: calc(50% - 4px);
    width: 8px;
    height: 25px;
    background: black;
}

.eyebrow::before {
    position: absolute;
    display: block;
    content: '';
    top: calc(50% - 4px);
    left: calc(50% - 40px);
    width: 8px;
    height: 25px;
    background: black;
    transform: rotate(-35deg);
}

.eyebrow::after {
    position: absolute;
    display: block;
    content: '';
    top: calc(50% - 4px);
    left: calc(50% + 32px);
    width: 8px;
    height: 25px;
    background: black;
    transform: rotate(35deg);
}

/* 画海绵宝宝的脸颊 */

.middle-face {
    position: relative;
    width: 210px;
    height: 10px;
    margin: -20px auto;
}

.middle-face .left-cheek {
    position: absolute;
    top: -10px;
    width: 45px;
    height: 45px;
    border: 3px solid rgb(215,60,18);
    border-radius: 50%;
    background: rgba(253,219,33,1);
}

.middle-face .right-cheek {
    position: absolute;
    top: -10px;
    right: 0;
    width: 45px;
    height: 45px;
    border: 3px solid rgb(215,60,18);
    border-radius: 50%;
    background: rgba(253,219,33,1);
}

.middle-face .left-cheek::before,
.middle-face .right-cheek::before {
    position: absolute;
    display: block;
    content: '';
    width: 30px;
    height: 12px;
    top: 30px;
    left: calc(50% - 15px);
    border-radius: 50%;
    background: rgba(253,219,33,1);
}

.middle-face .left-cheek::after,
.middle-face .right-cheek::after {
    position: absolute;
    content: '';
    width: 10px;
    height: 0;
    top: 38px;
    border: 3px solid transparent;
    border-bottom: 3px solid black;
}

.middle-face .left-cheek::after {
    left: calc(50% - 10px);
    transform: rotate(-60deg);
}

.middle-face .right-cheek::after {
    left: calc(50% - 4px);
    transform: rotate(60deg);
}

.middle-face .freckle {
    position: absolute;
    top: 5px;
    left: calc(50% - 3px);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgb(215,60,18);
}

.middle-face .freckle::before,
.middle-face .freckle::after {
    display: block;
    content: '';
    position: absolute;
    top: 7px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgb(215,60,18);
}

.middle-face .freckle::before {
    left: calc(50% - 15px);
}

.middle-face .freckle::after {
    left: calc(50% + 8px);
}

/* 画海绵宝宝的鼻子 */

.middle-face .nose {
    position: absolute;
    top: -20px;
    left: calc(50% - 20px);
    width: 40px;
    height: 60px;
    border: 3px solid black;
    border-radius: 50%;
    background: rgba(253,219,33,1);
}

.middle-face .nose::before {
    position: absolute;
    display: block;
    content: '';
    width: 30px;
    height: 30px;
    top: 30px;
    left: calc(50% - 15px);
    border-radius: 50%;
    background: rgba(253,219,33,1);
}

/* 画海绵宝宝的嘴唇 */

.upper-lip {
    overflow: hidden;
    position: absolute;
    left: calc(50% - 84px);
    margin: 35px 0;
    width: 170px;
    height: 35px;
}

.upper-lip .lip {
    position: absolute;
    bottom: calc(50% - 15px);
    left: calc(50% - 165px);
    width: 330px;
    height: 300px;
    border: 3px solid black;
    border-radius: 50%
}

/* 画海绵宝宝的牙齿 */

.teeth {
    position: absolute;
    left: calc(50% - 25px);
    margin: 47px 0;
    width: 50px;
    height: 17px;
}

.teeth::before,
.teeth::after {
    display: block;
    content: '';
    position: absolute;
    top: 100%;
    width: 20px;
    height: 20px;
    border: 3px solid black;
    border-radius: 3px;
    background: white;
}

.teeth::before {
    left: calc(50% - 30px);
    transform: rotate(5deg);
}

.teeth::after {
    right: calc(50% - 30px);
    transform: rotate(-5deg);
}

/* 画海绵宝宝的下嘴唇 */

.lower-lip {
    overflow: hidden;
    position: absolute;
    left: calc(50% - 50px);
    margin: 110px auto;
    width: 100px;
    height: 20px;
}

.lower-lip::before {
    display: block;
    content: '';
    position: absolute;
    top: -9px;
    left: 10px;
    width: 30px;
    height: 10px;
    border: 3px solid rgb(215,60,18);
    border-radius: 50%;
}

.lower-lip::after {
    display: block;
    content: '';
    position: absolute;
    top: -15px;
    right: 11px;
    width: 40px;
    height: 20px;
    border: 3px solid rgb(215,60,18);
    border-radius: 50%;
}

/* 画海绵宝宝的身体 */

.body {
    position: relative;
    width: 300px;
    height: 120px;
    margin: 0 auto 100px;
    border: 3px solid black;
    background: white;
}

.body::before {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    width: 294px;
    height: 57px;
    border-top: 3px solid black;
    background: rgb(187,120,49);
}

.body::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    width: 294px;
    height: 25px;
    border-top: 10px dashed black;
}

/* 画海绵宝宝的领带 */

.body .upper-body {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 60px;
}

.body .upper-tie {
    position: absolute;
    top: 0;
    left: calc(50% - 25px);
    width: 50px;
    height: 42px;
    border: 18px solid transparent;
    border-top: 18px solid black;
    border-bottom: 24px solid black;
}

.body .upper-tie::after {
    display: block;
    content: '';
    position: absolute;
    top: -18px;
    left: -13px;
    width: 10px;
    height: 5px;
    border: 15px solid transparent;
    border-top: 15px solid red;
    border-bottom: 22px solid red;
}

.body .lower-tie {
    position: absolute;
    top: 42px;
    left: calc(50% - 25px);
    width: 0;
    height: 0;
    border: 25px solid transparent;
    border-top: 40px solid black;
}

.body .lower-tie::after {
    display: block;
    content: '';
    position: absolute;
    top: -40px;
    left: -20px;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top: 36px solid red;
}

/* 画海绵宝宝的领口 */

.body .left-collar {
    position: absolute;
    left: calc(50% - 100px);
    width: 0;
    height: 0;
    border-top: 30px solid black;
    border-left: 40px solid transparent;
    border-right: 30px solid transparent;
}

.body .left-collar::after {
    display: block;
    content: '';
    position: absolute;
    top: -30px;
    left: -35px;
    width: 0;
    height: 0;
    border-top: 26px solid white;
    border-left: 35px solid transparent;
    border-right: 26px solid transparent;
}

.body .right-collar {
    position: absolute;
    right: calc(50% - 100px);
    width: 0;
    height: 0;
    border-top: 30px solid black;
    border-left: 30px solid transparent;
    border-right: 40px solid transparent;
}

.body .right-collar::after {
    display: block;
    content: '';
    position: absolute;
    top: -30px;
    right: -35px;
    width: 0;
    height: 0;
    border-top: 26px solid white;
    border-left: 26px solid transparent;
    border-right: 35px solid transparent;
}

/* 
 *  最后，让我们的海绵宝宝动起来！
 */

@keyframes blink  {
    0%, 2%, 60%, 62%, 100%  {
        -webkit-transform: scaleX(1) scaleY(1);
        transform: scaleX(1) scaleY(1);
    }
    1%, 61%  {
        -webkit-transform: scaleX(1.5) scaleY(0.1);
        transform: scaleX(1.5) scaleY(0.1);
    }
}

/*
 *  眨眨眼睛！
 */

.upper-face > * {
    animation: blink forwards infinite 6s ease-in-out;
}

/*
 *
 *  画完啦！
 *
 */
 `;
}();