


const boxes = document.querySelectorAll(".box"); 
const images = document.querySelector(".image");

boxes.forEach((box)=>{
    
    box.addEventListener('dragover',(event)=>{
event.preventDefault(); // it prevent the default operation in javascript

    });

    box.addEventListener('drop',(event)=>{
        box.appendChild(images); // it will attach the image in box
        alert("drag and drop successfully")
    })
})