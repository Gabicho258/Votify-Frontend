import "./_ProcessCreateLists.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
// import { IList } from "../../../../interfaces";
import { ElectionListItem } from "../../../../components/ElectionListItem/ElectionListItem";
import { useForm, SubmitHandler } from "react-hook-form";
import { useList } from "../../../../hooks/useList";
import { useAlert } from "../../../../hooks/useAlert";

type AddListInputs = {
  title: string;
};

export const ProcessCreateLists = () => {
  const navigate = useNavigate();

  // open and close add list modal
  const [openAddList, setOpenAddList] = useState(false);
  const handleOpenAddList = () => setOpenAddList(true);
  const handleCloseAddList = () => {
    setOpenAddList(false);
    reset();
  };
  const { state } = useLocation();
  // console.log(state);
  // add list form
  const {
    register: registerAddList,
    handleSubmit: handleSubmitAddList,
    formState: { errors: errorsAddList },
    reset,
  } = useForm<AddListInputs>();
  // Custom hooks lists
  const { addCandidate, addList, lists, removeCandidate, removeList } = useList(
    []
  );
  const onSubmitAddList: SubmitHandler<AddListInputs> = async (data) => {
    // submit add list code
    const listToAdd = {
      title: data.title,
      candidates: [],
    };
    addList(listToAdd);
    handleCloseAddList();
  };
  const { SnackbarComponent, showSnackbar } = useAlert();
  if (state === null)
    return <Navigate to={"/process-info-form"} replace={true} />;
  const handleContinue = () => {
    if (lists.length === 0) {
      showSnackbar("Debe agregar al menos una lista.", "warning");
      return;
    }
    for (const list of lists) {
      if (list.candidates.length === 0) {
        showSnackbar(
          "Debe agregar al menos un candidato a cada lista.",
          "warning"
        );
        return;
      }
    }
    navigate("/process-add-voter", { state: { process: state, lists } });
  };

  return (
    <div className="containerProcessCreateLists">
      <SnackbarComponent />
      <div
        className="containerProcessCreateLists__back"
        onClick={() => navigate("/process-info-form", { replace: true })}
      >
        <ArrowBackIcon className="containerProcessCreateLists__back-icon" />
        <div className="containerProcessCreateLists__back-text">Volver</div>
      </div>
      <div className="containerProcessCreateLists__title">Añadir Listas</div>
      <div className="containerProcessCreateLists__add">
        <Button
          variant="outlined"
          className="containerProcessCreateLists__add-button"
          startIcon={<AddIcon />}
          onClick={handleOpenAddList}
        >
          Añadir lista
        </Button>
      </div>
      <div className="containerProcessCreateLists__lists">
        {lists.map((list) => (
          <ElectionListItem
            candidates={list.candidates}
            addCandidate={addCandidate}
            removeCandidate={removeCandidate}
            removeList={removeList}
            key={list.title}
            title={list.title}
          />
        ))}
      </div>
      <div className="containerProcessCreateLists__button">
        <Button
          variant="outlined"
          className="containerProcessCreateLists__button-continue"
          onClick={handleContinue}
        >
          Ir a añadir participantes
        </Button>
      </div>
      <Modal
        className="containerProcessCreateLists__addListModal"
        open={openAddList}
        onClose={handleCloseAddList}
      >
        <div className="containerProcessCreateLists__addListModal-content">
          <div className="containerProcessCreateLists__addListModal-content-title">
            Nueva lista
          </div>
          <form
            onSubmit={handleSubmitAddList(onSubmitAddList)}
            className="containerProcessCreateLists__addListModal-content-form"
          >
            <label
              className="containerProcessCreateLists__addListModal-content-form-label"
              htmlFor="title"
            >
              Título de la lista:
            </label>
            <TextField
              {...registerAddList("title", {
                required: "Título es requerido",
              })}
              className="containerProcessCreateLists__addListModal-content-form-field"
              autoComplete="off"
              placeholder="Ingresar título"
              name="title"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsAddList.title && (
              <div className="containerProcessCreateLists__addListModal-content-form-field-error">
                {errorsAddList.title.message}
              </div>
            )}

            <div className="containerProcessCreateLists__addListModal-content-form-buttons">
              <Button
                variant="outlined"
                className="containerProcessCreateLists__addListModal-content-form-buttons-close"
                onClick={handleCloseAddList}
              >
                Volver
              </Button>
              <Button
                type="submit"
                variant="outlined"
                className="containerProcessCreateLists__addListModal-content-form-buttons-confirm"
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
