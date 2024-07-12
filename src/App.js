import Payment_method from "./payment-method/Payment-method.js";
import Pix_and_credit_cart from "./pix-and-credit-card/Pix-and-credit.js";
import Credit_card from "./credit-card/Credit-card.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Payment_method />} exact ></Route>
        <Route path="/pix_and_credit_cart" element={<Pix_and_credit_cart />}></Route>
        <Route path="/credit-card" element={<Credit_card />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
