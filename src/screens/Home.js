import { Header } from "../components/Header";
import { AddTransation } from "../components/AddTransation";
import { Balance } from "../components/Balance";
import { IncomeExpences } from "../components/IncomeExpences";
import { TransationList } from "../components/TransationList";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container w-1/3">
        <Balance />
        <IncomeExpences />
        <TransationList />
        <AddTransation />
      </div>
    </div>
  );
};

export default Home;
