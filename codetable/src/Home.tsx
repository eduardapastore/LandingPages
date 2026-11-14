    import logouneb from './assets/LOGOUNEB.svg'
    import logobrinqueeaprenda from './assets/LOGOBRINQUEEAPRENDA.svg'
    import sobrejogo from './assets/ABOUTIMG.svg'
    import './Home.css'

    import { PopButton } from "./components/pop-button";

    function Home() {

      return (
        <>
          <section className='bg-[url("./assets/CAPAHERO.svg")] bg-cover bg-no-repeat bg-center h-screen w-screen p-8 flex flex-col justify-between mb-8'>
            <header className='flex justify-between'>
              {/* Logos */}
              <div className='flex gap-4 w-1/8'>
                <img src={logouneb} alt="Logo UNEB" />
                <img src={logobrinqueeaprenda} alt="Logo Brinque e Aprenda" />
              </div>

              {/* Menu */}
              <div>
                <ul className='flex gap-4 font-bold text-white'>
                  <li><a href="#">Início</a></li>
                  <li><a href="#">Sobre</a></li>
                  <li><a href="#">Download</a></li>
                </ul>
              </div>
            </header>

            {/* Container do botão na parte de baixo e centralizado */}
            <div className='flex justify-center w-full'>
              <a href="#sobre-o-jogo">
                <PopButton className="cursor-pointer font-bold text-xl p-6 bg-red-700 border-red-800 text-white hover:bg-red-600 focus-visible:ring-red-500">
                  Conheça o jogo!
                </PopButton>
              </a>
            </div>
          </section>

          {/* Sobre o jogo */}
          <section id="sobre-o-jogo" className='flex items-center justify-center gap-8 p-8'>
            <div>
              <div className='border-l-4 border-black pl-4 mb-4'>
                <h3 className='font-bold'>O que é a <span className='text-red-700'>computação divertida?</span></h3>
                <p className='font-medium'>Conheça o projeto!</p>
              </div>
              <p className='text-justify font-regular w-xs'>O projeto computação divertida
                vem com suas raízes no projeto
                codetable, sendo uma adaptação
                brasileira que auxilia pessoas não
                programadoras a entenderem
                lógica de programação e o uso de 
                comandos em computadores, 
                sendo uma versão mais acessível 
                pois não requer nenhum 
                equipamento eletrônico.</p>
            </div>
            <div>
              <img src={sobrejogo} alt="Sobre o jogo" width={350} />
            </div>
          </section>

          {/* criadores do jogo */}
          <section className='flex flex-col items-center justify-center gap-8 p-8 mb-4'>
            <h2 className='font-bold text-3xl'>Criadores do <span className='text-red-700'>projeto!</span></h2>

            {/* Linha 1 */}
            <div className='flex gap-8 items-start justify-center'>
              <div className='flex flex-col items-center gap-2 w-48 text-center'>
                <img src="https://avatars.githubusercontent.com/u/11111111?v=4" alt="João Cleber" className='rounded-full w-32 h-32' />
                <p className='font-bold'>João <span className='text-red-700'>Cleber</span></p>
                <p className='text-sm'>Modelador 3D e 2D</p>
              </div>

              <div className='flex flex-col items-center gap-2 w-48 text-center'>
                <img src="https://avatars.githubusercontent.com/u/11111111?v=4" alt="Eduarda Pastore" className='rounded-full w-32 h-32' />
                <p className='font-bold'>Eduarda <span className='text-red-700'>Pastore</span></p>
                <p className='text-sm'>Roteirista, designer e modeladora 3D</p>
              </div>

              <div className='flex flex-col items-center gap-2 w-48 text-center'>
                <img src="https://avatars.githubusercontent.com/u/11111111?v=4" alt="Paulo Matheus" className='rounded-full w-32 h-32' />
                <p className='font-bold'>Paulo <span className='text-red-700'>Matheus</span></p>
                <p className='text-sm'>Produção</p>
              </div>
            </div>

            {/* Linha 2 */}
            <div className='flex gap-8 items-start justify-center'>
              <div className='flex flex-col items-center gap-2 w-48 text-center'>
                <img src="https://avatars.githubusercontent.com/u/11111111?v=4" alt="Pedro Paulo" className='rounded-full w-32 h-32' />
                <p className='font-bold'>Pedro <span className='text-red-700'>Paulo</span></p>
                <p className='text-sm'>Produção</p>
              </div>

              <div className='flex flex-col items-center gap-2 w-48 text-center'>
                <img src="https://avatars.githubusercontent.com/u/11111111?v=4" alt="Peterson Lobato" className='rounded-full w-32 h-32' />
                <p className='font-bold'>Peterson <span className='text-red-700'>Lobato</span></p>
                <p className='text-sm'>Professor Orientador <br /> e Idealizador do Projeto</p>
              </div>
            </div>
          </section>

          <section className='flex flex-col items-center justify-center gap-8 p-8 mb-4'>
            <h2 className='font-bold text-3xl mb-4'>Baixe e <span className='text-red-700'>Jogue!</span></h2>

            <div className='flex gap-8 items-start justify-center'>
              <div className='p-4 bg-red-600 rounded-lg text-white flex flex-col items-center gap-4 w-xs shadow-lg'>
                <h3 className='font-bold text-xl text-center'>Manual de Instruções do Jogo</h3>
                <img src="https://images.unsplash.com/photo-1791909867643-f17390b7c4bd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Manual de Instruções" className='rounded-lg w-64 h-48' />
                <p className='text-justify text-sm p-2'>Baixe o tutorial de como jogar "Floresta Encantada"</p>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <PopButton className="cursor-pointer font-bold text-xl p-7 bg-white border-red-800 text-red-700 hover:bg-gray-50 focus-visible:ring-red-500">
                    Baixar Manual
                  </PopButton>
                </a>
              </div>

              <div className='p-4 bg-red-600 rounded-lg text-white flex flex-col items-center gap-4 w-xs shadow-lg'>
                <h3 className='font-bold text-xl text-center'>Manual de instruções para Impressão</h3>
                <img src="https://images.unsplash.com/photo-1597765206445-a28d547c86f1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Manual de Instruções" className='rounded-lg w-64 h-48' />
                <p className='text-justify text-sm p-2'>Baixe o manual de instruções para impressão 3D do jogo.</p>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <PopButton className="cursor-pointer font-bold text-xl p-7 bg-white border-red-800 text-red-700 hover:bg-gray-50 focus-visible:ring-red-500">
                    Baixar Manual
                  </PopButton>
                </a>
              </div>

              <div className='p-4 bg-red-600 rounded-lg text-white flex flex-col items-center gap-4 w-xs shadow-lg'>
                <h3 className='font-bold text-xl text-center'>Arquivos de <br />Impressão</h3>
                <img src="https://images.unsplash.com/photo-1758435170505-e9b2772348c1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="Manual de Instruções" className='rounded-lg w-64 h-48' />
                <p className='text-justify text-sm p-2'>Baixe os arquivos de personagens, cartas e itens do jogo aqui!</p>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <PopButton className="cursor-pointer font-bold text-xl p-7 bg-white border-red-800 text-red-700 hover:bg-gray-50 focus-visible:ring-red-500">
                    Baixar Manual
                  </PopButton>
                </a>
              </div>
            </div>
          </section>

          {/* footer */}
          <section className='w-full bg-red-600 text-white p-8 flex flex-col items-center justify-center gap-4'>
            <footer>
              <div className='flex gap-4 items-center justify-center mb-8'>
                <img src={logouneb} alt="Logo UNEB" className='w-32 h-auto' />
                <img src={logobrinqueeaprenda} alt="Logo Brinque e Aprenda" className='w-32 h-auto' />
              </div>
              
              
              <p>&copy; {new Date().getFullYear()}{" "}
                Computação Divertida {" "} | All Rights Reserved
              </p>
            </footer>
          </section>
        </>
      )
    }

    export default Home
