import { SelectOption } from "./Searchbar";

export function filterOptions(topics) {
  console.log(topics);
  let categories = [];
  for (const topic of topics) {
    categories.push(topic.category);
  }
  let CatSet = new Set(categories);
  let res = CatSet.forEach((element) => (
    <SelectOption element={element}></SelectOption>
  ));
  console.log(res);
  return res;
}
