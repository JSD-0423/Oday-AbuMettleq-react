import IonIcon from "../common/IonIcon/IonIcon";
import * as StyledSearchbar from "./Searchbar.styles";
import { filterOptions } from "./SearchbarFunctionality";
export default function SearchBar({
  searchValue,
  setSearchValue,
  searchInputPlaceHolder,
  searchInputIconName,
  topics,
}) {
  const searchInputCustomStyle = {
    padding: "0 0 0 0.7rem",
    color: "#333333",
    margin: " 0 -1.55rem 0 0",
  };

  return (
    <div className="container">
      <StyledSearchbar.SearchBar role="search">
        <StyledSearchbar.SearchInput>
          <IonIcon
            iconName={searchInputIconName}
            customStyle={searchInputCustomStyle}
          ></IonIcon>

          <StyledSearchbar.Input
            placeholder={searchInputPlaceHolder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </StyledSearchbar.SearchInput>

        <StyledSearchbar.SelectContainer>
          <StyledSearchbar.SelectWrapper>
            <StyledSearchbar.SelectLabel htmlFor="sortBy" role="Select label">
              Sort by:
            </StyledSearchbar.SelectLabel>

            <StyledSearchbar.Select
              id="sortBy"
              role="sorting"
              aria-label="Select option to sort by"
            >
              <SelectOption element={"Author"} />
              <SelectOption element={"Topics"} />
            </StyledSearchbar.Select>
          </StyledSearchbar.SelectWrapper>

          <StyledSearchbar.SelectWrapper>
            <StyledSearchbar.SelectLabel
              htmlFor="filterBy"
              className="select-label"
            >
              Filter by:
            </StyledSearchbar.SelectLabel>

            <StyledSearchbar.Select
              id="filterBy"
              role="select"
              aria-label="Select option to sort by"
            >
              <SelectOption element={"Default"}></SelectOption>
              {setTimeout(filterOptions(topics),5000)}
            </StyledSearchbar.Select>
          </StyledSearchbar.SelectWrapper>
        </StyledSearchbar.SelectContainer>
      </StyledSearchbar.SearchBar>
    </div>
  );
}

export function SelectOption({ element }) {
  return (
    <StyledSearchbar.Option value={element} className="select-option">
      {element}
    </StyledSearchbar.Option>
  );
}
