import { VoteSummaryListItem } from "../../../components/VoteSummaryListItem/VoteSummaryListItem";
import "./_VotesSummary.scss";
import { Button } from "@mui/material";

export const VotesSummary = () => {
  const votes = [
    {
      title: "Lista 1",
      candidate_name: "John Doe",
      organization_name: "Organización 1",
      photo_url:
        "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
      logo_url:
        "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
    },
    {
      title: "Lista 1",
      candidate_name: "John Doe",
      organization_name: "Organización 1",
      photo_url:
        "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
      logo_url:
        "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
    },
    {
      title: "Lista 1",
      candidate_name: "null",
      organization_name: "",
      photo_url: "",
      logo_url: "",
    },
    {
      title: "Lista 1",
      candidate_name: "John Doe",
      organization_name: "Organización 1",
      photo_url:
        "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
      logo_url:
        "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
    },
    {
      title: "Lista 1",
      candidate_name: "John Doe",
      organization_name: "Organización 1",
      photo_url:
        "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
      logo_url:
        "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
    },
    {
      title: "Lista 1",
      candidate_name: "John Doe",
      organization_name: "Organización 1",
      photo_url:
        "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
      logo_url:
        "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
    },
    {
      title: "Lista 1",
      candidate_name: "John Doe",
      organization_name: "Organización 1",
      photo_url:
        "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
      logo_url:
        "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
    },
  ];
  return (
    <div className="containerVotesSummary">
      <div className="containerVotesSummary__title">Resumen de votos</div>
      <div className="containerVotesSummary__votes">
        {votes.map((vote) => (
          <VoteSummaryListItem {...vote} />
        ))}
      </div>
      <div className="containerVotesSummary__buttons">
        <Button
          variant="outlined"
          className="containerVotesSummary__buttons-edit"
          onClick={() => {}}
        >
          Editar mis votos
        </Button>
        <Button
          variant="outlined"
          className="containerVotesSummary__buttons-confirm"
          onClick={() => {}}
        >
          Confirmar mis votos
        </Button>
      </div>
    </div>
  );
};
