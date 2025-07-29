import SideBar from "./components/shared/SideBar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";
import { use, useState } from "react";
//icons
import {
  RiArrowDownBoxLine,
  RiUser3Line,
  RiAddBoxLine,
  RiAlignRight,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toogleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <SideBar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* menu movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiArrowDownBoxLine />
        </button>
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button onClick={toogleOrders} className="p-2">
          <RiAddBoxLine />
        </button>
        <button onClick={toogleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiAlignRight />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* header */}
          <Header />
          {/* titulo del contenido */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine />
              Dine in
            </button>
          </div>
          {/* contenido */}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* cartas */}
            <Card
              img="comida.png"
              description="Classic Salad"
              price="4.00"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Classic Salad"
              price="4.00"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Classic Salad"
              price="4.00"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Classic Salad"
              price="4.00"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Classic Salad"
              price="4.00"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Classic Salad"
              price="4.00"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Classic Salad"
              price="4.00"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Classic Salad"
              price="4.00"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Classic Salad"
              price="4.00"
              inventory="20"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
