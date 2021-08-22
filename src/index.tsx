import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import DessertsList from './components/desserts-list';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <DessertsList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
