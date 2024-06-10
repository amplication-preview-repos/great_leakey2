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

export const GoldSackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GoldSacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isOnGround" source="isOnGround" />
        <TextField label="positionX" source="positionX" />
        <TextField label="positionY" source="positionY" />
        <TextField label="state" source="state" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
