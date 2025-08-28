((self) => {
  "use strict";

  const config = {
    api: {},
    storage: {
      myLocalStorage: "mertLocalStorage",
    },

    spinSection: {
      title: "Spin and Win",
      closeButton: "x",
      emailUpperText: "Email *",
      placeHolderText: "Your Email",
      privacyText:
        "By checking this box, you agree to our Terms of Use and consent to our <b>Privacy Policy *<b>",
      buttonText: "Spin",
      winnerDiscount: 10,
      whellDiscounts: [1, 5, 30, 55, 40, 20, 25, 99],
      colors: [
        "#33C1FF",
        "#FF33A6",
        "#8DFF33",
        "#FFC133",
        "#9B33FF",
        "#11be37ff",
        "#FF8C33",
        "#FF5733",
      ],
    },

    codeSection: {
      imgUrl: "",
      title: "YOU WON!",
      date: "20.01.2026",
      text: "Here is your discount code you can use in your next order. This coupon will be valid until 20.01.2026",
      coupon: "",
      copyText: "Copy",
    },
  };

  const classes = {
    spinMain: "mrt-ins-spin-main-div",
    pizza: "mrt-ins-spin-main",
    pizzaContent: "mrt-ins-pizza-content",
    stick: "mrt-ins-stick",
    emailDiv: "mrt-ins-email-div",
    checkBoxDiv: "mrt-ins-check-box-div",
    discount: "mrt-discount-price",
    spinButton: "mrt-ins-spin-button",
    title: "mrt-ins-title",
  };

  const selectors = Object.keys(classes).reduce((createdSelector, key) => {
    createdSelector[key] = `.${classes[key]}`;
    return createdSelector;
  }, {});

  self.init = () => {
    !window.jQuery
      ? self.loadJquery()
      : (self.buildHtml(), self.buildCss(), self.events());
  };

  self.loadJquery = () => {
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
    script.onload = () => {
      self.init();
    };
    document.head.appendChild(script);
  };

  self.buildCss = () => {
    const {
      spinMain,
      pizza,
      pizzaContent,
      stick,
      emailDiv,
      checkBoxDiv,
      discount,
      spinButton,
      title,
    } = selectors;
    const customStyle = `
    <style>
      ${spinMain} {
        position: absolute;
        border: 20px solid #0973d6ff;
        border-radius: 50%;
        height: 300px;
        width: 300px;
        top: 10%;
        left: 35%;
       transform-origin: 0% 0%; 
      }

      ${pizzaContent}{
      height:300px;
      width:300px;
      border-radius:100%;
      }

      ${pizza} {
        position: absolute;
        top: 30%;
        left: 34%;
        width: 100px;
        height: 130px;
        background: orange;
        clip-path: polygon(0% 0%,50% 100%,100% 0%);
        border-top-left-radius: 70%;
        border-top-right-radius: 70%;
        transform-origin: 50% 50%;
      }

       ${stick}{
        clip-path: polygon(0% 0%,50% 100%,100% 0%);
         background-color:red;
         width:50px;
         height:80px;
         border-radius:30px;
         color:black;
         position:absolute;
         left:40%;
         top:-15%;
         z-index:9990;
       }

 
      ${discount}{
      display:flex;
       font-size:20px;
       font-weight:bold;
       font-family:Arial;
       justify-content:center;
      }


       ${title}{
        text-align:center;
        font-family:Arial;

       }

      ${emailDiv}{
       display:flex;
       flex-direction:column;
      }

      ${checkBoxDiv}{
      display:flex;
      flex-direction:row;
      gap:0.5rem;
      max-width:400px;
      }

        ${checkBoxDiv} input{
          cursor:pointer;
        }

        ${emailDiv} input{
          height:20px;
          padding:8px;
          border-radius:4px;
          border:1px solid #e2e2e2ff;
          background-color: #f0efefc9;
        }

        ${spinButton}{
          border:none;
          padding:8px;
          background: #048bfaff;
          color:white;
          font-size:18px;
          width:100%;
          border-radius:5px;
          font-weight:bold;
        }

           ${spinButton}:hover{
           cursor:pointer;
           background: #0069beff;
           }

    </style>
  `;
    $("head").append(customStyle);
  };

  self.buildHtml = () => {
    const {
      spinMain,
      pizza,
      pizzaContent,
      stick,
      emailDiv,
      checkBoxDiv,
      discount,
      spinButton,
      title,
    } = classes;
    const pizzaCount = config.spinSection.whellDiscounts.length;

    const pizzaItems = Array.from({ length: pizzaCount }, (_, i) => {
      const angle = i * (360 / pizzaCount);
      const color = config.spinSection.colors[i] || "orange";
      return `
      <div class="${pizza}" style="transform: rotate(${angle}deg) translateY(-68px); background-color: ${color};">
      <p class="${discount}">${config.spinSection.whellDiscounts[i]}%</p>
      
      </div>`;
    }).join("");

    const carkifelek = `<div class="${spinMain}">
    <div class="${stick}"></div>
    <div class="${pizzaContent}">
    ${pizzaItems}
    </div>
    </div>`;

    const html = `
    <div style="justify-content:center; display:flex; flex-direction:column; align-items:center;">
      ${carkifelek}
     <div style="margin-top:420px;">
      
      <h2 class="${title}">${config.spinSection.title}</h2>

      <div  class="${emailDiv}"> 
          <p>${config.spinSection.emailUpperText}</p>
          <input type="email" placeholder="${config.spinSection.placeHolderText}"/>
      </div>
     
      <div class="${checkBoxDiv}">
        <input type="checkbox">
        <p >${config.spinSection.privacyText}</p>
      </div>

         <button class="${spinButton}">${config.spinSection.buttonText}</button>
      </div>
     </div>
     `;
    $("body").append(html);
  };

  self.spinWheel = () => {
    const { pizzaContent } = selectors;
    const wheel = document.querySelector(pizzaContent);

    let currentRotation = 0;
    let speed = 8;
    const friction = 0.998;
    const minSpeed = 0.05;

    const animate = () => {
      currentRotation += speed;
      wheel.style.transform = `rotate(${currentRotation}deg)`;
      speed *= friction;

      if (speed > minSpeed) {
        requestAnimationFrame(animate);
      } else {
        wheel.style.transform = `rotate(${currentRotation.toFixed(0)}deg)`;
      }
    };

    animate();
  };

  self.events = () => {
    $(selectors.spinButton).on("click", () => {
      self.spinWheel();
    });
  };
  self.init();
})({});
