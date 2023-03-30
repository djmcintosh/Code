function SearchBar({ search }) {
  return (
    <input>
      type="search" id="query" name="q" placeholder="Search...">
      <button>Search</button>
    </input>
  );
}

export default SearchBar;
