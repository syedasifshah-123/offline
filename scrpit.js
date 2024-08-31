// Color Picker

// const $colorPickerBtn = document.querySelector("[data-color-picker]");
// const $colorCodeText = document.querySelector("[data-code]");

// const pickColor = async () => {

//     const eyeDropper = new EyeDropper();

//     const { sRGBHex } = await eyeDropper.open();
//     $colorCodeText.innerHTML = sRGBHex;

// }

// $colorPickerBtn.addEventListener("click", pickColor);

// $colorCodeText.addEventListener("click", function () {
//     let $codeText = $colorCodeText.textContent;
//     document.execCommand("copy");
//     navigator.clipboard.writeText($codeText);

//     $colorCodeText.textContent = "Copied";
//     setTimeout(() => {
//         $colorCodeText.textContent = "Color Code";
//     }, 2000);

// });




// Draggable Element


// const drag = document.querySelector("[data-drag]");
// let offsetX, offsetY;

// const move = (e) => {
//     drag.style.left = `${e.clientX - offsetX}px`;
//     drag.style.top = `${e.clientY - offsetY}px`;
// }

// drag.addEventListener("mousedown", function (e) {
//     offsetX = e.clientX - drag.offsetLeft;
//     offsetY = e.clientY - drag.offsetTop;
//     document.addEventListener("mousemove", move);
// });

// document.addEventListener("mouseup", () => {
//     document.removeEventListener("mousemove", move);
// });



if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker Register ho gaya:', registration);
        })
        .catch(error => {
          console.log('Service Worker Register nahi hua:', error);
        });
    });
  }
  


// Map Location API


const $getLocatioBtn = document.querySelector("[data-location]");

$getLocatioBtn.addEventListener("click", function () {

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        fetch(url).then(res => res.json()).then((data) => {
            console.table(data.address);
        }).catch(() => {
            console.error(error);
        })

    })

});



// Server offline work

// script.js

