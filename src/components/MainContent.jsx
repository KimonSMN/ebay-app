import React, { useEffect, useState } from "react";
import AuctionSectionTitle from "./AuctionSectionTitle";
import AuctionCard from "./AuctionCard";
import CategoryPanel from "./CategoryPanel";

const MainContent = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loadingItems, setLoadingItems] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const [itemsError, setItemsError] = useState(null);
  const [categoriesError, setCategoriesError] = useState(null);

  useEffect(() => {
    const ac = new AbortController();

    async function getItems() {
      try {
        setLoadingItems(true);
        setItemsError(null);
        const res = await fetch("http://localhost:3000/api/items", {
          signal: ac.signal,
        });
        if (!res.ok) throw new Error(`Items HTTP ${res.status}`);
        const data = await res.json();
        setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setItems([]);
          setItemsError("Failed to load items");
        }
      } finally {
        setLoadingItems(false);
      }
    }

    async function getCategories() {
      try {
        setLoadingCategories(true);
        setCategoriesError(null);
        const res = await fetch("http://localhost:3000/api/categories", {
          signal: ac.signal,
        });
        if (!res.ok) throw new Error(`Categories HTTP ${res.status}`);
        const data = await res.json();
        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setCategories([]);
          setCategoriesError("Failed to load categories");
        }
      } finally {
        setLoadingCategories(false);
      }
    }

    getItems();
    getCategories();

    return () => ac.abort();
  }, []);

  return (
    <div>
      <AuctionSectionTitle>New Auctions</AuctionSectionTitle>

      <div className="flex gap-4 flex-wrap">
        {loadingItems ? (
          <div>Loading…</div>
        ) : itemsError ? (
          <div className="text-red-600">{itemsError}</div>
        ) : items.length ? (
          items.map((item) => (
            <AuctionCard
              key={item.ItemID}
              title={item.Name}
              price={item.Currently}
              endTime={90}
              imageUrl="https://i-up.gr/wp-content/uploads/2023/12/iPhone12-ProMax-Gold-back.jpg"
            />
          ))
        ) : (
          <div>No auctions yet.</div>
        )}
      </div>

      <AuctionSectionTitle>Browse Categories</AuctionSectionTitle>

      <div className="flex flex-wrap gap-6">
        {loadingCategories ? (
          <div>Loading…</div>
        ) : categoriesError ? (
          <div className="text-red-600">{categoriesError}</div>
        ) : categories.length ? (
          categories.map((category) => (
            <CategoryPanel
              key={category.CategoryID}
              title={category.CategoryName}
              imageUrl="https://assets.kotsovolos.gr/product/306938-b.jpg"
            />
          ))
        ) : (
          <div>No categories.</div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
