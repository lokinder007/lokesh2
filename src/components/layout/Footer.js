// import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "1.5em",
        color: "blue",
        backgroundColor: "rgb(152, 130, 230)",
        // marginBottom: 10,
        height: "3em",
        padding: "1em 0",
      }}
    >
      &copy; {new Date().getFullYear()} LokeshApp |
      {/* Made with ♥ by{" "} */}
      {""} All rights reserved | Powered by {""}
      <a
        href="https://www.google.com" target="_blank"  rel="noopener noreferrer"
        style={{ cursor: "pointer" }} title="Visit The Site"
      >
        Lokinder007
      </a>
      {/* <NavLink to="/about"> Lokinder007 </NavLink> */}
    </div>
  );
};

export default Footer;