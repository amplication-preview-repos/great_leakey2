import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

export const ClaraEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
