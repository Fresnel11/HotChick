import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { CheckCircle } from "lucide-react";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", phone: "", method: "delivery" as "delivery" | "pickup", address: "", time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || (form.method === "delivery" && !form.address)) {
      toast.error("Please fill all required fields");
      return;
    }
    setSubmitted(true);
    clearCart();
  };

  if (items.length === 0 && !submitted) {
    navigate("/cart");
    return null;
  }

  if (submitted) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center bg-muted text-center px-4">
        <CheckCircle className="w-20 h-20 text-primary mb-6" />
        <h1 className="font-display text-4xl mb-3">ORDER PLACED!</h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          Thanks {form.name}! Your order is being prepared. We'll have it ready soon.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-primary-foreground font-display tracking-wider px-8 py-3 rounded-xl hover:bg-primary/90 transition-all"
        >
          BACK TO HOME
        </button>
      </main>
    );
  }

  return (
    <main className="py-12 md:py-20 bg-muted min-h-screen">
      <div className="container max-w-2xl">
        <h1 className="font-display text-4xl mb-8">CHECKOUT</h1>
        <form onSubmit={handleSubmit} className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border/50 space-y-5">
          <div>
            <label className="font-display text-sm tracking-wider block mb-1.5">NAME *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="font-display text-sm tracking-wider block mb-1.5">PHONE *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label className="font-display text-sm tracking-wider block mb-1.5">ORDER TYPE</label>
            <div className="flex gap-3">
              {(["delivery", "pickup"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setForm({ ...form, method: m })}
                  className={`flex-1 font-display text-sm tracking-wider py-3 rounded-lg border transition-all ${
                    form.method === m
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-muted border-border hover:border-primary/30"
                  }`}
                >
                  {m.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          {form.method === "delivery" && (
            <div>
              <label className="font-display text-sm tracking-wider block mb-1.5">ADDRESS *</label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Delivery address"
              />
            </div>
          )}
          <div>
            <label className="font-display text-sm tracking-wider block mb-1.5">PREFERRED TIME</label>
            <input
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Summary */}
          <div className="border-t border-border pt-5">
            <div className="flex justify-between items-center mb-1 text-sm">
              <span className="text-muted-foreground">{items.reduce((s, i) => s + i.quantity, 0)} item(s)</span>
              <span className="font-display text-xl text-primary">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-display tracking-wider py-4 rounded-xl text-lg hover:bg-primary/90 active:scale-[0.98] transition-all"
          >
            PLACE ORDER
          </button>
        </form>
      </div>
    </main>
  );
};

export default CheckoutPage;
