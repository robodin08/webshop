import type { LanguageStrings } from "~/constants/languages";

export type ProductCategory =
  | "audio"
  | "peripherals"
  | "monitors"
  | "streaming"
  | "components"
  | "accessories"
  | "popular"
  | "new"
  | "gaming"
  | "wireless"
  | "portable"
  | "premium"
  | "budget"
  | "ergonomic"
  | "furniture"
  | "content-creation"
  | "storage"
  | "connectivity"
  | "lighting"
  | "smart-home"
  | "vr"
  | "home-entertainment"
  | "simulation"
  | "networking"
  | "health"
  | "organization"
  | "cooling"
  | "power"
  | "privacy"
  | "security"
  | "memory"
  | "performance"
  | "maintenance"
  | "tools"
  | "cables"
  | "cleaning"
  | "professional";

export interface ProductBase {
  id: string;
  images: number;
  price: number;
  maxQuantity?: number;
  categories: ProductCategory[];
}

export interface RawProduct extends ProductBase {
  name: LanguageStrings;
  description: LanguageStrings;
}

export interface Product extends ProductBase {
  name: string;
  description: string;
}

export const PRODUCTS: RawProduct[] = [
  {
    id: "0",
    name: { en: "Phantom Headset", nl: "Phantom Koptelefoon" },
    description: {
      en: "Immerse yourself in crystal-clear audio with this high-quality over-ear gaming headset. Featuring advanced 7.1 surround sound technology, every footstep, explosion, and dialogue comes through with stunning clarity. The memory foam ear cushions provide hours of comfortable gaming, while the noise-canceling microphone ensures your teammates hear you loud and clear. Compatible with PC, PlayStation, Xbox, and Nintendo Switch.",
      nl: "Dompel jezelf onder in kristalhelder geluid met deze hoogwaardige over-ear gamingheadset. Met geavanceerde 7.1 surround sound-technologie komt elke voetstap, explosie en dialoog door met verbluffende helderheid. De memory foam oorkussens zorgen voor uren comfortabel gamen, terwijl de noise-canceling microfoon ervoor zorgt dat je teamgenoten je luid en duidelijk horen. Compatible met PC, PlayStation, Xbox en Nintendo Switch.",
    },
    images: 5,
    price: 99_98,
    maxQuantity: 999,
    categories: ["audio", "peripherals", "gaming", "popular"],
  },
  {
    id: "1",
    name: { en: "Viper Gaming Mouse", nl: "Viper Gamingmuis" },
    description: {
      en: "Take control of every game with this ergonomic gaming mouse featuring lightning-fast customizable DPI up to 16,000 and precision optical tracking. The lightweight design weighs only 69 grams, allowing for effortless flick shots and swift movements. Eight programmable buttons let you customize your gameplay, while the RGB lighting syncs with your setup. Durable Omron switches rated for 50 million clicks ensure long-lasting performance.",
      nl: "Neem de controle over elk spel met deze ergonomische gamingmuis met razendsnelle instelbare DPI tot 16.000 en precieze optische tracking. Het lichtgewicht ontwerp weegt slechts 69 gram, waardoor moeiteloze flick shots en snelle bewegingen mogelijk zijn. Acht programmeerbare knoppen laten je je gameplay aanpassen, terwijl de RGB-verlichting synchroniseert met je setup. Duurzame Omron-switches met een rating van 50 miljoen klikken garanderen langdurige prestaties.",
    },
    images: 5,
    price: 45_95,
    maxQuantity: 10,
    categories: ["peripherals", "gaming", "accessories", "popular"],
  },
  {
    id: "2",
    name: { en: "Hawk Eye Monitor", nl: "Hawk Eye Monitor" },
    description: {
      en: "Get every detail in stunning clarity on this 27-inch 144Hz gaming monitor with a blazing-fast 1ms response time. The QHD (2560x1440) IPS panel delivers vibrant colors with 99% sRGB coverage, while AMD FreeSync Premium technology eliminates screen tearing. The ultra-thin bezels create an immersive viewing experience, and the adjustable stand allows for perfect positioning. HDMI 2.0, DisplayPort 1.4, and USB hub connectivity make this the ultimate display for competitive gaming.",
      nl: "Zie elk detail haarscherp op deze 27-inch 144Hz gamingmonitor met een razendsnelle 1ms reactietijd. Het QHD (2560x1440) IPS-paneel levert levendige kleuren met 99% sRGB-dekking, terwijl AMD FreeSync Premium-technologie screen tearing elimineert. De ultradunne randen creëren een meeslepende kijkervaring, en de verstelbare standaard zorgt voor perfecte positionering. HDMI 2.0, DisplayPort 1.4 en USB hub-connectiviteit maken dit het ultieme display voor competitief gamen.",
    },
    images: 5,
    price: 250_25,
    maxQuantity: 999,
    categories: ["monitors", "gaming", "peripherals", "popular"],
  },
  {
    id: "3",
    name: { en: "Expensive Gaming Mouse", nl: "Dure Gamingmuis" },
    description: {
      en: "Dominate your games with this high-end, precision-engineered gaming mouse crafted for professional esports athletes. Featuring a cutting-edge 25,600 DPI sensor with zero acceleration, every movement is translated with pixel-perfect accuracy. The aerospace-grade aluminum frame provides durability while maintaining an ultra-lightweight 58g design. Wireless technology delivers sub-1ms latency, and the 70-hour battery life means you'll never miss a match. Premium PTFE feet glide effortlessly across any surface.",
      nl: "Overwin je games met deze high-end, precisie-engineered gamingmuis gemaakt voor professionele esports-atleten. Met een state-of-the-art 25.600 DPI-sensor met nul acceleratie wordt elke beweging vertaald met pixel-perfecte nauwkeurigheid. Het frame van luchtvaartkwaliteit aluminium biedt duurzaamheid terwijl het een ultralicht 58g ontwerp behoudt. Draadloze technologie levert sub-1ms latentie, en de 70-uur batterijduur betekent dat je nooit een wedstrijd mist. Premium PTFE-voetjes glijden moeiteloos over elk oppervlak.",
    },
    images: 5,
    price: 89_99,
    maxQuantity: 5,
    categories: ["peripherals", "gaming", "accessories", "premium"],
  },
  {
    id: "4",
    name: { en: "Mega Monitor", nl: "Grote Monitor" },
    description: {
      en: "Experience the ultimate viewing experience with this massive 49-inch ultrawide curved monitor. The stunning 5120x1440 resolution provides the screen real estate of two QHD displays in one seamless panel. With a 240Hz refresh rate and HDR1000 certification, every scene bursts with lifelike color and smooth motion. The 1000R curvature wraps around your field of vision for maximum immersion. Picture-by-Picture and Picture-in-Picture modes let you connect multiple sources simultaneously, making this the perfect command center for work and play.",
      nl: "Beleef de ultieme kijkervaring met deze gigantische 49-inch ultrawide curved monitor. De verbluffende 5120x1440 resolutie biedt de schermruimte van twee QHD-displays in één naadloos paneel. Met een 240Hz verversingsfrequentie en HDR1000-certificering barst elke scène van levensechte kleur en vloeiende beweging. De 1000R-kromming wikkelt zich rond je gezichtsveld voor maximale immersie. Picture-by-Picture en Picture-in-Picture modi laten je meerdere bronnen tegelijkertijd verbinden, waardoor dit het perfecte commandocentrum is voor werk en spel.",
    },
    images: 5,
    price: 999_99,
    maxQuantity: 999,
    categories: ["monitors", "gaming", "peripherals", "premium", "popular"],
  },
  {
    id: "5",
    name: { en: "Wireless Mechanical Keyboard", nl: "Draadloos Mechanisch Toetsenbord" },
    description: {
      en: "Type with satisfying clicks on this premium wireless mechanical keyboard featuring hot-swappable switches that let you customize your typing feel without soldering. The tri-mode connectivity supports Bluetooth 5.1, 2.4GHz wireless, and USB-C wired connections. Per-key RGB lighting with 16.8 million colors creates stunning effects, while the 4000mAh battery provides up to 200 hours of use. The CNC aluminum frame and double-shot PBT keycaps ensure durability that will last for years. Compatible with Windows, macOS, Linux, iOS, and Android.",
      nl: "Typ met bevredigende klikken op dit premium draadloos mechanisch toetsenbord met hot-swappable switches waarmee je je typgevoel kunt aanpassen zonder solderen. De tri-mode connectiviteit ondersteunt Bluetooth 5.1, 2.4GHz draadloos en USB-C bedrade verbindingen. Per-toets RGB-verlichting met 16,8 miljoen kleuren creëert verbluffende effecten, terwijl de 4000mAh batterij tot 200 uur gebruik biedt. Het CNC-aluminium frame en double-shot PBT-keycaps garanderen duurzaamheid die jarenlang meegaat. Compatibel met Windows, macOS, Linux, iOS en Android.",
    },
    images: 5,
    price: 129_99,
    maxQuantity: 50,
    categories: ["peripherals", "gaming", "accessories", "wireless", "popular"],
  },
  {
    id: "6",
    name: { en: "RGB Gaming Chair", nl: "RGB Gaming Stoel" },
    description: {
      en: "Game in comfort with this ergonomic racing-style chair featuring premium cold-cure foam padding that maintains its shape through marathon gaming sessions. The built-in lumbar support and adjustable headrest pillow keep your spine aligned, while 4D armrests adjust in height, angle, width, and depth. Integrated RGB LED strips in the backrest sync with your setup via USB, creating an immersive atmosphere. The Class 4 gas lift supports up to 150kg, and the smooth-rolling PU casters won't damage your floors. Recline from 90° to 160° for the perfect position.",
      nl: "Game comfortabel met deze ergonomische racingstoel met premium cold-cure foam-vulling die zijn vorm behoudt tijdens marathon gaming-sessies. De ingebouwde lumbale ondersteuning en verstelbaar hoofdsteunkussen houden je ruggengraat op één lijn, terwijl 4D-armleuningen verstelbaar zijn in hoogte, hoek, breedte en diepte. Geïntegreerde RGB LED-strips in de rugleuning synchroniseren met je setup via USB en creëren een meeslepende sfeer. De Klasse 4 gaslift ondersteunt tot 150kg, en de soepel rollende PU-wieltjes beschadigen je vloeren niet. Kantel van 90° tot 160° voor de perfecte positie.",
    },
    images: 5,
    price: 299_99,
    maxQuantity: 25,
    categories: ["accessories", "gaming", "furniture", "ergonomic", "popular"],
  },
  {
    id: "7",
    name: { en: "Streaming Webcam Pro", nl: "Streaming Webcam Pro" },
    description: {
      en: "Stream in stunning 4K resolution at 30fps or buttery-smooth 1080p at 60fps with this professional-grade webcam. The Sony STARVIS sensor excels in low-light conditions, while AI-powered auto-focus tracks your face with precision. Advanced HDR technology balances exposure even with bright windows behind you. The built-in dual omnidirectional microphones with noise reduction capture clear audio. Privacy shutter protects your privacy when not streaming. Compatible with OBS, Streamlabs, XSplit, Zoom, Teams, and all major streaming platforms.",
      nl: "Stream in verbluffende 4K-resolutie bij 30fps of fluweel zachte 1080p bij 60fps met deze professionele webcam. De Sony STARVIS-sensor blinkt uit in lage-lichtomstandigheden, terwijl AI-aangedreven autofocus je gezicht met precisie volgt. Geavanceerde HDR-technologie balanceert belichting zelfs met felle ramen achter je. De ingebouwde dubbele omnidirectionele microfoons met ruisonderdrukking leggen helder geluid vast. Privacy-sluiter beschermt je privacy wanneer je niet streamt. Compatibel met OBS, Streamlabs, XSplit, Zoom, Teams en alle grote streamingplatforms.",
    },
    images: 5,
    price: 149_95,
    maxQuantity: 100,
    categories: ["streaming", "peripherals", "content-creation", "popular"],
  },
  {
    id: "8",
    name: { en: "Studio Microphone XL", nl: "Studio Microfoon XL" },
    description: {
      en: "Capture crystal-clear audio with this professional large-diaphragm condenser microphone featuring a 34mm gold-sputtered diaphragm. The cardioid polar pattern focuses on your voice while rejecting background noise. Three selectable polar patterns (cardioid, figure-8, omnidirectional) adapt to any recording scenario. Built-in shock mount minimizes vibrations and handling noise. The gain control, mute button, and real-time headphone monitoring give you complete control. USB-C connectivity works with any device, and the included pop filter eliminates plosives for broadcast-quality audio.",
      nl: "Leg kristalhelder geluid vast met deze professionele large-diaphragm condensatormicrofoon met een 34mm goud-gesputterd diafragma. Het cardioïde poolpatroon focust op je stem terwijl achtergrondgeluid wordt afgewezen. Drie selecteerbare poolpatronen (cardioïde, figuur-8, omnidirectioneel) passen zich aan elk opnamescenario aan. Ingebouwde shockmount minimaliseert trillingen en handlinggeluid. De gain-controle, mute-knop en real-time koptelefoonmonitoring geven je volledige controle. USB-C-connectiviteit werkt met elk apparaat, en de meegeleverde pop-filter elimineert plosives voor audio van uitzendkwaliteit.",
    },
    images: 5,
    price: 179_99,
    maxQuantity: 75,
    categories: ["audio", "streaming", "content-creation", "peripherals", "popular"],
  },
  {
    id: "9",
    name: { en: "Portable SSD 2TB", nl: "Draagbare SSD 2TB" },
    description: {
      en: "Store your games and files with blazing-fast transfer speeds on this compact 2TB NVMe SSD. USB 3.2 Gen 2x2 interface delivers up to 2000MB/s read and 1800MB/s write speeds, cutting load times dramatically. The rugged aluminum housing with IP65 water and dust resistance protects your data anywhere. At just 10mm thin and weighing 50 grams, it slips easily into any pocket. Hardware encryption keeps your files secure, and the included USB-C to USB-C and USB-A cables ensure compatibility with all devices. Perfect for expanding console storage or backing up your entire game library.",
      nl: "Bewaar je games en bestanden met razendsnelle overdrachtssnelheden op deze compacte 2TB NVMe SSD. USB 3.2 Gen 2x2 interface levert tot 2000MB/s lees- en 1800MB/s schrijfsnelheden, waardoor laadtijden dramatisch worden verkort. De robuuste aluminium behuizing met IP65 water- en stofbestendigheid beschermt je data overal. Met slechts 10mm dun en een gewicht van 50 gram past hij gemakkelijk in elke zak. Hardware-encryptie houdt je bestanden veilig, en de meegeleverde USB-C naar USB-C en USB-A kabels garanderen compatibiliteit met alle apparaten. Perfect voor het uitbreiden van console-opslag of het maken van een back-up van je hele gamebibliotheek.",
    },
    images: 5,
    price: 199_99,
    maxQuantity: 200,
    categories: ["components", "storage", "portable", "gaming", "popular"],
  },
  {
    id: "10",
    name: { en: "USB Gaming Hub", nl: "USB Gaming Hub" },
    description: {
      en: "Expand your setup with this 7-port USB 3.0 hub featuring individual power switches and LED indicators for each port. SuperSpeed USB 3.0 delivers transfer rates up to 5Gbps, while backward compatibility with USB 2.0/1.1 ensures all your devices work flawlessly. The included 12V/3A power adapter provides enough power for charging tablets, external hard drives, and other high-power devices simultaneously. Built-in surge protection and overcurrent prevention safeguard your valuable peripherals. The durable metal casing with anti-slip rubber feet keeps it stable on your desk.",
      nl: "Breid je setup uit met deze 7-poorts USB 3.0-hub met individuele aan/uit-schakelaars en LED-indicatoren voor elke poort. SuperSpeed USB 3.0 levert overdrachtsnelheden tot 5Gbps, terwijl achterwaartse compatibiliteit met USB 2.0/1.1 ervoor zorgt dat alle apparaten feilloos werken. De meegeleverde 12V/3A voedingsadapter biedt genoeg stroom voor het gelijktijdig opladen van tablets, externe harde schijven en andere high-power apparaten. Ingebouwde overspanningsbeveiliging en overstroompreventie beschermen je waardevolle randapparatuur. De duurzame metalen behuizing met anti-slip rubberen voetjes houdt hem stabiel op je bureau.",
    },
    images: 5,
    price: 34_99,
    maxQuantity: 150,
    categories: ["accessories", "peripherals", "connectivity", "gaming"],
  },
  {
    id: "11",
    name: { en: "Wireless Earbuds Elite", nl: "Draadloze Oordopjes Elite" },
    description: {
      en: "Enjoy premium sound on the go with these noise-canceling wireless earbuds featuring hybrid ANC that blocks up to 40dB of ambient noise. Custom 10mm dynamic drivers deliver rich bass and crystal-clear highs. Transparency mode lets you hear your surroundings without removing the earbuds. The charging case provides 30 hours of total playtime, and quick charge gives you 2 hours from just 10 minutes. IPX7 water resistance protects against rain and sweat. Touch controls, voice assistant support, and multipoint connectivity let you switch seamlessly between devices.",
      nl: "Geniet van premium geluid onderweg met deze noise-canceling draadloze oordopjes met hybride ANC die tot 40dB omgevingsgeluid blokkeert. Custom 10mm dynamische drivers leveren rijke bas en kristalheldere hoge tonen. Transparency-modus laat je je omgeving horen zonder de oordopjes te verwijderen. De oplaadcase biedt 30 uur totale speeltijd, en snelladen geeft je 2 uur vanuit slechts 10 minuten. IPX7 waterbestendigheid beschermt tegen regen en zweet. Touch-bediening, spraakassistent-ondersteuning en multipoint-connectiviteit laten je naadloos schakelen tussen apparaten.",
    },
    images: 5,
    price: 89_95,
    maxQuantity: 300,
    categories: ["audio", "wireless", "portable", "gaming", "new"],
  },
  {
    id: "12",
    name: { en: "Smart LED Light Strip", nl: "Slimme LED Lichtstrip" },
    description: {
      en: "Transform your room with this 5-meter RGB LED strip featuring individually addressable LEDs for stunning gradient and flowing effects. Choose from 16 million colors and countless preset scenes including music sync mode that pulses to your gameplay audio. Control via smartphone app, voice commands with Alexa/Google Home, or the included IR remote. The 3M adhesive backing makes installation a breeze on any clean surface. Expandable up to 10 meters by purchasing additional strips. Energy-efficient design draws only 24W at full brightness, and the timer function automatically turns lights off when you forget.",
      nl: "Transformeer je kamer met deze 5 meter RGB LED-strip met individueel adresseerbare LED's voor verbluffende gradiënt- en vloeiende effecten. Kies uit 16 miljoen kleuren en talloze vooraf ingestelde scènes, waaronder muziek sync-modus die pulseert op je gameplay-audio. Bedien via smartphone-app, spraakopdrachten met Alexa/Google Home, of de meegeleverde IR-afstandsbediening. De 3M-plakstrip maakt installatie een fluitje van een cent op elk schoon oppervlak. Uitbreidbaar tot 10 meter door extra strips aan te schaffen. Energiezuinig ontwerp verbruikt slechts 24W bij volledige helderheid, en de timerfunctie schakelt automatisch de lampen uit wanneer je het vergeet.",
    },
    images: 5,
    price: 39_99,
    maxQuantity: 500,
    categories: ["accessories", "lighting", "smart-home", "gaming", "new"],
  },
  {
    id: "13",
    name: { en: "Graphics Tablet Pro", nl: "Grafische Tablet Pro" },
    description: {
      en: "Create digital art with this pressure-sensitive graphics tablet featuring 8192 levels of pen pressure sensitivity and ±60° tilt recognition for natural brush strokes. The battery-free stylus with two programmable buttons never needs charging and delivers precise 5080 LPI resolution across the generous 10x6.25 inch active area. Eight customizable express keys and a touch ring provide quick access to your favorite shortcuts. Compatible with all major creative software including Photoshop, Illustrator, Clip Studio Paint, and Blender. Works with Windows, macOS, and Linux. Perfect for digital illustration, photo editing, 3D sculpting, and animation.",
      nl: "Maak digitale kunst met deze drukgevoelige grafische tablet met 8192 niveaus van pendrukgevoeligheid en ±60° kanteling herkenning voor natuurlijke penseelstreken. De batterijloze stylus met twee programmeerbare knoppen hoeft nooit opgeladen te worden en levert precieze 5080 LPI-resolutie over het royale 10x6,25 inch actieve gebied. Acht aanpasbare sneltoetsen en een touch ring bieden snelle toegang tot je favoriete snelkoppelingen. Compatibel met alle belangrijke creatieve software waaronder Photoshop, Illustrator, Clip Studio Paint en Blender. Werkt met Windows, macOS en Linux. Perfect voor digitale illustratie, fotobewerking, 3D-beeldhouwen en animatie.",
    },
    images: 5,
    price: 249_99,
    maxQuantity: 40,
    categories: ["peripherals", "content-creation", "accessories", "professional"],
  },
  {
    id: "14",
    name: { en: "VR Headset Ultimate", nl: "VR-Headset Ultimate" },
    description: {
      en: "Step into virtual reality with this advanced standalone VR headset featuring dual 4K LCD displays (2160x2160 per eye) for unprecedented clarity. The 120Hz refresh rate with 90Hz mode ensures buttery-smooth motion without nausea. Inside-out tracking with six cameras provides room-scale VR without external sensors, while hand tracking lets you interact naturally without controllers. The adjustable IPD (58-72mm) fits all face shapes comfortably. Powerful Snapdragon XR2 processor runs demanding VR games natively, and PC VR streaming support via DisplayPort or wireless connection unlocks the full Steam VR and Oculus library. Includes two precision controllers with haptic feedback.",
      nl: "Stap in virtual reality met deze geavanceerde standalone VR-headset met dubbele 4K LCD-displays (2160x2160 per oog) voor ongekende helderheid. De 120Hz verversingsfrequentie met 90Hz-modus garandeert fluweel zachte beweging zonder misselijkheid. Inside-out tracking met zes camera's biedt room-scale VR zonder externe sensoren, terwijl hand tracking je natuurlijk laat interacteren zonder controllers. De verstelbare IPD (58-72mm) past comfortabel op alle gezichtsvormen. Krachtige Snapdragon XR2-processor draait veeleisende VR-games native, en PC VR-streaming ondersteuning via DisplayPort of draadloze verbinding ontgrendelt de volledige Steam VR en Oculus-bibliotheek. Inclusief twee precisie controllers met haptische feedback.",
    },
    images: 5,
    price: 549_99,
    maxQuantity: 30,
    categories: ["peripherals", "gaming", "vr", "premium", "new"],
  },
  {
    id: "15",
    name: { en: "Gaming Laptop Pro", nl: "Gaming Laptop Pro" },
    description: {
      en: "Dominate on the go with this powerful gaming laptop featuring an Intel Core i9 processor and NVIDIA RTX 4080 graphics card. The 17.3-inch QHD 240Hz display with G-SYNC delivers smooth, tear-free gaming. 32GB DDR5 RAM and 2TB NVMe SSD ensure lightning-fast load times. Advanced cooling system with liquid metal thermal compound keeps temperatures low during intense sessions.",
      nl: "Domineer onderweg met deze krachtige gaming laptop met Intel Core i9 processor en NVIDIA RTX 4080 grafische kaart. Het 17,3-inch QHD 240Hz scherm met G-SYNC levert soepel, tear-free gamen. 32GB DDR5 RAM en 2TB NVMe SSD zorgen voor razendsnelle laadtijden. Geavanceerd koelsysteem met vloeibaar metaal thermische pasta houdt temperaturen laag tijdens intense sessies.",
    },
    images: 5,
    price: 2499_99,
    maxQuantity: 15,
    categories: ["components", "gaming", "portable", "premium", "new"],
  },
  {
    id: "16",
    name: { en: "Soundbar System 5.1", nl: "Soundbar Systeem 5.1" },
    description: {
      en: "Transform your gaming audio with this premium 5.1 surround sound system featuring a powerful 450W output. Wireless rear satellites create true cinematic immersion, while the 10-inch subwoofer delivers earth-shaking bass. Dolby Atmos and DTS:X support bring 3D audio to life. HDMI eARC, optical, Bluetooth 5.0, and WiFi connectivity.",
      nl: "Transformeer je gaming audio met dit premium 5.1 surround sound systeem met krachtige 450W output. Draadloze achtersatellieten creëren echte filmische immersie, terwijl de 10-inch subwoofer aardschokken bas levert. Dolby Atmos en DTS:X ondersteuning brengen 3D audio tot leven. HDMI eARC, optisch, Bluetooth 5.0 en WiFi connectiviteit.",
    },
    images: 5,
    price: 599_99,
    maxQuantity: 30,
    categories: ["audio", "gaming", "home-entertainment", "premium", "new"],
  },
  {
    id: "17",
    name: { en: "Capture Card 4K60", nl: "Capture Card 4K60" },
    description: {
      en: "Record and stream in stunning 4K at 60fps with this professional capture card. Zero latency HDMI passthrough ensures you see what you're playing in real-time. HDR10 support preserves vibrant colors. USB 3.0 connection works with any streaming software. Perfect for console and PC streaming.",
      nl: "Neem op en stream in verbluffende 4K bij 60fps met deze professionele capture card. Zero latency HDMI passthrough zorgt ervoor dat je ziet wat je speelt in real-time. HDR10 ondersteuning behoudt levendige kleuren. USB 3.0 verbinding werkt met elke streaming software. Perfect voor console en PC streaming.",
    },
    images: 5,
    price: 179_95,
    maxQuantity: 80,
    categories: ["streaming", "content-creation", "peripherals", "gaming", "new"],
  },
  {
    id: "18",
    name: { en: "Racing Wheel Pro", nl: "Racing Stuur Pro" },
    description: {
      en: "Experience realistic racing with this force feedback wheel featuring 900-degree rotation and dual-motor force feedback system. Metal pedals with adjustable resistance provide authentic brake feel. Compatible with PC, PlayStation, and Xbox. Magnetic shifter paddles and programmable RGB buttons complete the pro setup.",
      nl: "Ervaar realistische races met dit force feedback stuur met 900-graden rotatie en dual-motor force feedback systeem. Metalen pedalen met verstelbare weerstand bieden authentiek remgevoel. Compatibel met PC, PlayStation en Xbox. Magnetische schakelflippers en programmeerbare RGB-knoppen completeren de pro setup.",
    },
    images: 5,
    price: 449_99,
    maxQuantity: 25,
    categories: ["peripherals", "gaming", "simulation", "premium", "new"],
  },
  {
    id: "19",
    name: { en: "Flight Stick Elite", nl: "Flight Stick Elite" },
    description: {
      en: "Take to the skies with this precision flight stick featuring realistic resistance and 16-bit accuracy. Hall effect sensors eliminate drift for lifetime reliability. Twist rudder control, dual-stage trigger, and 15 programmable buttons. Detachable throttle control with analog mini-stick for maximum versatility.",
      nl: "Stijg op naar de hemel met deze precisie flight stick met realistische weerstand en 16-bit nauwkeurigheid. Hall effect sensoren elimineren drift voor levenslange betrouwbaarheid. Twist roer controle, dual-stage trigger en 15 programmeerbare knoppen. Afneembare throttle controle met analoge mini-stick voor maximale veelzijdigheid.",
    },
    images: 5,
    price: 229_99,
    maxQuantity: 40,
    categories: ["peripherals", "gaming", "simulation", "accessories", "new"],
  },
  {
    id: "20",
    name: { en: "Gaming Desk XL", nl: "Gaming Bureau XL" },
    description: {
      en: "Upgrade your battlestation with this massive 160cm carbon fiber textured gaming desk. Built-in cable management system, RGB lighting strip, headphone hook, and cup holder. Electric height adjustment from 70-120cm for sitting or standing. Load capacity 120kg supports multiple monitors and equipment.",
      nl: "Upgrade je battlestation met dit massieve 160cm carbon fiber getextureerde gaming bureau. Ingebouwd kabelmanagementsysteem, RGB-verlichtingsstrip, koptelefoonhaak en bekerhouder. Elektrische hoogteverstelling van 70-120cm voor zitten of staan. Draagvermogen 120kg ondersteunt meerdere monitoren en apparatuur.",
    },
    images: 5,
    price: 399_99,
    maxQuantity: 20,
    categories: ["accessories", "furniture", "gaming", "ergonomic", "premium"],
  },
  {
    id: "21",
    name: { en: "Mouse Pad XXL", nl: "Muismat XXL" },
    description: {
      en: "Cover your entire desk with this 900x400mm extended gaming mouse pad. Premium cloth surface optimized for all sensor types provides consistent glide. Stitched edges prevent fraying, anti-slip rubber base stays put during intense gaming. Machine washable for easy maintenance.",
      nl: "Bedek je hele bureau met deze 900x400mm uitgebreide gaming muismat. Premium stoffen oppervlak geoptimaliseerd voor alle sensortypes biedt consistente glijding. Gestikte randen voorkomen rafelen, anti-slip rubberen basis blijft op zijn plaats tijdens intensief gamen. Machinewasbaar voor eenvoudig onderhoud.",
    },
    images: 5,
    price: 24_99,
    maxQuantity: 500,
    categories: ["accessories", "gaming", "peripherals", "budget"],
  },
  {
    id: "22",
    name: { en: "Controller Pro Elite", nl: "Controller Pro Elite" },
    description: {
      en: "Master every game with this customizable wireless controller. Swappable analog sticks, D-pad, and back paddles. Adjustable trigger stops and hair-trigger mode for faster response. 40-hour battery, Bluetooth and 2.4GHz wireless. Compatible with PC, mobile, and all major consoles.",
      nl: "Beheers elk spel met deze aanpasbare draadloze controller. Verwisselbare analoge sticks, D-pad en achterknoppen. Verstelbare triggerstops en hair-trigger modus voor snellere respons. 40-uur batterij, Bluetooth en 2.4GHz draadloos. Compatibel met PC, mobiel en alle grote consoles.",
    },
    images: 5,
    price: 179_99,
    maxQuantity: 60,
    categories: ["peripherals", "gaming", "wireless", "accessories", "premium"],
  },
  {
    id: "23",
    name: { en: "Streaming Lights Kit", nl: "Streaming Verlichting Kit" },
    description: {
      en: "Light up your streams with this professional 3-point lighting kit. Two adjustable LED panels with softboxes eliminate shadows. RGB accent light adds atmosphere. Smartphone app control for color temperature (3000K-6500K) and brightness. Includes light stands and carrying case.",
      nl: "Verlicht je streams met deze professionele 3-punts verlichtingskit. Twee verstelbare LED-panelen met softboxen elimineren schaduwen. RGB accent licht voegt sfeer toe. Smartphone app controle voor kleurtemperatuur (3000K-6500K) en helderheid. Inclusief lichtstatief en draagtas.",
    },
    images: 5,
    price: 199_99,
    maxQuantity: 45,
    categories: ["streaming", "lighting", "content-creation", "accessories"],
  },
  {
    id: "24",
    name: { en: "Green Screen XL", nl: "Green Screen XL" },
    description: {
      en: "Create professional streams with this collapsible 200x150cm green screen. Auto-locking frame sets up in seconds, wrinkle-resistant fabric ensures clean keying. Includes storage bag and carrying handle. Perfect for streamers, content creators, and video calls.",
      nl: "Creëer professionele streams met dit opvouwbare 200x150cm green screen. Auto-vergrendelend frame is in seconden opgezet, kreukarme stof zorgt voor schone keying. Inclusief opbergtas en draaghandvat. Perfect voor streamers, content creators en videogesprekken.",
    },
    images: 5,
    price: 79_99,
    maxQuantity: 100,
    categories: ["streaming", "content-creation", "accessories", "portable"],
  },
  {
    id: "25",
    name: { en: "Stream Deck XL", nl: "Stream Deck XL" },
    description: {
      en: "Control your streams with 32 customizable LCD keys displaying icons that change based on context. Switch scenes, launch media, adjust audio, and control smart lights with a tap. Unlimited actions via folders and profiles. Works with OBS, Streamlabs, Twitch, YouTube.",
      nl: "Bestuur je streams met 32 aanpasbare LCD-toetsen die iconen tonen die veranderen op basis van context. Schakel tussen scènes, start media, pas audio aan en bedien slimme lampen met een tik. Onbeperkte acties via mappen en profielen. Werkt met OBS, Streamlabs, Twitch, YouTube.",
    },
    images: 5,
    price: 249_99,
    maxQuantity: 35,
    categories: ["streaming", "content-creation", "peripherals", "accessories", "premium"],
  },
  {
    id: "26",
    name: { en: "WiFi 6E Router Gaming", nl: "WiFi 6E Router Gaming" },
    description: {
      en: "Eliminate lag with this tri-band WiFi 6E gaming router delivering speeds up to 10.8Gbps. Gaming prioritization ensures your traffic gets priority. 8 high-gain antennas provide whole-home coverage. 2.5G WAN port and four 1G LAN ports. Built-in VPN and advanced security.",
      nl: "Elimineer lag met deze tri-band WiFi 6E gaming router die snelheden tot 10,8Gbps levert. Gaming prioritering zorgt ervoor dat jouw verkeer voorrang krijgt. 8 high-gain antennes bieden dekking voor het hele huis. 2,5G WAN-poort en vier 1G LAN-poorten. Ingebouwde VPN en geavanceerde beveiliging.",
    },
    images: 5,
    price: 349_99,
    maxQuantity: 50,
    categories: ["components", "networking", "gaming", "connectivity", "premium"],
  },
  {
    id: "27",
    name: { en: "Gaming Glasses", nl: "Gaming Bril" },
    description: {
      en: "Reduce eye strain during long gaming sessions with these blue light blocking glasses. Medical-grade lenses filter 99% of harmful blue light while maintaining color accuracy. Lightweight TR90 frames with anti-slip nose pads. Anti-glare coating reduces screen reflections.",
      nl: "Verminder oogvermoeidheid tijdens lange gaming sessies met deze blauw licht blokkerende bril. Medische lenzen filteren 99% van schadelijk blauw licht terwijl kleurnauwkeurigheid behouden blijft. Lichtgewicht TR90 montuur met anti-slip neuspads. Anti-schittering coating vermindert schermreflecties.",
    },
    images: 5,
    price: 49_99,
    maxQuantity: 200,
    categories: ["accessories", "gaming", "health", "ergonomic"],
  },
  {
    id: "28",
    name: { en: "Cable Management Kit", nl: "Kabelmanagement Kit" },
    description: {
      en: "Organize your gaming setup with this comprehensive cable management kit. Includes cable sleeves, clips, ties, and under-desk cable tray. Adhesive and screw mounting options. Manages up to 30 cables. Black finish matches any setup.",
      nl: "Organiseer je gaming setup met deze uitgebreide kabelmanagement kit. Inclusief kabelhouders, clips, ties en onder-bureau kabelgoot. Plak- en schroefmontage opties. Beheert tot 30 kabels. Zwarte afwerking past bij elke setup.",
    },
    images: 5,
    price: 29_99,
    maxQuantity: 300,
    categories: ["accessories", "organization", "gaming", "budget"],
  },
  {
    id: "29",
    name: { en: "Monitor Arm Dual", nl: "Monitorarm Dubbel" },
    description: {
      en: "Maximize desk space with this dual monitor arm supporting two 32-inch displays up to 9kg each. Full articulation with tilt, swivel, and rotation. Built-in cable management, gas spring tension adjustment, and VESA compatibility (75x75, 100x100mm). Sturdy clamp and grommet mounting.",
      nl: "Maximaliseer bureauruimte met deze dubbele monitorarm die twee 32-inch displays tot 9kg elk ondersteunt. Volledige articulatie met kanteling, zwenking en rotatie. Ingebouwd kabelbeheer, gasveer spanningsaanpassing en VESA-compatibiliteit (75x75, 100x100mm). Stevige klem en doorvoermontage.",
    },
    images: 5,
    price: 119_99,
    maxQuantity: 70,
    categories: ["accessories", "monitors", "ergonomic", "gaming"],
  },
  {
    id: "30",
    name: { en: "Laptop Cooling Pad", nl: "Laptop Koelpad" },
    description: {
      en: "Keep your gaming laptop cool with this aluminum cooling pad featuring six ultra-quiet fans. Adjustable height and angle for ergonomic positioning. Two USB ports for peripherals. Blue LED lighting and fan speed control. Supports laptops up to 17.3 inches.",
      nl: "Houd je gaming laptop koel met dit aluminium koelpad met zes ultra-stille ventilatoren. Verstelbare hoogte en hoek voor ergonomische positionering. Twee USB-poorten voor randapparatuur. Blauwe LED-verlichting en ventilatorsnelheidscontrole. Ondersteunt laptops tot 17,3 inch.",
    },
    images: 5,
    price: 39_99,
    maxQuantity: 150,
    categories: ["accessories", "cooling", "gaming", "portable"],
  },
  {
    id: "31",
    name: { en: "Power Strip Gaming", nl: "Stekkerdoos Gaming" },
    description: {
      en: "Power your entire setup with this 12-outlet surge protector featuring 4 USB-C and 2 USB-A ports. 4000J surge protection keeps equipment safe. Flat plug design, 6-foot heavy-duty cable, and wall-mountable. Individual switches for each outlet.",
      nl: "Voed je hele setup met deze 12-stopcontacten overspanningsbeveiliging met 4 USB-C en 2 USB-A poorten. 4000J overspanningsbeveiliging houdt apparatuur veilig. Plat stekkerontwerp, 1,8 meter heavy-duty kabel en wandmonteerbaar. Individuele schakelaars voor elk stopcontact.",
    },
    images: 5,
    price: 54_99,
    maxQuantity: 120,
    categories: ["accessories", "power", "gaming", "connectivity"],
  },
  {
    id: "32",
    name: { en: "Webcam Cover Set", nl: "Webcam Cover Set" },
    description: {
      en: "Protect your privacy with this 6-pack of ultra-thin webcam covers. Universal fit for laptops, tablets, phones, and monitors. Slide mechanism is easy to open and close. 0.7mm thickness won't interfere with screen closure. Adhesive leaves no residue.",
      nl: "Bescherm je privacy met deze 6-pack ultradunne webcam covers. Universele pasvorm voor laptops, tablets, telefoons en monitoren. Schuifmechanisme is gemakkelijk te openen en sluiten. 0,7mm dikte interfereert niet met scherm sluiting. Plakker laat geen residu achter.",
    },
    images: 5,
    price: 9_99,
    maxQuantity: 1000,
    categories: ["accessories", "privacy", "security", "budget"],
  },
  {
    id: "33",
    name: { en: "Gaming Backpack", nl: "Gaming Rugzak" },
    description: {
      en: "Transport your gaming laptop safely in this TSA-friendly backpack with dedicated 17.3-inch laptop compartment. Water-resistant exterior, padded shoulder straps, and ventilated back panel. Multiple pockets for accessories, USB charging port, and reflective strips for night visibility.",
      nl: "Vervoer je gaming laptop veilig in deze TSA-vriendelijke rugzak met speciaal 17,3-inch laptop compartiment. Waterafstotende buitenkant, gevoerde schouderbanden en geventileerd rugpaneel. Meerdere zakken voor accessoires, USB-oplaadpoort en reflecterende strips voor zichtbaarheid 's nachts.",
    },
    images: 5,
    price: 79_99,
    maxQuantity: 80,
    categories: ["accessories", "portable", "gaming", "storage"],
  },
  {
    id: "34",
    name: { en: "RGB Fan Kit", nl: "RGB Ventilator Kit" },
    description: {
      en: "Customize your PC with this 6-pack of 120mm RGB fans. Addressable RGB with motherboard sync or included controller. Hydraulic bearing ensures quiet operation at 25dB. High airflow design moves 55CFM. Includes all mounting hardware.",
      nl: "Pas je PC aan met deze 6-pack van 120mm RGB-ventilatoren. Adresseerbare RGB met moederbord sync of meegeleverde controller. Hydraulische lager zorgt voor stille werking bij 25dB. High airflow ontwerp verplaatst 55CFM. Inclusief alle montagemateriaal.",
    },
    images: 5,
    price: 69_99,
    maxQuantity: 100,
    categories: ["components", "cooling", "lighting", "gaming"],
  },
  {
    id: "35",
    name: { en: "Thermal Paste Premium", nl: "Thermische Pasta Premium" },
    description: {
      en: "Maximize cooling performance with this high-conductivity thermal paste (12.5 W/mK). Non-conductive and non-corrosive formula safe for all components. Easy application with included spatula. 4g tube provides multiple applications. Ideal for CPUs and GPUs.",
      nl: "Maximaliseer koelprestaties met deze high-conductivity thermische pasta (12,5 W/mK). Niet-geleidende en niet-corrosieve formule veilig voor alle componenten. Gemakkelijke toepassing met meegeleverde spatel. 4g tube biedt meerdere toepassingen. Ideaal voor CPU's en GPU's.",
    },
    images: 5,
    price: 14_99,
    maxQuantity: 400,
    categories: ["components", "cooling", "maintenance", "budget"],
  },
  {
    id: "36",
    name: { en: "SSD Heatsink", nl: "SSD Koellichaam" },
    description: {
      en: "Keep your M.2 NVMe SSD running cool with this aluminum heatsink. Fits both single and double-sided SSDs. Thermal pad included for optimal heat transfer. Compatible with PS5 expansion slot. Reduces throttling for sustained performance.",
      nl: "Houd je M.2 NVMe SSD koel met dit aluminium koellichaam. Past op zowel enkel- als dubbelzijdige SSD's. Thermische pad inbegrepen voor optimale warmte-overdracht. Compatibel met PS5 expansie slot. Vermindert throttling voor aanhoudende prestaties.",
    },
    images: 5,
    price: 19_99,
    maxQuantity: 250,
    categories: ["components", "cooling", "storage", "gaming"],
  },
  {
    id: "37",
    name: { en: "RAM Kit 32GB DDR5", nl: "RAM Kit 32GB DDR5" },
    description: {
      en: "Boost your gaming PC with this 32GB (2x16GB) DDR5-6000 RAM kit. Low-latency CL30 timings, XMP 3.0 support for easy overclocking. Aluminum heat spreaders keep modules cool. RGB lighting syncs with major motherboards. Lifetime warranty included.",
      nl: "Boost je gaming PC met deze 32GB (2x16GB) DDR5-6000 RAM kit. Lage-latentie CL30 timings, XMP 3.0 ondersteuning voor eenvoudig overklokken. Aluminium heatspreaders houden modules koel. RGB-verlichting synchroniseert met grote moederborden. Levenslange garantie inbegrepen.",
    },
    images: 5,
    price: 149_99,
    maxQuantity: 90,
    categories: ["components", "memory", "gaming", "performance"],
  },
  {
    id: "38",
    name: { en: "GPU Support Bracket", nl: "GPU Ondersteuningsbeugel" },
    description: {
      en: "Prevent GPU sag with this adjustable support bracket. Supports graphics cards up to 5kg. Aluminum construction with RGB lighting. Magnetic base attaches to case, adjustable height from 35-75mm. Protects your investment and looks great doing it.",
      nl: "Voorkom GPU doorbuiging met deze verstelbare ondersteuningsbeugel. Ondersteunt grafische kaarten tot 5kg. Aluminium constructie met RGB-verlichting. Magnetische basis hecht aan behuizing, verstelbare hoogte van 35-75mm. Beschermt je investering en ziet er geweldig uit.",
    },
    images: 5,
    price: 29_99,
    maxQuantity: 180,
    categories: ["components", "accessories", "lighting", "gaming"],
  },
  {
    id: "39",
    name: { en: "Sound Dampening Foam", nl: "Geluiddempend Schuim" },
    description: {
      en: "Reduce PC noise with this acoustic foam kit for case panels. Self-adhesive installation, easy to cut to size. Fire-resistant material, 12 pieces cover typical mid-tower case. Reduces fan and coil whine noise significantly.",
      nl: "Verminder PC-geluid met deze akoestische schuim kit voor behuizingspanelen. Zelfklevende installatie, gemakkelijk op maat te snijden. Brandwerend materiaal, 12 stukken bedekken typische mid-tower behuizing. Vermindert ventilator en coil whine geluid aanzienlijk.",
    },
    images: 5,
    price: 24_99,
    maxQuantity: 150,
    categories: ["components", "audio", "accessories", "budget"],
  },
  {
    id: "40",
    name: { en: "PC Tool Kit", nl: "PC Gereedschap Kit" },
    description: {
      en: "Build and maintain your PC with this comprehensive 32-piece toolkit. Magnetic screwdriver set, anti-static wrist strap, cable ties, thermal paste, and more. Organized carrying case keeps tools protected. Perfect for builders and upgraders.",
      nl: "Bouw en onderhoud je PC met deze uitgebreide 32-delige toolkit. Magnetische schroevendraaier set, anti-statische polsband, kabelbinders, thermische pasta en meer. Georganiseerde draagtas houdt gereedschap beschermd. Perfect voor bouwers en upgraders.",
    },
    images: 5,
    price: 39_99,
    maxQuantity: 120,
    categories: ["accessories", "tools", "maintenance", "components"],
  },
  {
    id: "41",
    name: { en: "HDMI 2.1 Cable 8K", nl: "HDMI 2.1 Kabel 8K" },
    description: {
      en: "Future-proof your setup with this HDMI 2.1 cable supporting 8K@60Hz and 4K@120Hz. 48Gbps bandwidth, eARC, VRR, and ALLM support. Braided nylon exterior, gold-plated connectors. Available in 2m length. Perfect for PS5, Xbox Series X, and high-end PCs.",
      nl: "Maak je setup toekomstbestendig met deze HDMI 2.1 kabel die 8K@60Hz en 4K@120Hz ondersteunt. 48Gbps bandbreedte, eARC, VRR en ALLM ondersteuning. Gevlochten nylon buitenkant, vergulde connectoren. Verkrijgbaar in 2m lengte. Perfect voor PS5, Xbox Series X en high-end PC's.",
    },
    images: 5,
    price: 34_99,
    maxQuantity: 200,
    categories: ["accessories", "cables", "connectivity", "gaming"],
  },
  {
    id: "42",
    name: { en: "DisplayPort 1.4 Cable", nl: "DisplayPort 1.4 Kabel" },
    description: {
      en: "Connect your monitor with this certified DisplayPort 1.4 cable supporting 8K@60Hz, 4K@144Hz, and HDR. 32.4Gbps bandwidth with DSC support. Locking connectors prevent accidental disconnection. 2m length with triple shielding for interference-free signal.",
      nl: "Verbind je monitor met deze gecertificeerde DisplayPort 1.4 kabel die 8K@60Hz, 4K@144Hz en HDR ondersteunt. 32,4Gbps bandbreedte met DSC-ondersteuning. Vergrendelende connectoren voorkomen onbedoelde ontkoppeling. 2m lengte met drievoudige afscherming voor storingsvrij signaal.",
    },
    images: 5,
    price: 29_99,
    maxQuantity: 180,
    categories: ["accessories", "cables", "connectivity", "monitors"],
  },
  {
    id: "43",
    name: { en: "USB-C Hub 11-in-1", nl: "USB-C Hub 11-in-1" },
    description: {
      en: "Expand your laptop with this 11-in-1 USB-C hub. Features dual HDMI (4K@60Hz), 100W PD charging, 3x USB 3.0, SD/microSD readers, Gigabit Ethernet, and 3.5mm audio. Aluminum housing matches MacBook aesthetic. Perfect for creators and professionals.",
      nl: "Breid je laptop uit met deze 11-in-1 USB-C hub. Bevat dual HDMI (4K@60Hz), 100W PD opladen, 3x USB 3.0, SD/microSD lezers, Gigabit Ethernet en 3,5mm audio. Aluminium behuizing past bij MacBook esthetiek. Perfect voor makers en professionals.",
    },
    images: 5,
    price: 79_99,
    maxQuantity: 140,
    categories: ["accessories", "connectivity", "portable", "peripherals"],
  },
  {
    id: "44",
    name: { en: "Ethernet Cable Cat8", nl: "Ethernet Kabel Cat8" },
    description: {
      en: "Get maximum network performance with this Cat8 Ethernet cable supporting 40Gbps speeds up to 30 meters. Shielded design eliminates crosstalk and interference. Heavy-duty gold-plated RJ45 connectors with strain relief. Backward compatible with Cat7/6/5e. 3m length.",
      nl: "Krijg maximale netwerkprestaties met deze Cat8 Ethernet kabel die 40Gbps snelheden ondersteunt tot 30 meter. Afgeschermd ontwerp elimineert overspraak en storing. Heavy-duty vergulde RJ45 connectoren met trekontlasting. Achterwaarts compatibel met Cat7/6/5e. 3m lengte.",
    },
    images: 5,
    price: 24_99,
    maxQuantity: 300,
    categories: ["accessories", "cables", "networking", "gaming"],
  },
  {
    id: "45",
    name: { en: 'Portable Monitor 15.6"', nl: 'Draagbare Monitor 15,6"' },
    description: {
      en: "Extend your workspace anywhere with this 1080p IPS portable monitor. USB-C and HDMI connectivity, built-in speakers, and smart cover that doubles as stand. 400 nits brightness, 100% sRGB. Perfect for laptop users, console gaming, and presentations.",
      nl: "Breid je werkruimte overal uit met deze 1080p IPS draagbare monitor. USB-C en HDMI connectiviteit, ingebouwde speakers en smart cover die dienst doet als standaard. 400 nits helderheid, 100% sRGB. Perfect voor laptopgebruikers, console gaming en presentaties.",
    },
    images: 5,
    price: 159_99,
    maxQuantity: 60,
    categories: ["monitors", "portable", "gaming", "peripherals"],
  },
  {
    id: "46",
    name: { en: "Desk Lamp RGB", nl: "Bureaulamp RGB" },
    description: {
      en: "Illuminate your desk with this adjustable RGB LED lamp. Touch controls for brightness and color, or sync with music. 360-degree rotation, stable weighted base. Eye-care LED eliminates flicker. USB powered with memory function to remember your settings.",
      nl: "Verlicht je bureau met deze verstelbare RGB LED-lamp. Touch-bediening voor helderheid en kleur, of synchroniseer met muziek. 360-graden rotatie, stabiele gewogen basis. Eye-care LED elimineert flikkering. USB-gevoed met geheugenfunctie om je instellingen te onthouden.",
    },
    images: 5,
    price: 44_99,
    maxQuantity: 170,
    categories: ["accessories", "lighting", "gaming", "smart-home"],
  },
  {
    id: "47",
    name: { en: "Wrist Rest Set", nl: "Polssteun Set" },
    description: {
      en: "Reduce strain with this ergonomic wrist rest set for keyboard and mouse. Memory foam with cooling gel layer maintains comfort during long sessions. Non-slip rubber base, easy-clean surface. Fits full-size keyboards and standard mice.",
      nl: "Verminder belasting met deze ergonomische polssteun set voor toetsenbord en muis. Memory foam met koelende gellaag behoudt comfort tijdens lange sessies. Anti-slip rubberen basis, gemakkelijk schoon te maken oppervlak. Past bij full-size toetsenborden en standaard muizen.",
    },
    images: 5,
    price: 19_99,
    maxQuantity: 250,
    categories: ["accessories", "ergonomic", "health", "gaming"],
  },
  {
    id: "48",
    name: { en: "Smart Plug 4-Pack", nl: "Slimme Stekker 4-Pack" },
    description: {
      en: "Control your gaming setup remotely with these WiFi smart plugs. Voice control via Alexa and Google Home, scheduling and timers via app. Energy monitoring tracks power consumption. Compact design won't block adjacent outlets. No hub required.",
      nl: "Bedien je gaming setup op afstand met deze WiFi slimme stekkers. Spraakbediening via Alexa en Google Home, planning en timers via app. Energiemonitoring volgt stroomverbruik. Compact ontwerp blokkeert aangrenzende stopcontacten niet. Geen hub vereist.",
    },
    images: 5,
    price: 39_99,
    maxQuantity: 200,
    categories: ["accessories", "smart-home", "power", "connectivity"],
  },
  {
    id: "49",
    name: { en: "Cleaning Kit Pro", nl: "Schoonmaak Kit Pro" },
    description: {
      en: "Keep your gear pristine with this comprehensive cleaning kit. Includes screen cleaner spray, microfiber cloths, keyboard brush, air blower, and cotton swabs. Safe for all electronics - monitors, laptops, phones, cameras. Resealable case for storage.",
      nl: "Houd je gear schoon met deze uitgebreide schoonmaak kit. Inclusief schermreiniger spray, microfiber doeken, toetsenbord borstel, luchtblazer en wattenstaafjes. Veilig voor alle elektronica - monitoren, laptops, telefoons, camera's. Hersluitbare case voor opslag.",
    },
    images: 5,
    price: 24_99,
    maxQuantity: 300,
    categories: ["accessories", "maintenance", "cleaning", "budget"],
  },
  {
    id: "50",
    name: { en: "UltraWide Curved Monitor", nl: "UltraWide Gebogen Monitor" },
    description: {
      en: "Expand your gaming horizon with this stunning 34-inch ultrawide curved monitor. 3440x1440 resolution with 144Hz refresh rate and 1ms response time delivers smooth, immersive gameplay. The 1800R curvature wraps around your field of vision for maximum immersion.",
      nl: "Vergroot je gaming horizon met deze prachtige 34-inch ultrawide gebogen monitor. 3440x1440 resolutie met 144Hz verversingssnelheid en 1ms reactietijd levert vloeiende, meeslepende gameplay. De 1800R kromming wikkelt zich om je gezichtsveld voor maximale immersie.",
    },
    images: 5,
    price: 599_99,
    maxQuantity: 50,
    categories: ["monitors", "gaming", "premium", "popular"],
  },
  {
    id: "51",
    name: { en: "Wireless Gaming Earbuds", nl: "Draadloze Gaming Oordopjes" },
    description: {
      en: "Game on the go with ultra-low latency wireless earbuds designed for mobile gaming. 40ms latency mode, dual microphones, and 24-hour battery life with charging case. IPX4 water resistance, touch controls, and game/music mode switching.",
      nl: "Game onderweg met ultra-lage latentie draadloze oordopjes ontworpen voor mobiel gamen. 40ms latentie modus, dubbele microfoons en 24 uur batterijduur met oplaadcase. IPX4 waterbestendigheid, touch-bediening en game/muziek modus wisseling.",
    },
    images: 5,
    price: 79_99,
    maxQuantity: 150,
    categories: ["audio", "wireless", "portable", "gaming", "new"],
  },
  {
    id: "52",
    name: { en: "RGB Mechanical Numpad", nl: "RGB Mechanisch Nummerblok" },
    description: {
      en: "Add programmable hotkeys to your setup with this RGB mechanical numpad. Hot-swappable switches, programmable macros, USB-C connection. Perfect for productivity, gaming, or video editing. Compact aluminum build with magnetic feet.",
      nl: "Voeg programmeerbare sneltoetsen toe aan je setup met dit RGB mechanisch nummerblok. Hot-swappable switches, programmeerbare macro's, USB-C aansluiting. Perfect voor productiviteit, gaming of video editing. Compact aluminium behuizing met magnetische voeten.",
    },
    images: 5,
    price: 54_99,
    maxQuantity: 100,
    categories: ["peripherals", "accessories", "gaming", "content-creation"],
  },
  {
    id: "53",
    name: { en: "4K Webcam Pro", nl: "4K Webcam Pro" },
    description: {
      en: "Stream and video call in stunning 4K with this professional webcam. Auto-focus, HDR, dual microphones with noise reduction, and 90-degree field of view. Works with all major streaming platforms. Adjustable clip mount and tripod thread.",
      nl: "Stream en videobel in verbluffende 4K met deze professionele webcam. Auto-focus, HDR, dubbele microfoons met ruisonderdrukking en 90-graden gezichtsveld. Werkt met alle grote streaming platforms. Verstelbare clip bevestiging en statief schroefdraad.",
    },
    images: 5,
    price: 149_99,
    maxQuantity: 75,
    categories: ["streaming", "content-creation", "professional", "premium"],
  },
  {
    id: "54",
    name: { en: "Gaming Floor Mat", nl: "Gaming Vloermat" },
    description: {
      en: "Protect your floors and enhance comfort with this extra-large gaming floor mat. 120cm x 90cm water-resistant surface, anti-slip backing, noise dampening. Perfect under gaming chairs. Easy to clean and maintain.",
      nl: "Bescherm je vloeren en verhoog comfort met deze extra grote gaming vloermat. 120cm x 90cm waterbestendig oppervlak, anti-slip achterkant, geluidsdemping. Perfect onder gaming stoelen. Gemakkelijk schoon te maken en te onderhouden.",
    },
    images: 5,
    price: 44_99,
    maxQuantity: 80,
    categories: ["accessories", "gaming", "furniture", "ergonomic"],
  },
  {
    id: "55",
    name: { en: "Mini PC Gaming Box", nl: "Mini PC Gaming Box" },
    description: {
      en: "Compact powerhouse with Intel i7, RTX 4060, 16GB RAM, 512GB NVMe SSD. Perfect for 1080p/1440p gaming in a tiny 2.5L chassis. Wi-Fi 6E, Bluetooth 5.3, multiple display outputs. Whisper-quiet cooling system.",
      nl: "Compacte krachtpatser met Intel i7, RTX 4060, 16GB RAM, 512GB NVMe SSD. Perfect voor 1080p/1440p gaming in een kleine 2.5L behuizing. Wi-Fi 6E, Bluetooth 5.3, meerdere display uitgangen. Fluisterstil koelsysteem.",
    },
    images: 5,
    price: 1299_99,
    maxQuantity: 25,
    categories: ["components", "gaming", "premium", "performance", "new"],
  },
  {
    id: "56",
    name: { en: "Streaming Light Panel Set", nl: "Streaming Licht Paneel Set" },
    description: {
      en: "Create the perfect atmosphere with 6 smart RGB light panels. App-controlled color, brightness, and effects. Music sync mode, voice control compatible, adhesive mounting. Low power LED technology with 50,000 hour lifespan.",
      nl: "Creëer de perfecte sfeer met 6 slimme RGB lichtpanelen. App-gestuurde kleur, helderheid en effecten. Muziek sync modus, spraakbesturing compatibel, kleefmontage. Laag vermogen LED technologie met 50.000 uur levensduur.",
    },
    images: 5,
    price: 129_99,
    maxQuantity: 60,
    categories: ["lighting", "streaming", "smart-home", "accessories", "popular"],
  },
  {
    id: "57",
    name: { en: "Budget Mechanical Keyboard", nl: "Budget Mechanisch Toetsenbord" },
    description: {
      en: "Entry-level mechanical gaming keyboard with blue switches. Full-size layout, white LED backlighting, splash-resistant design, removable keycaps. Great tactile feedback for typing and gaming at an affordable price.",
      nl: "Instap mechanisch gaming toetsenbord met blauwe switches. Volledige lay-out, witte LED-verlichting, spatwaterdicht ontwerp, verwijderbare toetsen. Geweldige tactiele feedback voor typen en gamen tegen een betaalbare prijs.",
    },
    images: 5,
    price: 39_99,
    maxQuantity: 200,
    categories: ["peripherals", "gaming", "budget", "popular"],
  },
  {
    id: "58",
    name: { en: "Vertical Gaming Mouse", nl: "Verticale Gaming Muis" },
    description: {
      en: "Reduce wrist strain with this ergonomic vertical gaming mouse. 12000 DPI optical sensor, 6 programmable buttons, adjustable RGB lighting. Natural handshake position promotes healthy posture during long gaming sessions.",
      nl: "Verminder polsbelasting met deze ergonomische verticale gaming muis. 12000 DPI optische sensor, 6 programmeerbare knoppen, instelbare RGB-verlichting. Natuurlijke handdruk positie bevordert gezonde houding tijdens lange gaming sessies.",
    },
    images: 5,
    price: 49_99,
    maxQuantity: 90,
    categories: ["peripherals", "gaming", "ergonomic", "health"],
  },
  {
    id: "59",
    name: { en: "Portable SSD 2TB", nl: "Draagbare SSD 2TB" },
    description: {
      en: "Lightning-fast portable storage with 1050MB/s read speeds. USB 3.2 Gen 2 connection, shock-resistant design, password protection. Store and play games directly from the drive. Includes USB-C and USB-A cables.",
      nl: "Bliksemsnelle draagbare opslag met 1050MB/s leessnelheden. USB 3.2 Gen 2 verbinding, schokbestendig ontwerp, wachtwoordbeveiliging. Bewaar en speel games direct vanaf de schijf. Inclusief USB-C en USB-A kabels.",
    },
    images: 5,
    price: 179_99,
    maxQuantity: 100,
    categories: ["storage", "accessories", "portable", "performance"],
  },
  {
    id: "60",
    name: { en: "Studio Microphone Arm", nl: "Studio Microfoon Arm" },
    description: {
      en: "Professional broadcast-quality boom arm with cable management. Supports up to 2kg, 360-degree rotation, built-in springs for smooth adjustment. Desk clamp and cable clips included. Perfect for streaming and podcasting.",
      nl: "Professionele broadcast-kwaliteit boom arm met kabelmanagement. Ondersteunt tot 2kg, 360-graden rotatie, ingebouwde veren voor soepele aanpassing. Bureauklem en kabelclips inbegrepen. Perfect voor streaming en podcasting.",
    },
    images: 5,
    price: 64_99,
    maxQuantity: 70,
    categories: ["streaming", "accessories", "content-creation", "professional"],
  },
  {
    id: "61",
    name: { en: "Wireless Charging Mouse Pad", nl: "Draadloze Oplading Muismat" },
    description: {
      en: "Charge your phone while you game with this innovative mouse pad. 15W fast wireless charging zone, smooth gaming surface, non-slip rubber base. LED charging indicator, compatible with all Qi-enabled devices.",
      nl: "Laad je telefoon op terwijl je gamet met deze innovatieve muismat. 15W snelle draadloze oplaadzone, glad gaming oppervlak, anti-slip rubber basis. LED oplaadindicator, compatibel met alle Qi-compatibele apparaten.",
    },
    images: 5,
    price: 34_99,
    maxQuantity: 120,
    categories: ["accessories", "peripherals", "wireless", "smart-home", "new"],
  },
  {
    id: "62",
    name: { en: "RGB GPU Support Bracket", nl: "RGB GPU Steunbeugel" },
    description: {
      en: "Prevent GPU sag with this adjustable RGB support bracket. Magnetic ARGB lighting, tool-free height adjustment up to 15cm, anti-slip base. Compatible with all standard PC cases. Supports graphics cards up to 5kg.",
      nl: "Voorkom GPU doorzakking met deze verstelbare RGB steunbeugel. Magnetische ARGB-verlichting, gereedschapsloze hoogte-instelling tot 15cm, anti-slip basis. Compatibel met alle standaard PC-behuizingen. Ondersteunt grafische kaarten tot 5kg.",
    },
    images: 5,
    price: 19_99,
    maxQuantity: 150,
    categories: ["components", "accessories", "lighting", "budget"],
  },
  {
    id: "63",
    name: { en: "Green Screen Backdrop", nl: "Green Screen Achtergrond" },
    description: {
      en: "Professional collapsible green screen for streaming and content creation. 150cm x 200cm wrinkle-free fabric, pop-up design, includes carrying case. Chrome keying optimized material, lightweight aluminum frame.",
      nl: "Professionele inklapbare green screen voor streaming en content creatie. 150cm x 200cm kreukvrije stof, pop-up ontwerp, inclusief draagtas. Chrome keying geoptimaliseerd materiaal, lichtgewicht aluminium frame.",
    },
    images: 5,
    price: 79_99,
    maxQuantity: 50,
    categories: ["streaming", "content-creation", "professional", "accessories"],
  },
  {
    id: "64",
    name: { en: "60% Wireless Keyboard", nl: "60% Draadloos Toetsenbord" },
    description: {
      en: "Compact 60% mechanical keyboard with Bluetooth 5.1 and 2.4GHz wireless. Hot-swappable switches, PBT keycaps, 3000mAh battery lasts 30 days. Triple device connection, USB-C charging, aluminum case.",
      nl: "Compact 60% mechanisch toetsenbord met Bluetooth 5.1 en 2.4GHz draadloos. Hot-swappable switches, PBT toetsen, 3000mAh batterij duurt 30 dagen. Triple apparaat verbinding, USB-C opladen, aluminium behuizing.",
    },
    images: 5,
    price: 89_99,
    maxQuantity: 85,
    categories: ["peripherals", "wireless", "gaming", "portable", "new"],
  },
  {
    id: "65",
    name: { en: "Monitor Privacy Screen", nl: "Monitor Privacy Scherm" },
    description: {
      en: "Protect sensitive information with this 24-inch privacy filter. Narrows viewing angle to 60 degrees, blue light reduction, anti-glare coating. Easy installation with reversible attachment, no residue removal.",
      nl: "Bescherm gevoelige informatie met dit 24-inch privacy filter. Vernauwt kijkhoek tot 60 graden, blauw licht reductie, anti-schittering coating. Eenvoudige installatie met omkeerbare bevestiging, geen residu verwijdering.",
    },
    images: 5,
    price: 54_99,
    maxQuantity: 60,
    categories: ["monitors", "accessories", "privacy", "professional"],
  },
  {
    id: "66",
    name: { en: "Gaming Steering Wheel", nl: "Gaming Stuurwiel" },
    description: {
      en: "Race like a pro with this 270-degree force feedback steering wheel. Dual-motor force feedback, responsive pedals, paddle shifters. Compatible with PC, PS4, PS5, Xbox. Desk clamp mount included, adjustable sensitivity.",
      nl: "Race als een pro met dit 270-graden force feedback stuurwiel. Dual-motor force feedback, responsieve pedalen, paddle shifters. Compatibel met PC, PS4, PS5, Xbox. Bureauklem bevestiging inbegrepen, instelbare gevoeligheid.",
    },
    images: 5,
    price: 249_99,
    maxQuantity: 40,
    categories: ["gaming", "peripherals", "simulation", "premium"],
  },
  {
    id: "67",
    name: { en: "Cable Management Kit", nl: "Kabelmanagement Kit" },
    description: {
      en: "Organize your setup with this comprehensive cable management solution. Includes cable sleeves, clips, ties, and under-desk tray. Adhesive and screw mounting options. Manage up to 50 cables. Black and white color options.",
      nl: "Organiseer je setup met deze uitgebreide kabelmanagement oplossing. Inclusief kabel mouwen, clips, binders en onder-bureau lade. Kleef- en schroefmontage opties. Beheer tot 50 kabels. Zwarte en witte kleuropties.",
    },
    images: 5,
    price: 29_99,
    maxQuantity: 180,
    categories: ["accessories", "organization", "cables", "budget"],
  },
  {
    id: "68",
    name: { en: "USB Hub 10-Port", nl: "USB Hub 10-Poort" },
    description: {
      en: "Expand your connectivity with 10 USB 3.0 ports and individual power switches. 5Gbps data transfer, 60W power adapter included. Seven data ports plus three fast-charging ports. LED indicators, compact metal housing.",
      nl: "Vergroot je connectiviteit met 10 USB 3.0 poorten en individuele power schakelaars. 5Gbps data overdracht, 60W adapter inbegrepen. Zeven data poorten plus drie snellaad poorten. LED indicatoren, compacte metalen behuizing.",
    },
    images: 5,
    price: 44_99,
    maxQuantity: 100,
    categories: ["connectivity", "accessories", "professional", "budget"],
  },
  {
    id: "69",
    name: { en: "Laptop Cooling Stand", nl: "Laptop Koelstandaard" },
    description: {
      en: "Keep your laptop cool with this adjustable aluminum stand featuring six cooling fans. Six height adjustments, two USB ports, quiet operation under 26dB. Supports laptops up to 17 inches. Foldable design for portability.",
      nl: "Houd je laptop koel met deze verstelbare aluminium standaard met zes koelventilatoren. Zes hoogteverstelbare standen, twee USB-poorten, stil gebruik onder 26dB. Ondersteunt laptops tot 17 inch. Inklapbaar ontwerp voor draagbaarheid.",
    },
    images: 5,
    price: 39_99,
    maxQuantity: 90,
    categories: ["accessories", "cooling", "ergonomic", "portable"],
  },
  {
    id: "70",
    name: { en: "Stream Deck Mini", nl: "Stream Deck Mini" },
    description: {
      en: "Control your stream with 6 customizable LCD keys. Trigger scenes, launch media, adjust audio, and more. Works with OBS, Streamlabs, Twitch, YouTube. Magnetic stand, USB-C connection, plugin marketplace.",
      nl: "Bestuur je stream met 6 aanpasbare LCD-toetsen. Activeer scènes, start media, pas audio aan en meer. Werkt met OBS, Streamlabs, Twitch, YouTube. Magnetische standaard, USB-C verbinding, plugin marktplaats.",
    },
    images: 5,
    price: 79_99,
    maxQuantity: 70,
    categories: ["streaming", "content-creation", "accessories", "popular"],
  },
  {
    id: "71",
    name: { en: "Anti-Fatigue Desk Mat", nl: "Anti-Vermoeidheid Bureau Mat" },
    description: {
      en: "Stand in comfort with this ergonomic anti-fatigue mat. 50cm x 80cm cushioned surface, beveled edges, non-slip bottom. Promotes healthy standing posture, reduces leg and back strain. Easy to clean, waterproof coating.",
      nl: "Sta comfortabel met deze ergonomische anti-vermoeidheid mat. 50cm x 80cm gekussend oppervlak, afgeschuinde randen, anti-slip bodem. Bevordert gezonde staande houding, vermindert been- en rugbelasting. Gemakkelijk schoon te maken, waterdichte coating.",
    },
    images: 5,
    price: 54_99,
    maxQuantity: 75,
    categories: ["accessories", "ergonomic", "furniture", "health"],
  },
  {
    id: "72",
    name: { en: "Wireless HDMI Kit", nl: "Draadloze HDMI Kit" },
    description: {
      en: "Stream 4K video wirelessly up to 30 meters. Zero latency transmission, plug and play, no software required. HDCP compliant, works with gaming consoles, PCs, streaming devices. Transmitter and receiver included.",
      nl: "Stream 4K video draadloos tot 30 meter. Nul latentie transmissie, plug and play, geen software vereist. HDCP compatibel, werkt met gaming consoles, PC's, streaming apparaten. Zender en ontvanger inbegrepen.",
    },
    images: 5,
    price: 149_99,
    maxQuantity: 50,
    categories: ["connectivity", "wireless", "streaming", "premium"],
  },
  {
    id: "73",
    name: { en: "RGB Desk Lamp", nl: "RGB Bureau Lamp" },
    description: {
      en: "Illuminate your workspace with smart RGB desk lamp. 16 million colors, app control, voice assistant compatible. Adjustable arm and head, eye-care LED technology, USB charging port. Memory function, timer, and music sync.",
      nl: "Verlicht je werkruimte met slimme RGB bureau lamp. 16 miljoen kleuren, app-bediening, spraakassistent compatibel. Verstelbare arm en kop, oogzorg LED technologie, USB-oplaadpoort. Geheugenfunctie, timer en muziek sync.",
    },
    images: 5,
    price: 69_99,
    maxQuantity: 80,
    categories: ["lighting", "accessories", "smart-home", "ergonomic"],
  },
  {
    id: "74",
    name: { en: "Mechanical Switch Tester", nl: "Mechanische Switch Tester" },
    description: {
      en: "Try before you buy with this 9-switch tester kit. Includes popular Cherry MX, Gateron, and Kailh switches. Clear acrylic base shows internal mechanism, keycap puller included. Perfect for finding your ideal switch type.",
      nl: "Probeer voordat je koopt met deze 9-switch tester kit. Inclusief populaire Cherry MX, Gateron en Kailh switches. Doorzichtige acryl basis toont intern mechanisme, keycap puller inbegrepen. Perfect voor het vinden van je ideale switch type.",
    },
    images: 5,
    price: 19_99,
    maxQuantity: 150,
    categories: ["peripherals", "accessories", "tools", "budget"],
  },
  {
    id: "75",
    name: { en: "VR Headset Stand", nl: "VR Headset Standaard" },
    description: {
      en: "Display and store your VR headset with this premium stand. Weighted base, soft silicone contact points, controller holders. Cable management clips, fits all major VR headsets. RGB lighting option with color cycling.",
      nl: "Toon en bewaar je VR headset met deze premium standaard. Gewogen basis, zachte siliconen contactpunten, controller houders. Kabel management clips, past alle grote VR headsets. RGB-verlichting optie met kleur cycling.",
    },
    images: 5,
    price: 39_99,
    maxQuantity: 60,
    categories: ["vr", "accessories", "organization", "gaming"],
  },
  {
    id: "76",
    name: { en: "Soundbar for Gaming", nl: "Soundbar voor Gaming" },
    description: {
      en: "Upgrade your audio with this RGB gaming soundbar. Virtual 7.1 surround sound, Bluetooth 5.0, aux and USB input. Four EQ modes optimized for gaming, movies, music. Built-in subwoofer, touch controls, remote included.",
      nl: "Upgrade je audio met deze RGB gaming soundbar. Virtuele 7.1 surround sound, Bluetooth 5.0, aux en USB ingang. Vier EQ modi geoptimaliseerd voor gaming, films, muziek. Ingebouwde subwoofer, touch bediening, afstandsbediening inbegrepen.",
    },
    images: 5,
    price: 89_99,
    maxQuantity: 70,
    categories: ["audio", "gaming", "home-entertainment", "accessories"],
  },
  {
    id: "77",
    name: { en: "Ethernet Cable Cat8", nl: "Ethernet Kabel Cat8" },
    description: {
      en: "Get maximum network performance with Cat8 ethernet cable. 40Gbps speed, 2000MHz bandwidth, 5-meter length. Gold-plated RJ45 connectors, braided shielding, weatherproof. Perfect for gaming and streaming. Available in multiple lengths.",
      nl: "Krijg maximale netwerk prestaties met Cat8 ethernet kabel. 40Gbps snelheid, 2000MHz bandbreedte, 5-meter lengte. Vergulde RJ45 connectoren, gevlochten afscherming, weerbestendig. Perfect voor gaming en streaming. Verkrijgbaar in meerdere lengtes.",
    },
    images: 5,
    price: 24_99,
    maxQuantity: 200,
    categories: ["networking", "cables", "connectivity", "budget"],
  },
  {
    id: "78",
    name: { en: "Gaming Desk RGB", nl: "Gaming Bureau RGB" },
    description: {
      en: "Level up your setup with this 140cm gaming desk. Carbon fiber texture surface, RGB LED strips, cable management system. Cup holder, headphone hook, controller stand. Steel frame supports up to 100kg, height adjustable feet.",
      nl: "Level up je setup met dit 140cm gaming bureau. Carbon fiber textuur oppervlak, RGB LED strips, kabel management systeem. Bekerhouder, koptelefoon haak, controller standaard. Stalen frame ondersteunt tot 100kg, in hoogte verstelbare poten.",
    },
    images: 5,
    price: 299_99,
    maxQuantity: 30,
    categories: ["furniture", "gaming", "lighting", "premium"],
  },
  {
    id: "79",
    name: { en: "Noise Canceling Earplugs", nl: "Noise Canceling Oordopjes" },
    description: {
      en: "Focus on your game with reusable noise-canceling earplugs. -32dB noise reduction, comfortable silicone tips, includes carrying case. Perfect for LAN parties and tournaments. Available in three sizes.",
      nl: "Focus op je game met herbruikbare noise-canceling oordopjes. -32dB geluidsreductie, comfortabele siliconen tips, inclusief draagcase. Perfect voor LAN-feesten en toernooien. Verkrijgbaar in drie maten.",
    },
    images: 5,
    price: 14_99,
    maxQuantity: 250,
    categories: ["accessories", "health", "gaming", "budget"],
  },
  {
    id: "80",
    name: { en: "Smart Power Strip", nl: "Slimme Stekkerdoos" },
    description: {
      en: "Control your devices remotely with this smart power strip. 6 AC outlets, 4 USB ports, individual app control. Energy monitoring, voice assistant compatible, surge protection. Schedule on/off times, away mode for security.",
      nl: "Bestuur je apparaten op afstand met deze slimme stekkerdoos. 6 AC stopcontacten, 4 USB-poorten, individuele app-bediening. Energie monitoring, spraakassistent compatibel, overspanningsbeveiliging. Plan aan/uit tijden, away modus voor beveiliging.",
    },
    images: 5,
    price: 59_99,
    maxQuantity: 90,
    categories: ["smart-home", "power", "connectivity", "accessories"],
  },
  {
    id: "81",
    name: { en: "Dual Monitor Mount", nl: "Dual Monitor Beugel" },
    description: {
      en: "Free up desk space with this dual monitor arm mount. Supports two 13-32 inch monitors up to 8kg each. Full articulation, cable management, VESA compatible. Gas spring arms for effortless adjustment, includes mounting hardware.",
      nl: "Maak bureau ruimte vrij met deze dual monitor arm beugel. Ondersteunt twee 13-32 inch monitoren tot 8kg elk. Volledige articulatie, kabel management, VESA compatibel. Gas veer armen voor moeiteloze aanpassing, inclusief montage hardware.",
    },
    images: 5,
    price: 89_99,
    maxQuantity: 50,
    categories: ["monitors", "accessories", "furniture", "ergonomic"],
  },
  {
    id: "82",
    name: { en: "Capture Card 4K", nl: "Capture Card 4K" },
    description: {
      en: "Record and stream gameplay in 4K60 with zero latency passthrough. USB 3.0 connection, HDMI 2.0 input/output, works with all major streaming software. Plug and play, no drivers needed. Compatible with PS5, Xbox Series X, Switch, PC.",
      nl: "Neem gameplay op en stream in 4K60 met nul latentie passthrough. USB 3.0 verbinding, HDMI 2.0 input/output, werkt met alle grote streaming software. Plug and play, geen drivers nodig. Compatibel met PS5, Xbox Series X, Switch, PC.",
    },
    images: 5,
    price: 169_99,
    maxQuantity: 60,
    categories: ["streaming", "content-creation", "connectivity", "premium"],
  },
  {
    id: "83",
    name: { en: "Gaming Gloves", nl: "Gaming Handschoenen" },
    description: {
      en: "Enhance grip and reduce hand sweat with fingerless gaming gloves. Breathable elastic fabric, non-slip palm coating, touch-screen compatible fingertips. Available in S/M/L sizes. Machine washable.",
      nl: "Verbeter grip en verminder hand zweet met vingerloze gaming handschoenen. Ademende elastische stof, anti-slip handpalm coating, touchscreen compatibele vingertoppen. Verkrijgbaar in S/M/L maten. Machinewasbaar.",
    },
    images: 5,
    price: 16_99,
    maxQuantity: 200,
    categories: ["accessories", "gaming", "budget", "health"],
  },
  {
    id: "84",
    name: { en: "USB Foot Pedal", nl: "USB Voetpedaal" },
    description: {
      en: "Add hands-free controls with programmable USB foot pedal. Three pedal switches, customizable key mapping, works with any software. Perfect for push-to-talk, media control, or gaming. Non-slip base, 2-meter cable.",
      nl: "Voeg handsfree bediening toe met programmeerbaar USB voetpedaal. Drie pedaal switches, aanpasbare toets mapping, werkt met elke software. Perfect voor push-to-talk, media bediening of gaming. Anti-slip basis, 2-meter kabel.",
    },
    images: 5,
    price: 44_99,
    maxQuantity: 70,
    categories: ["peripherals", "accessories", "streaming", "content-creation"],
  },
  {
    id: "85",
    name: { en: "Monitor Light Bar", nl: "Monitor Lichtbalk" },
    description: {
      en: "Reduce eye strain with this asymmetric monitor light bar. No screen glare, adjustable brightness and color temperature. Auto-dimming sensor, USB powered, tool-free mounting. Fits monitors 15-27 inches.",
      nl: "Verminder oogvermoeidheid met deze asymmetrische monitor lichtbalk. Geen scherm schittering, instelbare helderheid en kleurtemperatuur. Auto-dimming sensor, USB gevoed, gereedschapsloze montage. Past monitoren 15-27 inch.",
    },
    images: 5,
    price: 54_99,
    maxQuantity: 80,
    categories: ["lighting", "accessories", "ergonomic", "health"],
  },
  {
    id: "86",
    name: { en: "Retro Handheld Console", nl: "Retro Handheld Console" },
    description: {
      en: "Play 10,000+ retro games on this handheld console. 3.5-inch IPS screen, 8-hour battery, save states, HDMI output. Supports NES, SNES, Genesis, Game Boy, and more. Includes 64GB SD card with games.",
      nl: "Speel 10.000+ retro games op deze handheld console. 3.5-inch IPS scherm, 8-uur batterij, save states, HDMI uitgang. Ondersteunt NES, SNES, Genesis, Game Boy en meer. Inclusief 64GB SD-kaart met games.",
    },
    images: 5,
    price: 79_99,
    maxQuantity: 100,
    categories: ["gaming", "portable", "home-entertainment", "budget"],
  },
  {
    id: "87",
    name: { en: "Wrist Rest Set", nl: "Polssteun Set" },
    description: {
      en: "Ergonomic memory foam wrist rests for keyboard and mouse. Cooling gel layer, non-slip rubber base, easy to clean leather surface. Reduces carpal tunnel risk and wrist fatigue. Black color, standard size fits most setups.",
      nl: "Ergonomische memory foam polssteunen voor toetsenbord en muis. Koelende gel laag, anti-slip rubber basis, gemakkelijk schoon te maken leren oppervlak. Vermindert carpale tunnel risico en polsvermoeidheid. Zwarte kleur, standaard maat past meeste setups.",
    },
    images: 5,
    price: 24_99,
    maxQuantity: 150,
    categories: ["accessories", "ergonomic", "health", "budget"],
  },
  {
    id: "88",
    name: { en: "WiFi 6E Gaming Router", nl: "WiFi 6E Gaming Router" },
    description: {
      en: "Dominate online gaming with this WiFi 6E router. Tri-band speeds up to 10.8Gbps, gaming prioritization, ultra-low latency. Eight high-gain antennas, 2.5G WAN port, RGB lighting. Covers up to 300 square meters.",
      nl: "Domineer online gaming met deze WiFi 6E router. Tri-band snelheden tot 10.8Gbps, gaming prioritering, ultra-lage latentie. Acht high-gain antennes, 2.5G WAN poort, RGB-verlichting. Dekt tot 300 vierkante meter.",
    },
    images: 5,
    price: 349_99,
    maxQuantity: 40,
    categories: ["networking", "gaming", "premium", "performance", "popular"],
  },
  {
    id: "89",
    name: { en: "Desk Shelf Monitor Riser", nl: "Bureau Plank Monitor Verhoger" },
    description: {
      en: "Organize and elevate with this bamboo monitor stand. 60cm x 25cm platform holds up to 20kg, raises monitor 8cm. Storage shelf underneath for keyboard or supplies. Natural bamboo finish, easy assembly.",
      nl: "Organiseer en verhoog met deze bamboe monitor standaard. 60cm x 25cm platform houdt tot 20kg, verhoogt monitor 8cm. Opbergplank onder voor toetsenbord of benodigdheden. Natuurlijke bamboe afwerking, eenvoudige montage.",
    },
    images: 5,
    price: 34_99,
    maxQuantity: 100,
    categories: ["furniture", "accessories", "organization", "ergonomic", "budget"],
  },
  {
    id: "90",
    name: { en: "Blue Light Blocking Glasses", nl: "Blauw Licht Blokkerende Bril" },
    description: {
      en: "Protect your eyes during long gaming sessions. Blocks 90% of harmful blue light, reduces eye strain and headaches. Anti-glare coating, lightweight TR90 frame, comes with case. Multiple frame styles available.",
      nl: "Bescherm je ogen tijdens lange gaming sessies. Blokkeert 90% van schadelijk blauw licht, vermindert oogvermoeidheid en hoofdpijn. Anti-schittering coating, lichtgewicht TR90 frame, komt met case. Meerdere frame stijlen beschikbaar.",
    },
    images: 5,
    price: 29_99,
    maxQuantity: 180,
    categories: ["health", "accessories", "ergonomic", "budget"],
  },
  {
    id: "91",
    name: { en: "Thunderbolt 4 Dock", nl: "Thunderbolt 4 Dock" },
    description: {
      en: "Ultimate connectivity hub with Thunderbolt 4. Four Thunderbolt ports, three USB-A, SD card reader, Ethernet, audio. 96W laptop charging, dual 4K display support. Aluminum construction, includes 1m Thunderbolt cable.",
      nl: "Ultieme connectiviteit hub met Thunderbolt 4. Vier Thunderbolt poorten, drie USB-A, SD-kaartlezer, Ethernet, audio. 96W laptop opladen, dual 4K display ondersteuning. Aluminium constructie, inclusief 1m Thunderbolt kabel.",
    },
    images: 5,
    price: 279_99,
    maxQuantity: 35,
    categories: ["connectivity", "professional", "premium", "accessories"],
  },
  {
    id: "92",
    name: { en: "Racing Pedals Pro", nl: "Racing Pedalen Pro" },
    description: {
      en: "Professional-grade racing pedals with load cell brake. Gas, brake, and clutch with adjustable tension. All-metal construction, non-slip surface, compatible with all major wheels. Includes mounting plate.",
      nl: "Professionele racing pedalen met load cell rem. Gas, rem en koppeling met verstelbare spanning. Geheel metalen constructie, anti-slip oppervlak, compatibel met alle grote wielen. Inclusief montageplaat.",
    },
    images: 5,
    price: 199_99,
    maxQuantity: 30,
    categories: ["gaming", "simulation", "peripherals", "premium"],
  },
  {
    id: "93",
    name: { en: "Screen Cleaning Kit", nl: "Scherm Schoonmaak Kit" },
    description: {
      en: "Keep displays spotless with alcohol-free cleaning solution and premium microfiber cloths. Safe for all screens - monitors, TVs, phones, tablets. Streak-free formula, anti-static properties. 100ml spray bottle.",
      nl: "Houd displays vlekkeloos met alcoholvrije reinigingsoplossing en premium microfiber doeken. Veilig voor alle schermen - monitoren, TV's, telefoons, tablets. Streepvrije formule, anti-statische eigenschappen. 100ml sprayflacon.",
    },
    images: 5,
    price: 14_99,
    maxQuantity: 250,
    categories: ["cleaning", "maintenance", "accessories", "budget"],
  },
  {
    id: "94",
    name: { en: "Gaming Chair Cushion Set", nl: "Gaming Stoel Kussen Set" },
    description: {
      en: "Upgrade comfort with memory foam lumbar and neck pillow set. Breathable mesh cover, adjustable straps fit any chair. Promotes healthy posture, reduces back pain. Machine washable covers.",
      nl: "Upgrade comfort met memory foam lumbaal en nek kussen set. Ademende mesh hoes, verstelbare riemen passen elke stoel. Bevordert gezonde houding, vermindert rugpijn. Machinewasbare hoezen.",
    },
    images: 5,
    price: 39_99,
    maxQuantity: 120,
    categories: ["furniture", "ergonomic", "health", "accessories"],
  },
  {
    id: "95",
    name: { en: "Mini LED Projector", nl: "Mini LED Projector" },
    description: {
      en: "Portable gaming projector with 1080p native resolution. 200 ANSI lumens, 120-inch max projection, built-in speakers. HDMI, USB, WiFi connectivity. Perfect for gaming on the big screen anywhere. Includes remote and carrying case.",
      nl: "Draagbare gaming projector met 1080p native resolutie. 200 ANSI lumen, 120-inch max projectie, ingebouwde speakers. HDMI, USB, WiFi connectiviteit. Perfect voor gaming op het grote scherm overal. Inclusief afstandsbediening en draagtas.",
    },
    images: 5,
    price: 199_99,
    maxQuantity: 45,
    categories: ["home-entertainment", "portable", "gaming", "premium"],
  },
  {
    id: "96",
    name: { en: "Keycap Puller Set", nl: "Keycap Puller Set" },
    description: {
      en: "Essential tool set for mechanical keyboard maintenance. Wire and ring-style pullers, switch puller, cleaning brush. Won't scratch keycaps or switches. Compact storage case included.",
      nl: "Essentiële toolset voor mechanisch toetsenbord onderhoud. Draad en ring-stijl pullers, switch puller, reinigingsborstel. Krast keycaps of switches niet. Compacte opbergcase inbegrepen.",
    },
    images: 5,
    price: 12_99,
    maxQuantity: 200,
    categories: ["tools", "maintenance", "peripherals", "budget"],
  },
  {
    id: "97",
    name: { en: "Smart LED Strip 5M", nl: "Slimme LED Strip 5M" },
    description: {
      en: "Transform your space with 5 meters of smart RGB LED strip. 16 million colors, music sync, app control, voice assistant compatible. Adhesive backing, cuttable every 5cm. Includes controller and power adapter.",
      nl: "Transformeer je ruimte met 5 meter slimme RGB LED strip. 16 miljoen kleuren, muziek sync, app-bediening, spraakassistent compatibel. Kleefachterkant, knipbaar elke 5cm. Inclusief controller en adapter.",
    },
    images: 5,
    price: 34_99,
    maxQuantity: 150,
    categories: ["lighting", "smart-home", "accessories", "budget", "popular"],
  },
  {
    id: "98",
    name: { en: "Laptop Backpack Gaming", nl: "Laptop Rugzak Gaming" },
    description: {
      en: "Carry your gear safely in this 17-inch gaming laptop backpack. Padded laptop compartment, multiple pockets, USB charging port. Water-resistant material, ergonomic shoulder straps, luggage strap. Reflective strips for safety.",
      nl: "Draag je gear veilig in deze 17-inch gaming laptop rugzak. Gevoerde laptop compartiment, meerdere zakken, USB oplaadpoort. Waterbestendig materiaal, ergonomische schouderbanden, bagageband. Reflecterende strips voor veiligheid.",
    },
    images: 5,
    price: 49_99,
    maxQuantity: 100,
    categories: ["accessories", "portable", "organization", "gaming"],
  },
  {
    id: "99",
    name: { en: "Graphics Card Holder", nl: "Grafische Kaart Houder" },
    description: {
      en: "Prevent GPU sag with this magnetic graphics card support. Strong magnetic base attaches to case, adjustable height up to 12cm. Supports cards up to 3kg. Minimalist black design, no RGB. Easy installation.",
      nl: "Voorkom GPU doorzakking met deze magnetische grafische kaart steun. Sterke magnetische basis hecht aan behuizing, verstelbare hoogte tot 12cm. Ondersteunt kaarten tot 3kg. Minimalistische zwarte ontwerp, geen RGB. Eenvoudige installatie.",
    },
    images: 5,
    price: 16_99,
    maxQuantity: 180,
    categories: ["components", "accessories", "budget", "tools"],
  },
];
