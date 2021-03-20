import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price})=>{
	const priceForStripe = price*100;
	const publishableKey = "pk_test_51IX59eSHO02JcT4KWb9Oe5zT0HnQvbC73ee7hE0sgFZ2IilcrPeYNgrNl42VIUc2XWsitFLrEO4oENkeWqfmGclz00azTp3ZOk"

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	}

	return(
		<StripeCheckout 
			label="Pay Now"
			name="Apparel Clothing Ltd"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;