// assigning a click event listener to the document
document.addEventListener("click", function(){

    // define an array of colors
    var arrayOfColors = ["#13455C", "#B1C3FA", "#C2F760", "#F0E1C0", "#E06526"];
    // define a random number generator
    var newColor = Math.floor(Math.random()*6);

    console.log(newColor);
    console.log("click happened");
    console.log("background color is: " + newColor);

    // assign the background color of the page to be the random number in the arravs value
    document.body.style.backgroundColor = arrayOfColors[newColor];

    // change the color (for legibility) & font of the text based on the background
    // Bug exists with newColor = 4 (?)
    if (newColor == 0 || newColor == 4){
        // When you use getElementsByClassName you receive a collection of elements so you need to specify the element in the collection
        document.getElementsByClassName("bodyText")[0].style.color = "#F0E1C0";
        document.getElementsByClassName("bodyText")[1].style.color = "#F0E1C0";

        if (newColor == 0){
            document.getElementsByClassName("bodyText")[0].style.fontFamily = "Courier New";
            document.getElementsByClassName("bodyText")[1].style.fontFamily = "Impact";
        } else if (newColor == 4){
            document.getElementsByClassName("bodyText")[0].style.fontFamily = "Impact";
            document.getElementsByClassName("bodyText")[1].style.fontFamily = "Arial";
        }
    } else {
        document.getElementsByClassName("bodyText")[0].style.color = "#13455C";
        document.getElementsByClassName("bodyText")[1].style.color = "#13455C";

        if (newColor == 1){
            document.getElementsByClassName("bodyText")[0].style.fontFamily = "Verdana";
            document.getElementsByClassName("bodyText")[1].style.fontFamily = "Brush Script MT";
        } else if (newColor == 2){
            document.getElementsByClassName("bodyText")[0].style.fontFamily = "Brush Script MT";
            document.getElementsByClassName("bodyText")[1].style.fontFamily = "Verdana";
        } else if (newColor == 3){
            document.getElementsByClassName("bodyText")[0].style.fontFamily = "Arial";
            document.getElementsByClassName("bodyText")[1].style.fontFamily = "Courier New";
        } 
    }
});

    
