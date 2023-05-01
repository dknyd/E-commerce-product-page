// Hiding thumbnails on mobile view
const imageMain = document.querySelector(".imageMain");
const thumbnails = document.querySelectorAll(".thumbnail");
function thumbnailsHide () {
    if (window.innerWidth < 1200){
        for (i = 0; i < thumbnails.length; i++){
            thumbnails[i].style.visibility = "hidden";
            thumbnails[i].style.position = "absolute";
            thumbnails[i].style.width = "0px";
            thumbnails[i].style.heigth = "0px";
        }
    } else{
        for (i = 0; i < thumbnails.length; i++){
        thumbnails[i].style.visibility = "visible";
        thumbnails[i].style.position = "static";
        thumbnails[i].style.width = "10rem";
        thumbnails[i].style.heigth = "100%";
        }
        
    }
}

thumbnailsHide()

window.addEventListener("resize", thumbnailsHide)


// Making imageMain's src the clicked thumbnail
function setMainImage() {
    imageMain.src = this.src
}

for (i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener("click", setMainImage)
    }
    

// Previous and Next picture on mobile view
const mobileStepNext = document.querySelector(".mobileStepNext");
const mobileStepPrevious = document.querySelector(".mobileStepPrevious");

let mobileCurrentImage = 0;
mobileStepPrevious.addEventListener("click", function(){
    if (mobileCurrentImage < thumbnails.length - 1){
        mobileCurrentImage ++;
        imageMain.src = thumbnails[mobileCurrentImage].src;
    } 
    
})

mobileStepNext.addEventListener("click", function(){
    if (mobileCurrentImage > 0){
        mobileCurrentImage --;
        imageMain.src = lightBoxThumbnails[mobileCurrentImage].src;
    }
})

//LIGHTBOX
const lightBox = document.querySelector(".lightBox");
const lightBoxThumbnails = document.querySelectorAll(".lightBoxThumbnail");
const lightBoxImageMain = document.querySelector(".lightBoxImageMain");
const closeButton = document.querySelector(".closeButton");

function handleLightBox(){
    lightBox.style.visibility = "visible";
    lightBox.style.position = "absolute";
}

function lightBoxSetMainImage() {
    lightBoxImageMain.src = this.src
}

        // Adding lightbox only if the widt is higher than 1200 px at original check
if (window.innerWidth > 1200) {
    for (let i = 0; i < thumbnails.length; i++){
        thumbnails[i].addEventListener("click", handleLightBox)
    }
    
    imageMain.addEventListener("click", handleLightBox)

    for (i = 0; i < lightBoxThumbnails.length; i++){
        lightBoxThumbnails[i].addEventListener("click", lightBoxSetMainImage)
        }
    
    closeButton.addEventListener("click", function closeLightBox(){
        lightBox.style.visibility = "hidden";
        lightBox.style.position = "absolute";
    })
} else if (window.innerWidth < 1200){
    lightBox.style.visibility = "hidden";
    lightBox.style.position = "absolute";
   for (let i = 0; i <lightBoxThumbnails.length; i++){
    lightBoxThumbnails[i].style.position = "absolute"
   }
   imageMain.removeEventListener('click', handleLightBox);
   
}

        // Adding lightbox only if the widt becomes higher than 1200 px 
window.addEventListener('resize', function() {
    if (window.innerWidth > 1200) {
        for (let i = 0; i < thumbnails.length; i++){
            thumbnails[i].addEventListener("click", handleLightBox)
        }

        imageMain.addEventListener("click", handleLightBox)
            
            for (i = 0; i < lightBoxThumbnails.length; i++){
                lightBoxThumbnails[i].addEventListener("click", setMainImage)
                }
        
        closeButton.addEventListener("click", function closeLightBox(){
            lightBox.style.visibility = "hidden";
            lightBox.style.position = "absolute";
        })
    } else if (window.innerWidth < 1200){
        lightBox.style.visibility = "hidden";
        lightBox.style.position = "absolute";
        for (let i = 0; i <lightBoxThumbnails.length; i++){
            lightBoxThumbnails[i].style.position = "absolute"
           }
           
           imageMain.removeEventListener('click', handleLightBox);
            
    }
  });

        // Creating orange border for clicked thumbnail
