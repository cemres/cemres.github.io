import { InputText } from "primereact/inputtext";
import { useState } from "react";

function MenuSearchFilter(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = (searchTerm) => {
    setSearchValue(searchTerm);
    props.onSearch(searchTerm);
  };
  return (
    <div>
      <span className="p-float-label p-input-icon-right center-span">
        <i className="pi pi-search" />
        <InputText
          id="searchInput"
          value={searchValue}
          onChange={(e) => handleOnChange(e.target.value)}
        />
        <label htmlFor="searchInput">Search by name</label>
      </span>
    </div>
  );
}

export default MenuSearchFilter;
