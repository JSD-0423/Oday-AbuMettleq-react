import { SubTopicsContainer } from "../../Components/Detalis/SubTopicsContainer/SubTopicsContainer";
import { TopicMainContainer } from "../../Components/Detalis/TopicMainContainer/TopicMainContainer";
import { useParams } from "react-router-dom";
import "./Details.css";
import useTopicDetails from "../../hooks/useTopicDetails";
import { LoadingContainer } from "../../Components/common/Loading/Loading";
import { ErrorContainer } from "../../Components/common/Error/Error";
import NotFound from "../404/NotFound";

function Details() {
  const { id } = useParams();

  const { topicDetails, loading, error } = useTopicDetails(id);

  if (loading) {
    return <LoadingContainer />;
  }
  if (error) {
    return <ErrorContainer error={error} />;
  }
  if (!topicDetails) {
    return <NotFound></NotFound>;
  }
  return (
    <>
      <TopicMainContainer
        topic={topicDetails.topic}
        image={topicDetails.image}
        name={topicDetails.name}
        category={topicDetails.category}
        rating={topicDetails.rating}
        description={topicDetails.description}
      ></TopicMainContainer>

      <SubTopicsContainer
        topic={topicDetails.topic}
        subTopics={topicDetails.subtopics}
      ></SubTopicsContainer>
    </>
  );
}
export default Details;
