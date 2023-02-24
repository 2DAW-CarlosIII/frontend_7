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
    <TextInput source="q" label="Buscar" alwaysOn />,
    <ReferenceInput source="cuidador_id" label="Cuidador" reference="cuidadores" />
    //A rellenar luego
];

export const TarifaList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={tarifaFilters} >
      {isSmall ? (
        <SimpleList
        primaryText={(record) => record.diurna}
        secondaryText={(record) => record.nocturna}
        tertiaryText={(record) => record.festivos}
        >
          <EditButton />
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false}>
          <TextField source="id" />
          <ReferenceField source="cuidador_id" reference="cuidadores" />
          <TextField source="diurna" />
          <TextField source="nocturna" />
          <TextField source="festivos" />
          <TextField source="personalizada" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
}

const TarifaTitle = () => {
  const record = useRecordContext();
  return <span>Tarifa {record ? `"${record.diurna}"` : ''}</span>;
};

export const TarifaEdit = () => (
    <Edit title={<TarifaTitle />}>
    <SimpleForm>
        <TextInput source="id" disabled />
        <ReferenceField source="cuidador_id" reference="cuidadores" />
        <TextField source="diurna" />
        <TextField source="nocturna" />
        <TextField source="festivos" />
        <TextField source="personalizada" />
    </SimpleForm>
    </Edit>
);

export const TarifaCreate = () => (
    <Create>
        <SimpleForm>
        <ReferenceField source="cuidador_id" reference="cuidadores" />
        <TextField source="diurna" />
        <TextField source="nocturna" />
        <TextField source="festivos" />
        <TextField source="personalizada" />
        </SimpleForm>
    </Create>
);