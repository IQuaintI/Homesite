import Card from "../assets/Card";
import "../styles/Body.scss";

function Body() {
  return (
    <div className="body">
      <Card
        image="public/homeIcon.png"
        title="Here"
        subtitle="The stumbling blocks you walk on."
        source="https://github.com/IQuaintI/Homesite"
        site="https://www.agomez.me"
      />
      <Card
        image="https://via.placeholder.com/150"
        title="Calculator"
        subtitle="You know what it does."
        source="https://github.com"
        site="https://example.com"
      />
      <Card
        image="https://via.placeholder.com/150"
        title="Weather App"
        subtitle="Hot and cold, wet and dry."
        source="https://github.com"
        site="https://example.com"
      />
      <Card
        image="https://via.placeholder.com/150"
        title="Python Pieces"
        subtitle="A soup of teeth-pulling catastrophes."
        source="https://github.com"
        site="https://example.com"
      />
    </div>
  );
}

export default Body;
