import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/validation";
import inputTemplate from "./templates/input";

export const LoginStruct = t.struct({
  email: formValidation.email,
  password: formValidation.password
});

export const LoginOptions = {
  fields: {
    email: {
      template: inputTemplate,
      config: {
        placeholder: "Escribe tu Email",
        iconName: "at",
        iconType: "material-community"
      }
    },
    password: {
      template: inputTemplate,
      config: {
        password: true,
        placeholder: "Escribe tu contraseña",
        iconName: "lock-outline",
        iconType: "material-community",
        secureTextEntry: true
      }
    }
  }
};
