import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    setTimeout(() => { history.push('/dashboard') }, 200);
};
   
export default Logout;