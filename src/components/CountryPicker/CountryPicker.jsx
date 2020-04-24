import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchStates } from "../../api";

const CountryPicker = ({ handleStatesChange }) => {
  const [fetchSates, setFetchStates] = useState([]);

  useEffect(() => {
    const fetchStatesData = async () => {
      setFetchStates(await fetchStates());
    };
    fetchStatesData();
  }, [setFetchStates]);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect
        defaultValue=" "
        onChange={e => handleStatesChange(e.target.value)}
      >
        <option value="">All</option>
        {fetchSates.map((states, i) => (
          <option key={i} value={states}>
            {states}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
