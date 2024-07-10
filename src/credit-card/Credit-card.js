import logo from './assets/images/logo.png';
import protect from './assets/images/protect.png';
import copy from './assets/images/copy.png';

import './Pix-and-credit.css';

function App() {
  return (
    <div className="credit-cart">
      <header className="credit-card-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          João, pague o restante de 1x no cartão
        </p>
        
        <div className='data'>
            <div className='input-data'>
                <p>Nome completo</p>
                <input type="text" placeholder='Nome Completo'/>
            </div>
            <div className='input-data'>
                <p>CPF</p>
                <input type="text" placeholder='CPF'/>
            </div>
            <div className='input-data'>
                <p>Número do cartão</p>
                <input type="text" placeholder='Número do cartão'/>
            </div>
            <div className='input-data'>
                <p>Vencimento</p>
                <input type="text" placeholder='Vencimento'/>
            </div>
            <div className='input-data'>
                <p>CVV</p>
                <input type="text" placeholder='CVV'/>
            </div>
            <div className='input-data'>
                <p>Parcelas</p>
                <input type="select" placeholder='Parcelas>
            </div>

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
