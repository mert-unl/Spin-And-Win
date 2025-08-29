((self) => {
  "use strict";

  const config = {
    api: {
      url: "https://randomdata.azurewebsites.net/api/NewAlphabets/10",
    },
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
      whellDiscounts: [19, 85, 30, 55, 40, 20, 25, 90],
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
      codeCloseText: "x",
      imgUrl:
        "https://thumbs.dreamstime.com/b/love-emoji-face-love-emotion-icon-d-smile-vector-happy-95758155.jpg",
      title: "YOU WON",
      date: "20.01.2026",
      text: "Here is your discount code you can use in your next order. This coupon will be valid until 20.01.2026",
      coupon: "@dasdadsada",
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
    mainModal: "mrt-main-modal",
    overlay: "mrt-ins-overlay",
    closeButton: "mrt-ins-close-button",
    emailInput: "mrt-email-input",
    checkboxInput: "mrt-checkbox-input",
    codeOverlay: "asdfxzs",
    codeModalMain: "asdasda",
    codeCloseButton: "asdasdadffv",
    codeImg: "asdadadd",
    codeTitle: "asdadasdd",
    codeUpperText: "sdaşlsdalsdşasda",
    codeTextDiv: "dsddccc",
    codeArea: "adlaşlda",
    codeCopyButton: "llfdşflsşdlfs",
    errorText: "aerrrroe",
  };

  const selectors = Object.keys(classes).reduce((createdSelector, key) => {
    createdSelector[key] = `.${classes[key]}`;
    return createdSelector;
  }, {});

  self.init = () => {
    !window.jQuery
      ? self.loadJquery()
      : (self.buildHtml(), self.buildCss(), self.events(), self.fetch());
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
      mainModal,
      overlay,
      closeButton,
      codeModalMain,
      codeImg,
      codeTitle,
      codeUpperText,
      codeTextDiv,
      codeArea,
      codeCopyButton,
      codeOverlay,
      codeCloseButton,
      errorText,
    } = selectors;
    const customStyle = `
    <style>


      ${overlay}{
      display:flex;
     position: fixed;
              top:0;
              left:0;
              width:100%;
              height:100%;
              background: rgba(0, 0, 0, 0.7);
              z-index:900;
             align-items:center;
             justify-content:center;
              }
            
     ${closeButton}{
      cursor:pointer;
      border:none;
      font-size:16px;
      font-family:Arial;
      background-color:white;
      color:red;
      font-weight:bold;
      position:absolute;
      top:10px;
      right:10px;
      margin:0;
     }


      ${mainModal}{
          position: relative;
      border:1px solid gray;
      border-radius:10px;
      background-color:white;
      padding:10px 60px;
                    z-index:9999;

      }

      ${spinMain} {
        position: fixed;
        border: 20px solid #0973d6ff;
        border-radius: 50%;
        height: 300px;
        width: 300px;
        top: 35%;
        left: 50%;
        transform: translate(-50%,-50%);

      }

      ${pizzaContent}{
      height:300px;
      width:300px;
      border-radius:100%;
      }

      ${pizza} {
        position: fixed ;
        top: 28%;
        left: 33%;
        width: 100px;
        height: 130px;
        background: orange;
        clip-path: polygon(0% 0%,50% 100%,100% 0%);
        border-top-left-radius: 45%;
        border-top-right-radius: 45%;
        transform: translate(-50%,-50%);
      }

       ${stick}{
        clip-path: polygon(0% 0%,50% 100%,100% 0%);
         background-color:red;
         width:50px;
         height:70px;
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
${errorText}{
 font-family:Arial;
 color:red;
 text-align:center;
 margin-top:10px;
 padding:5px;
 font-weight:bold;
 font-size:16px;
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
          padding:12px;
          background: #048bfaff;
          color:white;
          font-size:18px;
          width:100%;
          border-radius:5px;
          font-weight:bold;
          margin:30px 0px;          
        }

           ${spinButton}:hover{
           cursor:pointer;
           background: #0069beff;
           }

          ${spinButton}:disabled{
            cursor:default;
            background: #737e88ff;
          }


       /*coupon Modal*/

        ${codeOverlay}{
          display:none;
          position: fixed;
          top:0;
          left:0;
          width:100%;
          height:100%;
          background: rgba(0, 0, 0, 0.7);
          z-index:900;
          align-items:center;
          justify-content:center;
        }


        ${codeModalMain}{
          font-family:Arial;
          background-color:white;
          position: fixed;
          padding:10px 30px;
          width: 450px;
          border-radius:6px;
          top: 45%;
          left: 50%;
          transform: translate(-50%,-50%);
          text-align:center;
          z-index:2000;
        }

        ${codeCloseButton}{
            cursor:pointer;
            border:none;
            font-size:16px;
            font-family:Arial;
            background-color:white;
            color:red;
            font-weight:bold;
            position:absolute;
            top:10px;
            right:10px;
            margin:0;
         }

          ${codeImg}{
          height:250px;
          }

          ${codeTitle}{
          font-family:Arial;
          font-size:25px;
          font-weight:bold;
          }

          ${codeUpperText}{
            color:gray;
            font-family:Arial;
          }

          ${codeTextDiv}{
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            gap:1reM;
          }
 

        ${codeCopyButton}{
          border:none;
              background: #048bfaff;
              color:white;
              font-size:14px;
              width:30%;
              border-radius:5px;
              font-weight:bold;
              height:46px;
        }
      
            ${codeCopyButton}:hover{
              cursor:pointer;
              background: #0069beff;
            }

            ${codeArea}{
              border:1px dashed gray;
              padding:12px;
              width:70%;
              border-radius:4px;
              font-size:18px;
              background-color: #f7f3f38c;
              color:#0069beff;
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
      mainModal,
      overlay,
      closeButton,
      emailInput,
      checkboxInput,
      errorText,
    } = classes;
    const pizzaCount = config.spinSection.whellDiscounts.length;

    config.codeSection.title = `YOU WON <b>${config.spinSection.whellDiscounts[0]}%</b> DISCOUNT!`;

    const pizzaItems = Array.from({ length: pizzaCount }, (_, i) => {
      const angle = i * (360 / pizzaCount);
      const color = config.spinSection.colors[i] || "orange";
      return `
      <div class="${pizza}" style="transform: rotate(${angle}deg) translateY(-75px); background-color: ${color};">
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
    <div class="${overlay}">
   <div class="${mainModal}">
    <button class="${closeButton}">${config.spinSection.closeButton}</button>
    <div style="justify-content:center; display:flex; flex-direction:column; align-items:center;">
        

    ${carkifelek}
     <div style="margin-top:420px;">
      
      <h2 class="${title}">${config.spinSection.title}</h2>

      <div  class="${emailDiv}"> 
          <p>${config.spinSection.emailUpperText}</p>
          <input type="email" class="${emailInput}" placeholder="${config.spinSection.placeHolderText}"/>
          <div class="${errorText}"></div>
          </div>
     
      <div class="${checkBoxDiv}">
        <input type="checkbox" class="${checkboxInput}">
        <p >${config.spinSection.privacyText}</p>
      </div>

         <button class="${spinButton}" disabled>${config.spinSection.buttonText}</button>
      </div>
     </div>
     </div>
    
     `;
    $("body").append(html);

    const {
      imgUrl,
      title: codeTitleText,
      date,
      text,
      coupon,
      copyText,
      codeCloseText,
    } = config.codeSection;

    const {
      codeModalMain,
      codeImg,
      codeTitle,
      codeUpperText,
      codeTextDiv,
      codeArea,
      codeCopyButton,
      codeOverlay,
      codeCloseButton,
    } = classes;
    const codeModal = `
    <div class=${codeOverlay}>
     <div class="${codeModalMain}">
     <button class=${codeCloseButton}>${codeCloseText}</button>
     <img  class="${codeImg}" src="${imgUrl}" />
        <h3 class="${codeTitle}" >${codeTitleText}</h3>
        <p class="${codeUpperText}" >${text}</p>
        <div class="${codeTextDiv}">
          <p class="${codeArea}">${coupon}</p>
          <button class="${codeCopyButton}" >${copyText}</button>
        </div>
    
     </div>
     </div>
    `;

    $("body").append(codeModal);
  };

  self.spinWheel = () => {
    const { pizzaContent } = selectors;
    const $wheel = $(pizzaContent);

    let currentRotation = 0;
    let speed = 7.2;
    const friction = 0.99;
    const minSpeed = 0.1;

    const animate = () => {
      currentRotation += speed;
      $wheel.css("transform", `rotate(${currentRotation}deg)`);
      speed *= friction;

      if (speed > minSpeed) {
        requestAnimationFrame(animate);
      } else {
        $wheel.css("transform", `rotate(${currentRotation.toFixed(0)}deg)`);
      }
    };

    animate();
  };

  self.events = () => {
    const {
      spinButton,
      closeButton,
      codeOverlay,
      codeCloseButton,
      overlay,
      emailInput,
      checkboxInput,
      errorText,
      codeArea,
      codeCopyButton,
    } = selectors;

    const { myLocalStorage } = config.storage;

    let emails = JSON.parse(localStorage.getItem(myLocalStorage)) || [];

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const checkForm = () => {
      if (
        isValidEmail($(emailInput).val()) &&
        $(checkboxInput).is(":checked")
      ) {
        $(spinButton).prop("disabled", false);
      } else {
        $(spinButton).prop("disabled", true);
      }
    };

    $(emailInput).on("input", checkForm);
    $(checkboxInput).on("change", checkForm);

    self.saveEmail = (email) => {
      let emails = JSON.parse(localStorage.getItem(myLocalStorage)) || [];

      if (emails.includes(email)) {
        $(errorText).text("You already got your code with this email!");
        return false;
      }

      emails.push(email);
      localStorage.setItem(myLocalStorage, JSON.stringify(emails));

      return true;
    };

    $(spinButton).on("click", () => {
      const email = $(emailInput).val();

      if (self.saveEmail(email)) {
        self.spinWheel();

        setTimeout(() => {
          $(overlay).remove();
          $(codeOverlay).fadeIn();
        }, 3500);
      }
    });

    $(document).on("click", closeButton, () => {
      console.log("tıklandı");

      $(overlay).remove();
    });

    $(document).on("click", codeCloseButton, () => {
      console.log("tıklandı");

      $(codeOverlay).remove();
    });

    $(document).on("click", codeCopyButton, () => {
      const couponText = $(codeArea).text();
      navigator.clipboard.writeText(couponText);
      console.log("kopyalandı: " + couponText);
    });

    self.fetch = () => {
      return fetch(config.api.url)
        .then((response) => response.json())
        .then((data) => {
          config.codeSection.coupon = data;
          $(codeArea).text(data);

          console.log("API response:", data);
          return data;
        })
        .catch((err) => console.error("Fetch error:", err));
    };
  };
  self.init();
})({});
