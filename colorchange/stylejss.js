
const getRandomNumber = (limit) => {
    return Math.floor(Math.random() * limit);
};
function funcolorchang(){
    var copy = document.getElementById("divcolorchang");
    var clone = copy.cloneNode(true); 
    
    clone.style.backgroundColor ='#' + Math.floor(Math.random() * 16777215).toString(16);
    //clone.style.backgroundColor = Math.floor(Math.random() * 255);
    //clone = Math.floor(Math.random() * 16777215);

    document.body.append(clone);
}