import css from "./Filter.module.css"

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div className={css.filter}>
      <p className={css.title}>Find contacts by name</p>
      <input className={css.input}
        name="filter"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
