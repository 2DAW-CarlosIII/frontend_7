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

import { useRecordContext } from 'react-admin';
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
          <ReferenceField source="cuidador_id" reference="cuidadores" >
            <TextField source="nombre" />
          </ReferenceField>
          <TextField source="diurna" />
          <TextField source="nocturna" />
          <TextField source="festivos" />S
          <TextField source="personalizada" />
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
      <ReferenceInput source="cuidador_id" reference="cuidadores" />
      <TextInput source="diurna" />
      <TextInput source="nocturna" />
      <TextInput source="festivos" />
      <TextInput source="personalizada" />
    </SimpleForm>
  </Edit>
);

export const TarifaCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="cuidador_id" reference="cuidadores" />
      <TextInput source="diurna" />
      <TextInput source="nocturna" />
      <TextInput source="festivos" />
      <TextInput source="personalizada" />
    </SimpleForm>
  </Create>
);