import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const GoldSackCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="isOnGround" source="isOnGround" />
        <NumberInput step={1} label="positionX" source="positionX" />
        <NumberInput step={1} label="positionY" source="positionY" />
        <SelectInput
          source="state"
          label="state"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
