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
