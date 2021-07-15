// Change the image on mouse in and out
const MouseOverOut = (img, id) => document.getElementById(id).src = img;

const CollapseToggleMenu = () => {
    let element = document.getElementById("responsive-navbar-nav")
    let element2 = document.getElementsByClassName("navbar-toggler")
    // console.log(element[0])
    // element[0].classList.remove("show");
    //console.log(element.classList )
    //element.classList.add("collapsing")
    let result = element.classList.contains("show");
    console.log(element)
    if (result){        
        
        element2[0].classList.add("collapsed")
        element.classList.remove("show");
        console.log(result + element.classList)
    }else{
        
        element2[0].classList.remove("collapsed")
        element.classList.add("show");
        element.style.height = "296px";
        
        console.log(result + element.classList)
    }
    
}

export  {MouseOverOut, CollapseToggleMenu}