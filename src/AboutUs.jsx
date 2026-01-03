import instagramIcon from "./assets/aboutus/instagram.png";
import descriptionIcon from "./assets/aboutus/description.png";
import namingIcon from "./assets/aboutus/naming.png";
import globeIcon from "./assets/aboutus/globe.png";

function AboutUs(){
  return (
    <main className="content-page">
      <figure>
        <img src={instagramIcon} alt="Instagram integration icon" />
      </figure>

      <figure>
        <img src={descriptionIcon} alt="Content description icon" />
      </figure>

      <figure>
        <img src={namingIcon} alt="Brand naming icon" />
      </figure>

      <figure>
        <img src={globeIcon} alt="Global reach icon" />
      </figure>
    </main>
  )

}

export default AboutUs;