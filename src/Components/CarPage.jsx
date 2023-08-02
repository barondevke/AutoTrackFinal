import React from "react";
import { Row, Col } from "react-bootstrap";

export default function CarPage() {

    return (
        <div>
            <img className="carImage" src="https://images7.alphacoders.com/528/528732.jpg"></img>
            <Row className="carInfo">
                <Col  >
                    <h3 className="carName">Car name</h3>
                    <h4 className="carLocation">Location: Nairobi, Central</h4>
                </Col>
                <Col className="carPrice"  >
                    <h1>Ksh 200000</h1>
                    <h4 className="carRating">Rating</h4>
                </Col>
            </Row>
            <Row>
                <Col className="stats">
                    <Row>
                        <Col>
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                        </Col>
                        <Col className="rightStats">
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                            <h6>Stats</h6>
                        </Col>

                    </Row>


                </Col>
            </Row>
            <Row>
                <Col>
                    <button>Buy Now</button>
                </Col>
            </Row>



        </div>
    )
}