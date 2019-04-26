<script src="https://js.stripe.com/v3/"></script>
<script type="text/javascript" src="https://d.io/embed/v1" async defer></script>
var stripe = Stripe('pk_live_gmvxptJnsikKxHF7Gt8EWBky00Ikgd4Mis');


<dio-button event="event-id">Order Tickets</dio-button>

Stripe.apiKey = "pk_live_gmvxptJnsikKxHF7Gt8EWBky00Ikgd4Mis";

Map<String, Object> params = new HashMap<String, Object>();
params.put("amount", 1000);
params.put("currency", "usd");
params.put("source", "tok_visa");
Map<String, Object> destinationParams = new HashMap<String, Object>();
transferDataParams.put("destination", "{CONNECTED_STRIPE_ACCOUNT_ID}");
params.put("destination", destinationParams);
Charge charge = Charge.create(params);

//Stripe Services API



{
  "id": "sub_ErwwiNl3JNfZld",
  "object": "subscription",
  "application_fee_percent": null,
  "billing": "charge_automatically",
  "billing_cycle_anchor": 1555028062,
  "billing_thresholds": null,
  "cancel_at": null,
  "cancel_at_period_end": false,
  "canceled_at": null,
  "created": 1555028062,
  "current_period_end": 1557620062,
  "current_period_start": 1555028062,
  "customer": "cus_ErvgI3p5Wlb2LG",
  "days_until_due": null,
  "default_source": null,
  "discount": null,
  "ended_at": null,
  "items": {
    "object": "list",
    "data": [
      {
        "id": "si_Erww6dgFcaagRc",
        "object": "subscription_item",
        "billing_thresholds": null,
        "created": 1555028062,
        "metadata": {},
        "plan": {
          "id": "gold-small-763",
          "object": "plan",
          "active": true,
          "aggregate_usage": null,
          "amount": 999,
          "billing_scheme": "per_unit",
          "created": 1555019968,
          "currency": "usd",
          "interval": "month",
          "interval_count": 1,
          "livemode": false,
          "metadata": {},
          "nickname": null,
          "product": "prod_ErulW2e8KMBlob",
          "tiers": null,
          "tiers_mode": null,
          "transform_usage": null,
          "trial_period_days": null,
          "usage_type": "licensed"
        },
        "quantity": 1,
        "subscription": "sub_ErwwiNl3JNfZld"
      }
    ],
    "has_more": false,
    "total_count": 1,
    "url": "/v1/subscription_items?subscription=sub_ErwwiNl3JNfZld"
  },
  "latest_invoice": null,
  "livemode": false,
  "metadata": {},
  "plan": {
    "id": "gold-small-763",
    "object": "plan",
    "active": true,
    "aggregate_usage": null,
    "amount": 999,
    "billing_scheme": "per_unit",
    "created": 1555019968,
    "currency": "usd",
    "interval": "month",
    "interval_count": 1,
    "livemode": false,
    "metadata": {},
    "nickname": null,
    "product": "prod_ErulW2e8KMBlob",
    "tiers": null,
    "tiers_mode": null,
    "transform_usage": null,
    "trial_period_days": null,
    "usage_type": "licensed"
  },
  "quantity": 1,
  "schedule": null,
  "start": 1555028062,
  "status": "active",
  "tax_percent": null,
  "trial_end": null,
  "trial_start": null
}

//Create a Subscription: 

