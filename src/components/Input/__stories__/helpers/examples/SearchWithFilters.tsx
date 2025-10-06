import { useState } from "react";
import Input from "../../../Input";
import styles from "../../styles/formStyles.module.css";

export const SearchWithFilters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.searchTitle}>Product Search</h3>
      <Input
        label="Search Products"
        placeholder="Search by name or description..."
        value={searchTerm}
        onChange={(value) => setSearchTerm(value)}
        type="text"
        clearable={true}
      />
      <div className={styles.filtersRow}>
        <Input
          label="Min Price"
          placeholder="0.00"
          value={minPrice}
          onChange={(value) => setMinPrice(value)}
          type="number"
          clearable={true}
          step={0.01}
          min={0}
        />
        <Input
          label="Max Price"
          placeholder="999.99"
          value={maxPrice}
          onChange={(value) => setMaxPrice(value)}
          type="number"
          clearable={true}
          step={0.01}
          min={0}
        />
      </div>
    </div>
  );
};
