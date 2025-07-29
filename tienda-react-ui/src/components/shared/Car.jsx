import React from "react";
import { RiCloseLine, RiDeleteBinLine } from "react-icons/ri";

const Card = (props) => {
  const { showOrder, setShowOrder } = props;
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:right-0 lg:w-96 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* ordenes */}
      <div className="relative pt-16 lg:pt-5 text-gray-300 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Orders #1420</h1>
        {/* Botones */}
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
            Dine In
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            To Go
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Delivery
          </button>
        </div>
        {/* productos carrito-titulos*/}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Items</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll scrollbar-none">
            {/* productos carrito-items */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                <div className=" col-span-4 flex items-center gap-3">
                  <img
                    src="comida.png"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h5 className="text-sm">Spacy Seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                <div>
                  <span>$4.50</span>
                </div>
              </div>
              {/* barra de escritura */}
              <div className="grid grid-cols-6 items-center gap-4 justify-center">
                <form action="" className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order Note"
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBinLine className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                <div className=" col-span-4 flex items-center gap-3">
                  <img
                    src="comida.png"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h5 className="text-sm">Spacy Seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                <div>
                  <span>$4.50</span>
                </div>
              </div>
              {/* barra de escritura */}
              <div className="grid grid-cols-6 items-center gap-4 justify-center">
                <form action="" className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order Note"
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBinLine className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                <div className=" col-span-4 flex items-center gap-3">
                  <img
                    src="comida.png"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h5 className="text-sm">Spacy Seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                <div>
                  <span>$4.50</span>
                </div>
              </div>
              {/* barra de escritura */}
              <div className="grid grid-cols-6 items-center gap-4 justify-center">
                <form action="" className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order Note"
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBinLine className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                <div className=" col-span-4 flex items-center gap-3">
                  <img
                    src="comida.png"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h5 className="text-sm">Spacy Seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                <div>
                  <span>$4.50</span>
                </div>
              </div>
              {/* barra de escritura */}
              <div className="grid grid-cols-6 items-center gap-4 justify-center">
                <form action="" className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order Note"
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBinLine className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                <div className=" col-span-4 flex items-center gap-3">
                  <img
                    src="comida.png"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h5 className="text-sm">Spacy Seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                <div>
                  <span>$4.50</span>
                </div>
              </div>
              {/* barra de escritura */}
              <div className="grid grid-cols-6 items-center gap-4 justify-center">
                <form action="" className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order Note"
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBinLine className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                <div className=" col-span-4 flex items-center gap-3">
                  <img
                    src="comida.png"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h5 className="text-sm">Spacy Seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                <div>
                  <span>$4.50</span>
                </div>
              </div>
              {/* barra de escritura */}
              <div className="grid grid-cols-6 items-center gap-4 justify-center">
                <form action="" className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order Note"
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBinLine className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                <div className=" col-span-4 flex items-center gap-3">
                  <img
                    src="comida.png"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h5 className="text-sm">Spacy Seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                <div>
                  <span>$4.50</span>
                </div>
              </div>
              {/* barra de escritura */}
              <div className="grid grid-cols-6 items-center gap-4 justify-center">
                <form action="" className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order Note"
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBinLine className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                <div className=" col-span-4 flex items-center gap-3">
                  <img
                    src="comida.png"
                    alt=""
                    className="w-10 h-10 object-cover rounded-full"
                  />
                  <div>
                    <h5 className="text-sm">Spacy Seaso...</h5>
                    <p className="text-xs text-gray-500">$2.29</p>
                  </div>
                </div>
                {/* Qty */}
                <div>
                  <span>2</span>
                </div>
                <div>
                  <span>$4.50</span>
                </div>
              </div>
              {/* barra de escritura */}
              <div className="grid grid-cols-6 items-center gap-4 justify-center">
                <form action="" className="col-span-5">
                  <input
                    type="text"
                    className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                    placeholder="Order Note"
                  />
                </form>
                <div>
                  <button className="border border-red-500 p-2 rounded-lg">
                    <RiDeleteBinLine className="text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pago */}
        <div className="absolute bottom-0 left-0 w-full bg-[#262837] p-4 lg:p-0">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Discount</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Sub-Total</span>
            <span>$201.03</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
              Continue to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
