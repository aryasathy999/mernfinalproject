import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ import plugin properly

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  // 🧾 Generate Invoice PDF
  const generateInvoice = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Invoice", 14, 20);

    // Customer Info
    const username = localStorage.getItem("username") || "Guest User";
    doc.setFontSize(12);
    doc.text(`Customer: ${username}`, 14, 30);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 37);

    // Table Data
    const tableColumn = ["Product", "Price", "Quantity", "Total"];
    const tableRows = [];

    products.forEach((e) => {
      if (cartItems[e.id] > 0) {
        const productData = [
          e.name,
          `Rs. ${e.new_price}`,
          cartItems[e.id],
          `Rs. ${e.new_price * cartItems[e.id]}`
        ];
        tableRows.push(productData);
      }
    });

    // Subtotal, GST, Grand Total
    const subtotal = getTotalCartAmount();
    const gst = (subtotal * 0.18).toFixed(2); // 18% GST
    const grandTotal = (subtotal + parseFloat(gst)).toFixed(2);

    tableRows.push(["", "", "Subtotal", `Rs. ${subtotal}`]);
    tableRows.push(["", "", "GST (18%)", `Rs. ${gst}`]);
    tableRows.push(["", "", "Grand Total", `Rs. ${grandTotal}`]);

    // ✅ Call plugin directly
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 45,
    });

    // Save PDF
    doc.save("invoice.pdf");
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format-main cartitems-format">
                <img
                  className="cartitems-product-icon"
                  src={backend_url + e.image}
                  alt={e.name}
                />
                <p className="cartitems-product-title">{e.name}</p>
                <p>{currency}{e.new_price}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>{currency}{e.new_price * cartItems[e.id]}</p>
                <img
                  onClick={() => removeFromCart(e.id)}
                  className="cartitems-remove-icon"
                  src={cross_icon}
                  alt="remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{currency}{getTotalCartAmount()}</h3>
            </div>
          </div>
          {/* 🟢 Downloads invoice when clicked */}
          <button onClick={generateInvoice}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
