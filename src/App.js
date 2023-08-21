import './scss/app.scss';
import PizzaBlock from './components/PizzaBlock'
import Categories from './components/Categories'
import Sort from './components/Sort'
import Header from './components/Header'

import pizzas from './assets/pizzas.json'


function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              {/* <Categories /> */}
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className='content__items'>
              {
                pizzas.map(obj => <PizzaBlock key={obj.id} {...obj} />)
              }
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
