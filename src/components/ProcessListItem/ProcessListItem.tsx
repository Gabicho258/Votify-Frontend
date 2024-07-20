import './_ProcessListItem.scss';
import ClearIcon from '@mui/icons-material/Clear';
import { ICandidate } from '../../interfaces';

interface ProcessListItemProps {
  candidate: ICandidate;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const ProcessListItem = ({
  candidate,
  isSelected,
  onSelect,
}: ProcessListItemProps) => {
  const { candidate_name, organization_name, photo_url, logo_url } = candidate;
  const handleSelection = () => {
    onSelect(candidate._id);
  };
  return (
    <div className="containerProcessListItem">
      <div className="containerProcessListItem__content">
        {candidate_name !== 'null' ? (
          <>
            <img
              className="containerProcessListItem__content-logo"
              alt="logo-photo"
              src={logo_url}
            />
            <img
              className="containerProcessListItem__content-candidate"
              alt="candidate-photo"
              src={photo_url}
            />
            <div className="containerProcessListItem__content-info">
              <div className="containerProcessListItem__content-info-name">
                {candidate_name}
              </div>
              <div className="containerProcessListItem__content-info-organization">
                {organization_name}
              </div>
            </div>
          </>
        ) : (
          <div className="containerProcessListItem__content-null">
            Votar en blanco
          </div>
        )}
      </div>
      <div className="containerProcessListItem__mark" onClick={handleSelection}>
        {isSelected && (
          <ClearIcon className="containerProcessListItem__mark-icon" />
        )}
      </div>
    </div>
  );
};
