var imageIndex = 0;
const numberOfImages = 8;
const images = document.getElementsByClassName("navbar-banner");

/*
 * This function changes the banner image. 
 */
function changeBanner() {
    if (imageIndex < numberOfImages - 1) {
        imageIndex++;
    } else {
        imageIndex = 0;
    }
    for (var i = 0; i < images.length; i++) {
        if (i == imageIndex) {
            images[i].style.display = 'block';
            centerBannerImage(images[i]);
        } else {
            images[i].style.display = 'none';
        }
    }
}

/*
 * This function centers the image, using col-10's and the image's width. This allows the margin to be dynamic 
 * based on the window's and image's width.
 */
function centerBannerImage(image) {
    var imagePadding = 40;
    image.style.marginLeft = (window.innerWidth * .833 - image.width) / 2 - imagePadding;
}