import {
  CartIcon,
  CaretUpIcon,
  CaretDownIcon,
  BoltSawIcon,
  BurningMeteorIcon,
  WriteDotasIcon,
} from "./icons/Icons";

interface ItemCardProps {
  image: string;
  name: string;
  currentPrice: string;
  oldPrice: string;
  description: string;
  gameType: "fantasy" | "medieval" | "cosmic";
  onSale: boolean;
  inStock: boolean;
}

export default function ItemCard({
  image,
  name,
  currentPrice,
  oldPrice,
  description,
  gameType,
  onSale,
  inStock,
}: ItemCardProps) {
  const renderGameIcon = () => {
    const iconClassName = "game-icon-svg";
    switch (gameType) {
      case "fantasy":
        return <BoltSawIcon className={iconClassName} />;
      case "medieval":
        return <BurningMeteorIcon className={iconClassName} />;
      case "cosmic":
        return <WriteDotasIcon className={iconClassName} />;
      default:
        return null;
    }
  };

  return (
    <div className="product-card">
      <div className="product-header">
        <div className="badges">
          {onSale ? (
            <span className="badge on-sale">
              <span className="dot"></span>ON SALE
            </span>
          ) : (
            <span className="badge on-sale-placeholder"></span>
          )}
          {inStock && <span className="badge in-stock">In stock</span>}
        </div>
        <div className="quantity-control">
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="quantity-input"
          />
          <div className="quantity-arrows">
            <button className="arrow-btn" aria-label="Increase quantity">
              <CaretUpIcon />
            </button>
            <button className="arrow-btn" aria-label="Decrease quantity">
              <CaretDownIcon />
            </button>
          </div>
        </div>
      </div>
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">
          {currentPrice} <span className="old-price">{oldPrice}</span>
        </p>
        <p className="product-description">{description}</p>
      </div>
      <div className="product-actions">
        <button className="details-btn">DETAILS</button>
        <button className="add-to-cart-btn">
          ADD <CartIcon />
        </button>
      </div>
      <div className="game-icon-wrapper">{renderGameIcon()}</div>
    </div>
  );
}
