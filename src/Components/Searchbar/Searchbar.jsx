import IonIcon from "../common/IonIcon/IonIcon";
import * as StyledSearchbar from "./Searchbar.styles";

export default function SearchBar({
                                      onChange,
                                      searchInputPlaceHolder,
                                      searchInputIconName,
                                      filterOptions,

                                  }) {


    const searchInputCustomStyle = {
        padding: "0 0 0 0.7rem", color: "#333333", margin: " 0 -1.55rem 0 0",
    };


    return (<div className="container">
        <StyledSearchbar.SearchBar role="search">
            <StyledSearchbar.SearchInput>
                <IonIcon
                    iconName={searchInputIconName}
                    customStyle={searchInputCustomStyle}
                ></IonIcon>

                <StyledSearchbar.Input
                    placeholder={searchInputPlaceHolder}
                    onChange={e => onChange(e.target.value)}
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
                        <SelectOption element={"Default"}></SelectOption>
                        <SelectOption element={"Author"}/>
                        <SelectOption element={"Topics"}/>
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

                        {filterOptions.map((e) => (<SelectOption element={e}></SelectOption>))}
                    </StyledSearchbar.Select>
                </StyledSearchbar.SelectWrapper>
            </StyledSearchbar.SelectContainer>
        </StyledSearchbar.SearchBar>
    </div>);
}

export function SelectOption({element}) {
    return (<StyledSearchbar.Option value={element} className="select-option">
        {element}
    </StyledSearchbar.Option>);
}
