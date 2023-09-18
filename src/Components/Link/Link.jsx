import PropTypes from 'prop-types';
const Link = ({route}) => {
  return (
    <li className=' px-6 mr-10 hover:bg-yellow-500 rounded-md py-2'>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.protoTypes = {
    route: PropTypes.object
}

export default Link;
