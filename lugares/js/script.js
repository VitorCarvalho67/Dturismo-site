volt = document.getElementById("reset");
next = document.getElementById("next");
var input = document.querySelector("#inp");
var btnn = document.querySelector("#pbtn");
blb = document.getElementById("btnl");

var result = input.value;
var resultado = result.split(" ");
var y = resultado.length;
var x;
    
input.addEventListener("keypress", function(e){
    
    if (e.key === "Enter"){

        var result = input.value;
        var resultado = result.split(" ");
        var y = resultado.length;
        var x;

        for (x = 0; x < y ; x++) {
        
            if(resultado[x] == "lugares" || resultado[x] == "Lugares" || resultado[x] == "pontos" || resultado[x] == "locais"){
                location.href = "lugares.html";
            
                }else if(resultado[x] == "home" || resultado[x] == "casa"){
                location.href = "index.html";
            
                }else if(resultado[x] == "Caribe" || resultado[x] == "caribe"){
                location.href = "index.html#title1";     
    
                }else if(resultado[x] == "desconto" || resultado[x] == "preços" || resultado[x] == "preço" || resultado[x] == "Preços"|| resultado[x] == "Desconto" || resultado[x] == "Preço" || resultado[x] == "promoção" || resultado[x] == "Promoção" || resultado[x] == "pacotes" || resultado[x] == "Pacotes"){
                location.href = "preço.html";   
                 
                }else if(resultado[x] == "Mais" || resultado[x] == "mais" || resultado[x] == "contato" || resultado[x] == "suporte"){
                location.href = "https://www.instagram.com/etecrgs/";    
                }

        } 
    }  
})

btnn.addEventListener("click", () =>{
    
    var result = input.value;
        var resultado = result.split(" ");
        var y = resultado.length;
        var x;

        for (x = 0; x < y ; x++) {
        
            if(resultado[x] == "lugares" || resultado[x] == "Lugares" || resultado[x] == "pontos" || resultado[x] == "locais"){
                location.href = "lugares.html";
            
                }else if(resultado[x] == "home" || resultado[x] == "casa"){
                location.href = "index.html";
            
                }else if(resultado[x] == "Caribe" || resultado[x] == "caribe"){
                location.href = "index.html#title1";     
    
                }else if(resultado[x] == "desconto" || resultado[x] == "preços" || resultado[x] == "preço" || resultado[x] == "Preços"|| resultado[x] == "Desconto" || resultado[x] == "Preço" || resultado[x] == "promoção" || resultado[x] == "Promoção" || resultado[x] == "pacotes" || resultado[x] == "Pacotes"){
                location.href = "preço.html";   
                 
                }else if(resultado[x] == "Mais" || resultado[x] == "mais" || resultado[x] == "contato" || resultado[x] == "suporte"){
                location.href = "https://www.instagram.com/etecrgs/";    
                }

        } 
})

blb.addEventListener("click", () =>{
    
    if(anside.classList.contains("fechado") || anside.classList.contains("i")){
        anside.classList.add("aberto");
        ia1.style.display = "none";
        ia2.style.display = "block";
        anside.classList.remove("fechado");
        anside.classList.remove("i");
        
    }
    else if(anside.classList.contains("aberto")){
        anside.classList.add("fechado");
        anside.classList.remove("aberto");
        ia2.style.display = "none";
        ia1.style.display = "block";
    }
})

var x = 0;

next.addEventListener("click", () =>{

    slide()
}
)

const imgs = document.getElementById("s");
const img = document.querySelectorAll("#s img");



function slide(){
    x++;

    if (x > img.length -1){
        x=0;
    }

    imgs.style.transform = "translateX(" + (-x * 100) + "vw)";
}

setInterval(slide, 3500);


volt.addEventListener("click", () =>{
    x--;

    if (x < 0){
        x=2;
    }

    imgs.style.transform = "translateX(" + (-x * 100) + "vw)";
}
)