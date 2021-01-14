let n = 0;
let html = document.querySelector("#demo");
let css = document.querySelector("#style");
let str = `/*我是一名前端新手，
我在2020年末开始接触前端，
至今已经学习了1个月。*/

/* 先准备好div */
#div1{
    border: 1px solid red;
    width: 400px;
    height: 400px;
}

/* 再画出圆形 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}  

/* 将太极两边颜色填充 */
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 加上两个小球 */
#div1::before{
    background: white;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    top: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
} 
#div1::after{
    background: black;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    bottom: 0;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
}

/* 设置镜像渐变 */
#div1::before{
    background: rgb(0,0,0); 
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
} 
#div1::after{
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}

`;
let strCopy = "";
let recur_step = () => {
  if (str[n] === "\n") {
    strCopy += "<br>";
  } else if (str[n] === " ") {
    strCopy += "&nbsp";
  } else {
    strCopy += str[n];
  }
  html.innerHTML = strCopy;
  css.innerHTML = str.substring(0, n + 1);
  n++;
  window.scrollTo(0, 99999);
  html.scrollTo(0, 99999);
  if (n >= str.length) return;
  setTimeout(() => {
    recur_step();
  }, 10);
};
recur_step();
