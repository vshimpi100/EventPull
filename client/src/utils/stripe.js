<script type="text/javascript" src="https://d.io/embed/v1" async defer></script>
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