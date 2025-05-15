import Header from "./assets/Header";
import Order from "./assets/order-board/Order";

export default function App() {
  return (
    <div className="container mx-auto px-4 h-screen flex flex-col">
      <Header />
      <Order />
    </div>
  );
}
