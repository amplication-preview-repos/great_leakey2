import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const LeafEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="positionX" source="positionX" />
        <NumberInput step={1} label="positionY" source="positionY" />
      </SimpleForm>
    </Edit>
  );
};