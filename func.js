alert("🔥 WEBSITE BỊ TẤN CÔNG QUA CDN func.js !!! 🔥");

document.body.innerHTML = `
  <div style="padding: 50px; text-align: center; font-family: Arial;">
    <h1 style="color: red; font-size: 40px;">
      WEBSITE ĐÃ BỊ HACK !!
    </h1>
    <p style="font-size: 20px;">
      File JavaScript tải từ CDN đã bị thay đổi.
    </p>
    <p style="margin-top: 20px; font-size: 18px;">
      Đây là ví dụ thực tế về việc
      <strong>KHÔNG DÙNG Subresource Integrity (SRI)</strong>.
    </p>
  </div>
`;
document.addEventListener("DOMContentLoaded", () => {
  const openPopupBtn = document.getElementById("openPopupBtn");
  const closePopupBtn = document.getElementById("closePopupBtn");
  const popup = document.getElementById("popup");
  const popup_content = document.getElementById("your-cart");

  openPopupBtn.addEventListener("click", () => {
    popup.classList.add("show");
    popup.classList.remove("hidden");
    setTimeout(() => {
      popup_content.style.width = "30%";
    }, 300);
    var body = document.body;
    body.classList.toggle("no-scroll");
  });

  closePopupBtn.addEventListener("click", () => {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.classList.add("hidden");
    }, 300);
    // Wait for the animation to finish before hiding
    var body = document.body;
    body.classList.remove("no-scroll");
  });

  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.remove("show");
      setTimeout(() => {
        popup.classList.add("hidden");
      }, 300);
    }
  });
});

//Counting
Value = 0;
quantity = 0;
AddproductQuantity = 0;
quantityString = '';
function product_count() {
    if(quantity >= 90)
        {
            window.alert("Max");
            return;
        }
    numberInput = document.getElementById("num");
    numberValue = parseFloat(numberInput.value);
    quantity = quantity + numberValue;
  document.getElementById("quantity").textContent = quantity;
  Name = document.getElementById("productName");

  

  var newProductAddedImg = document.createElement("img");
  newProductAddedImg.classList.add("Product-added-img");
  newProductAddedImg.src = document.getElementById("productImg").src;

  var newProductAddedName = document.createElement("span");
  newProductAddedName.classList.add("Product-added-name");
  newProductAddedName.textContent =
    document.getElementById("productName").textContent;

  var newProductAddedPrice = document.createElement("span");
  newProductAddedPrice.classList.add("Product-added-price");
  newProductAddedPrice.textContent = document.getElementById("productPrice").textContent;

  var newProductAddedQuantity = document.createElement("span");
  newProductAddedQuantity.classList.add("Product-added-quantity");
  productQuantity = parseFloat(document.getElementById("num").value);
  newProductAddedQuantity.textContent = AddproductQuantity.toString();



  // Append the new element to the container
  var existingElements = document.querySelectorAll(".Product-added-name");
  
  var duplicateFound = false;
  existingElements.forEach(function (element) {
    if (element.textContent === newProductAddedName.textContent) {
      duplicateFound = true;
    }
  });

  if (!duplicateFound) {
    var newProductAdded = document.createElement("div");
    newProductAdded.classList.add("product-added");
    newProductAdded.appendChild(newProductAddedImg);
    newProductAdded.appendChild(newProductAddedName);
    newProductAdded.appendChild(newProductAddedPrice);
    newProductAdded.appendChild(newProductAddedQuantity);
    newProductAddedQuantity.textContent = AddproductQuantity.toString();
    document.getElementById("your-cart").appendChild(newProductAdded);
    AddproductQuantity = numberValue;
  } else {
    AddproductQuantity = AddproductQuantity + numberValue;
}
Price = parseFloat(document.getElementById("Value1").textContent);
Value = Price * AddproductQuantity;

var parentDiv = document.getElementById("your-cart");
var childDivs = parentDiv.querySelectorAll(".product-added");
childDivs.forEach(function (childDiv) {
    elements = childDiv.children;
    if(elements[1].textContent === newProductAddedName.textContent) {
        elements[3].textContent = AddproductQuantity;
    }
    console.log(elements);
});
document.getElementById("total-price").textContent = Value; }




