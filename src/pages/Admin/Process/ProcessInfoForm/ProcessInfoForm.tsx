import './_ProcessInfoForm.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { convertToISO8601 } from '../../../../utils/DateFormatter';
import dayjs, { Dayjs } from 'dayjs';

type ProcessInfoInputs = {
  title: string;
};

export const ProcessInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProcessInfoInputs>();

  const [startDateValue, setStartDateValue] = useState<Dayjs | null>(dayjs());
  const [endDateValue, setEndDateValue] = useState<Dayjs | null>(dayjs());
  const [startTimeValue, setStartTimeValue] = useState<Dayjs | null>(dayjs());
  const [endTimeValue, setEndTimeValue] = useState<Dayjs | null>(dayjs());

  const onSubmit: SubmitHandler<ProcessInfoInputs> = async (data) => {
    const startDate = startDateValue?.format('DD-MM-YYYY');
    const endDate = endDateValue?.format('DD-MM-YYYY');
    const startTime = startTimeValue?.format('HH:mm');
    const endTime = endTimeValue?.format('HH:mm');

    console.log({
      startDate,
      endDate,
      startTime,
      endTime,
    });

    if (startDate && startTime && endDate && endTime) {
      const { startISO: start_date, endISO: end_date } = convertToISO8601(
        startDate,
        startTime,
        endDate,
        endTime
      );
      console.log({
        ...data,
        start_date,
        end_date,
      });
    }
  };

  const navigate = useNavigate();
  return (
    <div className='containerProcessInfoForm'>
      <div
        className='containerProcessInfoForm__back'
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon className='containerProcessInfoForm__back-icon' />
        <div className='containerProcessInfoForm__back-text'>Volver</div>
      </div>
      <div className='containerProcessInfoForm__content'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='containerProcessInfoForm__content-form'
        >
          <div className='containerProcessInfoForm__content-form-title'>
            Crear nuevo proceso
          </div>
          <label
            className='containerProcessInfoForm__content-form-label'
            htmlFor='title'
          >
            Título del proceso:
          </label>
          <TextField
            {...register('title', { required: 'Título es requerido' })}
            className='containerProcessInfoForm__content-form-field'
            autoComplete='off'
            placeholder='Título'
            name='title'
            id='outlined-basic'
            variant='outlined'
          />
          {errors.title && (
            <div className='containerProcessInfoForm__content-form-field-error'>
              {errors.title.message}
            </div>
          )}
          <div className='containerProcessInfoForm__content-form-date'>
            <div className='containerProcessInfoForm__content-form-date-start'>
              <label
                className='containerProcessInfoForm__content-form-date-start-label'
                htmlFor='start_date'
              >
                Fecha inicio:
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={startDateValue}
                  onChange={(newValue) => setStartDateValue(newValue)}
                  name='start_date'
                  className='containerProcessInfoForm__content-form-date-start-input'
                />
              </LocalizationProvider>
            </div>
            <div className='containerProcessInfoForm__content-form-date-end'>
              <label
                className='containerProcessInfoForm__content-form-date-end-label'
                htmlFor='end_date'
              >
                Fecha final:
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={endDateValue}
                  onChange={(newValue) => setEndDateValue(newValue)}
                  name='end_date'
                  className='containerProcessInfoForm__content-form-date-end-input'
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className='containerProcessInfoForm__content-form-time'>
            <div className='containerProcessInfoForm__content-form-time-start'>
              <label
                className='containerProcessInfoForm__content-form-time-start-label'
                htmlFor='start_time'
              >
                Hora inicio:
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimeField
                  value={startTimeValue}
                  onChange={(newValue) => setStartTimeValue(newValue)}
                  name='start_time'
                  className='containerProcessInfoForm__content-form-time-start-input'
                />
              </LocalizationProvider>
            </div>
            <div className='containerProcessInfoForm__content-form-time-end'>
              <label
                className='containerProcessInfoForm__content-form-time-end-label'
                htmlFor='end_time'
              >
                Hora final:
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimeField
                  value={endTimeValue}
                  onChange={(newValue) => setEndTimeValue(newValue)}
                  name='end_time'
                  className='containerProcessInfoForm__content-form-time-end-input'
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className='containerProcessInfoForm__content-form-button'>
            <button
              type='submit'
              className='containerProcessInfoForm__content-form-button-continue'
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
