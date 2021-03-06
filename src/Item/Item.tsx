import Button from '@material-ui/core/Button';
//Types
import {CartItemType} from '../App';
//Styles
import {Wrapper} from './Item.styles';


type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

//typescrip fc with props
const Item: React.FC<Props>  = ({ item, handleAddToCart}) =>  (
    <Wrapper>
        <img src= {item.image} alt={item.title}></img> 
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={ () => handleAddToCart(item)} >Add To Cart</Button>
    </Wrapper>
);


export default Item;