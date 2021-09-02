import React from 'react';
import { Button,Card,CardBody,CardTitle,CardSubtitle,CarDFooter,CardText,Container } from 'reactstrap';

const Type = ({type}) => {
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold"><h3>{type.title}</h3></CardSubtitle>
                <CardText>{type.description}</CardText>
                <Container className="text-center">
                    <Button color="danger">Buy</Button>
                <Button color="warning ml-6">AddToCart</Button>
                </Container>
            </CardBody>
        </Card>

    )
}
export default Type;