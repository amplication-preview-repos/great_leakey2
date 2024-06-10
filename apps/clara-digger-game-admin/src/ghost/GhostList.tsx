import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const GhostList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ghosts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="direction" source="direction" />
        <TextField label="ID" source="id" />
        <BooleanField label="isDead" source="isDead" />
        <TextField label="name" source="name" />
        <TextField label="speed" source="speed" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
