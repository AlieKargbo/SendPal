import React from 'react';
import { Link } from 'react-router-dom';

class PaymentForm extends React.Component {

    render() {

        return (
            <div>
                <h1>Payment Form</h1>
                <form action="">
                    <label htmlFor=""> Pal:</label>
                    <input type="text"/>
                    <button>Continue</button>
                </form>
            </div>
        )
    }
};

export default PaymentForm;