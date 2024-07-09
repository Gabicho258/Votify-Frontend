import './_ProcessRequest.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { AccordionElectionList } from '../../../../components/AccordionElectionList/AccordionElectionList';
import { EmailListItem } from '../../../../components/EmailListItem/EmailListItem';
import { Button } from '@mui/material';
import { IElectionProcess, ICandidate, IList } from '../../../../interfaces';
import { formatISODate } from '../../../../utils/DateFormatter';

export const ProcessRequest = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const testProcess: IElectionProcess = {
    user_id: 'asd',
    is_owner: false,
    title: 'presidenciales123',
    admin_status: 'approved',
    process_status: 'in_progress',
    start_date: '2024-06-05T10:55:00.000Z',
    end_date: '2024-06-06T10:55:00.000Z',
    _id: '668af922469ca1cbb2cb0722',
  };

  const list1: IList = {
    list_id: 'list_001',
    process_id: 'process_123',
    title: 'Title 1',
  };
  const list2: IList = {
    list_id: 'list_002',
    process_id: 'process_123',
    title: 'Title 2',
  };

  const candidatesList1: ICandidate[] = [
    {
      candidate_id: 'candidate_001',
      list_id: 'list_001',
      candidate_name: 'John Doe',
      photo_url:
        'https://static.vecteezy.com/system/resources/previews/014/307/944/non_2x/man-candidate-icon-cartoon-job-person-vector.jpg',
      organization_name: 'Org A',
      logo_url:
        'https://i.pinimg.com/736x/86/15/bf/8615bf8e4412a27370cce4a6434c2630.jpg',
      valid_votes: 1500,
    },
    {
      candidate_id: 'candidate_002',
      list_id: 'list_001',
      candidate_name: 'Jane Smith',
      photo_url:
        'https://static.vecteezy.com/system/resources/previews/014/307/944/non_2x/man-candidate-icon-cartoon-job-person-vector.jpg',
      organization_name: 'Org B',
      logo_url:
        'https://i.pinimg.com/736x/86/15/bf/8615bf8e4412a27370cce4a6434c2630.jpg',
      valid_votes: 1200,
    },
    {
      candidate_id: 'candidate_003',
      list_id: 'list_001',
      candidate_name: 'Alice Johnson',
      photo_url:
        'https://static.vecteezy.com/system/resources/previews/014/307/944/non_2x/man-candidate-icon-cartoon-job-person-vector.jpg',
      organization_name: 'Org C',
      logo_url:
        'https://i.pinimg.com/736x/86/15/bf/8615bf8e4412a27370cce4a6434c2630.jpg',
      valid_votes: 1300,
    },
  ];

  const candidatesList2: ICandidate[] = [
    {
      candidate_id: 'candidate_004',
      list_id: 'list_002',
      candidate_name: 'Bob Brown',
      photo_url:
        'https://static.vecteezy.com/system/resources/previews/014/307/944/non_2x/man-candidate-icon-cartoon-job-person-vector.jpg',
      organization_name: 'Org D',
      logo_url:
        'https://i.pinimg.com/736x/86/15/bf/8615bf8e4412a27370cce4a6434c2630.jpg',
      valid_votes: 1400,
    },
    {
      candidate_id: 'candidate_005',
      list_id: 'list_002',
      candidate_name: 'Carol White',
      photo_url:
        'https://static.vecteezy.com/system/resources/previews/014/307/944/non_2x/man-candidate-icon-cartoon-job-person-vector.jpg',
      organization_name: 'Org E',
      logo_url:
        'https://i.pinimg.com/736x/86/15/bf/8615bf8e4412a27370cce4a6434c2630.jpg',
      valid_votes: 1600,
    },
    {
      candidate_id: 'candidate_006',
      list_id: 'list_002',
      candidate_name: 'David Green',
      photo_url:
        'https://static.vecteezy.com/system/resources/previews/014/307/944/non_2x/man-candidate-icon-cartoon-job-person-vector.jpg',
      organization_name: 'Org F',
      logo_url:
        'https://i.pinimg.com/736x/86/15/bf/8615bf8e4412a27370cce4a6434c2630.jpg',
      valid_votes: 1100,
    },
  ];

  const testEmails: string[] = [
    'alice@example.com',
    'bob@example.net',
    'charlie@example.org',
    'diana@example.com',
    'eric@example.net',
    'fiona@example.org',
    'george@example.com',
    'hannah@example.net',
    'ian@example.org',
    'julia@example.com',
    'kevin@example.net',
    'laura@example.org',
    'michael@example.com',
    'nina@example.net',
    'oliver@example.org',
    'paula@example.com',
    'quentin@example.net',
    'rachel@example.org',
    'steven@example.com',
    'tina@example.net',
  ];

  const { formattedDate: startDate, formattedTime: startTime } = formatISODate(
    testProcess.start_date
  );
  const { formattedDate: endDate, formattedTime: endTime } = formatISODate(
    testProcess.end_date
  );

  return (
    <div className='containerProcessRequestInfo'>
      <div className='containerProcessRequestInfo__back'>
        <ArrowBackIcon className='containerProcessRequestInfo__back-icon' />
        <div className='containerProcessRequestInfo__back-text'>Volver</div>
      </div>
      <div className='containerProcessRequestInfo__title'>
        {testProcess.title}
      </div>
      <div className='containerProcessRequestInfo__info'>
        <div className='containerProcessRequestInfo__info-date'>
          <DateRangeIcon className='containerProcessRequestInfo__info-date-icon' />
          <div className='containerProcessRequestInfo__info-date-text'>
            {startDate + ' - ' + endDate}
          </div>
        </div>
        <div className='containerProcessRequestInfo__info-time'>
          <AccessTimeIcon className='containerProcessRequestInfo__info-time-icon' />
          <div className='containerProcessRequestInfo__info-time-text'>
            {startTime + ' - ' + endTime}
          </div>
        </div>
      </div>
      <div className='containerProcessRequestInfo__content'>
        <div className='containerProcessRequestInfo__content-left'>
          <AccordionElectionList list={list1} candidates={candidatesList1} />
          <AccordionElectionList list={list2} candidates={candidatesList2} />
          <AccordionElectionList list={list2} candidates={candidatesList2} />
          <AccordionElectionList list={list2} candidates={candidatesList2} />
          <AccordionElectionList list={list2} candidates={candidatesList2} />
        </div>
        <div className='containerProcessRequestInfo__content-right'>
          <div className='containerProcessRequestInfo__content-right-participants'>
            <div className='containerProcessRequestInfo__content-right-participants-title'>
              Participantes
            </div>
            <div className='containerProcessRequestInfo__content-right-participants-number'>
              <PersonIcon className='containerProcessRequestInfo__content-right-participants-number-icon' />
              <span className='containerProcessRequestInfo__content-right-participants-number-text'>
                {192}
              </span>
            </div>
            <Button
              variant='outlined'
              className='containerProcessRequestInfo__content-right-participants-button'
              onClick={handleOpen}
            >
              Mostrar participantes
            </Button>
          </div>
        </div>
      </div>
      <div className='containerProcessRequestInfo__buttons'>
        {testProcess.admin_status === 'pending' ? (
          <>
            <Button
              variant='outlined'
              className='containerProcessRequestInfo__buttons-approve'
              onClick={() => {}}
            >
              Aprobar
            </Button>
            <Button
              variant='outlined'
              className='containerProcessRequestInfo__buttons-reject'
              onClick={() => {}}
            >
              Rechazar
            </Button>
          </>
        ) : testProcess.admin_status === 'approved' &&
          (testProcess.process_status === 'programmed' ||
            testProcess.process_status === 'in_progress') ? (
          <Button
            variant='outlined'
            className='containerProcessRequestInfo__buttons-cancel'
            onClick={() => {}}
          >
            Cancelar Proceso
          </Button>
        ) : (
          <div></div>
        )}
      </div>
      <Modal
        className='containerProcessRequestInfo__participantsModal'
        open={open}
        onClose={handleClose}
      >
        <div className='containerProcessRequestInfo__participantsModal-content'>
          <div className='containerProcessRequestInfo__participantsModal-content-title'>
            Participantes
          </div>
          <div className='containerProcessRequestInfo__participantsModal-content-list'>
            {testEmails.map((email) => {
              return <EmailListItem email={email} />;
            })}
          </div>
          <div className='containerProcessRequestInfo__participantsModal-content-button'>
            <Button
              variant='outlined'
              className='containerProcessRequestInfo__participantsModal-content-button-close'
              onClick={handleClose}
            >
              Cerrar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
