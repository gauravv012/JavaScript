function changeText(){
    let fpara = document.getElementsById('fpara');
    fpara.textContent = "Hello Gaurav"
    
}
 let fpara = document.getElementsById('fpara')
 fpara.addEventListener('click',changeText);
 //fpara.removeEventListener('click',changeText);