import "./_VoteSummaryListItem.scss";

interface VoteSummaryListItemProps {
  title: string;
  candidate_name: string;
  organization_name: string;
  photo_url: string;
  logo_url: string;
}

export const VoteSummaryListItem = ({
  title,
  candidate_name,
  organization_name,
  photo_url,
  logo_url,
}: VoteSummaryListItemProps) => {
  return (
    <div className="containerVoteSummaryListItem">
      <div className="containerVoteSummaryListItem__content">
        <div className="containerVoteSummaryListItem__content-info">
          <div className="containerVoteSummaryListItem__content-info-list">
            {title}
          </div>
          {candidate_name === "null" ? (
            <div className="containerVoteSummaryListItem__content-info-null">
              Voto en blanco
            </div>
          ) : (
            <>
              <div className="containerVoteSummaryListItem__content-info-candidate">
                {candidate_name}
              </div>
              <div className="containerVoteSummaryListItem__content-info-organization">
                {organization_name}
              </div>
            </>
          )}
        </div>
        {candidate_name !== "null" && (
          <div className="containerVoteSummaryListItem__content-photos">
            <img
              src={logo_url}
              className="containerVoteSummaryListItem__content-photos-organization"
            />
            <img
              src={photo_url}
              className="containerVoteSummaryListItem__content-photos-candidate"
            />
          </div>
        )}
      </div>
      <hr className="containerVoteSummaryListItem__divider" />
    </div>
  );
};
