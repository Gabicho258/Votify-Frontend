import './_ProcessListAdmin.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Process } from '../../../../components/ProcessRequest/Process';
import { useNavigate } from 'react-router-dom';
import { IElectionProcess } from '../../../../interfaces';

export const ProcessListAdmin = () => {
  const testProcesses: IElectionProcess[] = [
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'approved',
      process_status: 'programmed',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'approved',
      process_status: 'done',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'pending',
      process_status: '',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'cancelled',
      process_status: '',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'approved',
      process_status: 'programmed',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'approved',
      process_status: 'done',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'pending',
      process_status: '',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'cancelled',
      process_status: '',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'approved',
      process_status: 'programmed',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'approved',
      process_status: 'done',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'pending',
      process_status: '',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'cancelled',
      process_status: '',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'approved',
      process_status: 'programmed',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'approved',
      process_status: 'done',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'pending',
      process_status: '',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'asd',
      is_owner: false,
      title: 'presidenciales123',
      admin_status: 'cancelled',
      process_status: '',
      start_date: '2024-06-05T10:55:00.000Z',
      end_date: '2024-06-06T10:55:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
  ];
  const navigate = useNavigate();
  return (
    <div className='containerProcessListAdmin'>
      <div
        className='containerProcessListAdmin__back'
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon className='containerProcessListAdmin__back-icon' />
        <div className='containerProcessListAdmin__back-text'>Ir a módulos</div>
      </div>
      <div className='containerProcessListAdmin__title'>Mis procesos</div>
      <div className='containerProcessListAdmin__add'>
        <Button
          variant='outlined'
          className='containerProcessListAdmin__add-button'
          startIcon={<AddIcon />}
          onClick={() => {}}
        >
          Crear proceso
        </Button>
      </div>
      <div className='containerProcessListAdmin__approvedList'>
        <div className='containerProcessListAdmin__approvedList-title'>
          Procesos aprobados
          <hr className='containerProcessListAdmin__approvedList-title-divider' />
        </div>
        {testProcesses
          .filter((process) => process.admin_status === 'approved')
          .map((process) => (
            <Process process={process} />
          ))}
      </div>
      <div className='containerProcessListAdmin__pendingList'>
        <div className='containerProcessListAdmin__pendingList-title'>
          Procesos pendientes
          <hr className='containerProcessListAdmin__pendingList-title-divider' />
        </div>
        {testProcesses
          .filter((process) => process.admin_status === 'pending')
          .map((process) => (
            <Process process={process} />
          ))}
      </div>
      <div className='containerProcessListAdmin__cancelledList'>
        <div className='containerProcessListAdmin__cancelledList-title'>
          Procesos rechazados
          <hr className='containerProcessListAdmin__cancelledList-title-divider' />
        </div>
        {testProcesses
          .filter((process) => process.admin_status === 'cancelled')
          .map((process) => (
            <Process process={process} />
          ))}
      </div>
    </div>
  );
};
