interface LinkedinProps {
  image: string;
}

function Linkedin({ image }: LinkedinProps) {
  return (
    <div className="linkedin">
      <img src={image} alt="Linkedin" />
    </div>
  );
}

export default Linkedin;
