import styles from "./Search.module.scss";
import SearchIcon from "@/assets/icon-search.svg?react";
import * as React from "react";
import { Button } from "@/components/Button";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handleSubmit = (
    event: React.SubmitEvent<HTMLFormElement & FormFields>,
  ) => {
    event.preventDefault();
    const text = event.currentTarget.username.value;

    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
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
        />
        {hasError && <div className={styles.error}>No results</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
