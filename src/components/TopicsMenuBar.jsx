import { useEffect, useState } from "react";
import { getAllTopics } from "../api";
import { DropdownButton } from "react-bootstrap";
import TopicMenuCard from "./TopicMenuCard";

export default function TopicsMenuBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllTopics()
      .then(({ topics }) => {
        setTopics(topics);
        setIsError(false);
        setIsLoading(false);
        return topics;
      })
      .catch((error) => {
        setIsError("Failed to fetch topics");
        setIsLoading(false);
        console.log("Error fetching topics: ", error);
      });
  }, []);

  if (isLoading) return <p> Loading topics...</p>;
  if (isError) return <p className="error-message">{isError}</p>;

  return (
    <DropdownButton id="topics-dropdown" title="Topics">
      {topics.map((currentTopic, index) => {
        return <TopicMenuCard topic={currentTopic.slug} key={index} />;
      })}
    </DropdownButton>
  );
}
