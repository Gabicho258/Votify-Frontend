import { useState } from "react";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "./_ElectionListItem.scss";
import { ICandidate } from "../../interfaces";
import { CandidateListItem } from "../CandidateListItem/CandidateListItem";
import { useForm, SubmitHandler } from "react-hook-form";

type ElectionListItemInputs = {
  title: string;
  candidates: ICandidate[];
  addCandidate: (listTitle: string, candidate: ICandidate) => void;
  removeCandidate: (listTitle: string, candidateName: string) => void;
  removeList: (listTitle: string) => void;
};

type AddCandidateInputs = {
  candidate_name: string;
  organization_name: string;
};

export const ElectionListItem = ({
  title,
  addCandidate,
  removeCandidate,
  removeList,
  candidates,
}: ElectionListItemInputs) => {
  // const [options, setOptions] = useState<ICandidate[]>([]);
  const [isCandidatePhotoLoaded, setIsCandidatePhotoLoaded] = useState(false);
  const [isOrganizationPhotoLoaded, setIsOrganizationPhotoLoaded] =
    useState(true);

  // open and close add candidate modal
  const [openAddCandidate, setOpenAddCandidate] = useState(false);
  const handleOpenAddCandidate = () => setOpenAddCandidate(true);
  const handleCloseAddCandidate = () => {
    setOpenAddCandidate(false);
    reset();
  };

  // add candidate form
  const {
    register: registerAddCandidate,
    handleSubmit: handleSubmitAddCandidate,
    formState: { errors: errorsAddCandidate },
    reset,
  } = useForm<AddCandidateInputs>();

  const onSubmitAddCandidate: SubmitHandler<AddCandidateInputs> = async (
    data
  ) => {
    // submit add candidate code
    const candidateToAdd = {
      ...data,
      photo_url:
        "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",

      logo_url:
        "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
      valid_votes: 0,
    };
    addCandidate(title, candidateToAdd);
    handleCloseAddCandidate();
    console.log(candidateToAdd);
  };

  const testCandidate: ICandidate = {
    _id: "c1a2b3c4d5e6f7g8h9i0j",
    list_id: "list123",
    candidate_name: "Alice Johnson",

    organization_name: "Tech Innovators",
  };

  return (
    <div className="containerElectionListItem">
      <div className="containerElectionListItem__title">{title}</div>
      <div className="containerElectionListItem__options">
        {candidates.map((option) => (
          <CandidateListItem
            key={option.candidate_name}
            listTitle={title}
            candidate={option}
            removeCandidate={removeCandidate}
          />
        ))}
      </div>
      <div className="containerElectionListItem__buttons">
        <Button
          variant="outlined"
          className="containerElectionListItem__buttons-add"
          startIcon={<AddIcon />}
          onClick={() => {
            handleOpenAddCandidate();
            // setOptions([...options, testCandidate]);
          }}
        >
          Añadir opción
        </Button>
        <Button
          variant="outlined"
          className="containerElectionListItem__buttons-delete"
          startIcon={<DeleteIcon />}
          onClick={() => {
            removeList(title);
          }}
        >
          Eliminar lista
        </Button>
      </div>
      <Modal
        className="containerElectionListItem__addCandidateModal"
        open={openAddCandidate}
        onClose={handleCloseAddCandidate}
      >
        <div className="containerElectionListItem__addCandidateModal-content">
          <div className="containerElectionListItem__addCandidateModal-content-title">
            Nueva opción
          </div>
          <form
            onSubmit={handleSubmitAddCandidate(onSubmitAddCandidate)}
            className="containerElectionListItem__addCandidateModal-content-form"
          >
            <label
              className="containerElectionListItem__addCandidateModal-content-form-label"
              htmlFor="candidate_name"
            >
              Nombres y Apellidos:
            </label>
            <TextField
              {...registerAddCandidate("candidate_name", {
                required: "Nombre y apellido es requerido",
              })}
              className="containerElectionListItem__addCandidateModal-content-form-field"
              autoComplete="off"
              placeholder="Ingresar nombre y apellido"
              name="candidate_name"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsAddCandidate.candidate_name && (
              <div className="containerElectionListItem__addCandidateModal-content-form-field-error">
                {errorsAddCandidate.candidate_name.message}
              </div>
            )}
            <label
              className="containerElectionListItem__addCandidateModal-content-form-label"
              htmlFor="organization_name"
            >
              Organización:
            </label>
            <TextField
              {...registerAddCandidate("organization_name", {
                required: "Nombre de organización es requerido",
              })}
              className="containerElectionListItem__addCandidateModal-content-form-field"
              autoComplete="off"
              placeholder="Ingresar nombre de organización"
              name="organization_name"
              id="outlined-basic"
              variant="outlined"
            />
            {errorsAddCandidate.candidate_name && (
              <div className="containerElectionListItem__addCandidateModal-content-form-field-error">
                {errorsAddCandidate.candidate_name.message}
              </div>
            )}
            <div className="containerElectionListItem__addCandidateModal-content-form-photos">
              {isCandidatePhotoLoaded ? (
                <img
                  className="containerElectionListItem__addCandidateModal-content-form-photos-loaded"
                  src={testCandidate.photo_url}
                />
              ) : (
                <div className="containerElectionListItem__addCandidateModal-content-form-photos-notLoaded">
                  Subir foto del candidato
                </div>
              )}
              {isOrganizationPhotoLoaded ? (
                <img
                  className="containerElectionListItem__addCandidateModal-content-form-photos-loaded"
                  src={testCandidate.logo_url}
                />
              ) : (
                <div className="containerElectionListItem__addCandidateModal-content-form-photos-notLoaded">
                  Subir foto de la organización
                </div>
              )}
            </div>

            <div className="containerElectionListItem__addCandidateModal-content-form-buttons">
              <Button
                variant="outlined"
                className="containerElectionListItem__addCandidateModal-content-form-buttons-close"
                onClick={handleCloseAddCandidate}
              >
                Volver
              </Button>
              <Button
                type="submit"
                variant="outlined"
                className="containerElectionListItem__addCandidateModal-content-form-buttons-confirm"
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
