import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price})=>{
	const priceForStripe = price*100;
	const publishableKey = "pk_test_51IX59eSHO02JcT4KWb9Oe5zT0HnQvbC73ee7hE0sgFZ2IilcrPeYNgrNl42VIUc2XWsitFLrEO4oENkeWqfmGclz00azTp3ZOk"

	const onToken = token => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token: token
			}
		}).then(response => {
			alert("Payment Success");
		}).catch(error => {
			console.log('Payment error: ', error);
			alert('There was issue with your payment');
		})
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