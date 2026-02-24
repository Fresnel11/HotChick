import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center bg-muted">
        <ShoppingBag className="w-16 h-16 text-muted-foreground/40 mb-4" />
        <h1 className="font-display text-3xl mb-2">YOUR CART IS EMPTY</h1>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything yet.</p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display tracking-wider px-8 py-3 rounded-xl hover:bg-primary/90 transition-all"
        >
          BROWSE MENU
          <ArrowRight className="w-4 h-4" />
        </Link>
      </main>
    );
  }

  return (
    <main className="py-12 md:py-20 bg-muted min-h-screen">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl mb-8">YOUR CART</h1>

        <div className="flex flex-col gap-4 mb-8">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-sm border border-border/50">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base tracking-wide truncate">{item.name}</h3>
                <p className="text-primary font-display text-lg">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-display w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted hover:bg-primary/10 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="bg-card p-6 rounded-xl shadow-sm border border-border/50">
          <div className="flex justify-between items-center mb-4">
            <span className="font-display text-lg tracking-wide">TOTAL</span>
            <span className="font-display text-2xl text-primary">${totalPrice.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="block w-full text-center bg-primary text-primary-foreground font-display tracking-wider py-4 rounded-xl text-lg hover:bg-primary/90 active:scale-[0.98] transition-all"
          >
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
