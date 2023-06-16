import IonIcon from "../Global/IonIcon/IonIcon";
import * as StyledSearchbar from "./Searchbar.styles";

export function SearchBar({ searchInputPlaceHolder, searchInputIconName }) {

  return (
    <div className="container">
      <StyledSearchbar.SearchBar role="search">
        <StyledSearchbar.SearchInput>
          <IonIcon
            iconName={searchInputIconName}
            customStyle={{
              padding: "0  0 0 0.7rem",
              color: "#333333",
              margin: " 0 -1.55rem 0 0",
            }}
          ></IonIcon>
          <StyledSearchbar.Input placeholder={searchInputPlaceHolder} />
        </StyledSearchbar.SearchInput>

        <StyledSearchbar.SelectContainer>
          <StyledSearchbar.SelectWrapper>
            <StyledSearchbar.SelectLabel htmlFor="select1" role="Select label">
              Sort by:
            </StyledSearchbar.SelectLabel>
            <StyledSearchbar.Select
              id="select1"
              role="select"
              aria-label="Select option to sort by"
            >
              <StyledSearchbar.Option
                value="option1"
                className="select-option"
                tabIndex="1"
              >
                Default
              </StyledSearchbar.Option>
              <StyledSearchbar.Option
                value="option2"
                className="select-option"
                tabIndex="2"
              >
                Default
              </StyledSearchbar.Option>
              <StyledSearchbar.Option
                value="option3"
                className="select-option"
                tabIndex="3"
              >
                Default
              </StyledSearchbar.Option>
            </StyledSearchbar.Select>
          </StyledSearchbar.SelectWrapper>
          <StyledSearchbar.SelectWrapper>
            <StyledSearchbar.SelectLabel
              htmlFor="select2"
              className="select-label"
            >
              Filter by:
            </StyledSearchbar.SelectLabel>
            <StyledSearchbar.Select
              id="select2"
              role="select"
              aria-label="Select option to sort by"
            >
              <StyledSearchbar.Option
                value="option1"
                className="select-option"
                tabIndex="1"
              >
                Default
              </StyledSearchbar.Option>
              <StyledSearchbar.Option
                value="option2"
                className="select-option"
                tabIndex="2"
              >
                Default
              </StyledSearchbar.Option>
              <StyledSearchbar.Option
                value="option3"
                className="select-option"
                tabIndex="3"
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
