import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import Item from '../Item/Item'

const ItemList =({Products}) => {
    return (
        <div className='ListGroup'>
            {Products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList