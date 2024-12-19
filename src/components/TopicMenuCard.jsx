import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

export default function TopicMenuCard({ topic }) {
  return (
    <Dropdown.Item className="topic-menu-item" as={Link} to={`articles/topics/${topic}`}>
      <p className="topic-menu-card">{topic}</p>
    </Dropdown.Item>
  );
}
