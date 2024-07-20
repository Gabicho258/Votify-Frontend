import './_ProcessList.scss';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Button } from '@mui/material';
import { ICandidate, IList } from '../../../interfaces';
import { useState } from 'react';
import { ProcessListItem } from '../../../components/ProcessListItem/ProcessListItem';

export const ProcessList = () => {
  const [isLastList, setIsLastList] = useState(false);
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(
    null
  );

  const handleSelectCandidate = (id: string) => {
    setSelectedCandidateId(id);
  };

  const list: IList = {
    _id: '5e6f7g8h9i0j1a2b3c4d',
    process_id: 'process202',
    title: 'Candidato a presidente',
  };

  const candidates: ICandidate[] = [
    {
      _id: 'c1a2b3c4d5e6f7g8h9i0j',
      list_id: '5e6f7g8h9i0j1a2b3c4d',
      candidate_name: 'Alice Johnson',
      photo_url:
        'https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg',
      organization_name: 'Tech Innovators',
      logo_url:
        'https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png',
      valid_votes: 1500,
    },
    {
      _id: 'c1a2b3c4d5e6f7g8h9i0a',
      list_id: '5e6f7g8h9i0j1a2b3c4d',
      candidate_name: 'Alice Johnson',
      photo_url:
        'https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg',
      organization_name: 'Tech Innovators',
      logo_url:
        'https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png',
      valid_votes: 1500,
    },
    {
      _id: 'c1a2b3c4d5e6f7g8h9i0w',
      list_id: '5e6f7g8h9i0j1a2b3c4d',
      candidate_name: 'Alice Johnson',
      photo_url:
        'https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg',
      organization_name: 'Tech Innovators',
      logo_url:
        'https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png',
      valid_votes: 1500,
    },
    {
      _id: 'algunidparanull',
      list_id: '5e6f7g8h9i0j1a2b3c4d',
      candidate_name: 'null',
      photo_url:
        'https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg',
      organization_name: 'Tech Innovators',
      logo_url:
        'https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png',
      valid_votes: 1500,
    },
  ];
  return (
    <div className="containerProcessList">
      <div className="containerProcessList__timer">
        <div className="containerProcessList__timer-box">
          <AccessTimeIcon className="containerProcessList__timer-box-icon" />
          <div className="containerProcessList__timer-box-time">10:00</div>
        </div>
      </div>
      <div className="containerProcessList__title">{list.title}</div>
      <div className="containerProcessList__candidates">
        {candidates.map((candidate) => (
          <ProcessListItem
            key={candidate._id}
            candidate={candidate}
            isSelected={candidate._id === selectedCandidateId}
            onSelect={handleSelectCandidate}
          />
        ))}
      </div>
      <div className="containerProcessList__button">
        {isLastList ? (
          <Button
            variant="outlined"
            className="containerProcessList__button-continue"
            onClick={() => {}}
          >
            Ver resumen
          </Button>
        ) : (
          <Button
            variant="outlined"
            className="containerProcessList__button-continue"
            onClick={() => {}}
          >
            Siguiente lista
          </Button>
        )}
      </div>
    </div>
  );
};
