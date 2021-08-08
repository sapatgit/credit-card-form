import React, { useEffect, useState } from "react";
import chip from "../../assets/images/chip.png";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.png";
import amex from "../../assets/images/amex.png";

import "./card-illustration.css";
import { Image } from "semantic-ui-react";
import { CARDNUMBER, CARDHOLDER, DATE, CVV } from "../../utils/dropdownOptions";
import { getCardType } from "../../utils/cardTypes";

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
  const [logo, setLogo] = useState({key: 'visa', img: visa});

  useEffect(() => {
    const res = getCardType(cardNumber.replace(/\s/g, ""));
    if (!res) {
      setLogo({key: 'visa', img: visa});
    } else if (res.toLowerCase() === 'visa') {
      setLogo({key: 'visa', img: visa});
    } else if (res.toLowerCase() === 'mastercard') {
      setLogo({key: 'mastercard', img: mastercard});
    } else if (res.toLowerCase() === 'amex') {
      setLogo({key: 'amex', img: amex});
    } else {
      setLogo({key: 'visa', img: visa});
    }
  }, [cardNumber]);
  
  return (
    <div className={`credit-card ${focus === CVV ? "flip" : ""}`}>
      {focus === CVV ? (
        <div>
          <div className="black-strip"></div>
          <div className="cvv-section">
            <div className="field card-field cvv">
              <label>CVV</label>
              <div className="cvv-input">{cvv}</div>
            </div>
            <Image src={logo.img} alt="icon" height="40px" className="logo" />
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className="chip-row">
            <Image src={chip} alt="chip" width="50px" className="chip" />
            <Image src={logo?.img} alt="icon" height="40px" className="logo slideup-animation" key={logo?.key} />
          </div>
          <div
            className={`card-number card-field ${
              focus === CARDNUMBER ? "card-field--border" : ""
            }`}
          >
            {getCardNumberString(cardNumber)
              .split(" ")
              .map((str, index) => (
                <span key={`card-num-gr-${index}`}>
                  {[...str].map((digit, i) => (
                    <span
                      key={`card-num-digit-${index * 4 + i}-${digit}`}
                      className="slideup-animation"
                    >
                      {digit}
                    </span>
                  ))}
                </span>
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
                <span
                  className="slideup-animation"
                  key={`cardholder-${!!cardHolder}`}
                >
                  {cardHolder
                    ? [...cardHolder.toUpperCase()].map((char, index) => (
                        <span
                          className="skew-animation"
                          key={`cardholder-charat-${index}-${char}`}
                        >
                          {char === " " ? <span>&nbsp;&nbsp;</span> : char}
                        </span>
                      ))
                    : "FULL NAME"}
                </span>
              </span>
            </div>

            <div
              className={`field card-field expiry ${
                focus === DATE ? "card-field--border" : ""
              }`}
            >
              <label>Expires</label>
              <div className="expiry-fields">
                <span
                  className="slideup-animation"
                  key={`expiryMonth-${expiryMonth ? expiryMonth : "MM"}`}
                >
                  {expiryMonth ? expiryMonth : "MM"}
                </span>
                /
                <span
                  className="slideup-animation"
                  key={`expiryYear-${expiryYear ? expiryYear.slice(2) : "YY"}`}
                >
                  {expiryYear ? expiryYear.slice(2) : "YY"}
                </span>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default CardIllustration;
