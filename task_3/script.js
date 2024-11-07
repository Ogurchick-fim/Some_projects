document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery__image");
    const fullViewContainer = document.getElementById("fullViewContainer");
    const fullViewImage = document.getElementById("fullViewImage");
    const fullViewCloseButton = document.getElementById("fullViewCloseButton");

    
    galleryImages.forEach(image => {
        image.addEventListener("click", function() {
            fullViewImage.src = this.src; 
            fullViewContainer.style.display = "flex"; 
        });
    });

    
    fullViewCloseButton.addEventListener("click", function() {
        fullViewContainer.style.display = "none";
    });

    
    fullViewContainer.addEventListener("click", function(event) {
        if (event.target === fullViewContainer) {
            fullViewContainer.style.display = "none";
        }
    });
});
