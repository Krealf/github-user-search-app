import styles from "./Search.module.scss";
import SearchIcon from "@/assets/icon-search.svg?react";
import { useRef } from "react";
import * as React from "react";
import { Button } from "@/components/Button";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();

    const text = searchRef.current ? searchRef.current.value : "";

    if (text) {
      onSubmit(text);
      if (searchRef.current) searchRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          id="search"
          name="username"
          type="text"
          className={styles.textField}
          placeholder="Search GitHub username..."
          ref={searchRef}
        />
        {hasError && <div className={styles.error}>No results</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
