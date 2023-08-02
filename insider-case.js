const htmlContent = `
<div id="popup" class="modal">
  <div class="popup-overlay" id="popupOverlay"></div>
  <div class="modal-content">
    <!-- Modal close button-->
    <span class="close-button" id="closeButton">&times;</span>
    <!-- Modal image section-->
    <div class="image-container">
      <img
        src="https://img.freepik.com/premium-photo/still-life-with-small-decorative-objects-with-vivid-colors_52683-100432.jpg"
      />
    </div>
    <!-- Modal form codes-->
    <div id="modalContent" />
  </div>
</div>
`;

const formContainer = `
<!-- Forms and inputs section-->
<div class="form-container" id="formContainer">
  <div class="ic-title-container">
    <h1>Congratulations</h1>
    <p>
      Purchase any item from our Shop collection and we'll ship your order for
      free.
    </p>
  </div>
  <div class="input-container">
    <input type="email" id="emailInput" placeholder="E-Mail" />
    <input type="tel" id="phoneInput" placeholder="Phone Number" />
    <button id="submitButton" data-hover="Let's Go" class="submitCopyBtn">
      <div>Get Coupon Code</div>
    </button>
    <div class="text-container">
      <input type="checkbox" id="gdprCheckbox" />
      <label for="gdprCheckbox">
        <a
          href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"
          target="_blank"
        >
          By submitting this form, you are giving consent for your e-mail to be
          used and disclosed. *
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
    Here is your discount code you can use in your next order. This coupon code
    will be valid until 01.01.2020
  </p>
  <p class="coupon-text"><span id="couponCode"></span></p>
  <button id="copyCouponButton" data-hover="Click Me!" class="submitCopyBtn">
    <div>Let's Copy Code</div>
  </button>
</div>
`;

const styles = `<style>@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,800);div#popupOverlay { width: 100%;height: 100%; position: absolute}.close-button,button:hover{cursor:pointer}.form-container input:focus,button{outline:0}button div,button:before{text-transform:uppercase;letter-spacing:3px;font-weight:800;font-size:.8em;transition:.3s ease-in-out}*,:after,:before{box-sizing:border-box;padding:0;margin:0;font:300 1em/1.5 "Open Sans","Helvetica Neue",Arial,sans-serif;text-decoration:none;color:#111}.modal{display:none;position:fixed;top:0;left:0;height:100%;width:100%;background-color:rgba(0,0,0,.5);z-index:9999}.modal-content{position:relative;margin:15% auto;max-width:900px;height:450px;background-color:#fff;border-radius:5px;display:flex}div#modalContent{display:flex}.close-button{position:absolute;top:10px;right:10px;font-size:18px}.image-container{display:flex;justify-content:center;align-items:center;width:50%}.coupon-container,.form-container{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px}.form-container input:not([type=checkbox]){margin-bottom:10px;padding:10px;border:1px solid #ced4da;border-radius:5px;width:75%}.form-container input:invalid{border-color:#dc3545}.coupon-container h1,.ic-title-container h1{font-size:2em;margin-bottom:0}.coupon-container p,.ic-title-container p{font-size:.75em;text-transform:uppercase;letter-spacing:2px;padding:20px 0;margin-bottom:20px;text-align:center}.submitCopyBtn{background:0 0;position:relative;border:2px solid #111;padding:10px;overflow:hidden;width:50%;transition:.2s ease-in-out}.submitCopyBtn:hover{background-color:#111;color:#fff}.submitCopyBtn:hover:before{opacity:1;transform:translate(0,0);color:#fff}.submitCopyBtn:before{content:attr(data-hover);position:absolute;left:0;width:100%;opacity:0;transform:translate(-100%,0)}.submitCopyBtn:hover div{opacity:0;transform:translate(100%,0)}.input-container{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.ic-title-container{width:75%;display:flex;flex-direction:column;align-items:center;justify-content:center}.image-container img{width:100%;height:100%;object-fit:cover}.coupon{flex-direction:column;align-items:center}.coupon-text{width:75%;display:flex;flex-direction:row;align-items:center;justify-content:center;height:40px;margin-bottom:10px}.coupon-text span{text-align:center;font-size:1.5em;font-weight:800;letter-spacing:2px;border:2px dashed #111;padding:10px 20px;margin-bottom:20px}.text-container{display:flex;align-items:center;font-size:11px;column-gap:5px;margin-top:30px;color:#999}.text-container a{color:inherit}@media screen and (max-width:992px){.modal-content{flex-direction:column;height:75%;margin-right:20px;margin-left:20px}.image-container{width:100%;height:25%;margin-bottom:70px}.form-container{width:100%;height:50%}.coupon-container button,.form-container button,.form-container input:not([type=checkbox]){max-width:100%}.coupon-container{width:100%;height:100%}.coupon-text,.coupon-text span{width:100%}}</style>`;

