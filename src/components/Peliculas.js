import { Container, Table, Button } from 'react-bootstrap';
import PeliculaItem from './PeliculaItem';
import { useState, useEffect } from 'react';


export default function Peliculas() {
    const [peliculas, setPeliculas] = useState([]);
    const [estaCargando, setEstaCargando] = useState(false)

    const simularLlamada = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const response2 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const response3 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const response4 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const response5 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(await response.json());
    }

    useEffect(() => {
        async function obtenerPeliculas() {
            setEstaCargando(true);

            await simularLlamada();

            setPeliculas([
                {
                    id: 1,
                    titulo: "Pelicula 1",
                    genero: "Genero 1",
                },
                {
                    id: 2,
                    titulo: "Pelicula 2",
                    genero: "Genero 2",
                },
                {
                    id: 3,
                    titulo: "Pelicula 3",
                    genero: "Genero 3",
                },
                {
                    id: 4,
                    titulo: "Pelicula 4",
                    genero: "Genero 4",
                },
                {
                    id: 5,
                    titulo: "Pelicula 5",
                    genero: "Genero 5",
                },
            ]);
            setEstaCargando(false);
        }
        obtenerPeliculas();
    }, []);

    return (
        <Container style={{ padding: "10px 0px"}}>
            <div className='d-flex justify-content-between p-2 m-3'>
                <h3> Películas </h3>
                <div>
                    <Button variant="success" className='mx-2'> Agregar Película </Button>
                    <Button variant="success"> Agregar Genero </Button>    
                </div>
            </div>

            { 
                estaCargando ? <h5 className="text-center m-5">Cargando Peliculas...</h5> :

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={{ width: "10%" }}>#</th>
                            <th style={{width: "50%"}}>Titulo</th>
                            <th style={{ width: "10%" }}>Genero</th>
                            <th style={{ width: "30%" }}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            peliculas.map(pelicula => <PeliculaItem key={pelicula.id} item={pelicula} />)
                        }
                    </tbody>
                </Table>
            }
        </Container>
    )
}