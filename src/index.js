import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <h1>Fast Pizza Co.</h1>;
    </header>
  );
};
const Menu = () => {
  const pizzas = pizzaData;
  const pizzasNum = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menus</h2>
      {pizzasNum > 0 ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa
            est sequi asperiores ipsam recusandae.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back Later :)</p>
      )}
    </main>
  );
};
function Pizza({ pizzaObj }) {
  //   if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
const Footer = () => {
  const hour = new Date().getHours();
  const openingHour = 9;
  const closingHour = 23;
  const isOpen = hour >= openingHour && hour <= closingHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openingHour={openingHour} closingHour={closingHour} />
      ) : (
        <p>
          We're happy to welcome you from {openingHour}:00 to {closingHour}:00
        </p>
      )}
    </footer>
  );
};

const Order = ({ closingHour, openingHour }) => {
  return (
    <div className="order">
      <p>
        We're open from {openingHour} :00 to {closingHour}:00
      </p>
      <button className="btn">order</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
