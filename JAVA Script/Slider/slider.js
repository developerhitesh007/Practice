
        var count = 0 
        var ImageData = document.getElementsByClassName("slider-img");
        function slider(params) { 
    for (let index = 0; index < ImageData.length; index++) { 
        ImageData[index].style.display = "none" 
        ImageData[index].classList.remove("anim")

    }
    if (count > ImageData.length-1){
        count = 0;
    }
    console.log(count);
    ImageData[count].style.display = "block"
    ImageData[count].classList.add("anim")
    count++;
    setTimeout(slider, 3000);
    
}
slider()




// var count = 0
// var ImageData = document.getElementsByClassName("slider-img");
// function slider(params) {
//     for (let index = 0; index < ImageData.length; index++) {   
//         ImageData[index].style.display = "none"    
//     }

//     console.log(count);
//             ImageData[count].style.display = "block"
//             count++; 
//             setTimeout(slider, 3000);
// }slider()
