const galleryItems = document.querySelectorAll('.gallery-item');

const lightBox = document.querySelector('.lightbox');

const lightBoxImag = document.getElementById('lightbox-image');

const closeBtn = document.getElementById('close-btn');

galleryItems.forEach(img=>{
  img.addEventListener('click',()=>{
    lightBox.style.display = 'flex'; // show the lightbox
    const fullSizeSrc = img.src.replace('-thumbnail', '');// get full-size image
    lightBoxImag.src = fullSizeSrc; // set the image
  });
});
// the way to close the button of lightbox

closeBtn.addEventListener('click',()=>{
    lightBox.style.display = 'none';
     
   });
   
   lightBox.addEventListener('click',()=>{
     lightBox.style.display = 'none';
   })