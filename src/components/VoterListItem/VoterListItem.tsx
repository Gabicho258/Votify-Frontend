import './_VoterListItem.scss';
import { IUser } from '../../interfaces';
import EmailIcon from '@mui/icons-material/Email';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Button } from '@mui/material';

interface VoterListItemProps {
  voter: IUser;
}

export const VoterListItem = ({ voter }: VoterListItemProps) => {
  const { user_name, user_surname, email, dni } = voter;

  return (
    <div className="containerVoterListItem">
      <div className="containerVoterListItem__content">
        <div className="containerVoterListItem__content-left">
          <div className="containerVoterListItem__content-left-name">
            <span className="containerVoterListItem__content-left-name-text">
              {user_name + ' ' + user_surname}
            </span>
          </div>
          <div className="containerVoterListItem__content-left-info">
            <div className="containerVoterListItem__content-left-info-email">
              <EmailIcon className="containerVoterListItem__content-left-info-email-icon" />
              <div className="containerVoterListItem__content-left-info-email-text">
                {email}
              </div>
            </div>
            <div className="containerVoterListItem__content-left-info-dni">
              <ContactsIcon className="containerVoterListItem__content-left-info-dni-icon" />
              <div className="containerVoterListItem__content-left-info-dni-text">
                {dni}
              </div>
            </div>
          </div>
        </div>
        <div className="containerVoterListItem__content-right">
          <Button
            variant="outlined"
            className="containerVoterListItem__content-right-button"
            onClick={() => {}}
          >
            Quitar
          </Button>
        </div>
      </div>
      <hr className="containerVoterListItem__divider" />
    </div>
  );
};
