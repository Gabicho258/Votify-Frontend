import "./_ProcessList.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Button } from "@mui/material";
import { ICandidate, IList } from "../../../interfaces";
import { useEffect, useState } from "react";
import { ProcessListItem } from "../../../components/ProcessListItem/ProcessListItem";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useGetCandidatesByListIdQuery,
  useGetListsByProcessIdQuery,
} from "../../../app/votify.api";

export const ProcessList = () => {
  const { state } = useLocation();
  const [isLastList, setIsLastList] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<ICandidate | null>(
    null
  );

  const handleSelectCandidate = (candidate: ICandidate) => {
    setSelectedCandidate(candidate);
  };
  const [candidatesSelected, setCandidatesSelected] = useState<ICandidate[]>(
    []
  );
  const navigate = useNavigate();
  const { data: listsOfProcess } = useGetListsByProcessIdQuery(
    state.process._id
  );
  const [index, setIndex] = useState(0);

  const handleNextList = () => {
    if (selectedCandidate === null) {
      alert("Debe seleccionar un candidato primero.");
      return;
    }
    setCandidatesSelected([...candidatesSelected, selectedCandidate]);
    setIndex((prevIndex) => prevIndex + 1);
    setSelectedCandidate(null);
    if (index === (listsOfProcess?.length || 0) - 2) {
      setIsLastList(true);
      return;
    }
  };
  useEffect(() => {}, []);
  const handleNextSummary = () => {
    navigate("/votes-summary", {
      state: {
        candidates: [...candidatesSelected, selectedCandidate],
        process: state.process,
        credential_id: state.credential_id,
      },
    });
  };
  const currentList = Array.from(listsOfProcess || [])[index];
  useEffect(() => {
    if (state && state.candidates) {
      setSelectedCandidate(state.candidates[index]);
    }
  }, [state, index]);
  // console.log(selectedCandidate);

  // const list: IList = {
  //   _id: "5e6f7g8h9i0j1a2b3c4d",
  //   process_id: "process202",
  //   title: "Candidato a presidente",
  // };

  // const candidates: ICandidate[] = [
  //   {
  //     _id: "c1a2b3c4d5e6f7g8h9i0j",
  //     list_id: "5e6f7g8h9i0j1a2b3c4d",
  //     candidate_name: "Alice Johnson",
  //     photo_url:
  //       "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
  //     organization_name: "Tech Innovators",
  //     logo_url:
  //       "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
  //     valid_votes: 1500,
  //   },
  //   {
  //     _id: "c1a2b3c4d5e6f7g8h9i0a",
  //     list_id: "5e6f7g8h9i0j1a2b3c4d",
  //     candidate_name: "Alice Johnson",
  //     photo_url:
  //       "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
  //     organization_name: "Tech Innovators",
  //     logo_url:
  //       "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
  //     valid_votes: 1500,
  //   },
  //   {
  //     _id: "c1a2b3c4d5e6f7g8h9i0w",
  //     list_id: "5e6f7g8h9i0j1a2b3c4d",
  //     candidate_name: "Alice Johnson",
  //     photo_url:
  //       "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
  //     organization_name: "Tech Innovators",
  //     logo_url:
  //       "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
  //     valid_votes: 1500,
  //   },
  //   {
  //     _id: "algunidparanull",
  //     list_id: "5e6f7g8h9i0j1a2b3c4d",
  //     candidate_name: "null",
  //     photo_url:
  //       "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
  //     organization_name: "Tech Innovators",
  //     logo_url:
  //       "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
  //     valid_votes: 1500,
  //   },
  // ];
  return (
    <div className="containerProcessList">
      <div className="containerProcessList__timer">
        <div className="containerProcessList__timer-box">
          <AccessTimeIcon className="containerProcessList__timer-box-icon" />
          <div className="containerProcessList__timer-box-time">10:00</div>
        </div>
      </div>

      <Options
        list={currentList}
        handleSelectCandidate={handleSelectCandidate}
        selectedCandidate={selectedCandidate}
      />

      <div className="containerProcessList__button">
        {isLastList ? (
          <Button
            variant="outlined"
            className="containerProcessList__button-continue"
            onClick={handleNextSummary}
          >
            Ver resumen
          </Button>
        ) : (
          <Button
            variant="outlined"
            className="containerProcessList__button-continue"
            onClick={handleNextList}
          >
            Siguiente lista
          </Button>
        )}
      </div>
    </div>
  );
};

interface OptionsProps {
  list: IList;
  selectedCandidate: ICandidate | null;
  handleSelectCandidate: (candidate: ICandidate) => void;
}

const Options = ({
  list,
  selectedCandidate,
  handleSelectCandidate,
}: OptionsProps) => {
  const { data: candidates } = useGetCandidatesByListIdQuery(list?._id || "");
  return (
    <>
      <div className="containerProcessList__title">{list?.title}</div>
      <div className="containerProcessList__candidates">
        {candidates?.map((candidate) => (
          <ProcessListItem
            key={candidate?._id}
            candidate={candidate}
            isSelected={candidate?._id === selectedCandidate?._id}
            onSelect={handleSelectCandidate}
          />
        ))}
      </div>
    </>
  );
};
