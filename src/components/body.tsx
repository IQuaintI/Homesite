import Card from "../assets/Card";
import "../styles/Body.scss";

function Body() {
  return (
    <div className="body">
      <Card
        image="https://via.placeholder.com/150"
        title="Here"
        subtitle="The stumbling blocks you walk on."
        source="https://github.com"
        site="https://example.com"
      />
      <Card
        image="https://via.placeholder.com/150"
        title="Project 2"
        subtitle="Description of project 2"
        source="https://github.com"
        site="https://example.com"
      />
      <Card
        image="https://via.placeholder.com/150"
        title="Project 3"
        subtitle="Description of project 3"
        source="https://github.com"
        site="https://example.com"
      />
      <Card
        image="https://via.placeholder.com/150"
        title="Project 4"
        subtitle="Description of project 4"
        source="https://github.com"
        site="https://example.com"
      />
    </div>
  );
}

export default Body;
