let paths = [
    'images/bradley1.jpg',
    'images/bradley2.jpg',
    'images/bradley3.jpg'
],
    i = 1,
    slideDisplay = $('#slide-display');

function carousel(buttonId)
{
    let currentImage = $('.active');


    if (buttonId === 'next' && i < paths.length)
    {
        i++;
        let nextImage = $('#carousel-image-' + i);
        if (nextImage.length)
        {
            currentImage.removeClass('active').addClass('carousel-hidden');
            currentImage.css('animation', 'currentImageToLeft .3s forwards');
            nextImage.css('animation', 'nextImageToLeft .6s forwards');
            nextImage.addClass('active').removeClass('carousel-hidden');
        }



    } else if (buttonId === 'previous' && i > 1)
    {
        i--;
        let prevImage = $('#carousel-image-' + i);
        if (prevImage.length)
        {

            currentImage.removeClass('active').addClass('carousel-hidden');
            currentImage.css('animation', 'currentImageToRight .3s forwards');
            prevImage.css('animation', 'nextImageToRight .6s forwards');
            prevImage.addClass('active').removeClass('carousel-hidden');
        }
    }


}


for (let i = 1; i < paths.length; i++)
{
    let img = $('<img>').attr(
        {
            'src': paths[i],
            'id' : 'carousel-image-' + (i + 1)
        }
    ).addClass('carousel-hidden');
    slideDisplay.append(img);
}


$('html').on('click', function(e)
{
   switch(e.target.id) {
       case 'next':
       case 'previous':
           carousel(e.target.id);
           break;
   }
});