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
import { cloudinaryService } from "../../services/cloudinaryService";

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
    useState(false);

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

  const [photo_url, setPhoto_url] = useState("");
  const [logo_url, setLogo_url] = useState("");
  // CLoudinary
  const showWidgetPhotoUser = async (type: string) => {
    let state = "";
    let URL = "";
    // hacemos un casteo para evitar errores
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).cloudinary.openUploadWidget(
      cloudinaryService("eco_conciencia"),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (err: any, result: any) => {
        if (!err && result && result.event === "success") {
          state = "success";
          const { secure_url } = result.info;
          URL = secure_url;
        }
        if (state === "success" && result.event === "close") {
          if (type === "photo_url") {
            setPhoto_url(URL);
            setIsCandidatePhotoLoaded(true);
          } else if (type === "logo_url") {
            setLogo_url(URL);
            setIsOrganizationPhotoLoaded(true);
          }
        }
      }
    );
  };

  const onSubmitAddCandidate: SubmitHandler<AddCandidateInputs> = async (
    data
  ) => {
    // submit add candidate code
    const candidateToAdd = {
      ...data,
      photo_url,
      logo_url,
      valid_votes: 0,
    };
    addCandidate(title, candidateToAdd);
    handleCloseAddCandidate();
    console.log(candidateToAdd);
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
                  src={photo_url}
                  onClick={() => {
                    showWidgetPhotoUser("photo_url");
                  }}
                />
              ) : (
                <div
                  className="containerElectionListItem__addCandidateModal-content-form-photos-notLoaded"
                  onClick={() => {
                    showWidgetPhotoUser("photo_url");
                  }}
                >
                  Subir foto del candidato
                </div>
              )}
              {isOrganizationPhotoLoaded ? (
                <img
                  className="containerElectionListItem__addCandidateModal-content-form-photos-loaded"
                  src={logo_url}
                  onClick={() => {
                    showWidgetPhotoUser("logo_url");
                  }}
                />
              ) : (
                <div
                  className="containerElectionListItem__addCandidateModal-content-form-photos-notLoaded"
                  onClick={() => {
                    showWidgetPhotoUser("logo_url");
                  }}
                >
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
