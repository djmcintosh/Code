function SearchResults2 ([results]) {

return (
    <div>
        <h1>Favorite Languages:</h1>
        {results.map((result) => (
            <li>{result.length}</li>
        ))}
    </div>
);    

};

export default SearchResults2;