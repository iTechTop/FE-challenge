export interface GameItem {
  id: number;
  image: string;
  name: string;
  currentPrice: string;
  oldPrice: string;
  description: string;
  gameType: "fantasy" | "medieval" | "cosmic";
  onSale: boolean;
  inStock: boolean;
}

export interface PaymentMethod {
  src: string;
  alt: string;
  className: string;
}

export interface SocialPlatform {
  className: string;
  label: string;
}

// Header Navigation Data
export const navigationMenuItems = [
  "CURRENCY",
  "ITEMS",
  "ACCOUNTS",
  "SERVICES",
  "SWAP",
  "SELL",
];

export const getDropdownOptions = (item: string): string[] => {
  switch (item) {
    case "CURRENCY":
      return ["USD", "EUR", "GBP", "CAD", "AUD"];
    case "ITEMS":
      return [
        "Weapons",
        "Armor",
        "Accessories",
        "Consumables",
        "Materials",
        "Mounts",
      ];
    case "ACCOUNTS":
      return [
        "Premium Accounts",
        "Starter Accounts",
        "High Level",
        "Rare Items",
      ];
    case "SERVICES":
      return ["Power Leveling", "Coaching", "Boosting", "Account Recovery"];
    case "SWAP":
      return [
        "Gold Swap",
        "Item Exchange",
        "Cross-Server",
        "Currency Exchange",
      ];
    case "SELL":
      return ["Sell Items", "Sell Accounts", "Bulk Sales", "Quick Sale"];
    default:
      return [];
  }
};

// ContentArea Filter Data
export const gameSelectionOptions = [
  "Select a game",
  "World of Warcraft",
  "Final Fantasy XIV",
  "Guild Wars 2",
  "Elder Scrolls Online",
  "Lost Ark",
  "New World",
  "Path of Exile",
  "Diablo IV",
  "Destiny 2",
];

export const priceRangeOptions = [
  "All",
  "$1 - $10",
  "$10 - $50",
  "$50 - $100",
  "$100 - $500",
  "$500+",
];

export const itemCategoryOptions = [
  "All",
  "Weapons",
  "Armor",
  "Accessories",
  "Consumables",
  "Materials",
  "Mounts",
  "Pets",
];

export const sortingMethodOptions = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Newest",
  "Oldest",
];

// Game Items Database
export const gameItemsCollection: GameItem[] = Array.from(
  { length: 60 },
  (_, index) => {
    const images = ["/armor-1.png", "/knight-1.png", "/shield-1.png"];
    const names = ["Legendary Armor", "Knight's Blade", "Royal Shield"];
    const randomIndex = Math.floor(Math.random() * 3);

    return {
      id: index,
      image: images[randomIndex],
      name: names[randomIndex],
      currentPrice: "$450.00",
      oldPrice: "$522.50",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      gameType:
        index % 3 === 0 ? "fantasy" : index % 3 === 1 ? "medieval" : "cosmic",
      onSale: index < 5 ? true : index % 4 !== 0,
      inStock: true,
    };
  }
);

// Footer Payment Methods Data
export const traditionalPaymentMethods: PaymentMethod[] = [
  {
    src: "/payment-methods/visa.png",
    alt: "Visa",
    className: "visa-payment",
  },
  {
    src: "/payment-methods/mastercard.png",
    alt: "Mastercard",
    className: "mastercard-payment",
  },
  {
    src: "/payment-methods/american-express.png",
    alt: "American Express",
    className: "amex-payment",
  },
  {
    src: "/payment-methods/skrill.png",
    alt: "Skrill",
    className: "skrill-payment",
  },
];

export const cryptocurrencyPaymentMethods: PaymentMethod[] = [
  {
    src: "/crypto-currencies/bitcoin-cash.png",
    alt: "Bitcoin Green",
    className: "crypto-btc-green",
  },
  {
    src: "/crypto-currencies/ethereum.png",
    alt: "Ethereum",
    className: "crypto-eth",
  },
  {
    src: "/crypto-currencies/bitcoin.png",
    alt: "Bitcoin Yellow",
    className: "crypto-btc-yellow",
  },
  {
    src: "/crypto-currencies/litecoin.png",
    alt: "Litecoin",
    className: "crypto-ltc",
  },
];

export const socialMediaPlatforms: SocialPlatform[] = [
  { className: "facebook-link", label: "Facebook" },
  { className: "instagram-link", label: "Instagram" },
  { className: "twitter-link", label: "Twitter" },
  { className: "discord-link", label: "Discord" },
];
