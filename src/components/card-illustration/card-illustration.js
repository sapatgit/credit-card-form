import React from "react";
import chip from "../../assets/images/chip.png";
import visa from "../../assets/images/visa.png";
import "./card-illustration.css";
import { Image } from "semantic-ui-react";
import { CARDNUMBER, CARDHOLDER, DATE, CVV } from "../../utils/dropdownOptions";

const CardIllustration = ({
  cardNumber,
  cardHolder,
  expiryMonth,
  expiryYear,
  cvv,
  focus,
}) => {
  const getCardNumberString = (num) => {
    let numberString = "#### #### #### ####";
    return [...numberString]
      .map((char, index) => (index < num.length ? num.charAt(index) : char))
      .join("");
  };

  return (
    <div className="credit-card">
      {focus === CVV ? (
        <div>
          <div className="black-strip"></div>
          <div className="cvv-section">
            <div className="field card-field cvv">
              <label>CVV</label>
              <div className="cvv-input">{cvv}</div>
            </div>
            <Image src={visa} alt="icon" height="40px" className="logo" />
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className="chip-row">
            <Image src={chip} alt="chip" width="50px" className="chip" />
            <Image src={visa} alt="icon" height="40px" className="logo" />
          </div>
          <div
            className={`card-number card-field ${
              focus === CARDNUMBER ? "card-field--border" : ""
            }`}
          >
            {getCardNumberString(cardNumber)
              .split(" ")
              .map((str, index) => (
                <span key={index}>{str}</span>
              ))}
          </div>
          <div className="card-name">
            <div
              className={`field card-field card-holder ${
                focus === CARDHOLDER ? "card-field--border" : ""
              }`}
            >
              <label>Card Holder</label>
              <span className="name-field">
                {cardHolder ? cardHolder.toUpperCase() : "FULL NAME"}
              </span>
            </div>

            <div
              className={`field card-field expiry ${
                focus === DATE ? "card-field--border" : ""
              }`}
            >
              <label>Expires</label>
              <div className="expiry-fields">
                <span>{expiryMonth ? expiryMonth : "MM"}</span>/
                <span>{expiryYear ? expiryYear.slice(2) : "YY"}</span>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default CardIllustration;
