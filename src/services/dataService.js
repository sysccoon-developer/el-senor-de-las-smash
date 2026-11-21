import { menuData } from "@/data/menu.data"

export const getMenuCategories = () => {
  const categories = Object.keys(menuData).map(key => menuData[key]);
  const filteredCategories = categories.filter(category => typeof category.isEnabled === 'undefined' || category.isEnabled === true);

  return filteredCategories;
};