{
  "id": "sub_ErwwiNl3JNfZld",
  "object": "subscription",
  "application_fee_percent": null,
  "billing": "charge_automatically",
  "billing_cycle_anchor": 1555028062,
  "billing_thresholds": null,
  "cancel_at": null,
  "cancel_at_period_end": false,
  "canceled_at": null,
  "created": 1555028062,
  "current_period_end": 1557620062,
  "current_period_start": 1555028062,
  "customer": "cus_ErvgI3p5Wlb2LG",
  "days_until_due": null,
  "default_source": null,
  "discount": null,
  "ended_at": null,
  "items": {
    "object": "list",
    "data": [
      {
        "id": "si_Erww6dgFcaagRc",
        "object": "subscription_item",
        "billing_thresholds": null,
        "created": 1555028062,
        "metadata": {},
        "plan": {
          "id": "gold-small-763",
          "object": "plan",
          "active": true,
          "aggregate_usage": null,
          "amount": 999,
          "billing_scheme": "per_unit",
          "created": 1555019968,
          "currency": "usd",
          "interval": "month",
          "interval_count": 1,
          "livemode": false,
          "metadata": {},
          "nickname": null,
          "product": "prod_ErulW2e8KMBlob",
          "tiers": null,
          "tiers_mode": null,
          "transform_usage": null,
          "trial_period_days": null,
          "usage_type": "licensed"
        },
        "quantity": 1,
        "subscription": "sub_ErwwiNl3JNfZld"
      }
    ],
    "has_more": false,
    "total_count": 1,
    "url": "/v1/subscription_items?subscription=sub_ErwwiNl3JNfZld"
  },
  "latest_invoice": null,
  "livemode": false,
  "metadata": {},
  "plan": {
    "id": "gold-small-763",
    "object": "plan",
    "active": true,
    "aggregate_usage": null,
    "amount": 999,
    "billing_scheme": "per_unit",
    "created": 1555019968,
    "currency": "usd",
    "interval": "month",
    "interval_count": 1,
    "livemode": false,
    "metadata": {},
    "nickname": null,
    "product": "prod_ErulW2e8KMBlob",
    "tiers": null,
    "tiers_mode": null,
    "transform_usage": null,
    "trial_period_days": null,
    "usage_type": "licensed"
  },
  "quantity": 1,
  "schedule": null,
  "start": 1555028062,
  "status": "active",
  "tax_percent": null,
  "trial_end": null,
  "trial_start": null
}






//Payments API (Charge)

{
  "id": "ch_19yUeV2eZvKYlo2CyX5QMa7C",
  "object": "charge",
  "amount": 100,
  "amount_refunded": 0,
  "application": null,
  "application_fee": null,
  "application_fee_amount": null,
  "balance_transaction": "txn_19XJJ02eZvKYlo2ClwuJ1rbA",
  "billing_details": {
    "address": {
      "city": null,
      "country": null,
      "line1": null,
      "line2": null,
      "postal_code": null,
      "state": null
    },
    "email": null,
    "name": null,
    "phone": null
  },
  "captured": true,
  "created": 1489793915,
  "currency": "usd",
  "customer": "cus_AJ6rlf2taOsyXj",
  "description": null,
  "destination": null,
  "dispute": null,
  "failure_code": null,
  "failure_message": null,
  "fraud_details": {},
  "invoice": "in_19yUeV2eZvKYlo2Cry9VbfTK",
  "livemode": false,
  "metadata": {},
  "on_behalf_of": null,
  "order": null,
  "outcome": {
    "network_status": "approved_by_network",
    "reason": null,
    "risk_level": "normal",
    "seller_message": "Payment complete.",
    "type": "authorized"
  },
  "paid": true,
  "payment_intent": null,
  "payment_method": "card_19yUe82eZvKYlo2CF1TgKztz",
  "payment_method_details": {
    "card": {
      "brand": "visa",
      "checks": {
        "address_line1_check": null,
        "address_postal_code_check": null,
        "cvc_check": "pass"
      },
      "country": "US",
      "exp_month": 3,
      "exp_year": 2018,
      "fingerprint": "Xt5EWLLDS7FJjR1c",
      "funding": "credit",
      "last4": "4242",
      "three_d_secure": null,
      "wallet": null
    },
    "type": "card"
  },
  "receipt_email": null,
  "receipt_number": "2748-0083",
  "receipt_url": "https://pay.stripe.com/receipts/acct_1032D82eZvKYlo2C/ch_19yUeV2eZvKYlo2CyX5QMa7C/rcpt_EGj1iRasyUhFuBTezEhxOkf4lYgTbt9",
  "refunded": false,
  "refunds": {
    "object": "list",
    "data": [],
    "has_more": false,
    "total_count": 0,
    "url": "/v1/charges/ch_19yUeV2eZvKYlo2CyX5QMa7C/refunds"
  },
  "review": null,
  "shipping": null,
  "source": {
    "id": "card_19yUe82eZvKYlo2CF1TgKztz",
    "object": "card",
    "address_city": null,
    "address_country": null,
    "address_line1": null,
    "address_line1_check": null,
    "address_line2": null,
    "address_state": null,
    "address_zip": null,
    "address_zip_check": null,
    "brand": "Visa",
    "country": "US",
    "customer": "cus_AJ6rlf2taOsyXj",
    "cvc_check": "pass",
    "dynamic_last4": null,
    "exp_month": 3,
    "exp_year": 2018,
    "fingerprint": "Xt5EWLLDS7FJjR1c",
    "funding": "credit",
    "last4": "4242",
    "metadata": {},
    "name": null,
    "tokenization_method": null
  },
  "source_transfer": null,
  "statement_descriptor": null,
  "status": "succeeded",
  "transfer_data": null,
  "transfer_group": null
}


