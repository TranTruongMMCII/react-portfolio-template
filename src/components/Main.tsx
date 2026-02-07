import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/TranTruongMMCII" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/trantruongmmcii" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.facebook.com/TranTruongMMCII" target="_blank" rel="noreferrer"><FacebookIcon /></a>
            <a href="mailto:truong.tranvandan@gmail.com" target="_blank" rel="noreferrer"><MailIcon /></a>
          </div>
          <h1>Trần Văn Đan Trường</h1>
          <p>Software Engineer (Back-end)</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/TranTruongMMCII" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/trantruongmmcii" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://www.facebook.com/TranTruongMMCII" target="_blank" rel="noreferrer"><FacebookIcon /></a>
            <a href="mailto:truong.tranvandan@gmail.com" target="_blank" rel="noreferrer"><MailIcon /></a>
            <a href="tel:+84337198206" target="_blank" rel="noreferrer"><PhoneIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;