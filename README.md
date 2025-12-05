## Installatie

1. **Clone de repository**

```bash
git clone https://github.com/robodin08/webshop.git
cd webshop
```

2. **Installeer dependencies**

```bash
npm install
```

3. **Start de development server**

```bash
npm run dev
```

De applicatie draait nu op `http://localhost:5173`

## Beschikbare Scripts

- `npm run dev` - Start de development server
- `npm run build` - Bouw de productie versie
- `npm run preview` - Preview de productie build lokaal
- `npm run serve` - Serve de productie build
- `npm run lint` - Run ESLint
- `npm run format` - Format code met Prettier
- `npm run format:check` - Check code formatting

## Productie Deployment

### Vercel Deployment

Deze applicatie is geconfigureerd voor deployment op Vercel:

1. Push je code naar GitHub
2. Vercel detecteert automatisch de Vite configuratie en maakt een nieuwe build

### Handmatige Build

```bash
npm run build
npm run serve
```

De gebouwde bestanden staan in de `dist/` folder.
