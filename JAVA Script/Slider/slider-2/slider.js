var ImgData = document.getElementsByClassName('slider-img')
    console.log("ImgData",ImgData);

    var counter = 0
function slider() {
    // console.log(ImgData.length);
    for (let index = 0; index < ImgData.length; index++) {

        console.log(index);
        ImgData[index].style.display="none"
    }
    // console.log("called");

    if (counter >= ImgData.length) {
        counter = 0;
    }
    console.log(counter);
    ImgData[counter].style.display="block"
    counter++ 
    setTimeout(slider, 2000)
}
slider()

