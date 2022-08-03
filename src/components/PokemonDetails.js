import React, { Component } from 'react';
import axios from 'axios';
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

class PokemonDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonName: window.location.pathname.split('/')[2],
            abilities: [],
            types: [],
            image: "",
            stats: []
        }
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
            .then(res => {
                const { abilities, types, sprites, stats } = res.data;

                this.setState({
                    abilities: abilities?.map(a => a.ability.name),
                    types: types?.map(t => t.type.name),
                    image: sprites?.other["official-artwork"].front_default,
                    stats: stats?.map(s => ({
                        name: s.stat.name,
                        base_stat: s.base_stat
                    }))
                });
            });
    }

    render() {
        const { pokemonName, abilities, types, image, stats } = this.state;
        console.log(image);
        return (
            <div className="p-5">
                <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
                    {image !== ""
                    ? <Image src={image} style={{ width: '300px' }}/>
                    : <Spinner animation="border" />}
                    <div>
                        <h3>Name: {pokemonName[0].toUpperCase() + pokemonName.slice(1)}</h3>
                        <span>Type(s): {types?.map(t => t[0].toUpperCase() + t.slice(1)).join(', ')}</span>
                        <br></br>
                        <span>Abilities: {abilities?.map(a => a[0].toUpperCase() + a.slice(1)).join(', ')}</span>
                    </div>
                </div>
                <div className="mt-3">
                    <h3>Stats</h3>
                    <Table
                        striped
                        bordered
                        hover
                        style={{ width: "300px" }}
                    >
                        <tbody>
                            {stats?.map(s => {
                                return (
                                    <tr>
                                        <td>{s.name}</td>
                                        <td>{s.base_stat}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default PokemonDetails;