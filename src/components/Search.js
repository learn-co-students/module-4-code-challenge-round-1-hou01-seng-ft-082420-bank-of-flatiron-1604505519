import React from "react";

const Search = ({searchTransaction}) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => {
          searchTransaction(e)
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
