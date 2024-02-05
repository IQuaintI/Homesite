interface HeaderProps {
  title: string;
  subtitle?: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <>
      <img id="staticImage" src="../../public/staticImage.jpg" alt="static" />
      <h1 className="header-title">{title}</h1>
      {subtitle && <h3 className="header-subtitle">{subtitle}</h3>}
    </>
  );
}

export default Header;
