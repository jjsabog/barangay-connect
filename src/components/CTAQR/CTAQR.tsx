import "./CTAQR.css";
import QR from "../../../public/QR.svg";

const CTAQR = () => {
  return (
    <div className="QR">
      <div className="QR__image">
        <img src={QR} alt="" />
      </div>
      <div className="QR__wrapper">
        <div className="QR__heading">
          <h3>Get the App</h3>
        </div>
        <div className="QR__subheading">
          Every tap on the app brings you closer to what you need
        </div>
      </div>
    </div>
  );
};

export default CTAQR;
