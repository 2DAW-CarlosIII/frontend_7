import { useState } from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit, UserCreate } from 'components/react-admin/users';
import { CustomerList, CustomerEdit, CustomerCreate } from 'components/react-admin/customers';

import { HospitalList } from 'components/react-admin/hospitales'

import { CuidadorList, CuidadorEdit, CuidadorCreate } from 'components/react-admin/cuidadores';
import { ResidenciaList, ResidenciaEdit, ResidenciaCreate } from 'components/react-admin/residencias';
import { TarifaList, TarifaEdit, TarifaCreate } from 'components/react-admin/tarifas';

import jsonapiClient from 'ra-jsonapi-client';

import UserIcon from '@mui/icons-material/Group';
import CustomerIcon from '@mui/icons-material/AccountCircle';
import CuidadorIcon from '@mui/icons-material/Favorite';
import ResidenciaIcon from '@mui/icons-material/Apartment';
import TarifaIcon from '@mui/icons-material/AttachMoney';

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

    let auth = JSON.parse(localStorage.getItem('auth'))
    let settings = {}
    if (auth) {
      settings = {
        headers: {
          Authorization: `${auth.token_type} ${auth.access_token}`,
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    }
    handleDataProvider(jsonapiClient(API_URL, settings))
  }

  return (
    <Admin
      basename="/dashboard"
      dataProvider={dataProvider}
      authProvider={AuthProvider}
      loginPage={myLogin}
    >
      <Resource name="customers" list={CustomerList} icon={CustomerIcon} edit={CustomerEdit} create={CustomerCreate} />
      <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
      <Resource name="cuidadores" list={CuidadorList} edit={CuidadorEdit} create={CuidadorCreate} icon={CuidadorIcon} />
      <Resource name="residencias" list={ResidenciaList} icon={ResidenciaIcon}
        edit={ResidenciaEdit} create={ResidenciaCreate} />
      <Resource name="tarifas" list={TarifaList} icon={TarifaIcon}
        edit={TarifaEdit} create={TarifaCreate} />
      <Resource name="hospitales" list={HospitalList} icon={ResidenciaIcon} />
    </Admin>
  )
}

export default RAdmin;
