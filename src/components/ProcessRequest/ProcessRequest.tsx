import './_ProcessRequest.scss';
import { IElectionProcess } from '../../interfaces';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Button } from '@mui/material';
import { formatISODate } from '../../utils/DateFormatter';

interface ProcessRequestProps {
  process: IElectionProcess;
}

export const ProcessRequest = ({ process }: ProcessRequestProps) => {
  const { title, start_date, end_date } = process;
  const { formattedDate: startDate, formattedTime: startTime } =
    formatISODate(start_date);
  const { formattedDate: endDate, formattedTime: endTime } =
    formatISODate(end_date);
  return (
    <div className='containerProcessRequest'>
      <div className='containerProcessRequest__content'>
        <div className='containerProcessRequest__content-left'>
          <div className='containerProcessRequest__content-left-title'>
            {title}
          </div>
          <div className='containerProcessRequest__content-left-info'>
            <div className='containerProcessRequest__content-left-info-date'>
              <DateRangeIcon className='containerProcessRequest__content-left-info-date-icon' />
              <div className='containerProcessRequest__content-left-info-date-text'>
                {startDate + ' - ' + endDate}
              </div>
            </div>
            <div className='containerProcessRequest__content-left-info-time'>
              <AccessTimeIcon className='containerProcessRequest__content-left-info-time-icon' />
              <div className='containerProcessRequest__content-left-info-time-text'>
                {startTime + ' - ' + endTime}
              </div>
            </div>
          </div>
        </div>
        <div className='containerProcessRequest__content-right'>
          <Button
            variant='outlined'
            className='containerProcessRequest__content-right-button'
            onClick={() => {}}
          >
            Ir al proceso
          </Button>
        </div>
      </div>
      <hr className='containerProcessRequest__divider' />
    </div>
  );
};
