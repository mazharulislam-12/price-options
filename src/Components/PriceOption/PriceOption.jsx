import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='bg-blue-500 flex flex-col rounded-lg p-6 text-white '>
            <h2 className='text-center'>
                <span className='text-6xl font-bold'>{price} </span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='p-6 flex-grow'>
            {
                features.map((feature,index)=> <Feature key={feature.index} feature={feature}></Feature>)
            }
            </div>

            <button className='mt-12 bg-green-600 px-3 py-2 rounded-lg w-full font-bold hover:bg-green-900 transition'>Buy Now</button>

        </div>
    );
};

PriceOption.PropTypes = {
    feature:PropTypes.string
}
export default PriceOption;