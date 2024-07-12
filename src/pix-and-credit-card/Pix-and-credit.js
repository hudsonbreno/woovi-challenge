import logo from '../assets/images/logo.png';
import protect from '../assets/images/protect.png';
import copy from '../assets/images/copy.png';

import './Pix-and-credit.css';

function App() {
  return (
    <div className="Pix-and-credit">
      <header className="Pix-and-credit-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          João, pague a entrada de R$ 15.300,00 pelo Pix
        </p>


        <div class="QR-code">
          <img src="" className='QR-code' alt='QR-code'></img>
        </div>

        <div className="Copy-QR-code">
          Clique para copiar QR CODE <img src={copy}></img>
        </div>
        <div className='expiration date'>
          <p>Prazo de pagamento</p>
          <b> 15/12/2021 - 08:17</b>
        </div>

        <div className='check-list'>
          <div className='check-list-1'>
            <p> 1º entrada no Pix </p>
            <p> R$15.300,00 </p>
          </div>
          <div className='check-list-2'>
            <p> 2º no cartão </p>
            <p> R$15.300,00 </p>
          </div>
        </div>

        <hr></hr>

          <div className='how-it-works'>
'           <div>
              <p> CET: 0,5%</p>
              <div>Total: R$30.600,00</div>
            </div>
          </div>
        <div className='identifier'>
          <p>Indentificador:</p>
          <b>2c1b951f356c4680b13ba1c9fc889c47</b>
        </div>
      </header>
      <footer>
        <img src={protect} className='protect' alt="Protect"/>
        <p>Pagamento 100% seguro via: </p>
        <img src={logo} className="logo-footer"></img>
      </footer>
    </div>
  );
}

export default App;