// Redirect to Checkout

stripe.redirectToCheckout({
    items: [
      // Replace with the ID of your SKU
      {sku: 'sku_123', quantity: 1}
    ],
    successUrl: 'https://your-website.com/success',
    cancelUrl: 'https://your-website.com/canceled',
  }).then(function (result) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
  });


  // Create a Charge

{
  "id": "ch_19yUeV2eZvKYlo2CyX5QMa7C",
  "object": "charge",
  "amount": 100,
  "amount_refunded": 0,
  "application": null,
  "application_fee": null,
  "application_fee_amount": null,
  "balance_transaction": "txn_19XJJ02eZvKYlo2ClwuJ1rbA",
  "billing_details": {
    "address": {
      "city": null,
      "country": null,
      "line1": null,
      "line2": null,
      "postal_code": null,
      "state": null
    },
    "email": null,
    "name": null,
    "phone": null
  },
  "captured": true,
  "created": 1489793915,
  "currency": "usd",
  "customer": "cus_AJ6rlf2taOsyXj",
  "description": null,
  "destination": null,
  "dispute": null,
  "failure_code": null,
  "failure_message": null,
  "fraud_details": {},
  "invoice": "in_19yUeV2eZvKYlo2Cry9VbfTK",
  "livemode": false,
  "metadata": {},
  "on_behalf_of": null,
  "order": null,
  "outcome": {
    "network_status": "approved_by_network",
    "reason": null,
    "risk_level": "normal",
    "seller_message": "Payment complete.",
    "type": "authorized"
  },
  "paid": true,
  "payment_intent": null,
  "payment_method": "card_19yUe82eZvKYlo2CF1TgKztz",
  "payment_method_details": {
    "card": {
      "brand": "visa",
      "checks": {
        "address_line1_check": null,
        "address_postal_code_check": null,
        "cvc_check": "pass"
      },
      "country": "US",
      "exp_month": 3,
      "exp_year": 2018,
      "fingerprint": "Xt5EWLLDS7FJjR1c",
      "funding": "credit",
      "last4": "4242",
      "three_d_secure": null,
      "wallet": null
    },
    "type": "card"
  },
  "receipt_email": null,
  "receipt_number": "2748-0083",
  "receipt_url": "https://pay.stripe.com/receipts/acct_1032D82eZvKYlo2C/ch_19yUeV2eZvKYlo2CyX5QMa7C/rcpt_EGj1iRasyUhFuBTezEhxOkf4lYgTbt9",
  "refunded": false,
  "refunds": {
    "object": "list",
    "data": [],
    "has_more": false,
    "total_count": 0,
    "url": "/v1/charges/ch_19yUeV2eZvKYlo2CyX5QMa7C/refunds"
  },
  "review": null,
  "shipping": null,
  "source": {
    "id": "card_19yUe82eZvKYlo2CF1TgKztz",
    "object": "card",
    "address_city": null,
    "address_country": null,
    "address_line1": null,
    "address_line1_check": null,
    "address_line2": null,
    "address_state": null,
    "address_zip": null,
    "address_zip_check": null,
    "brand": "Visa",
    "country": "US",
    "customer": "cus_AJ6rlf2taOsyXj",
    "cvc_check": "pass",
    "dynamic_last4": null,
    "exp_month": 3,
    "exp_year": 2018,
    "fingerprint": "Xt5EWLLDS7FJjR1c",
    "funding": "credit",
    "last4": "4242",
    "metadata": {},
    "name": null,
    "tokenization_method": null
  },
  "source_transfer": null,
  "statement_descriptor": null,
  "status": "succeeded",
  "transfer_data": null,
  "transfer_group": null

Retrieve a Charge 

{
  "id": "ch_19yUeV2eZvKYlo2CyX5QMa7C",
  "object": "charge",
  "amount": 100,
  "amount_refunded": 0,
  "application": null,
  "application_fee": null,
  "application_fee_amount": null,
  "balance_transaction": "txn_19XJJ02eZvKYlo2ClwuJ1rbA",
  "billing_details": {
    "address": {
      "city": null,
      "country": null,
      "line1": null,
      "line2": null,
      "postal_code": null,
      "state": null
    },
    "email": null,
    "name": null,
    "phone": null
  },
  "captured": true,
  "created": 1489793915,
  "currency": "usd",
  "customer": "cus_AJ6rlf2taOsyXj",
  "description": null,
  "destination": null,
  "dispute": null,
  "failure_code": null,
  "failure_message": null,
  "fraud_details": {},
  "invoice": "in_19yUeV2eZvKYlo2Cry9VbfTK",
  "livemode": false,
  "metadata": {},
  "on_behalf_of": null,
  "order": null,
  "outcome": {
    "network_status": "approved_by_network",
    "reason": null,
    "risk_level": "normal",
    "seller_message": "Payment complete.",
    "type": "authorized"
  },
  "paid": true,
  "payment_intent": null,
  "payment_method": "card_19yUe82eZvKYlo2CF1TgKztz",
  "payment_method_details": {
    "card": {
      "brand": "visa",
      "checks": {
        "address_line1_check": null,
        "address_postal_code_check": null,
        "cvc_check": "pass"
      },
      "country": "US",
      "exp_month": 3,
      "exp_year": 2018,
      "fingerprint": "Xt5EWLLDS7FJjR1c",
      "funding": "credit",
      "last4": "4242",
      "three_d_secure": null,
      "wallet": null
    },
    "type": "card"
  },
  "receipt_email": null,
  "receipt_number": "2748-0083",
  "receipt_url": "https://pay.stripe.com/receipts/acct_1032D82eZvKYlo2C/ch_19yUeV2eZvKYlo2CyX5QMa7C/rcpt_EGj1iRasyUhFuBTezEhxOkf4lYgTbt9",
  "refunded": false,
  "refunds": {
    "object": "list",
    "data": [],
    "has_more": false,
    "total_count": 0,
    "url": "/v1/charges/ch_19yUeV2eZvKYlo2CyX5QMa7C/refunds"
  },
  "review": null,
  "shipping": null,
  "source": {
    "id": "card_19yUe82eZvKYlo2CF1TgKztz",
    "object": "card",
    "address_city": null,
    "address_country": null,
    "address_line1": null,
    "address_line1_check": null,
    "address_line2": null,
    "address_state": null,
    "address_zip": null,
    "address_zip_check": null,
    "brand": "Visa",
    "country": "US",
    "customer": "cus_AJ6rlf2taOsyXj",
    "cvc_check": "pass",
    "dynamic_last4": null,
    "exp_month": 3,
    "exp_year": 2018,
    "fingerprint": "Xt5EWLLDS7FJjR1c",
    "funding": "credit",
    "last4": "4242",
    "metadata": {},
    "name": null,
    "tokenization_method": null
  },
  "source_transfer": null,
  "statement_descriptor": null,
  "status": "succeeded",
  "transfer_data": null,
  "transfer_group": null
}


// Card Object: 

{
  "id": "card_1EOD272eZvKYlo2CzsDWnR4Z",
  "object": "card",
  "address_city": null,
  "address_country": null,
  "address_line1": null,
  "address_line1_check": null,
  "address_line2": null,
  "address_state": null,
  "address_zip": null,
  "address_zip_check": null,
  "brand": "Visa",
  "country": "US",
  "customer": null,
  "cvc_check": null,
  "dynamic_last4": null,
  "exp_month": 8,
  "exp_year": 2020,
  "fingerprint": "Xt5EWLLDS7FJjR1c",
  "funding": "credit",
  "last4": "4242",
  "metadata": {},
  "name": null,
  "tokenization_method": null
}


Create Card: 

{
  "id": "card_1EOD272eZvKYlo2CzsDWnR4Z",
  "object": "card",
  "address_city": null,
  "address_country": null,
  "address_line1": null,
  "address_line1_check": null,
  "address_line2": null,
  "address_state": null,
  "address_zip": null,
  "address_zip_check": null,
  "brand": "Visa",
  "country": "US",
  "customer": "cus_ErvgI3p5Wlb2LG",
  "cvc_check": null,
  "dynamic_last4": null,
  "exp_month": 8,
  "exp_year": 2020,
  "fingerprint": "Xt5EWLLDS7FJjR1c",
  "funding": "credit",
  "last4": "4242",
  "metadata": {},
  "name": null,
  "tokenization_method": null
}




// Invoice Objects: 

{
  "id": "in_1Bj7W62eZvKYlo2Co9KYEt61",
  "object": "invoice",
  "amount_due": 1000,
  "amount_paid": 0,
  "amount_remaining": 1000,
  "application_fee_amount": null,
  "attempt_count": 0,
  "attempted": false,
  "auto_advance": true,
  "billing": "send_invoice",
  "billing_reason": null,
  "charge": null,
  "created": 1515682734,
  "currency": "usd",
  "custom_fields": null,
  "customer": "cus_ErvgI3p5Wlb2LG",
  "default_source": null,
  "description": null,
  "discount": null,
  "due_date": 1516287535,
  "ending_balance": 0,
  "footer": null,
  "hosted_invoice_url": "https://pay.stripe.com/invoice/invst_kU2ETYe90IdpBmk3he0V5afZSG",
  "invoice_pdf": "https://pay.stripe.com/invoice/invst_kU2ETYe90IdpBmk3he0V5afZSG/pdf",
  "lines": {
    "data": [
      {
        "id": "sli_e2ee8e313109e2",
        "object": "line_item",
        "amount": 999,
        "currency": "usd",
        "description": "1 × Gold Small (at $9.99 / month)",
        "discountable": true,
        "livemode": false,
        "metadata": {},
        "period": {
          "end": 1557620062,
          "start": 1555028062
        },
        "plan": {
          "id": "gold-small-763",
          "object": "plan",
          "active": true,
          "aggregate_usage": null,
          "amount": 999,
          "billing_scheme": "per_unit",
          "created": 1555019968,
          "currency": "usd",
          "interval": "month",
          "interval_count": 1,
          "livemode": false,
          "metadata": {},
          "nickname": null,
          "product": "prod_ErulW2e8KMBlob",
          "tiers": null,
          "tiers_mode": null,
          "transform_usage": null,
          "trial_period_days": null,
          "usage_type": "licensed"
        },
        "proration": false,
        "quantity": 1,
        "subscription": "sub_ErwwiNl3JNfZld",
        "subscription_item": "si_Erww6dgFcaagRc",
        "type": "subscription"
      }
    ],
    "has_more": false,
    "object": "list",
    "url": "/v1/invoices/in_1Bj7W62eZvKYlo2Co9KYEt61/lines"
  },
  "livemode": false,
  "metadata": {},
  "next_payment_attempt": null,
  "number": "8717A4A-0001",
  "paid": false,
  "period_end": 1515682734,
  "period_start": 1515682734,
  "receipt_number": null,
  "starting_balance": 0,
  "statement_descriptor": null,
  "status": "open",
  "status_transitions": {
    "finalized_at": 1515686335,
    "marked_uncollectible_at": null,
    "paid_at": null,
    "voided_at": null
  },
  "subscription": "sub_C7MEeS3r3gfd66",
  "subtotal": 1000,
  "tax": null,
  "tax_percent": null,
  "total": 1000,
  "webhooks_delivered_at": 1515682734
}


// Create Invoice: 

{
  "id": "ii_1ENoxn2eZvKYlo2CJZXpvhk7",
  "object": "line_item",
  "amount": 12345,
  "currency": "usd",
  "description": "INVOICE ALL THE THINGS",
  "discountable": true,
  "invoice_item": "ii_1ENoxn2eZvKYlo2CJZXpvhk7",
  "livemode": false,
  "metadata": {},
  "period": {
    "end": 1554935535,
    "start": 1554935535
  },
  "plan": null,
  "proration": false,
  "quantity": 1,
  "subscription": null,
  "type": "invoiceitem"

// THEN… 

{
  "id": "in_1Bj7W62eZvKYlo2Co9KYEt61",
  "object": "invoice",
  "amount_due": 1000,
  "amount_paid": 0,
  "amount_remaining": 1000,
  "application_fee_amount": null,
  "attempt_count": 0,
  "attempted": false,
  "auto_advance": true,
  "billing": "send_invoice",
  "billing_reason": null,
  "charge": null,
  "created": 1515682734,
  "currency": "usd",
  "custom_fields": null,
  "customer": "cus_ErvgI3p5Wlb2LG",
  "default_source": null,
  "description": null,
  "discount": null,
  "due_date": 1516287535,
  "ending_balance": 0,
  "footer": null,
  "hosted_invoice_url": "https://pay.stripe.com/invoice/invst_kU2ETYe90IdpBmk3he0V5afZSG",
  "invoice_pdf": "https://pay.stripe.com/invoice/invst_kU2ETYe90IdpBmk3he0V5afZSG/pdf",
  "lines": {
    "data": [
      {
        "id": "ii_1ENoxn2eZvKYlo2CJZXpvhk7",
        "object": "line_item",
        "amount": 1000,
        "currency": "usd",
        "description": "INVOICE ALL THE THINGS",
        "discountable": true,
        "invoice_item": "ii_1ENoxn2eZvKYlo2CJZXpvhk7",
        "livemode": false,
        "metadata": {},
        "period": {
          "end": 1554935535,
          "start": 1554935535
        },
        "plan": null,
        "proration": false,
        "quantity": 1,
        "subscription": null,
        "type": "invoiceitem"
      }
    ],
    "has_more": false,
    "object": "list",
    "url": "/v1/invoices/in_1Bj7W62eZvKYlo2Co9KYEt61/lines"
  },
  "livemode": false,
  "metadata": {},
  "next_payment_attempt": null,
  "number": "8717A4A-0001",
  "paid": false,
  "period_end": 1515682734,
  "period_start": 1515682734,
  "receipt_number": null,
  "starting_balance": 0,
  "statement_descriptor": null,
  "status": "open",
  "status_transitions": {
    "finalized_at": 1515686335,
    "marked_uncollectible_at": null,
    "paid_at": null,
    "voided_at": null
  },
  "subscription": "sub_C7MEeS3r3gfd66",
  "subtotal": 1000,
  "tax": null,
  "tax_percent": null,
  "total": 1000,
  "webhooks_delivered_at": 1515682734
}
