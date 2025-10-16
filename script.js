const imagem = document.getElementById("imagem")

function slide1 (){
    imagem.src = "img1.jpg";
    setTimeout("slide2()",1500)
}

function slide2(){
      imagem.src = "img2.webp";
      setTimeout("slide3()",1500)
}

function slide3(){
       imagem.src = "img3.webp";
       setTimeout("slide1()",1500)
}

slide1()
