import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import Provider from './context/Provider';
import CartItems from './components/CartItems/CartItems';


function App() {

  return (
    <>
      <Provider>

        <Header />
        <CartItems />
        <HomePage />

      </Provider>
      
    </>
  )
}

export default App;
