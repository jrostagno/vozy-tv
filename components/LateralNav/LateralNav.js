import React, { useState } from "react";
import { showGenra } from "../../lib/const";
import styles from "./LateralNav.module.css";

const LateralNav = ({ allTvShow, setFilteredShows }) => {
  const [genra, setGenra] = useState("");

  const handleChangeGenra = (e) => {
    setGenra(e.target.value);
  };

  const applyFilters = () => {
    let filterByGenra = allTvShow;
    filterByGenra = allTvShow.filter((tvshow) => tvshow.genres.includes(genra));
    setFilteredShows(filterByGenra);
  };

  const resetFilters = () => {
    setFilteredShows(allTvShow);

    setGenra("");
  };

  return (
    <div className={styles.section}>
      <div className={styles.filters}>
        <h5 className="text-muted">Filter by...</h5>

        <div className={styles.selectsContent}>
          <label>Genre</label>
          <select
            className="form-select"
            onChange={handleChangeGenra}
            aria-label="Default select example"
          >
            <option selected>Genra</option>
            {showGenra.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>

        <button type="button" onClick={applyFilters} class="btn btn-primary">
          Filter
        </button>
        <button type="button" onClick={resetFilters} class="btn btn-secondary">
          Reset
        </button>
      </div>
    </div>
  );
};

export default LateralNav;
