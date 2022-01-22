const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar ui segment">
      <form className="ui big form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label>Search Anime</label>
          <input
            placeholder="Search Anime"
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
