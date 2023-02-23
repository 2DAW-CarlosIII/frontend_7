// in src/components/react-admin/tarifas.js
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

import { useRecordContext} from 'react-admin';
import { useMediaQuery } from '@mui/material';

const tarifaFilters = [
    <TextInput source="q" label="Buscar" alwaysOn />
    //A rellenar luego
];

export const TarifaList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={tarifaFilters} >
      {isSmall ? (
        <SimpleList
        primaryText={(record) => record.nombre}
        secondaryText={(record) => record.precio}
        tertiaryText={(record) => record.extras}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false}>
          <TextField source="id" />
          <TextField source="nombre" />
          <TextField source="precio" />
          <TextField source="extras" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const TarifaTitle = () => {
  const record = useRecordContext();
  return <span>Tarifa {record ? `"${record.nombre}"` : ''}</span>;
};

export const TarifaEdit = () => (
    <Edit title={<TarifaTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="nombre" />
        <TextInput source="precio" />
        <TextInput source="extras" />
    </SimpleForm>
    </Edit>
);

export const TarifaCreate = () => (
    <Create>
        <SimpleForm>
          <TextInput source="nombre" />
          <TextInput source="precio" />
          <TextInput source="extras" />
        </SimpleForm>
    </Create>
);