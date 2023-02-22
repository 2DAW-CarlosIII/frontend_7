// in src/components/react-admin/hospitales.js
import {

    List,
    SimpleList,
    Datagrid,
    TextField,
    ReferenceField,
    TextInput
  } from 'react-admin';
  
  import { useRecordContext} from 'react-admin';
  import { useMediaQuery } from '@mui/material';
  
  const hospitalFilters = [
  
    <TextInput source="q" label="Search" alwaysOn />
  ];
  
  export const HospitalList = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
    <List filters={hospitalFilters} >
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.nombre}
          secondaryText={(record) => record.municipio}
          tertiaryText={(record) => record.telefono}
          linkType={(record) => 'show'}
        >
        </SimpleList>
      ) : (
        <Datagrid bulkActionButtons={false} >
          <TextField source="nombre" />
          <TextField source="municipio" />
          <TextField source="direccion" />
          <TextField source="telefono" />
        </Datagrid>
      )}
    </List>
  );
  
    }