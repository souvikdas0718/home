import React from 'react';
import CertificationCard from "./CertificationCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Certification = ({certifications}) => {
    console.log("Certification data: "+certifications.data)
    return (
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {certifications.heading}
                    </h2>
                    <Row>
                        {
                            certifications.data.map(data => {
                                // console.log(data)
                                return <CertificationCard key={data.certifications} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}

export default Certification;
