function carregaDicionario() {

    var biografias = {
      
      bio01: {
  
        nome: "Sol : 8 minutos-luz",
  
        imagem: "https://i.postimg.cc/3JGj4bYy/1.webp",
  
        descricao:
  
          "O Sol é uma estrela do tipo anã amarela situada a cerca de 150 milhões de quilômetros da Terra. A estrela é o maior objeto do nosso Sistema Solar, sendo a única estrela do sistema e tendo cerca de 100 vezes o diâmetro do nosso planeta. Ela é rodeada por oito planetas – com a Terra ocupando a zona habitável – e estima-se que ela se formou há cerca de 4,5 bilhões de anos. Atualmente, o Sol é a estrela mais estudada pelos astrônomos, sendo monitorada 24 horas por dia, sete dias por semana, por uma frota de satélites e sondas espaciais, além de observatórios em terra.",
  
  
      },
      
       bio02: {
  
        nome: "Alpha Centauri: 4,24 anos-luz",
  
        imagem: "https://i.postimg.cc/tg6sYMLr/2.jpg",
  
        descricao:
  
          "O sistema de Alpha Centauri, localizada na direção da constelação de Centauro, é formado por três estrelas, batizadas “Alpha Centauri A”, “Alpha Centauri B” e “Proxima Centauri”. Entre as três, a mais perto é Proxima Centauri, uma anã vermelha que é acompanhada por pelo menos 3 exoplanetas, sendo que um deles – o “Proxima Centauri b” – tem massa comparável à da Terra e se encontra na zona habitável.",
  
             
      },
  
      
      bio03: {
  
        nome: "Estrela de Barnard: 5,96 anos-luz",
  
        imagem: "https://upload.wikimedia.org/wikipedia/commons/1/18/Barnardstar2006.jpg",
  
        descricao:
  
          "Descoberta em 1916, pelo astrônomo americano Edward Emerson Barnard, esta é uma estrela anã vermelha da constelação de Ofiúco, que não é visível a olho nu. Recentemente, foi descoberto que ela tem pelo menos um planeta do tamanho de uma super-Terra orbitando um pouco além de sua zona habitável. Outra curiosidade é que a estrela está atualmente se aproximando do Sistema Solar. Por volta do ano 11.800, a Estrela de Barnard deverá alcançar a sua menor distância da Terra, cerca de 3,85 anos-luz.",
  
    
      },
  
      
      bio04: {
  
        nome: "Luhman 16 — 6,5 anos-luz",
  
        imagem: "https://i.postimg.cc/02GRJJGc/luhman.jpg",
  
        descricao: "Recém-descoberto, esse sistema estelar está a 6,5 anos-luz – na direção da constelação de Vela – e é composto por duas anãs-marrons, muito frias e escuras para serem vistas a olho nu. Esse tipo de objeto tem tamanho intermediário entre planetas gigantes gasosos e estrelas pequenas. A descoberta foi feita pelo telescópio espacial Wide-field Infrared Survey Explorer, da NASA, em 2010. O sistema também recebe a designação WISE 1049−5319.",
  
      },
  
      bio05: {
  
        nome: "WISE 0855-0714 — 7,2 anos-luz",
  
        imagem: "https://upload.wikimedia.org/wikipedia/commons/7/73/Wise1049-5319_Multi-Color_%28No_Marker%2C_crop%29.png",
  
        descricao:
  
          "Depois de mais uma década de procura, astrônomos conseguiram finalmente encontrar as “estrelas” mais frias da galáxia, algumas delas foi descoberta recentemente pelo telescópio Wide-field, chamada WISE 0855-0714, que é formada por uma anã marrom com massa entre 3 e 10 vezes a massa de Júpiter e uma temperatura entre 48 e 13º C negativos. Esta é a anã-marrom mais fria já descoberta. Ela está a 7,2 anos-luz da Terra, na direção da constelação de Hydra, e não pode ser visto a olho nu.",
  
  
      },
  
     
      bio06: {
  
        nome: " Wolf 359 — 7,8 anos-luz",
  
        imagem: "https://i.postimg.cc/Z518t02z/Red-dwarf-feature-1.jpg",
  
        descricao:
  
          "Localizada na direção da constelação de Leão, Wolf 359 é uma estrela anã vermelha de fraco brilho — visível apenas com telescópios –, distante cerca de 7,8 anos-luz. A estrela é considerada jovem, com menos de um bilhão de anos, e libera violentas e frequentes erupções magnéticas – com emissões de raios X maiores do que o Sol. A estrela é bem conhecida por aficionados da ficção científica, principalmente os que acompanham a franquia Star Trek.",
  
      },
      
       bio07: {
  
        nome: "Lalande 21185 — 8,31 anos-luz",
  
        imagem: "https://i.postimg.cc/nh8bXGQs/image-4-1.png",
  
        descricao:
  
          "Outra estrela anã vermelha muito fraca para ser vista a olho nu é Lalande 21185, localizada na constelação da Ursa Maior. Desde 1996, especula-se que o sistema contenha exoplanetas, com pelo menos dois candidatos descobertos, sendo um deles uma super-Terra, com cerca de 3,8 vezes a massa do nosso planeta.",
  
  
      },
  
      
       bio08: {
  
        nome: "Sirius — 8,6 anos-luz",
  
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sirius_A_and_B_Hubble_photo.jpg/200px-Sirius_A_and_B_Hubble_photo.jpg",
  
        descricao:
  
          "O sistema é formado por duas estrelas, Sirius A, uma estrela branca da sequência principal; e Sirius B, que já se tornou uma anã branca – sendo 10 mil vezes menos luminosa que a sua companheira. Vista da Terra, Sirius é a estrela mais brilhante do céu noturno, sendo observável na constelação de Cão Maior. Até o momento, nenhum exoplaneta foi descoberto neste sistema.",
  
  
      },
      
      
       bio09: {
  
        nome: "Ross 154 — 9,69 anos-luz",
  
        imagem: "https://i.postimg.cc/FHSWwtzz/9.jpg",
  
        descricao:
  
          "Esta fria e escura anã-vermelha tem cerca de 17% a massa do Sol, porém, até o momento, não foram encontradas evidências de exoplanetas. Localizada na constelação de Sagitário, é preciso de telescópios para observá-la.",
  
  
      },
  
  
  
    };
  
    var content = document.getElementById("content");
    
  for (var bio in biografias) {
    
    content.innerHTML += '<div class="card">' +
  
        '<img src="' +
  
        biografias[bio].imagem +
  
        '"/>' +
  
        "<details>" +
  
        "<summary>" +
  
        biografias[bio].nome +
  
        "</summary>" +
  
        "<p>" +
  
        biografias[bio].descricao +
  
        "</p>" +
  
        "</details></div>";
  
    }
  }
  
  
  carregaDicionario();