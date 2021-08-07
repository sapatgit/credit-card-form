import React, { useState } from "react";
import { Card, Form } from "semantic-ui-react";
import CardIllustration from "../card-illustration/card-illustration";
import "./card-details.css";
import {
  generateMonthOptions,
  generateYearOptions,
  CARDNUMBER,
  CARDHOLDER,
  DATE,
  CVV,
} from "../../utils/dropdownOptions";

const CardDetails = () => {
  const monthOptions = generateMonthOptions();
  const yearOptions = generateYearOptions(1950, 2050);

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryMonth, setExpiryMonth] = useState(null);
  const [expiryYear, setExpiryYear] = useState(null);
  const [cvv, setCvv] = useState("");
  const [focus, setFocus] = useState(null);

  const formatCardNumber = (val) => {
    if (val.length > 19) return;
    const filtered = [...val].filter((e) => /[0-9 ]/.test(e));
    if (
      val.length > cardNumber.length &&
      (filtered.length === 4 || filtered.length === 9 || filtered.length === 14)
    ) {
      filtered.push(" ");
    }
    setCardNumber(filtered.join(""));
  };

  const formatCvv = (val) => {
    const filtered = [...val].filter((e) => /[0-9]/.test(e));
    setCvv(filtered.join(""));
  };

  return (
    <Card className="card-form">
      <Card.Content>
        <div className="card-illustration">
          <CardIllustration
            cardNumber={cardNumber}
            cardHolder={cardHolder}
            expiryMonth={expiryMonth}
            expiryYear={expiryYear}
            cvv={cvv}
            focus={focus}
          />
        </div>
        <Form.Input
          fluid
          label="Card Number"
          value={cardNumber}
          onChange={(e) => formatCardNumber(e.target.value)}
          onBlur={(e) => {
            setFocus(null);
            formatCardNumber(e.target.value);
          }}
          onFocus={() => setFocus(CARDNUMBER)}
        />
        <Form.Input
          fluid
          label="Card Holders"
          value={cardHolder}
          onChange={(e) => setCardHolder(e.target.value)}
          onBlur={(e) => {
            setFocus(null);
            setCardHolder(e.target.value);
          }}
          onFocus={() => setFocus(CARDHOLDER)}
        />
        <div className="date-details">
          <Form.Select
            fluid
            label="Expiration Date"
            options={monthOptions}
            placeholder="Month"
            value={expiryMonth}
            onChange={(e, { value }) => setExpiryMonth(value)}
            onBlur={(e, { value }) => {
              setFocus(null);
              setExpiryMonth(value);
            }}
            onFocus={() => setFocus(DATE)}
          />
          <Form.Select
            fluid
            options={yearOptions}
            placeholder="Year"
            value={expiryYear}
            onChange={(e, { value }) => setExpiryYear(value)}
            onBlur={(e, { value }) => {
              setFocus(null);
              setExpiryYear(value);
            }}
            onFocus={() => setFocus(DATE)}
          />
          <Form.Input
            fluid
            label="CVV"
            value={cvv}
            onChange={(e) => formatCvv(e.target.value)}
            onBlur={(e) => {
              setFocus(null);
              formatCvv(e.target.value);
            }}
            onFocus={() => setFocus(CVV)}
          />
        </div>
        <Form.Button fluid primary>
          Submit
        </Form.Button>
      </Card.Content>
    </Card>
  );
};

export default CardDetails;
