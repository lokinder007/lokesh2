const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "1.5em",
        color:"blue",
        backgroundColor:"rgb(152, 130, 230)",
        // marginBottom: 10,
        height:"3em",
        padding:"1em 0",
      }}
    >
         &copy; {new Date().getFullYear()} LokeshApp |
      Made with ♥ by{" "}
      <a
        href="https://www.youtube.com/roadsidecoder"
        style={{ cursor: "pointer" }}
      >
        Lokinder007
      </a>
    </div>
  );
};

export default Footer;