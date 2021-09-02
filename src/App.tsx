import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

type State = {
  isGoodsListVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    isGoodsListVisible: false,
  };

  showGoodsList = () => {
    this.setState({ isGoodsListVisible: true });
  };

  render() {
    const { isGoodsListVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">Goods</h1>
        {isGoodsListVisible
          ? <GoodsList goods={goodsFromServer} />
          : (
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={this.showGoodsList}
            >
              Start
            </button>
          )}
      </div>
    );
  }
}

export default App;
