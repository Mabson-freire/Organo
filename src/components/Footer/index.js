import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <section>
        <ul>
          <li>
            <a href='facebook.com' target='_blank'>
              <img src='/Imagens/fb.png' alt='logo facebook'/>
            </a>

            <a href='twitter.com' target='_blank'>
              <img src='/Imagens/tw.png' alt='logo twitter'/>
            </a>
            
            <a href='facebook.com' target='_blank'>
              <img src='/Imagens/ig.png' alt='logo instagram'/>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <img src="/Imagens/logo.png" alt="logo organo" />
      </section>

      <section>
        <p>Desenvolvido por Alura</p>
      </section>

    </footer>

  )
}

export default Footer