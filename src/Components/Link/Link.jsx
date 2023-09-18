import PropTypes from 'prop-types';
const Link = ({route}) => {
  return (
    <li className=' px-6 mr-10 hover:bg-yellow-500'>
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.protoTypes = {
    route: PropTypes.object
}

export default Link;
