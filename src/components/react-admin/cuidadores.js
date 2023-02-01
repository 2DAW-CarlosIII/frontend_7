// in src/components/react-admin/cuidadores.js

import {
    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    TextInput
} from 'react-admin';

import{ useRecordContext} from 'react-admin';
import {useMediaQuery} from '@mui/material';

const cuidadorFilters = [
    <TextInput source="q" label="Buscar" alwaysOn />
    //A rellenar luego
];

export const CuidadorList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
      <List filters={cuidadorFilters} >
        {isSmall ? (
          <SimpleList
            primaryText={(record) => record.nombre}
            secondaryText={(record) => record.apellidos}
            tertiaryText={(record) => record.dni}
          >
          </SimpleList>
        ) : (
          <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <ReferenceField source="user_id" reference="users" />
            <TextField source="nombre" />
            <TextField source="apellidos" />
            <TextField source="dni" />
            <TextField source="telefono" />
            <TextField source="email" />
            <TextField source="Domicilio" />
            <TextField source="Comunidad" />
            <TextField source="email" />
            <EditButton />
          </Datagrid>
        )}
      </List>
    );
  }