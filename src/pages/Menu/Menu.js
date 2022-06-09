import "./Menu.css";

import {
  filterMenuByCategory,
  filterMenuBySearchTerm,
} from "../../helpers/menuHelper";
import { useEffect, useState } from "react";

import MenuCategoryFilter from "../../components/MenuFilters/MenuCategoryFilter/MenuCategoryFilter";
import MenuItem from "../../components/MenuItem/MenuItem";
import MenuSearchFilter from "../../components/MenuFilters/MenuSearchFilter/MenuSearchFilter";
import { useSelector } from "react-redux";

function Menu() {
  const menuItems = useSelector((state) => state.menuItems.value);
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);

  useEffect(() => {
    setFilteredMenuItems(menuItems);
  }, [menuItems]);

  const handleCategoryFilter = (categoryName) => {
    const filteredMenuItems = filterMenuByCategory(menuItems, categoryName);
    setFilteredMenuItems(filteredMenuItems);
  };

  const handleSearchFilter = (searchedTerm) => {
    const filteredMenuItems = filterMenuBySearchTerm(menuItems, searchedTerm);
    setFilteredMenuItems(filteredMenuItems);
  };

  return (
    <div className="grid justify-content-center">
      <div className="col text-center menu-container">
        <MenuSearchFilter onSearch={handleSearchFilter} />
        <MenuCategoryFilter onFilterApplied={handleCategoryFilter} />
        <div className="grid mt-2">
          {filteredMenuItems.map((item, i) => (
            <div className="col-4" key={i}>
              <MenuItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
