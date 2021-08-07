import React from "react";
import chip from "../../assets/images/chip.png";
import visa from "../../assets/images/visa.png";
import "./card-illustration.css";
import { Image } from "semantic-ui-react";

const CardIllustration = ({ cardNum, cardHolder, expMonth, expYear, cvv }) => {
  return (
    <div className="credit-card">
      <div className="chip-row">
        <Image src={chip} alt="chip" width="50px" />
        <Image src={visa} alt="icon" height="40px" />
      </div>
      <div className="card-number card-field">
        <span>####</span>
        <span>####</span>
        <span>####</span>
        <span>####</span>
      </div>
      <div className="card-name">
        <div className="field card-field card-holder">
          <label>Card Holder</label>
          <span className="name-field">FULL NAME</span>
        </div>

        <div className="field card-field expiry">
          <label>Expires</label>
          <div className="expiry-fields">
            <span>MM</span>/<span>YY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIllustration;
