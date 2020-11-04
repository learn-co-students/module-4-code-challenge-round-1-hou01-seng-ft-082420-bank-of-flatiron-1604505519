import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => {
          props.handleSearchChange(e.target.value);
        }}
      />
      {/* <i className="circular search link icon"></i> */}
      <strong>Order: </strong>
        <select className= 'ui selection dropdown' onChange={(e) => props.handleFilterChange(e.target.value)}>
          <option value='all'>Default</option>
          <option value='description'>Description</option>
          <option value='category'>Category</option>
        </select>
    
    </div>
  );
};

export default Search;
