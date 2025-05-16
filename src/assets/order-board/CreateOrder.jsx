import Chicken from "../images/chicken.svg";
import Hamburger from "../images/hamburger.svg";
import Pizza from "../images/pizza.svg";
import Submarine from "../images/submarine.svg";
import OrderItem from "./OrderItem";
export default function CreateOrder() {
  const orderLists = [
    {
      id: 1,
      image: Hamburger,
      title: "Hamburger",
      price: "300",
    },
    {
      id: 2,
      image: Chicken,
      title: "Chicken Nuggets",
      price: "300",
    },
    {
      id: 3,
      image: Pizza,
      title: "Pizza",
      price: "300",
    },
    {
      id: 4,
      image: Submarine,
      title: "Submarine",
      price: "300",
    },
  ];

  return (
    <>
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {orderLists.map((item) => (
            <OrderItem
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <button className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        Place Order (BDT 100)
      </button>
    </>
  );
}
