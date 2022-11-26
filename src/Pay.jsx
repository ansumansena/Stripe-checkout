import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const vibebuylogo = require("./vibebuylogo.jpg");
const KEY = "pk_test_51M6yZBSFADHBhWn7EitMdqa1lIjfVs7tfAjxMFqhSMaDJVYFU93sAllxsoI8LHzr8N8z5ny3E7d0QvAo5vH5ITih00KC9FKbfp";

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post("http://localhost:5000/api/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 10000,
                    },);
                console.log(res.data);
                navigate("/success");
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, navigate]);

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            {stripeToken ? (<span>Processing. Please wait.....</span>) : (

                <StripeCheckout
                    name="VIBEBUY"
                    image={vibebuylogo}
                    billingAddress
                    shippingAddress
                    description='Your total is $100'
                    amount={10000}
                    token={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style={{
                            border: "none",
                            width: 120,
                            borderRadius: 5,
                            padding: "20px",
                            backgroundColor: "black",
                            color: "white",
                            fontWeight: "600",
                            cursor: "pointer"
                        }}>
                        Pay Now
                    </button>
                </StripeCheckout>
            )}
        </div>
    )
}

export default Pay;







