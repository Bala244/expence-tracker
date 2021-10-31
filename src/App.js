import './App.css';
import { AddTransation } from './components/AddTransation';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExpences } from './components/IncomeExpences';
import { TransationList } from './components/TransationList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpences />
          <TransationList />
          <AddTransation />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
