

/*base de dados*/
const baseMusicas = [
    {
        'name': 'Oceans',
        'artist': 'Hilsong United',
        'path': './src/audio/Hillsong United - Oceans (Live show at Caesarea)_160k.mp3',
        'album': 'Zion Acoustic Sessions',
    },
    {
        'name': 'All of the Stars',
        'artist': 'Ed Sheeran',
        'path': './src/audio/Ed Sheeran - All Of The Stars Tradução_160k.mp3',
        'album': 'The Fault In Our Stars',
    },
    {
        'name': 'Rescue',
        'artist': 'Lauren Daigle',
        'path': './src/audio/Lauren Daigle - Rescue (Official Music Video)_160k.mp3',
        'album': 'Look Up Child',
    },

    {
        'name': 'Before you Go',
        'artist': 'Lewis Capaldi',
        'path': './src/audio/Lewis Capaldi - Before You Go (Tradução)_160k.mp3',
        'album': 'Divinely Uninspired to a Hellish Exten',
    },
    {
        'name': 'Known',
        'artist': 'Tauren Wells',
        'path': './src/audio/Known - Tauren Wells (Tradução)_160k.mp3',
        'album': 'Hills and Valleys',
    },
    {
        'name': 'Live your life',
        'artist': 'T.I./Rihanna',
        'path': './src/audio/T.I. - Live Your Life ft. Rihanna Official Video _160k.mp3',
        'album': 'Paper Trail',
    },
    {
        'name': 'Monster',
        'artist': 'Justin Bieber, Shawn Mendes',
        'path': './src/audio/Shawn Mendes, Justin Bieber - Monster (Tradução) Clipe Oficial (Legendado)_160k.mp3',
        'album': 'Wonder',
    },

    {
        'name': 'Livramento',
        'artist':'Vitória Sousa',
        'path': './src/audio/Vitória Souza Livramento Clipe Oficial _160k.mp3',
        'album': 'Livramento',
    },
    {
        'name': 'Talking to the moon',
        'artist':'Bruno Mars',
        'path': './src/audio/talking to the moon.mp3',
        'album': 'Doo-Wops & Hooligans',
    },
    {
        'name': 'Meu Amanhã',
        'artist':'Eli Soares',
        'path': './src/audio/Eli Soares - Meu amanhã_160k.mp3',
        'album': 'Casa de Deus',
    },

    {
        'name': 'Infinitamente Mais',
        'artist':'Ton Carfi e Dilsinho',
        'path': './src/audio/Ton Carfi e Dilsinho - Infinitamente Mais (Clipe Oficial)_160k.mp3',
        'album': 'Tríade',
    },

    {
        'name': 'Still Have Me',
        'artist':'Demi Lovatto',
        'path': './src/audio/ Demi Lovato - Still Have Me_160k.mp3',
        'album': 'Still Have Me',
    },

    {
        'name': 'Alívio',
        'artist':'Jessé Aguiar',
        'path': './src/audio/Jessé Aguiar Alívio Clipe Oficial _160k.mp3',
        'album': 'Alívio',
    },
    {
        'name': 'O Escritor',
        'artist':'Pastor Lucas',
        'path': './src/audio/Pr. Lucas - O Escritor (Clipe Oficial MK Music)_160k.mp3',
        'album': 'Acústico 93 FM - Pr. Lucas',
    },
    {
        'name': 'Surrender',
        'artist':'Natalie Taylor',
        'path': './src/audio/ Surrender - Natalie Taylor_160k.mp3',
        'album': 'Surrender',
    },
    {
        'name': 'Teu Socorro',
        'artist':'Pedro Henrique',
        'path': './src/audio/Teu Socorro - Pedro Henrique (Official Music Vídeo)_160k.mp3',
        'album': 'Teu socorro',
    },
    {
        'name': 'Girassol',
        'artist':'Priscilla Alcantara, Whindersson Nunes',
        'path': './src/audio/Priscilla Alcantara, Whindersson Nunes - Girassol (Audio)_160k.mp3',
        'album': 'Melhores Priscilla Alcantara',
    }
    


];

