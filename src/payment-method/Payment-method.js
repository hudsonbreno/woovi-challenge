import logo from '../assets/images/logo.png';
import protect from '../assets/images/protect.png'
import '../payment-method/Payment-method.css';

function Payment_method() {
  return (
    <div>
      <header>
        <div className="logo-div">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className='title'>
          João, como você quer pagar?
        </p>
        <div className="pix">
          <p><b>1x</b> R$ 30.500,00</p>
          <div className="below-pix"> Ganhe <b>3%</b> de Cashback</div>
          <div className=''></div>
        </div>

        <div className="pix-installments">
          <div>
            <p><b>2x</b> R$ 15.300,00</p>
            <div className="total-value"> Total: R$ 30.600,00</div>
          </div>
          <div>
            <p><b>3x</b> R$ 15.300,00</p>
            <div className="total-value"> Total: R$ 30.600,00</div>
          </div>
          <div>
            <p><b>4x</b> R$ 15.300,00</p>
            <div className="total-value"> Total: R$ 30.600,00</div>
          </div>
          <div>
            <p><b>5x</b> R$ 15.300,00</p>
            <div className="total-value"> Total: R$ 30.600,00</div>
          </div>
          <div>
            <p><b>6x</b> R$ 15.300,00</p>
            <div className="total-value"> Total: R$ 30.600,00</div>
          </div>
          <div>
            <p><b>7x</b> R$ 15.300,00</p>
            <div className="total-value"> Total: R$ 30.600,00</div>
          </div>
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

export default Payment_method;