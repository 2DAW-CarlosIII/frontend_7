import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/auth'
import reactLogo from 'images/logo512.png';

function Home() {
  const { user } = useAuth({ middleware: 'guest' })

  return (
   
  );
}

export default Home;
