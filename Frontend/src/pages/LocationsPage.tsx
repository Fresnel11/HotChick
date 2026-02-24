import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink, Navigation } from "lucide-react";
import { useTranslation } from "react-i18next";

const locations = [
    {
        id: 1,
        city: "Cotonou",
        name: "HotChick Jonquet",
        address: "Quartier Jonquet, Avenue Jean-Paul II, Cotonou",
        phone: "+229 97 00 11 22",
        hours: "10h – 23h",
        tag: "FLAGSHIP",
        mapsUrl: "https://maps.google.com/maps/search/Jonquet+Cotonou+Bénin",
        coords: "6.3654° N, 2.4183° E",
    },
    {
        id: 2,
        city: "Cotonou",
        name: "HotChick Fidjrossè",
        address: "Fidjrossè Centre, Route de l'Aéroport, Cotonou",
        phone: "+229 97 00 33 44",
        hours: "10h – 23h",
        tag: null,
        mapsUrl: "https://maps.google.com/maps/search/Fidjrossè+Cotonou+Bénin",
        coords: "6.3543° N, 2.3866° E",
    },
    {
        id: 3,
        city: "Cotonou",
        name: "HotChick Cadjehoun",
        address: "Quartier Cadjehoun, Près du stade de l'Amitié, Cotonou",
        phone: "+229 97 00 55 66",
        hours: "11h – 23h",
        tag: null,
        mapsUrl: "https://maps.google.com/maps/search/Cadjehoun+Cotonou+Bénin",
        coords: "6.3680° N, 2.4000° E",
    },
    {
        id: 4,
        city: "Porto-Novo",
        name: "HotChick Porto-Novo",
        address: "Avenue du Gouverneur, Centre-ville, Porto-Novo",
        phone: "+229 97 00 77 88",
        hours: "10h30 – 22h30",
        tag: null,
        mapsUrl: "https://maps.google.com/maps/search/Centre+Porto-Novo+Bénin",
        coords: "6.4969° N, 2.6289° E",
    },
    {
        id: 5,
        city: "Parakou",
        name: "HotChick Parakou",
        address: "Rue du Commerce, Quartier Zongo, Parakou",
        phone: "+229 97 00 99 10",
        hours: "10h30 – 22h",
        tag: null,
        mapsUrl: "https://maps.google.com/maps/search/Zongo+Parakou+Bénin",
        coords: "9.3372° N, 2.6283° E",
    },
    {
        id: 6,
        city: "Abomey-Calavi",
        name: "HotChick Abomey-Calavi",
        address: "Carrefour SONAEC, Abomey-Calavi",
        phone: "+229 97 00 21 32",
        hours: "10h – 23h",
        tag: "NOUVEAU",
        mapsUrl: "https://maps.google.com/maps/search/SONAEC+Abomey-Calavi+Bénin",
        coords: "6.4487° N, 2.3558° E",
    },
];

const tagColors: Record<string, string> = {
    FLAGSHIP: "bg-accent text-accent-foreground",
    NOUVEAU: "bg-primary text-primary-foreground",
};

const LocationsPage = () => {
    const { i18n } = useTranslation();
    const isFr = i18n.language === "fr";

    return (
        <main className="min-h-screen bg-muted py-12 md:py-20">
            <div className="container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="font-display text-primary tracking-[0.3em] text-sm">
                        {isFr ? "OÙ NOUS TROUVER" : "FIND US"}
                    </span>
                    <h1 className="font-display text-4xl md:text-5xl mt-2 mb-4">
                        {isFr ? "NOS RESTAURANTS" : "OUR LOCATIONS"}
                    </h1>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        {isFr
                            ? "Retrouvez HotChick dans 6 adresses à travers le Bénin. Cliquez sur un restaurant pour l'ouvrir dans Google Maps."
                            : "Find HotChick at 6 addresses across Benin. Click a restaurant to open it in Google Maps."}
                    </p>
                </motion.div>

                {/* Cities */}
                {["Cotonou", "Porto-Novo", "Parakou", "Abomey-Calavi"].map((city) => {
                    const cityLocations = locations.filter((l) => l.city === city);
                    return (
                        <div key={city} className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <MapPin className="w-5 h-5 text-primary" />
                                <h2 className="font-display text-2xl tracking-wider">{city.toUpperCase()}</h2>
                                <div className="flex-1 h-px bg-border ml-2" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cityLocations.map((loc, i) => (
                                    <motion.a
                                        key={loc.id}
                                        href={loc.mapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: i * 0.08 }}
                                        whileHover={{ y: -6 }}
                                        className="group bg-card rounded-2xl border border-border/60 shadow-md hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-400 overflow-hidden cursor-pointer block"
                                    >
                                        {/* Map preview banner */}
                                        <div className="relative h-36 bg-gradient-to-br from-primary/20 via-primary/10 to-muted overflow-hidden">
                                            {/* Decorative grid lines */}
                                            <div className="absolute inset-0 opacity-20"
                                                style={{
                                                    backgroundImage:
                                                        "linear-gradient(rgba(255,127,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,127,0,0.3) 1px, transparent 1px)",
                                                    backgroundSize: "30px 30px",
                                                }}
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="relative flex flex-col items-center">
                                                    <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shadow-lg">
                                                        <MapPin className="w-6 h-6 text-primary fill-primary/30" />
                                                    </div>
                                                    <div className="mt-1 w-1 h-4 bg-primary/60 rounded-full" />
                                                </div>
                                            </div>
                                            {/* Tag */}
                                            {loc.tag && (
                                                <span className={`absolute top-3 left-3 text-xs font-display tracking-wider px-2.5 py-1 rounded-full ${tagColors[loc.tag] ?? "bg-muted text-muted-foreground"}`}>
                                                    {loc.tag}
                                                </span>
                                            )}
                                            {/* Open in Maps hint */}
                                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="flex items-center gap-1.5 bg-card/90 backdrop-blur-sm text-foreground text-xs font-display tracking-wide px-2.5 py-1 rounded-full shadow">
                                                    <ExternalLink className="w-3 h-3" />
                                                    Google Maps
                                                </div>
                                            </div>
                                            {/* Coords */}
                                            <p className="absolute bottom-2 right-3 text-xs text-muted-foreground/60 font-mono">{loc.coords}</p>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            <h3 className="font-display text-lg tracking-wide mb-1 group-hover:text-primary transition-colors">
                                                {loc.name}
                                            </h3>
                                            <div className="space-y-2 text-sm text-muted-foreground">
                                                <div className="flex items-start gap-2">
                                                    <MapPin className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
                                                    <span>{loc.address}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                                                    <span>{isFr ? "Ouvert" : "Open"} {loc.hours}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                                                    <span>{loc.phone}</span>
                                                </div>
                                            </div>

                                            <div className="mt-4 flex items-center gap-1.5 text-primary font-display text-sm tracking-wider group-hover:gap-3 transition-all">
                                                <Navigation className="w-4 h-4" />
                                                {isFr ? "ITINÉRAIRE" : "GET DIRECTIONS"}
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default LocationsPage;
