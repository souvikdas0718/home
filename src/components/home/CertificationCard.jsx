import React from 'react';

import {Col} from "react-bootstrap";

const CertificationCard = ({data}) => {
    return (
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className="d-block w-100"
                     src={data.certificatelogo}
                     width="615"
                     height="450"
                     alt=""/>

                <p className="lead">
                    {data.certificate}
                    <br/>
                    {data.date}
                </p>

            </div>
        </Col>
    );
}

export default CertificationCard;
