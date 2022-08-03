import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './Pokemons.css';
import DUMMY_POKEMONS from '../data/DUMMY_POKEMONS';

class Pokemons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: []
        }
    }

    componentDidMount() {
        this.setState({ pokemons: DUMMY_POKEMONS });
        // axios.get(`https://pokeapi.co/api/v2/pokemon`)
        //     .then(res => {
        //         const pokemons = res.data;
        //         this.setState({ pokemons });
        //     });
    }

    render() {
        console.log(this.state);
        const { pokemons } = this.state;
        return (
            <Container className="pt-5 pb-5">
                <Row xs={1} md={3} lg={4} xl={5} className="g-3">
                    {pokemons && pokemons.length && pokemons.map((pokemon, index) =>
                        <Col key={index}>
                            <Link
                                to={`/details/${pokemon.name}`}
                                className="pokemon-link"
                            >
                                <Card className="pokemon-card">
                                    <Card.Body>
                                        <Card.Title className="m-0 text-center">
                                            {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    )}
                </Row>
            </Container>
        );
    }
}

export default Pokemons;