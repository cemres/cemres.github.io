export const filterMenuByCategory = (menuList, categoryName) => {
  if (categoryName === "All") {
    return menuList;
  }
  const items = menuList.filter((x) => x.category === categoryName);
  return items;
};

export const filterMenuBySearchTerm = (menuList, term) => {
  if (!term) {
    return menuList;
  }
  const items = menuList.filter((x) =>
    x.name.toLowerCase().includes(term.toLowerCase())
  );
  return items;
};
