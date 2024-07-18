import './_ProcessCreateLists.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IList } from '../../../../interfaces';
import { ElectionListItem } from '../../../../components/ElectionListItem/ElectionListItem';
import { useForm, SubmitHandler } from 'react-hook-form';

type AddListInputs = {
  title: string;
};

export const ProcessCreateLists = () => {
  const navigate = useNavigate();

  // open and close add list modal
  const [openAddList, setOpenAddList] = useState(false);
  const handleOpenAddList = () => setOpenAddList(true);
  const handleCloseAddList = () => setOpenAddList(false);

  // add list form
  const {
    register: registerAddList,
    handleSubmit: handleSubmitAddList,
    formState: { errors: errorsAddList },
  } = useForm<AddListInputs>();

  const onSubmitAddList: SubmitHandler<AddListInputs> = async (data) => {
    // submit add list code
    const listToAdd = {
      ...data,
    };
    console.log(listToAdd);
  };

  const lists: IList[] = [
    {
      _id: '1a2b3c4d5e6f7g8h9i0j',
      process_id: 'process123',
      title: 'Daily Standup Meeting',
    },
    {
      _id: '2b3c4d5e6f7g8h9i0j1a',
      process_id: 'process456',
      title: 'Sprint Planning',
    },
    {
      _id: '3c4d5e6f7g8h9i0j1a2b',
      process_id: 'process789',
      title: 'Code Review Session',
    },
    {
      _id: '4d5e6f7g8h9i0j1a2b3c',
      process_id: 'process101',
      title: 'Project Kickoff',
    },
    {
      _id: '5e6f7g8h9i0j1a2b3c4d',
      process_id: 'process202',
      title: 'Retrospective Meeting',
    },
  ];
  return (
    <div className="containerProcessCreateLists">
      <div
        className="containerProcessCreateLists__back"
        onClick={() => navigate(-1)}
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
          <ElectionListItem title={list.title} />
        ))}
      </div>
      <div className="containerProcessCreateLists__button">
        <Button
          variant="outlined"
          className="containerProcessCreateLists__button-continue"
          onClick={() => {}}
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
              {...registerAddList('title', {
                required: 'Título es requerido',
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
