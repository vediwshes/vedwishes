import React, { Component } from 'react'

export default class Customer extends Component {
    render() {
        return (
            <div className="section--customer section-space secion-padding-0T" id="customer">
                <div className="container">
                    <h2 className="section--title">Trustee Customer</h2>
                    <div className="customer-wrap">
                        <img className="customer" src="./images/customer/robogear.jpg" alt="ROBOGEAR TECHNOLOGIES LLP" title="ROBOGEAR TECHNOLOGIES LLP"/>
                        <img className="customer" src="./images/customer/phoenix.jpg" alt="PHOENIX" title="PHOENIX" style={{width: '266px', border: '1px solid #d3d3d3',marginLeft:'15px'}}/>
                    </div>
                </div>
            </div>
        )
    }
}
