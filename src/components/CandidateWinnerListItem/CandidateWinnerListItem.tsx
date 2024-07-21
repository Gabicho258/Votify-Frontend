import "./_CandidateWinnerListItem.scss";
import { ICandidate } from "../../interfaces";

interface CandidateWinnerListItemProps {
  list_id: string;
  title: string;
  candidate: ICandidate;
  onSelect: (id: string) => void;
}

export const CandidateWinnerListItem = ({
  list_id,
  title,
  candidate,
  onSelect,
}: CandidateWinnerListItemProps) => {
  const { candidate_name, organization_name, photo_url, logo_url } = candidate;
  const handleSelection = () => {
    onSelect(list_id);
  };
  return (
    <div className="containerCandidateWinnerListItem" onClick={handleSelection}>
      <div className="containerCandidateWinnerListItem__info">
        <div className="containerCandidateWinnerListItem__info-list">
          {"Ganador " + title}
        </div>
        {candidate_name !== "null" ? (
          <>
            <div className="containerCandidateWinnerListItem__info-candidate">
              {candidate_name}
            </div>
            <div className="containerCandidateWinnerListItem__info-organization">
              {organization_name}
            </div>
          </>
        ) : (
          <div className="containerCandidateWinnerListItem__info-null">
            Votos en blanco
          </div>
        )}
      </div>
      {candidate_name !== "null" && (
        <div className="containerCandidateWinnerListItem__photos">
          <img
            className="containerCandidateWinnerListItem__photos-candidate"
            src={photo_url}
          />
          <img
            className="containerCandidateWinnerListItem__photos-organization"
            src={logo_url}
          />
        </div>
      )}
    </div>
  );
};
