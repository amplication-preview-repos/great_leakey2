import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const GhostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="direction"
          label="direction"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="isDead" source="isDead" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="speed" source="speed" />
      </SimpleForm>
    </Edit>
  );
};
