import React from "react";
import t from "tcomb-form-native";
import formValidation from "../utils/validation";
import inputTemplate from "./templates/input";

export const RegisterStruct = t.struct({
  name: t.String,
  email: formValidation.email,
  password: formValidation.password,
  passwordConfirmation: formValidation.password
});

export const RegisterOptions = {
  fields: {
    name: {
      template: inputTemplate,
      config: {
        placeholder: "Escribe tu nombre y apellido",
        iconName: "account-outline",
        iconType: "material-community"
      }
    },
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
        placeholder: "Escribe tu contraseña",
        password: true,
        secureTextEntry: true,
        iconName: "lock-outline",
        iconType: "material-community"
      }
    },
    passwordConfirmation: {
      template: inputTemplate,
      config: {
        placeholder: "Repite tu contraseña",
        password: true,
        secureTextEntry: true,
        iconName: "lock-reset",
        iconType: "material-community"
      }
    }
  }
};
