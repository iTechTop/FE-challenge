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
