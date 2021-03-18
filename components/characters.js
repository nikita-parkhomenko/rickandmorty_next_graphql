
// outsource dependencies
import React from 'react';
import Image from 'next/image';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Col
} from 'reactstrap';

const Characters = ({ characters }) => {
    return (
        <>
            {characters.map(character => (
                <Col xs="12" md="6" lg="4" key={character.id}>
                    <Card className="mb-3">
                        <CardBody>
                            <CardTitle tag="h5">{character.name}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Origin: {character.origin.name}</CardSubtitle>
                        </CardBody>
                        <Image src={character.image} alt="Character image" width={300} height={300}/>
                        <CardBody>
                            <CardText>Location: {character.location.name}</CardText>
                            <CardLink href="#">Card Link</CardLink>
                            <CardLink href="#">Another Link</CardLink>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}

export default Characters;
