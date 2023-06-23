import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
            // document.cookie = 'jwt=; Max-Age=0; path=/; domain=http://localhost:3000/';
    navigate("/")
    }, []);
}
 
export default Logout;