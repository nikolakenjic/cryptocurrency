import { useDispatch } from 'react-redux';
import Wrapper from '../assets/wrappers/Backdrop';
import { setCloseModal } from '../store/slices/ui-slice';

const Backdrop = () => {
  const dispatch = useDispatch();

  return <Wrapper onClick={() => dispatch(setCloseModal())} />;
};

export default Backdrop;
