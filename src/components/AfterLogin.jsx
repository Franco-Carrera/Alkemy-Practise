import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const AfterLogin = () => {
  const history = useHistory();

  const onSuccessfulRequest = (userData, token) => {
    // Método a ejecutar si la petición se realiza correctamente

    let user = userData;
    user = "user";

    let data = token;
    data = "token";

    localStorage.setItem(data, user);
    history.replace("/home");
    console.log("Realize el buen request correctamente!");
    Swal.fire({
      title: "Sus datos personales fueron validados satisfactoriamente.",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok!",
    });
  };

  const onFailedRequest = () => {
    // Método a ejecutar si la petición falla
    Swal.fire({
      title: "Nombre de usuario o contraseña incorrectos",
      text: "Lo sentimos. Sus datos personales son inválidos. Revise correctamente y vuelva a intentarlo",
      icon: "error",
      confirmButtonColor: "#ff0000",
      confirmButtonText: "OK",
      toast: true,
    });
  };

  return (
    <>
      <h1>Sección de verificación</h1>

      <button onClick={() => onSuccessfulRequest()}>
        Successfully request
      </button>

      <button onClick={() => onFailedRequest()}>Failed request</button>
    </>
  );
};

export default AfterLogin;
