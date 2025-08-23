"use client";

import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import {
  gameSelectionOptions,
  priceRangeOptions,
  itemCategoryOptions,
  sortingMethodOptions,
  gameItemsCollection,
} from "../data/mockData";
import {
  SearchIcon,
  ChevronDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  SwordIcon,
  CoinIcon,
  FeatherIcon,
  FilterIcon,
} from "./icons/Icons";

export default function ContentArea() {
  const [selectedGame, setSelectedGame] = useState("Select a game");
  const [filterQuery, setFilterQuery] = useState("");
  const [priceRange, setPriceRange] = useState("All");
  const [categoryType, setCategoryType] = useState("All");
  const [sortingOption, setSortingOption] = useState("Featured");
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const [activePage, setActivePage] = useState(1);

  const handleWindowResize = () => {
    if (window.innerWidth <= 480) {
      setItemsPerPage(10);
    } else {
      setItemsPerPage(15);
    }
    setActivePage(1);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const processedGameItems = gameItemsCollection;

  const totalItemCount = processedGameItems.length;
  const totalPageCount = Math.ceil(totalItemCount / itemsPerPage);
  const startItemIndex = (activePage - 1) * itemsPerPage;
  const endItemIndex = startItemIndex + itemsPerPage;
  const displayedItems = processedGameItems.slice(startItemIndex, endItemIndex);

  const generatePaginationNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPageCount <= maxVisiblePages) {
      for (let i = 1; i <= totalPageCount; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (activePage > 3) {
        pageNumbers.push("...");
      }
      let startRange = Math.max(2, activePage - 1);
      let endRange = Math.min(totalPageCount - 1, activePage + 1);

      if (activePage <= 3) {
        endRange = Math.min(totalPageCount - 1, maxVisiblePages - 1);
      } else if (activePage >= totalPageCount - 2) {
        startRange = Math.max(2, totalPageCount - (maxVisiblePages - 2));
      }

      for (let i = startRange; i <= endRange; i++) {
        pageNumbers.push(i);
      }

      if (activePage < totalPageCount - 2) {
        pageNumbers.push("...");
      }
      if (totalPageCount > 1) {
        pageNumbers.push(totalPageCount);
      }
    }
    return pageNumbers;
  };

  return (
    <main className="content-wrapper">
      <img
        src="/gaming-background.png"
        alt="Gaming background"
        className="bg-image"
      />
      <div className="video-backdrop"></div>

      <div className="content-container">
        <h1 className="page-title">Condimentum consectetur</h1>

        <div className="filter-controls">
          <div className="filter-control dropdown-control">
            <SwordIcon />
            <span className="dropdown-label">{selectedGame}</span>
            <ChevronDownIcon />
            <select
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="dropdown-overlay"
              aria-label="Select a game"
            >
              {gameSelectionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <div className="filter-control search-control">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                aria-label="Search items"
              />
            </div>

            <div className="control-divider"></div>

            <div className="filter-control dropdown-control with-label no-right-radius price-control">
              <CoinIcon />
              <div className="dropdown-info">
                <span className="info-label">Price</span>
                <span className="info-value">{priceRange}</span>
              </div>
              <ChevronDownIcon />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="dropdown-overlay"
                aria-label="Select price range"
              >
                {priceRangeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="control-divider"></div>

            <div className="filter-control dropdown-control with-label no-left-radius category-control">
              <FeatherIcon />
              <div className="dropdown-info">
                <span className="info-label">Item Type</span>
                <span className="info-value">{categoryType}</span>
              </div>
              <ChevronDownIcon />
              <select
                value={categoryType}
                onChange={(e) => setCategoryType(e.target.value)}
                className="dropdown-overlay"
                aria-label="Select item type"
              >
                {itemCategoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="items-display-area">
          <div className="results-header">
            <span className="results-info">
              Showing {Math.min(endItemIndex, totalItemCount)} - from{" "}
              {totalItemCount}
            </span>
            <div className="filter-control dropdown-control with-label sort-control">
              <FilterIcon />
              <div className="dropdown-info">
                <span className="info-label">Sort By</span>
                <span className="info-value">{sortingOption}</span>
              </div>
              <ChevronDownIcon />
              <select
                value={sortingOption}
                onChange={(e) => setSortingOption(e.target.value)}
                className="dropdown-overlay"
                aria-label="Sort by"
              >
                {sortingMethodOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="items-grid">
            {displayedItems.map((item) => (
              <ItemCard key={item.id} {...item} />
            ))}
          </div>

          <div className="page-navigation">
            <button
              className="nav-arrow prev-arrow"
              aria-label="Previous page"
              onClick={() => setActivePage((prev) => Math.max(1, prev - 1))}
              disabled={activePage === 1}
            >
              <ArrowLeftIcon />
            </button>
            <div className="page-numbers">
              {generatePaginationNumbers().map((page, index) =>
                page === "..." ? (
                  <span key={index} className="page-ellipsis">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    className={`page-btn ${
                      activePage === page ? "current" : ""
                    }`}
                    onClick={() => setActivePage(page as number)}
                  >
                    {page}
                  </button>
                )
              )}
            </div>
            <button
              className="nav-arrow next-arrow"
              aria-label="Next page"
              onClick={() =>
                setActivePage((prev) => Math.min(totalPageCount, prev + 1))
              }
              disabled={activePage === totalPageCount}
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
