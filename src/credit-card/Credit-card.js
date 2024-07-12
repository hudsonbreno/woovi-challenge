import logo from '../assets/images/logo.png';
import protect from '../assets/images/protect.png';
import { useNavigate } from 'react-router-dom';
import './Credit-card.css';

const navigate = useNavigate();

const handleNavigate = (path) => {
  navigate(path)
}

function Credit_card() {
  return (
    <div className="credit-cart">
      <header className="credit-card-header">
        <div className="logo-div">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="title">
          João, pague o restante de 1x no cartão
        </p>
        
          <div className='data'>
            <div className='input-data'>
                <p className='p-input-data'>Nome completo</p>
                <input type="text" placeholder='Nome Completo'/>
            </div>
            <div className='input-data'>
                <p className="p-input-data">CPF</p>
                <input type="text" placeholder='CPF'/>
            </div>
            <div className='input-data'>
                <p className="p-input-data">Número do cartão</p>
                <input type="text" placeholder='Número do cartão'/>
            </div>
            <div className='div-vencimento-cvv '>
              <div className='input-data'>
                  <p className="p-input-data">Vencimento</p>
                  <input type="text" placeholder='Vencimento'/>
              </div>
              <div className='input-data'>
                  <p className='p-input-data'>CVV</p>
                  <input type="text" placeholder='CVV'/>
              </div>
            </div>
            <div className='input-data'>
                <p className="p-input-data">Parcelas</p>
                <input type="select" placeholder='Parcelas'/>
            </div>

        </div>

        <button className='pay' onClick={() => handleNavigate('/conclusion')}>
          Pagar
        </button>

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
           <div>
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

export default Credit_card;
