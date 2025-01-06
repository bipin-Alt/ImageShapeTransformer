const image = document.getElementById("image");
const  selectShape = document.getElementById("selectShape");
const uploadImage = document.getElementById("image-upload");
const applyButton = document.querySelector(".apply-btn");

//variable to store the selected shape//
let selectedShape = "";

//update selected shape when changed//
selectShape.addEventListener("change", ()=>{
    selectedShape = selectShape.value;
});

//update image source when a file is uploaded//
uploadImage.addEventListener("change", (e)=>{
   const file = e.target.files[0];
   if(file){
    const read = new FileReader();
    read.onload = (e) =>{
        image.src = e.target.result;
    }
    read.readAsDataURL(file);
   }
});

//add event listener to the apply button//
applyButton.addEventListener('click', ()=>{
    image.className ="";
    if(selectedShape){
        image.classList.add(selectedShape);
    }
});

