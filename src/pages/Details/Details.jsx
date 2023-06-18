import { SubTopicsContainer } from "../../Components/Detalis/SubTopicsContainer/SubTopicsContainer";
import { TopicMainContainer } from "../../Components/Detalis/TopicMainContainer/TopicMainContainer";
import "./Details.css";

function Details({
  category,
  rating,
  name,
  image,
  topic,
  description,
  subtopics,
}) {
  return (
    <>
      <TopicMainContainer
        topic={topic}
        image={image}
        name={name}
        category={category}
        rating={rating}
        description={description}
      ></TopicMainContainer>

      <SubTopicsContainer
        topic={topic}
        subTopics={subtopics}
      ></SubTopicsContainer>
    </>
  );
}
export default Details;
