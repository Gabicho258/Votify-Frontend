import './_ElectoralProcessAdmin.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IElectionProcess } from '../../../../interfaces';
import { Process } from '../../../../components/ProcessRequest/Process';

export const ElectoralProcessAdmin = () => {
  const electionProcesses: IElectionProcess[] = [
    {
      user_id: 'user123',
      is_owner: false,
      title: 'Presidential Elections 2024',
      admin_status: 'approved',
      process_status: 'in_progress',
      start_date: '2024-06-01T08:00:00.000Z',
      end_date: '2024-06-01T20:00:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'user456',
      is_owner: true,
      title: 'Local Elections 2024',
      admin_status: 'approved',
      process_status: 'programmed',
      start_date: '2024-07-10T09:00:00.000Z',
      end_date: '2024-07-10T21:00:00.000Z',
      _id: '668af922469ca1cbb2cb0723',
    },
    {
      user_id: 'user789',
      is_owner: false,
      title: 'School Board Elections 2024',
      admin_status: 'approved',
      process_status: 'done',
      start_date: '2024-05-15T07:00:00.000Z',
      end_date: '2024-05-15T19:00:00.000Z',
      _id: '668af922469ca1cbb2cb0724',
    },
    {
      user_id: 'user101',
      is_owner: true,
      title: 'Company Board Elections 2024',
      admin_status: 'approved',
      process_status: 'cancelled',
      start_date: '2024-08-20T10:00:00.000Z',
      end_date: '2024-08-20T18:00:00.000Z',
      _id: '668af922469ca1cbb2cb0725',
    },
    {
      user_id: 'user102',
      is_owner: false,
      title: 'Community Leader Elections 2024',
      admin_status: 'approved',
      process_status: 'cancelled',
      start_date: '2024-09-15T09:00:00.000Z',
      end_date: '2024-09-15T17:00:00.000Z',
      _id: '668af922469ca1cbb2cb0726',
    },
    {
      user_id: 'user123',
      is_owner: false,
      title: 'Presidential Elections 2024',
      admin_status: 'approved',
      process_status: 'in_progress',
      start_date: '2024-06-01T08:00:00.000Z',
      end_date: '2024-06-01T20:00:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'user456',
      is_owner: true,
      title: 'Local Elections 2024',
      admin_status: 'approved',
      process_status: 'programmed',
      start_date: '2024-07-10T09:00:00.000Z',
      end_date: '2024-07-10T21:00:00.000Z',
      _id: '668af922469ca1cbb2cb0723',
    },
    {
      user_id: 'user789',
      is_owner: false,
      title: 'School Board Elections 2024',
      admin_status: 'approved',
      process_status: 'done',
      start_date: '2024-05-15T07:00:00.000Z',
      end_date: '2024-05-15T19:00:00.000Z',
      _id: '668af922469ca1cbb2cb0724',
    },
    {
      user_id: 'user101',
      is_owner: true,
      title: 'Company Board Elections 2024',
      admin_status: 'approved',
      process_status: 'cancelled',
      start_date: '2024-08-20T10:00:00.000Z',
      end_date: '2024-08-20T18:00:00.000Z',
      _id: '668af922469ca1cbb2cb0725',
    },
    {
      user_id: 'user102',
      is_owner: false,
      title: 'Community Leader Elections 2024',
      admin_status: 'approved',
      process_status: 'cancelled',
      start_date: '2024-09-15T09:00:00.000Z',
      end_date: '2024-09-15T17:00:00.000Z',
      _id: '668af922469ca1cbb2cb0726',
    },
    {
      user_id: 'user123',
      is_owner: false,
      title: 'Presidential Elections 2024',
      admin_status: 'approved',
      process_status: 'in_progress',
      start_date: '2024-06-01T08:00:00.000Z',
      end_date: '2024-06-01T20:00:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'user123',
      is_owner: false,
      title: 'Presidential Elections 2024',
      admin_status: 'approved',
      process_status: 'in_progress',
      start_date: '2024-06-01T08:00:00.000Z',
      end_date: '2024-06-01T20:00:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'user123',
      is_owner: false,
      title: 'Presidential Elections 2024',
      admin_status: 'approved',
      process_status: 'in_progress',
      start_date: '2024-06-01T08:00:00.000Z',
      end_date: '2024-06-01T20:00:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'user123',
      is_owner: false,
      title: 'Presidential Elections 2024',
      admin_status: 'approved',
      process_status: 'in_progress',
      start_date: '2024-06-01T08:00:00.000Z',
      end_date: '2024-06-01T20:00:00.000Z',
      _id: '668af922469ca1cbb2cb0722',
    },
    {
      user_id: 'user456',
      is_owner: true,
      title: 'Local Elections 2024',
      admin_status: 'approved',
      process_status: 'programmed',
      start_date: '2024-07-10T09:00:00.000Z',
      end_date: '2024-07-10T21:00:00.000Z',
      _id: '668af922469ca1cbb2cb0723',
    },
    {
      user_id: 'user789',
      is_owner: false,
      title: 'School Board Elections 2024',
      admin_status: 'approved',
      process_status: 'done',
      start_date: '2024-05-15T07:00:00.000Z',
      end_date: '2024-05-15T19:00:00.000Z',
      _id: '668af922469ca1cbb2cb0724',
    },
    {
      user_id: 'user101',
      is_owner: true,
      title: 'Company Board Elections 2024',
      admin_status: 'approved',
      process_status: 'cancelled',
      start_date: '2024-08-20T10:00:00.000Z',
      end_date: '2024-08-20T18:00:00.000Z',
      _id: '668af922469ca1cbb2cb0725',
    },
    {
      user_id: 'user102',
      is_owner: false,
      title: 'Community Leader Elections 2024',
      admin_status: 'approved',
      process_status: 'cancelled',
      start_date: '2024-09-15T09:00:00.000Z',
      end_date: '2024-09-15T17:00:00.000Z',
      _id: '668af922469ca1cbb2cb0726',
    },
  ];
  return (
    <div className='containerElectoralProcessAdmin'>
      <div className='containerElectoralProcessAdmin__back'>
        <ArrowBackIcon className='containerElectoralProcessAdmin__back-icon' />
        <div className='containerElectoralProcessAdmin__back-text'>
          Ir a módulos
        </div>
      </div>
      <div className='containerElectoralProcessAdmin__title'>
        Administración procesos electorales
      </div>
      <div className='containerElectoralProcessAdmin__inProgressList'>
        <div className='containerElectoralProcessAdmin__inProgressList-title'>
          Procesos en curso
          <hr className='containerElectoralProcessAdmin__inProgressList-title-divider' />
        </div>

        {electionProcesses
          .filter((process) => process.process_status === 'in_progress')
          .map((process) => (
            <Process process={process} />
          ))}
      </div>
      <div className='containerElectoralProcessAdmin__list'>
        {electionProcesses
          .filter((process) => process.process_status !== 'in_progress')
          .map((process) => (
            <Process process={process} />
          ))}
      </div>
    </div>
  );
};
