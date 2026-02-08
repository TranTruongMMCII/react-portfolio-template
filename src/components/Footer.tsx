import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/TranTruongMMCII"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/trantruongmmcii"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://www.facebook.com/TranTruongMMCII"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a
          href="mailto:truong.tranvandan@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MailIcon />
        </a>
        <a href="tel:+84337198206" target="_blank" rel="noreferrer">
          <PhoneIcon />
        </a>
      </div>
      <p>
        A portfolio designed & built by{" "}
        <a
          href="https://github.com/yujisatojr/react-portfolio-template"
          target="_blank"
          rel="noreferrer"
        >
          Yuji Sato
        </a>{" "}
        with 💜
      </p>
      <p>
        Thank you for your template 🙇‍♂️.{" "}
        <a
          href="https://github.com/TranTruongMMCII/react-portfolio-template"
          target="_blank"
          rel="noreferrer"
        >
          Hạ Vy
        </a>{" "}
        ❤️
      </p>
    </footer>
  );
}

export default Footer;
