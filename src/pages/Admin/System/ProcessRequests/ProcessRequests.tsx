import './_ProcessRequests.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ProcessRequest } from '../../../../components/ProcessRequest/ProcessRequest';
import { IElectionProcess } from '../../../../interfaces';

export const ProcessRequests = () => {
  const testProcess: IElectionProcess = {
    user_id: 'asd',
    is_owner: false,
    title: 'presidenciales123',
    admin_status: 'pendiente',
    process_status: 'pendiente',
    start_date: '2024-06-05T10:55:00.000Z',
    end_date: '2024-06-06T10:55:00.000Z',
    _id: '668af922469ca1cbb2cb0722',
  };
  return (
    <div className='containerProcessRequests'>
      <div className='containerProcessRequests__back'>
        <ArrowBackIcon className='containerProcessRequests__back-icon' />
        <div className='containerProcessRequests__back-text'>Ir a módulos</div>
      </div>
      <div className='containerProcessRequests__title'>
        Solicitudes de aprobación
      </div>
      <div className='containerProcessRequests__list'>
        <ProcessRequest process={testProcess} />
        <ProcessRequest process={testProcess} />
        <ProcessRequest process={testProcess} />
        <ProcessRequest process={testProcess} />
        <ProcessRequest process={testProcess} />
        <ProcessRequest process={testProcess} />
        <ProcessRequest process={testProcess} />
        <ProcessRequest process={testProcess} />
        <ProcessRequest process={testProcess} />
      </div>
    </div>
  );
};
