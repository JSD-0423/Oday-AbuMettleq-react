import {sendRequest} from "../shared/modules/network";

const BASE_URL = "https://tap-web-1.herokuapp.com";

const fetchTopicsList = async () => {
    let url = `${BASE_URL}/topics/list`;

    return sendRequest(url, "GET");
};

const searchTopics = async (topic) => {
    let url = `${BASE_URL}/topics/list?phrase=${topic}`;
    return sendRequest(url, "GET");
};

const getTopicDetails = async (id) => {
    let url = `${BASE_URL}/topics/details/${id}`;
    return sendRequest(url, "GET");
};

export {fetchTopicsList, getTopicDetails, searchTopics};
