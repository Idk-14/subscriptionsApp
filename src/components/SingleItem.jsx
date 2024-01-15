import { moneyFormat } from "../helpers";

const SingleItem = ({ price, type, id, eliminarItem, editItem }) => {
    
    const HandleDelete = (e) =>{
        e.preventDefault();

        const answer = window.confirm(`Borrar Suscripcion a ${type}`);

        if(answer){
            eliminarItem(id);
        }
    }

    const HandleEdit = e => {
        e.preventDefault()
        editItem(id);
    }


    const urlImage = `/src/images/${type}.png`;
    
    return ( 
        <div className="single-item">
            <img src={urlImage} alt="Services"/> 
            <h3>Precio: {moneyFormat(Number(price))}</h3>
            <a href="" onClick={HandleEdit}>Editar</a>
            <a href="" onClick={HandleDelete}>Borrar</a>
        </div>
     );
}
 
export default SingleItem;