/**
 * HTML and CSS injection
 * @description: This function injects HTML and CSS into the page.
 * @type {string}
 */
document.querySelector("head").innerHTML += styles;
document.querySelector("body").innerHTML += htmlContent;
document.querySelector("#modalContent").innerHTML = formContainer;

/**
 * DOM elements
 * @description: This function assigns DOM elements to variables.
 * @type {HTMLElement}
 */
const popup = document.getElementById("popup"),
  popupOverlay = document.getElementById("popupOverlay"),
  phoneInput = document.getElementById("phoneInput"),
  emailInput = document.getElementById("emailInput"),
  closeButton = document.getElementById("closeButton"),
  gdprTextLink = document.querySelector("#gdprText a"),
  gdprCheckbox = document.getElementById("gdprCheckbox"),
  submitButton = document.getElementById("submitButton");

// Popup close function
function hidePopup() {
  popup.style.display = "none";
}

/**
 * GDPR text link click event
 * @description: This function opens the GDPR text link in a new tab.
 */
function isValid(type, value) {
  const regex = type === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/ : /^\d{10}$/;
  return regex.test(value);
}

/**
 * API function
 * @description: This function sends the data to the API.
 * @param data
 */
async function sendLeadData(data) {
  const url = "https://opt-interview-projects.onrender.com/lead-collection";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();

  if (response.status !== 200) {
    alert("Invalid data. Please try again.");
  } else {
    showCoupon(result.coupon_code);
  }
}

/**
 * Coupon code display function
 * @description: This function displays the coupon code on the screen.
 * @param couponCode
 */
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
    alert("This coupon code has been copied to your clipboard.");
  });

  /**
   * Coupon code display
   * @description: This function displays the coupon code on the screen.
   * @param couponCode
   */
  couponCodeElement.innerText = couponCode;
}

/**
 * Popup display function
 * @description: This function displays the popup on the screen.
 * @type {string}
 */
popup.style.display = "block";

/**
 * Submit button click event
 * @description: This function checks the validity of the data and sends it to the API. Otherwise, it displays an error message.
 */
submitButton.addEventListener("click", async () => {
  // Assign input values to variables with trim.
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();

  // Validate email and phone and check GDPR checkbox status
  if (
    isValid("email", email) &&
    isValid("phone", phone) &&
    gdprCheckbox.checked
  ) {
    // Create payload object.
    const data = {
      email,
      phone,
    };
    try {
      // Send data to API
      await sendLeadData(data);
    } catch (e) {
      console.error(e);
    }
  } else {
    alert(
      "Please enter a valid email address, telephone number and agree to the terms of the GDPR."
    );
  }
});

/**
 * close button click event
 * @description: This function hides the popup on the screen.
 */
closeButton.addEventListener("click", () => {
  hidePopup();
});

/**
 * Popup overlay click event
 * @description: This function hides the popup on the screen.
 * @type {string}
 *
 */
popupOverlay.addEventListener("click", () => {
  hidePopup();
});
