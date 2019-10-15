import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/validation";

export const RegisterStruct = t.struct({
  name: t.String,
  email: formValidation.email,
  password: formValidation.password,
  passwordConfirmation: formValidation.password
});

export const RegisterOptions = {
  fields: {
    name: {
      label: "Nombre (*)"
    }
  }
};
