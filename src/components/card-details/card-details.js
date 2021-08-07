import React, { useState } from "react";
import { Card, Form } from "semantic-ui-react";
import CardIllustration from "../card-illustration/card-illustration";
import "./card-details.css";
import {
  generateMonthOptions,
  generateYearOptions,
} from "../../utils/dropdownOptions";

const CardDetails = () => {
  const monthOptions = generateMonthOptions();
  const yearOptions = generateYearOptions(1950, 2050);

  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryMonth, setExpiryMonth] = useState(null);
  const [expiryYear, setExpiryYear] = useState(null);
  const [cvv, setCvv] = useState("");

  return (
    <Card className="card-form">
      <Card.Content>
        <div className="card-illustration">
          <CardIllustration />
        </div>
        <Form.Input fluid label="Card Number" value={cardNumber} />
        <Form.Input fluid label="Card Holders" value={cardHolder} />
        <div className="date-details">
          <Form.Select
            fluid
            label="Expiration Date"
            options={monthOptions}
            placeholder="Month"
            value={expiryMonth}
          />
          <Form.Select
            fluid
            options={yearOptions}
            placeholder="Year"
            value={expiryYear}
          />
          <Form.Input fluid label="CVV" value={cvv} />
        </div>
        <Form.Button fluid primary>
          Submit
        </Form.Button>
      </Card.Content>
    </Card>
  );
};

export default CardDetails;
