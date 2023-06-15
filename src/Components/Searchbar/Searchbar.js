import * as StyledSearchbar from "./Searchbar.styles";
import { IonIcon } from "../IonIcon";

export function SearchBarComponent(props) {
  return (
    <div className="container">
      <StyledSearchbar.SearchBar role="search">
        <StyledSearchbar.SearchInput>
          <IonIcon name={props.iconName} class="search-icon"></IonIcon>
          <StyledSearchbar.Input placeholder={props.placeHolder} />
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
