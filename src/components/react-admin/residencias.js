// in src/components/react-admin/residencias.js

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

const residenciaFilters = [
    <TextInput source="q" label="Buscar" alwaysOn />
    //A rellenar luego
];

export const ResidenciaList = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    return (
      <List filters={residenciaFilters} >
        {isSmall ? (
          <SimpleList
            primaryText={(record) => record.nombre}
            secondaryText={(record) => record.telefono}
            tertiaryText={(record) => record.direccion}
          >
           <EditButton />
          </SimpleList>
        ) : (
          <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <TextField source="nombre" />
            <TextField source="CIF" />
            <TextField source="direccion" />
            <TextField source="cp" />
            <TextField source="localidad" />
            <TextField source="telefono" />
            <TextField source="email" />
            <EditButton />
          </Datagrid>
        )}
      </List>
    );
  }

  const ResidenciaTitle = () => {
    const record = useRecordContext();
    return <span>Residencia {record ? `"${record.nombre}"` : ''}</span>;
  };

  export const ResidenciaEdit = () => (
    <Edit title={<ResidenciaTitle />}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="nombre" />
      <TextInput source="CIF" />
      <TextInput source="direccion" />
      <TextInput source="cp" />
      <TextInput source="localidad" />
      <TextInput source="telefono" />
      <TextInput source="email" />
    </SimpleForm>
    </Edit>
);

export const ResidenciaCreate = () => (
  <Create>
      <SimpleForm>
        <TextInput source="id"/>
        <TextInput source="nombre" />
        <TextInput source="CIF" />
        <TextInput source="direccion" />
        <TextInput source="cp" />
        <TextInput source="localidad" />
        <TextInput source="telefono" />
        <TextInput source="email" />
      </SimpleForm>
  </Create>
  );