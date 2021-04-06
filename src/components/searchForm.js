import React from 'react';
import PropTypes from "prop-types";
import { Input, SearchContainer, Button } from "../styles/search-form-style";

const SearchForm = ({searchText, setSearchText, onSubmit}) => {
    const handleInputChange = (event) => setSearchText(event.target.value);
  
    return (
<SearchContainer>
  <div>
      <Input type="text" value={searchText} onChange={handleInputChange} placeholder="   Type in city.."/>
      </div>
      <div>
      <Button type="submit" onClick={onSubmit}>
        Search
      </Button>
      </div>
    </SearchContainer>
    );
  };

  SearchForm.propTypes = {
    searchText: PropTypes.string.isRequired,
    setSearchText: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };

export default SearchForm;