/*<li>
                    <p class="primeiroItem">0 Oceans</p>
                    <p>Hillsong United</p>
                    <p> Zion Acoustic Sessions</p>
                </li> */

                const listaMusicas = document.querySelector('.listaMusicas');
                const tagAudio = document.getElementById('saidaAudio');
                const primeiraMusica = baseMusicas[0];
                tagAudio.src = primeiraMusica.path;
                atualizaPlayer(baseMusicas[0].album,baseMusicas[0].name)
                const botaoPausar = document.getElementById('btnPause');
                const botaoPlay = document.getElementById('btnControlPlay');
                
                let musicaAtual = 0;
                
                function construirPlaylist(musica, musicaId){
                    const musicaElemento = document.createElement('li');
                    const nomeMusica = document.createElement('p');
                    const nomeArtista = document.createElement('p');
                    const nomeAlbum = document.createElement('p');
                
                    musicaElemento.dataset.id = musicaId;
                
                    nomeMusica.className = 'primeiroItem';
                    nomeMusica.innerText = musica.name;
                    nomeArtista.innerText = musica.artist;
                    nomeAlbum.innerText = musica.album;
                
                    musicaElemento.appendChild(nomeMusica);
                    musicaElemento.appendChild(nomeArtista);
                    musicaElemento.appendChild(nomeAlbum);
                
                    musicaElemento.addEventListener('click', tocarMusica);
                
                    listaMusicas.appendChild(musicaElemento);
                }
                
                for(let contador = 0; contador < baseMusicas.length; contador++){
                    construirPlaylist(baseMusicas[contador], contador);
                }
                
                function tocarMusica(evento){
                    const elementoClicado = evento.currentTarget;
                
                    if(elementoClicado.tagName === 'LI'){
                        const musicaId = elementoClicado.dataset.id;
                        const musicaSelecionada = baseMusicas[musicaId];
                    
                        tagAudio.src = musicaSelecionada.path;
                        musicaAtual = Number(musicaId)
                        tagAudio.play();
                        botaoPlay.classList.add("pause")
                        atualizaPlayer(baseMusicas[musicaAtual].album,baseMusicas[musicaAtual].name)
                       
                    } else {
                        if(tagAudio.paused){
                            tagAudio.play();
                            botaoPlay.classList.add("pause")
                            
                        } else {
                            tagAudio.pause();
                            botaoPlay.classList.remove("pause")
                        }
                    }
                }
                botaoPlay.addEventListener('click', tocarMusica);
                
                function pausarMusica(){
                    tagAudio.pause();
                    botaoPlay.classList.remove("pause")
                }
                botaoPausar.addEventListener('click', pausarMusica);
                
                
                //NEXT
                function tocarProximaMusica(){
                    
                    if(musicaAtual === baseMusicas.length - 1){
                        musicaAtual = 0
                    }else{
                        musicaAtual++
                    }
                   
                    tagAudio.src = baseMusicas[musicaAtual].path
                    tagAudio.play()
                    let nomeAlbum = baseMusicas[musicaAtual].album
                    let nomeMusica = baseMusicas[musicaAtual].name
                    atualizaPlayer(nomeAlbum,nomeMusica)
                    botaoPlay.classList.add("pause")
                }
                
                const btnControlNext = document.getElementById('btnControlNext');
                btnControlNext.addEventListener("click", tocarProximaMusica)
                
                
                
                //PREV
                function tocarMusicaAnterior(){
                    
                    if(musicaAtual === 0){
                        musicaAtual = baseMusicas.length - 1
                    }else{
                        musicaAtual--
                    }
                    
                    tagAudio.src = baseMusicas[musicaAtual].path
                    tagAudio.play()
                    atualizaPlayer(nomeAlbum,nomeMusica)
                    botaoPlay.classList.add("pause")
                }
                
                const btnControlPrev = document.getElementById('btnControlPrev');
                btnControlPrev.addEventListener("click", tocarMusicaAnterior)
                
                const areaPlayerVolume = document.querySelector(".areaPlayerVolume input")
                
                console.log(areaPlayerVolume)
                areaPlayerVolume.addEventListener("input", ()=>{
                    
                    tagAudio.volume = areaPlayerVolume.value
                })
                
                function atualizaPlayer(nome,musica){
                   
                    //const fotoAlbum = document.getElementById('fotoAlbum');
                    const nomeMusica = document.getElementById('nomeMusica');
                    const nomeAlbum = document.getElementById('nomeAlbum');
                    
                   // fotoAlbum.src = foto
                    nomeMusica.innerText = musica
                    nomeAlbum.innerText = nome
                
                }
                
                
