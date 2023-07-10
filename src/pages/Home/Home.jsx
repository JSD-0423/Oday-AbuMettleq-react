import React, {useState, useEffect} from "react";
import SearchBar from "../../Components/Searchbar/Searchbar";
import {Topics} from "../../Components/Topics/TopicsContainer/Topics";
import {fetchTopicsList, searchTopics} from "../../services/api";
import {LoadingContainer} from "../../Components/common/Loading/Loading";
import {ErrorContainer} from "../../Components/common/Error/Error";
import {useDebounce} from "../../hooks/useDebounce";

import "./Home.css";

function Home() {
    const [topics, setTopics] = useState([]);
    const [searchedTopics, setSearchedTopics] = useState([]);
    const [displayedTopics, setDisplayedTopics] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const debouncedSearchInput = useDebounce(searchInput, 300);
    const filterOptions = [...new Set(topics.map((item) => item.category))];
    const [sort, setSort] = useState("Default");
    const [filter, setFilter] = useState("Default");

    useEffect(() => {

        const fetchSearchTopics = async () => {
            setLoading(true);
            const topicsData = await searchTopics(debouncedSearchInput);
            setSearchedTopics(topicsData);
            setDisplayedTopics(topicsData);
            setLoading(false);
        };

        if (debouncedSearchInput !== "") {
            fetchSearchTopics();
        } else {
            setDisplayedTopics(topics);
        }
    }, [debouncedSearchInput, topics]);

    useEffect(() => {
        const applyFilters = () => {
            let filteredTopics = [...displayedTopics];

            if (filter !== "Default") {
                filteredTopics = filteredTopics.filter((topic) => topic.category === filter);
            } else {
                setDisplayedTopics(topics)
            }

            switch (sort) {
                case "Default":
                    setDisplayedTopics(topics);
                    break;
                case "Author":
                    setDisplayedTopics(filteredTopics.slice().sort((a, b) => a.name.localeCompare(b.name)));
                    break;
                case "Topics":
                    setDisplayedTopics(filteredTopics.slice().sort((a, b) => a.topic.localeCompare(b.topic)));
                    break;
                default:
                    break;
            }
        };
        applyFilters();
    }, [searchedTopics, sort, filter]);

    useEffect(() => {
        const fetchTopics = async () => {
            setLoading(true);
            const topicsData = await fetchTopicsList();

            if (!topicsData) {
                setError("Something went wrong. Web topics failed to load.");
            } else {
                setTopics(topicsData);
                setDisplayedTopics(topicsData);
            }

            setLoading(false);
        };

        fetchTopics();
    }, []);

    const searchTopic = (searchValue) => {
        setSearchInput(searchValue);
    };

    return (
        <>
            <SearchBar
                onChange={searchTopic}
                searchInputPlaceHolder={"Search the website..."}
                searchInputIconName={"search-outline"}
                filterOptions={filterOptions}
                setSort={setSort}
                setFilter={setFilter}
            />
            {error ? (
                <ErrorContainer error={error}/>
            ) : loading ? (
                <LoadingContainer/>
            ) : (
                <Topics Topics={displayedTopics}/>
            )}
        </>
    );
}

export default Home;
