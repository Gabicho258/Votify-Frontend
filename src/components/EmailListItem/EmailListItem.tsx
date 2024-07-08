import './_EmailListItem.scss';

interface EmailListItemProps {
  email: string;
}

export const EmailListItem = ({ email }: EmailListItemProps) => {
  return (
    <div className='containerEmailListItem'>
      <div className='containerEmailListItem__email'>{email}</div>
      <hr className='containerEmailListItem__divider' />
    </div>
  );
};
