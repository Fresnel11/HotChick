import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Clock, Users, MapPin, User, Phone, MessageSquare, CheckCircle2, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

// ── Data ──────────────────────────────────────────────────────────────────────
const restaurants = [
    { id: 1, name: "HotChick Jonquet", city: "Cotonou", address: "Quartier Jonquet, Avenue Jean-Paul II" },
    { id: 2, name: "HotChick Fidjrossè", city: "Cotonou", address: "Fidjrossè Centre, Route de l'Aéroport" },
    { id: 3, name: "HotChick Cadjehoun", city: "Cotonou", address: "Quartier Cadjehoun, Près du stade de l'Amitié" },
    { id: 4, name: "HotChick Porto-Novo", city: "Porto-Novo", address: "Avenue du Gouverneur, Centre-ville" },
    { id: 5, name: "HotChick Parakou", city: "Parakou", address: "Rue du Commerce, Quartier Zongo" },
    { id: 6, name: "HotChick Abomey-Calavi", city: "Abomey-Calavi", address: "Carrefour SONAEC" },
];

const timeSlots = [
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "18:00", "18:30", "19:00", "19:30", "20:00",
    "20:30", "21:00", "21:30", "22:00",
];

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

// ── Types ─────────────────────────────────────────────────────────────────────
interface FormState {
    restaurant: string;
    name: string;
    phone: string;
    date: string;
    time: string;
    guests: string;
    notes: string;
}
type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
    restaurant: "",
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    notes: "",
};

// ── Helpers ───────────────────────────────────────────────────────────────────
const todayStr = () => new Date().toISOString().split("T")[0];

