function cambiarClase() {
    let navbar = document.getElementById('navbar');
        navbar.classList.toggle('navbar-open');

}

const gallery  = document.querySelectorAll(".image"),
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
            document.querySelector(".portfolio").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; 
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector(".portfolio").style.overflow = "scroll";
            }
        }
        
    }
    
}

function confettiFalling() {

    var box = document.getElementById("confetti1");
    var colors = ['#00FDDB', '#EFFD00', 'blue', '#ec38bc', '#7303c0', '#ff5e62', '#FF4B2B'];

    for (var i = 0; i < 1000; i++) {
        var div = document.createElement("div");
        div.classList.add("confetti");
        box.appendChild(div);
    }

    var confetti = document.querySelectorAll('.confetti');

    for (var i = 0; i < confetti.length; i++) {
        
        var size = Math.random() * 0.01 * [i];

        confetti[i].style.width = 5 + size + 'px';
        confetti[i].style.height = 16 + size + 'px';
        confetti[i].style.left = Math.random() * innerWidth + 'px';

        var background = colors[Math.floor(Math.random() * colors.length)];
        confetti[i].style.backgroundColor = background;

        box.children[i].style.transform = "rotate("+ size*[i] +"deg)";
    }
}
confettiFalling();