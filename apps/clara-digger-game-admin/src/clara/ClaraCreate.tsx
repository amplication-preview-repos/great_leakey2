import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

export const ClaraCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currentLevel" source="currentLevel" />
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
      </SimpleForm>
    </Create>
  );
};
