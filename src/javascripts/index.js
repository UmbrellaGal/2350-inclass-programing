// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// JavaScript
//TODO
import "bootstrap"

const displayRandoBox = function(){
    let r = Math.random()
    if(r<.5){
        document.write('<div class="red box"></div>')
    }
    else{
        document.write('<div class="blue box"></div>')
    }
}

function displayNBoxUsingFor(n){
    for(let i=0; i<n; i++){
        displayRandoBox()
    }
}
function displayNBoxesUsingWhile(n){
    let j=0;
    while(j < n){
        displayRandoBox()
        j++
    }
}
function displayNBoxesUsingDoWhile(n){
    let k = 0;
    do{
    displayRandoBox()
        k++
    }while(k < n)
}  

displayNBoxUsingFor(14)
displayNBoxesUsingWhile(14)
displayNBoxesUsingDoWhile(14)

const spuare = function(x){
    return x*x
}
alert(square(10))