
import React from 'react';
import {
    PayPalScriptProvider,
    PayPalButtons,
} from "@paypal/react-paypal-js";

const Payment = () => {
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "13.99"
                    }
                }
            ]
        });
    };

    const onApprove = (data, actions) => {
        // This function captures the funds from the transaction.
        return fetch("/my-server/capture-paypal-order", {
            method: "POST",
            body: JSON.stringify({
                orderID: data.orderID
            })
        })
            .then((response) => response.json())
            .then((details) => {
                // This function shows a transaction success message to your buyer.
                alert('Transaction completed by ' + details.payer.name.given_name);
            });
    };

    return (
        <div className='button'>
            <PayPalScriptProvider
                options={{
                    "client-id": "AdcnuG4Y1-YrxVE0d_-wadGsl03kmKZUmhJFlaZH10QRDhWo3E5LgF7RC0FvBpw177HHl6ovoJLj9y2u"
                }}
            >
                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </PayPalScriptProvider>
        </div>
    );
};

export default Payment;