for (let i = 0; i < lightBoxThumbnails.length; i++){
    lightBoxThumbnails[i].addEventListener("click", function(){
        for (let j = 0; j < lightBoxThumbnails.length; j++){
            lightBoxThumbnails[j].classList.remove("active")
        }
        lightBoxThumbnails[i].classList.add("active")
    })
}

        // stepNext / stepPrevious
const stepNext = document.querySelector(".stepNext");
const stepPrevious = document.querySelector(".stepPrevious");
let currentImage = 0;
stepNext.addEventListener("click", function(){
    if (currentImage < lightBoxThumbnails.length - 1){
        currentImage ++;
        lightBoxImageMain.src = lightBoxThumbnails[currentImage].src;
    } 
    
})

stepPrevious.addEventListener("click", function(){
    if (currentImage > 0){
        currentImage --;
        lightBoxImageMain.src = lightBoxThumbnails[currentImage].src;
    }
})

// CART HANDLING
const quantity = document.querySelector(".quantity");
const buttonMinus = document.querySelector(".buttonMinus");
const buttonPlus = document.querySelector(".buttonPlus");
const iconCart = document.querySelector(".iconCart");
const cartInfo = document.querySelector(".cartInfo");
const finalQuantity = document.querySelector(".finalQuantity");
const finalPrice = document.querySelector(".finalPrice");
const addToCart = document.querySelector(".addToCart");
const notification = document.querySelector(".notification");
const cartInfoTop = document.querySelector(".cartInfoTop");
const emptyCartDiv = document.querySelector(".emptyCartDiv");
const iconDelete = document.querySelector(".iconDelete");

quantity.innerHTML = 0;


    // Plus & Minus to cart button functions
buttonMinus.addEventListener("click", function() {
    if (quantity.innerHTML > 0){
        quantity.innerHTML --;
    }
})

buttonPlus.addEventListener("click", function() {
    quantity.innerHTML ++;
    
})


    // Add to cart button functions
addToCart.addEventListener("click", function() {
    if (quantity.innerHTML > 0){
        notification.classList.add("visible");
        notification.innerHTML = quantity.innerHTML;
        emptyCartDiv.classList.add("hidden");
        emptyCartDiv.classList.remove("visible");
        cartInfoTop.classList.remove("hidden");
        finalQuantity.innerHTML = quantity.innerHTML + " "; 
        finalPrice.innerHTML = "$" + finalQuantity.innerHTML * 125;
        finalPrice.style.fontWeight = 800;
    } else {
        cartInfoTop.classList.remove("visible");
        cartInfoTop.classList.add("hidden");
        emptyCartDiv.classList.remove("hidden");
        notification.classList.remove("visible");
        notification.classList.add("hidden");
    }
})

    // Delete icon button functions
iconDelete.addEventListener("click", function(){
    cartInfoTop.classList.remove("visible");
        cartInfoTop.classList.add("hidden");
        emptyCartDiv.classList.remove("hidden");
        emptyCartDiv.classList.add("visible");
        notification.classList.remove("visible");
        notification.classList.add("hidden");
})
  
    // Cart contents popping up when pressing cart icon
iconCart.addEventListener("click", function(){
  if (cartInfo.classList.contains("hidden")){
    cartInfo.classList.remove("hidden");
    cartInfo.classList.add("visible");
    emptyCartDiv.classList.remove("hidden");
    emptyCartDiv.classList.add("visible");
    
  } else{
    cartInfo.classList.remove("visible");
    cartInfo.classList.add("hidden");
    cartInfoTop.classList.remove("visible");
    emptyCartDiv.classList.add("hidden");
    emptyCartDiv.classList.remove("visible");
  }
})



