import { useState } from 'react';
import { Admin, Resource } from 'react-admin';
import { useState } from 'react';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserCreate } from 'components/react-admin/users';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';
import { ArtworkList} from 'components/react-admin/artworks';

import { CuidadorList, CuidadorEdit, CuidadorCreate } from 'components/react-admin/cuidadores';


//TODO eliminar las dos líneas siguientes
import { PostList, PostEdit, PostCreate } from 'components/react-admin/posts';
import { MigrationList, MigrationEdit, MigrationCreate } from 'components/react-admin/migrations';

import jsonapiClient from 'ra-jsonapi-client';

import PostIcon from '@mui/icons-material/Book';

import UserIcon from '@mui/icons-material/Group';
import ArtworkIcon from '@mui/icons-material/Palette';
import MigrationIcon from '@mui/icons-material/Storage';
import CustomerIcon from '@mui/icons-material/SupportAgent';
import ArtworkIcon from '@mui/icons-material/Palette';

import { default as Login } from 'pages/login';
import { default as AuthProvider } from 'components/react-admin/authProvider';
import { AdminLayout } from 'components/react-admin/adminLayout';

//Si le quitamos el records a la linea de abaoj, trabajaremos con los controladores de laravel.
//Esta es para php crud api
//const dataProvider = jsonServerProvider('http://encuentro.test/api');

//Este para Laravel Controllers
const dataProvider = jsonapiClient('http://encuentro.test/api');

const RAdmin = () => {

  
  function handleDataProvider(dataProvider) {
    setDataProvider(() => dataProvider)
  }

  const myLogin = <Login handleDataProvider={handleDataProvider} />
  const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`
  const [dataProvider, setDataProvider] = useState(null)

  if (!dataProvider) {
    handleDataProvider(jsonapiClient(API_URL))
  }

  return(
  <Admin
    basename="/dashboard"
    dataProvider={dataProvider}
    authProvider={AuthProvider}
    loginPage={myLogin}
  >
    <Resource name="customers" list={CustomerList} icon={CustomerIcon} edit={CustomerEdit} create={CustomerCreate} />

    <Resource name="artworks" list={ArtworkList} icon={ArtworkIcon} />

    <Resource name="migrations"
      list={MigrationList} icon={MigrationIcon} edit={MigrationEdit} create={MigrationCreate}/>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
    <Resource name="artworks" list={ArtworkList} icon={ArtworkIcon} />
    <Resource name="cuidadores" list={CuidadorList} edit={CuidadorEdit} create={CuidadorCreate} icon={PostIcon} />
  </Admin>
)
}

export default RAdmin;
