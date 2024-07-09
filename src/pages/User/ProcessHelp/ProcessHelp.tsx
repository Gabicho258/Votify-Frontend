import { Button } from "@mui/material";
import "./_ProcessHelp.scss";

export const ProcessHelp = () => {
  return (
    <div className="processHelpContainer">
      <div className="processHelpContainer__content">
        <h2 className="processHelpContainer__content-title">Consideraciones</h2>
        <p className="processHelpContainer__content-indication">
          <ul>
            <li>
              Antes de confirmar sus votos y pasar a la siguiente lista
              asegúrese que sea el correcto.
            </li>
            <li>
              Una vez presione en "Comenzar" dispondrá de 10 minutos para votar.
            </li>
            <li>
              Una vez haya realizado sus votos se mostrará un resumen para que
              verifique que sean los correctos, caso contrario puede volver a
              editar sus votos presionando en "Editar mis votos".
            </li>
            <li>
              Para finalizar debe presionar en "Confirmar mis votos" para enviar
              y confirmar sus votos.
            </li>
          </ul>
        </p>
        <div>
          <Button
            className="processHelpContainer__content-button"
            variant={"contained"}
          >
            Comenzar
          </Button>
        </div>
      </div>
    </div>
  );
};
