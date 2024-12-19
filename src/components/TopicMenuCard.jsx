import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export default function TopicMenuCard({ topic }) {
  return (
    <Dropdown.Item as={Link} to={`articles/topics/${topic}`}>
      <p className="topic-menu-card">{topic}</p>
    </Dropdown.Item>
  );
}
