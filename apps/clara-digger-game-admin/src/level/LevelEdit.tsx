import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const LevelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput step={1} label="number" source="numberField" />
      </SimpleForm>
    </Edit>
  );
};
