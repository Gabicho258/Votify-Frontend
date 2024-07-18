import { ICandidate } from '../../interfaces';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './_CandidateListItem.scss';

type CandidateListItemInputs = {
  candidate: ICandidate;
};

export const CandidateListItem = ({ candidate }: CandidateListItemInputs) => {
  const { candidate_name, organization_name, photo_url, logo_url } = candidate;
  return (
    <div className="containerCandidateListItem">
      <div className="containerCandidateListItem__content">
        <div className="containerCandidateListItem__content-info">
          <img
            src={logo_url}
            className="containerCandidateListItem__content-info-logo"
          />
          <img
            src={photo_url}
            className="containerCandidateListItem__content-info-photo"
          />
          <div className="containerCandidateListItem__content-info-name">
            <div className="containerCandidateListItem__content-info-name-candidate">
              {candidate_name}
            </div>
            <div className="containerCandidateListItem__content-info-name-organization">
              {organization_name}
            </div>
          </div>
        </div>
        <div className="containerCandidateListItem__content-button">
          <Button
            variant="outlined"
            className="containerCandidateListItem__content-button-delete"
            startIcon={<DeleteIcon />}
            onClick={() => {}}
          >
            Eliminar opción
          </Button>
        </div>
      </div>
      <hr className="containerCandidateListItem__divider" />
    </div>
  );
};
