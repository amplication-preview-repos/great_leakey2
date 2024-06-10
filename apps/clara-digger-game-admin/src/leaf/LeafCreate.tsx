import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const LeafCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="positionX" source="positionX" />
        <NumberInput step={1} label="positionY" source="positionY" />
      </SimpleForm>
    </Create>
  );
};
