import IonIcon from "../common/IonIcon/IonIcon";
import * as StyledSearchbar from "./Searchbar.styles";

export default function SearchBar({
  searchInputPlaceHolder,
  searchInputIconName,
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

          <StyledSearchbar.Input placeholder={searchInputPlaceHolder} />

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
              <StyledSearchbar.Option value="option3" tabIndex="1">
                Default
              </StyledSearchbar.Option>
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

              <StyledSearchbar.Option
                value="option3"
                className="select-option"
                tabIndex="1"
              >
                Default
              </StyledSearchbar.Option>
              
            </StyledSearchbar.Select>

          </StyledSearchbar.SelectWrapper>

        </StyledSearchbar.SelectContainer>

      </StyledSearchbar.SearchBar>

    </div>
  );
}
