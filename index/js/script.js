var input = document.querySelector("#inp");
blb = document.getElementById("btnl");
BTN = document.getElementById("btn1");
bl = document.getElementById("anside");
var btnn = document.querySelector("#pbtn");

    
    
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


BTN.addEventListener("click", () =>{

Nome = document.getElementById("Nome").value;
Email = document.getElementById("email").value;

    if(Nome == "" || Email ==""){
        alert("Prencha os campos");
    }
    else{
        alert("Obrigado " + Nome + "!");
        document.location.href = email + encodeURIComponent(Nome)+ "&body=" + encodeURIComponent("Promoção!!!!!!");
        document.getElementById("Nome").value="";
        document.getElementById("email").value="";
    }
})


    var coordenadas = {lat: -22.912869, lng: -43.228963};

    var mapa = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 15,
      center: coordenadas 
    });

    var marker = new google.maps.Marker({
      position: coordenadas,
      map: mapa,
      title: 'Meu marcador'
    });