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
        console.log(nextImage);



    } else if (buttonId === 'previous' && i > 0)
    {
        i--;
    }

    currentImage.addClass('carousel-hidden').removeClass('active');

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