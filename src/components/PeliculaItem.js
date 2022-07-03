import { Button } from 'react-bootstrap';

export default function PeliculaItem(props) {
    return (
        <tr>
            <td>{ props.item.id }</td>
            <td>{ props.item.titulo }</td>
            <td>{ props.item.genero }</td>

            <td>
                <Button variant="primary" className='mx-2'> Editar </Button>
                <Button variant="danger"> Eliminar </Button>    
            </td>
        </tr>
    );
}