// ── Page ──────────────────────────────────────────────────────────────────────
const ReservationPage = () => {
    const { i18n } = useTranslation();
    const isFr = i18n.language === "fr";

    const [form, setForm] = useState<FormState>(EMPTY_FORM);
    const [errors, setErrors] = useState<FieldErrors>({});
    const [confirmed, setConfirmed] = useState<FormState | null>(null);

    const set = (key: keyof FormState, value: string) =>
        setForm((f) => ({ ...f, [key]: value }));

    const validate = (): boolean => {
        const e: FieldErrors = {};
        if (!form.restaurant) e.restaurant = isFr ? "Requis" : "Required";
        if (!form.name.trim()) e.name = isFr ? "Requis" : "Required";
        if (!form.phone.trim()) e.phone = isFr ? "Requis" : "Required";
        if (!form.date) e.date = isFr ? "Requis" : "Required";
        if (!form.time) e.time = isFr ? "Requis" : "Required";
        if (!form.guests) e.guests = isFr ? "Requis" : "Required";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setConfirmed(form);
        setForm(EMPTY_FORM);
        toast.success(isFr ? "Réservation confirmée ! À bientôt 🍗" : "Reservation confirmed! See you soon 🍗");
    };

    const selectedRestaurant = restaurants.find((r) => r.id === Number(form.restaurant));

    // ── Confirmation screen ────────────────────────────────────────────────────
    if (confirmed) {
        const rest = restaurants.find((r) => r.id === Number(confirmed.restaurant));
        return (
            <main className="min-h-screen bg-muted flex items-center justify-center py-16 px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    className="bg-card rounded-3xl shadow-2xl border border-border/50 p-10 max-w-md w-full text-center"
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-primary" />
                        </div>
                    </div>
                    <h1 className="font-display text-3xl tracking-wide mb-2">
                        {isFr ? "RÉSERVATION CONFIRMÉE" : "RESERVATION CONFIRMED"}
                    </h1>
                    <p className="text-muted-foreground mb-8">
                        {isFr
                            ? `Merci ${confirmed.name} ! Votre table est réservée.`
                            : `Thank you ${confirmed.name}! Your table is booked.`}
                    </p>

                    <div className="bg-muted rounded-2xl p-5 text-left space-y-3 mb-8">
                        <Detail icon={<MapPin className="w-4 h-4 text-primary" />} label={rest?.name ?? ""} sub={rest?.address ?? ""} />
                        <Detail icon={<CalendarDays className="w-4 h-4 text-primary" />} label={confirmed.date} sub={confirmed.time} />
                        <Detail icon={<Users className="w-4 h-4 text-primary" />} label={`${confirmed.guests} ${isFr ? "personnes" : "guests"}`} sub="" />
                        {confirmed.notes && (
                            <Detail icon={<MessageSquare className="w-4 h-4 text-primary" />} label={confirmed.notes} sub="" />
                        )}
                    </div>

                    <button
                        onClick={() => setConfirmed(null)}
                        className="w-full bg-primary text-primary-foreground font-display tracking-wider py-3 rounded-xl hover:bg-primary/90 transition-all"
                    >
                        {isFr ? "FAIRE UNE AUTRE RÉSERVATION" : "MAKE ANOTHER RESERVATION"}
                    </button>
                </motion.div>
            </main>
        );
    }

    // ── Form ──────────────────────────────────────────────────────────────────
    return (
        <main className="min-h-screen bg-muted py-12 md:py-20">
            <div className="container max-w-2xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <span className="font-display text-primary tracking-[0.3em] text-sm">
                        {isFr ? "TABLE POUR VOUS" : "RESERVE A TABLE"}
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl mt-2 mb-4">
                        {isFr ? "RÉSERVER UNE TABLE" : "BOOK A TABLE"}
                    </h1>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                        {isFr
                            ? "Réservez votre table en quelques secondes. Nous vous attendons !"
                            : "Book your table in seconds. We can't wait to see you!"}
                    </p>
                </motion.div>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-card rounded-3xl border border-border/50 shadow-xl p-8"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Restaurant selector */}
                        <Field
                            label={isFr ? "RESTAURANT" : "RESTAURANT"}
                            icon={<MapPin className="w-4 h-4" />}
                            error={errors.restaurant}
                        >
                            <div className="relative">
                                <select
                                    value={form.restaurant}
                                    onChange={(e) => set("restaurant", e.target.value)}
                                    className={selectClass(!!errors.restaurant)}
                                >
                                    <option value="">{isFr ? "Choisir un restaurant…" : "Choose a restaurant…"}</option>
                                    {restaurants.map((r) => (
                                        <option key={r.id} value={r.id}>
                                            {r.name} — {r.city}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                            </div>
                            <AnimatePresence>
                                {selectedRestaurant && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1"
                                    >
                                        <MapPin className="w-3 h-3 text-primary" />
                                        {selectedRestaurant.address}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </Field>

                        {/* Name + Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field label={isFr ? "NOM COMPLET" : "FULL NAME"} icon={<User className="w-4 h-4" />} error={errors.name}>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => set("name", e.target.value)}
                                    placeholder={isFr ? "Votre nom" : "Your name"}
                                    className={inputClass(!!errors.name)}
                                />
                            </Field>
                            <Field label={isFr ? "TÉLÉPHONE" : "PHONE"} icon={<Phone className="w-4 h-4" />} error={errors.phone}>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => set("phone", e.target.value)}
                                    placeholder="+229 97 00 00 00"
                                    className={inputClass(!!errors.phone)}
                                />
                            </Field>
                        </div>

                        {/* Date + Time */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Field label={isFr ? "DATE" : "DATE"} icon={<CalendarDays className="w-4 h-4" />} error={errors.date}>
                                <input
                                    type="date"
                                    value={form.date}
                                    min={todayStr()}
                                    onChange={(e) => set("date", e.target.value)}
                                    className={inputClass(!!errors.date)}
                                />
                            </Field>
                            <Field label={isFr ? "HEURE" : "TIME"} icon={<Clock className="w-4 h-4" />} error={errors.time}>
                                <div className="relative">
                                    <select
                                        value={form.time}
                                        onChange={(e) => set("time", e.target.value)}
                                        className={selectClass(!!errors.time)}
                                    >
                                        <option value="">{isFr ? "Choisir une heure…" : "Choose a time…"}</option>
                                        {timeSlots.map((t) => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                                </div>
                            </Field>
                        </div>

                        {/* Guests */}
                        <Field label={isFr ? "NOMBRE DE PERSONNES" : "NUMBER OF GUESTS"} icon={<Users className="w-4 h-4" />} error={errors.guests}>
                            <div className="flex flex-wrap gap-2">
                                {guestOptions.map((n) => (
                                    <button
                                        key={n}
                                        type="button"
                                        onClick={() => set("guests", String(n))}
                                        className={`w-12 h-12 rounded-xl font-display text-sm font-bold border-2 transition-all ${form.guests === String(n)
                                                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                                : "bg-muted border-border hover:border-primary/50 text-foreground"
                                            }`}
                                    >
                                        {n}
                                    </button>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => set("guests", "9+")}
                                    className={`px-4 h-12 rounded-xl font-display text-sm font-bold border-2 transition-all ${form.guests === "9+"
                                            ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                            : "bg-muted border-border hover:border-primary/50 text-foreground"
                                        }`}
                                >
                                    9+
                                </button>
                            </div>
                        </Field>

                        {/* Notes */}
                        <Field label={isFr ? "DEMANDES SPÉCIALES (OPTIONNEL)" : "SPECIAL REQUESTS (OPTIONAL)"} icon={<MessageSquare className="w-4 h-4" />}>
                            <textarea
                                rows={3}
                                value={form.notes}
                                onChange={(e) => set("notes", e.target.value)}
                                placeholder={isFr ? "Allergie, chaise haute, occasion spéciale…" : "Allergy, highchair, special occasion…"}
                                className={`${inputClass(false)} resize-none`}
                            />
                        </Field>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground font-display tracking-wider py-4 rounded-xl text-lg hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
                        >
                            <CalendarDays className="w-5 h-5" />
                            {isFr ? "CONFIRMER LA RÉSERVATION" : "CONFIRM RESERVATION"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
};

// ── Sub-components ─────────────────────────────────────────────────────────────
const Field = ({
    label,
    icon,
    error,
    children,
}: {
    label: string;
    icon?: React.ReactNode;
    error?: string;
    children: React.ReactNode;
}) => (
    <div>
        <label className="font-display text-xs tracking-widest text-muted-foreground mb-2 flex items-center gap-1.5">
            {icon}
            {label}
        </label>
        {children}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

const Detail = ({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) => (
    <div className="flex items-start gap-3">
        <div className="mt-0.5">{icon}</div>
        <div>
            <p className="font-display text-sm tracking-wide">{label}</p>
            {sub && <p className="text-muted-foreground text-xs">{sub}</p>}
        </div>
    </div>
);

const inputClass = (hasError: boolean) =>
    `w-full px-4 py-2.5 rounded-xl border bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${hasError ? "border-red-500" : "border-border"
    }`;

const selectClass = (hasError: boolean) =>
    `w-full appearance-none px-4 py-2.5 pr-10 rounded-xl border bg-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow ${hasError ? "border-red-500" : "border-border"
    }`;

export default ReservationPage;
