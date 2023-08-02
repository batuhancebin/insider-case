const htmlContent = `
  <div id="popup" class="modal">
      <div class="modal-content">
          <!-- Modal close button-->
          <span class="close-button" id="closeButton">&times;</span>
          <!-- Modal image section-->
          <div class="image-container">
              <img src="https://img.freepik.com/premium-photo/still-life-with-small-decorative-objects-with-vivid-colors_52683-100432.jpg"/>
          </div>
          <!-- Modal form codes-->
          <div id="modalContent"/>
  
      </div>
  </div>`;

const formContainer = `
    <!-- Forms and inputs section-->
      <div class="form-container" id="formContainer">
          <div class="ic-title-container">
              <h1>Congratulations</h1>
              <p>Purchase any item from our
              Shop collection and we'll ship
              your order for free.</p>
          </div>
          <div class="input-container">
              <input type="email" id="emailInput" placeholder="E-Mail"/>
              <input type="tel" id="phoneInput" placeholder="Phone Number"
              />
              <button id="submitButton" data-hover="Let's Go"><div>Get Coupon Code</div></button>
              <div class="text-container">
                  <input type="checkbox" id="gdprCheckbox"/>
                  <label for="gdprCheckbox">
                      <a href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation" target="_blank">
                      By submitting this form, you are giving consent for your
                          e-mail to be used and disclosed. *
                      </a>
                  </label>
              </div>
          </div>
      </div>
      `;

const couponContainer = `
    <!-- Show coupon code section-->
      <div class="coupon-container" id="couponContainer">
          <h1>Amazing!</h1>
          <p>
              Here is your discount code you can use in your next order. This
              coupon code will be valid until 01.01.2020
          </p>
          <p class="coupon-text"> <span id="couponCode"></span></p>
          <button id="copyCouponButton" data-hover="Click Me!"><div>Let's Copy Code</div></button>
      </div>
      `;

const styles = `
  <style>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,800);

*,
*:before,
*:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font: 300 1em/1.5 "Open Sans", "Helvetica Neue", Arial, sans-serif;
  text-decoration: none;
  color: #111;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.modal-content {
  position: relative;
  margin: 15% auto;
  max-width: 900px;
  height: 450px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
}

div#modalContent {
  display: flex;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.form-container input:not([type="checkbox"]) {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  width: 75%;
}

.form-container input:focus {
  outline: none;
}

.form-container input:invalid {
  border-color: #dc3545;
}

div.input-container&&div.coupon-container {
}
a:hover {
  border-bottom: 1px solid #111;
}
h1 {
  font-size: 2em;
}
p {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 0;
  witdh: 75%;
}
button:hover {
  cursor: pointer;
}
button {
  background: transparent;
  outline: none;
  position: relative;
  border: 2px solid #111;
  padding: 10px;
  overflow: hidden;
  width: 50%;
}
button:hover:before {
  opacity: 1;
  transform: translate(0, 0);
}
button:before {
  content: attr(data-hover);
  position: absolute;
  top: 1.1em;
  left: 0;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: 0.8em;
  opacity: 0;
  transform: translate(-100%, 0);
  transition: all 0.3s ease-in-out;
}
button:hover div {
  opacity: 0;
  transform: translate(100%, 0);
}
button div {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: 0.8em;
  transition: all 0.3s ease-in-out;
}

.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ic-title-container {
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ic-title-container h1 {
  margin-bottom: 0px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.coupon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.coupon {
  flex-direction: column;
  align-items: center;
}

.coupon p {
  margin-bottom: 10px;
}

.coupon-text {
  width: 75%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-style: dashed;
  height: 40px;
  margin-bottom: 10px;
}
.text-container {
  display: flex;
  align-items: center;
  font-size: 11px;
  column-gap: 5px;
  margin-top: 30px;
  color: #999;
}
.text-container a {
  color: inherit;
}
@media screen and (max-width: 992px) {
  .modal-content {
    flex-direction: column;
    height: 75%;
    margin-right: 20px;
    margin-left: 20px;
  }
  .image-container {
    width: 100%;
    height: 25%;
    margin-bottom: 70px;
  }

  .form-container {
    width: 100%;
    height: 50%;
  }

  .form-container input:not([type="checkbox"]) {
    max-width: 100%;
  }

  .form-container button {
    max-width: 100%;
  }

  .coupon-container {
    width: 100%;
    height: 100%;
  }

  .coupon-container button {
    max-width: 100%;
  }

  .coupon-text {
    width: 100%;
  }

  .coupon-text span {
    width: 100%;
  }
}
  </style>
  `;

//HTML and CSS content extraction code
document.querySelector("head").innerHTML += styles;
document.querySelector("body").innerHTML += htmlContent;
document.querySelector("#modalContent").innerHTML = formContainer;

// Assign HTML classes to variables
const popup = document.getElementById("popup"),
  phoneInput = document.getElementById("phoneInput"),
  emailInput = document.getElementById("emailInput"),
  closeButton = document.getElementById("closeButton"),
  gdprTextLink = document.querySelector("#gdprText a"),
  gdprCheckbox = document.getElementById("gdprCheckbox"),
  submitButton = document.getElementById("submitButton");

// Popup display function
popup.style.display = "block";

// Submit function
submitButton.addEventListener("click", () => {
  //Assigning data from inputs to a variable
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // Validation functions
  if (isValidEmail(email) && isValidPhone(phone) && gdprCheckbox.checked) {
    const data = {
      email: email,
      phone: phone,
    };

    sendLeadData(data);
  } else {
    alert(
      "Lütfen geçerli bir e-posta adresi, telefon numarası girin ve GDPR şartlarını kabul edin."
    );
  }
});

// Popup close function
closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

// Coupon code request function
function sendLeadData(data) {
  const url = "https://opt-interview-projects.onrender.com/lead-collection";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result === "Invalid data") {
        alert("Geçersiz veri. Lütfen tekrar deneyin.");
      } else {
        showCoupon(result.coupon_code);
      }
    })
    .catch((error) => {
      console.error("API hatası:", error);
    });
}

// Coupon code display function
function showCoupon(couponCode) {
  document.querySelector("#modalContent").innerHTML = couponContainer;

  // Assign HTML classes to variables for coupon code display
  const couponCodeElement = document.getElementById("couponCode"),
    copyCouponButton = document.getElementById("copyCouponButton");

  // Coupon code copy function
  copyCouponButton.addEventListener("click", () => {
    const range = document.createRange();
    range.selectNode(couponCodeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Kupon kodu kopyalandı.");
  });

  // Coupon code display
  couponCodeElement.innerText = couponCode;
}

/**
 * @description Email validation function
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * @description Phone validation function
 * @param {string} phone
 * @returns {boolean}
 */
function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
