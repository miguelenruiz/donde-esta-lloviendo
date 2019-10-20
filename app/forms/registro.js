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
      label: "Nombre (*)",
      placeholder: "Escribe tu nombre y apellido",
      error: "Nombre invalido"
    },
    email: {
      label: "Email (*)",
      placeholder: "Escribe tu Email",
      error: "Email invalido"
    },
    password: {
      label: "Contraseña (*)",
      placeholder: "Escribe tu Contraseña",
      error: "Contraseña invalida",
      secureTextEntry: true
    },
    passwordConfirmation: {
      label: "Contraseña (*)",
      placeholder: "Repite tu Contraseña",
      error: "Contraseña invalida",
      secureTextEntry: true
    }
  }
};
