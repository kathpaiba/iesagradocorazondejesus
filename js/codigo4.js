function cambiarClase() {
    let navbar = document.getElementById('navbar');
        navbar.classList.toggle('navbar-open');

}

const buttonPrev = document.getElementById('button-prev');
const buttonNext = document.getElementById('button-next');
const track = document.getElementById('track');
const slickList = document.getElementById('slick-list');
const slick = document.querySelectorAll('.slick');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0,-2)*-1);

    if (leftPosition < (trackWidth - listWidth) && value == 2) {
        track.style.left = `${-1*(leftPosition+slickWidth)}px`;
    }else if(leftPosition > 0 && value == 1){
        track.style.left = `${-1*(leftPosition-slickWidth)}px`;
    }
}


const gallery  = document.querySelectorAll(".slick, .image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentseleccion = previewBox.querySelector(".current-seleccion"),
totalseleccion = previewBox.querySelector(".total-seleccion"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalseleccion.textContent = gallery.length; 
        let newIndex = i; 
        let clickedImgIndex; 
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; 
            function preview(){
                currentseleccion.textContent = newIndex + 1; 
                let imageURL = gallery[newIndex].querySelector("img").src; 
                previewImg.src = imageURL; 
            }
            preview(); 
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ 
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ 
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; 
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; 
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector(".Carousel, .portfolio").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; 
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector(".Carousel, .portfolio").style.overflow = "scroll";
            }
        } 
    } 
}





