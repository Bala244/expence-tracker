import "./App.css";
import { AddTransation } from "./components/AddTransation";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpences } from "./components/IncomeExpences";
import { TransationList } from "./components/TransationList";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransationList />
        <AddTransation />
      </div>
    </div>
  );
}

export default App;
