import "./_ProcessInfo.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { PieChart } from "@mui/x-charts/PieChart";
import { ICandidate, IElectionProcess } from "../../../interfaces";
import { formatISODate } from "../../../utils/DateFormatter";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CandidateWinnerListItem } from "../../../components/CandidateWinnerListItem/CandidateWinnerListItem";
import { CountdownTimer } from "../../../components/CountdownTimer/CountdownTimer";

type ProcessListsResult = {
  _id: string;
  process_id: string;
  title: string;
  candidates: ICandidate[];
};

export const ProcessInfo = () => {
  const navigate = useNavigate();

  const currentProcess: IElectionProcess = {
    _id: "1a2b3c4d5e6f7g8h9i0j",
    user_id: "user123",
    is_owner: true,
    title: "Presidential Election 2024",
    admin_status: "approved",
    process_status: "done",
    start_date: "2024-10-21T23:15:00.000Z",
    end_date: "2024-11-01T23:59:59.000Z",
  };

  const { formattedDate: startDate, formattedTime: startTime } = formatISODate(
    currentProcess?.start_date || ""
  );
  const { formattedDate: endDate, formattedTime: endTime } = formatISODate(
    currentProcess?.end_date || ""
  );

  const listsResult: ProcessListsResult[] = [
    {
      _id: "1a2b3c4d5e6f7g8h9i0j",
      process_id: "1a2b3c4d5e6f7g8h9i0j",
      title: "Candidates for Presidential Election 2024",
      candidates: [
        {
          _id: "c1a2b3c4d5e6f7g8h9i0a",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 15,
        },
        {
          _id: "c1a2b3c4d5e6f7g8h9i0b",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 30,
        },
        {
          _id: "c1a2b3c4d5e6f7g8h9i0c",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 3,
        },
      ],
    },
    {
      _id: "2b3c4d5e6f7g8h9i0j1k",
      process_id: "2b3c4d5e6f7g8h9i0j1k",
      title: "Candidates for School Board Election 2024",
      candidates: [
        {
          _id: "c1a2b3c4d5e6f7g8h9i0d",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 5,
        },
        {
          _id: "c1a2b3c4d5e6f7g8h9i0e",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 35,
        },
        {
          _id: "c1a2b3c4d5e6f7g8h9i0f",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 3,
        },
        {
          _id: "c1a2b3c4d5e6f7g8h9i0sd",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 20,
        },
      ],
    },
    {
      _id: "3c4d5e6f7g8h9i0j1k2l",
      process_id: "3c4d5e6f7g8h9i0j1k2l",
      title: "Candidates for Local Government Election 2024",
      candidates: [
        {
          _id: "c1a2b3c4d5e6f7g8h9i0g",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 15,
        },
        {
          _id: "c1a2b3c4d5e6f7g8h9i0h",
          list_id: "list123",
          candidate_name: "Alice Johnson Win",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 20,
        },
        {
          _id: "c1a2b3c4d5e6f7g8h9i0i",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 3,
        },
      ],
    },
    {
      _id: "4d5e6f7g8h9i0j1k2l3m",
      process_id: "4d5e6f7g8h9i0j1k2l3m",
      title: "Candidates for Union Representative Election 2024",
      candidates: [
        {
          _id: "c1a2b3c4d5e6f7g8h9i0j",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 15,
        },
        {
          _id: "c1a2b3c4d5e6f7g8h9i0k",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 20,
        },
        {
          _id: "c1a2b3c4d5e6f7g8h9i0l",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 3,
        },
      ],
    },
    {
      _id: "5e6f7g8h9i0j1k2l3m4n",
      process_id: "5e6f7g8h9i0j1k2l3m4n",
      title: "Candidates for Club President Election 2024",
      candidates: [
        {
          _id: "c1a2b3c4d5e6f7g8h9i0j",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 15,
        },
        {
          _id: "c1a2b3c4d5e6f7g8h9i04",
          list_id: "list123",
          candidate_name: "null",
          photo_url: "",
          organization_name: "",
          logo_url: "",
          valid_votes: 20,
        },
        {
          _id: "c1a2b3c4d5e6f7g8h9i0z",
          list_id: "list123",
          candidate_name: "Alice Johnson",
          photo_url:
            "https://i.pinimg.com/originals/c7/a9/40/c7a9408babdc2852a48191ab83a5944b.jpg",
          organization_name: "Tech Innovators",
          logo_url:
            "https://png.pngtree.com/png-clipart/20221214/ourlarge/pngtree-shovel-clipart-png-image_6522991.png",
          valid_votes: 3,
        },
      ],
    },
  ];

  const [selectedResult, setSelectedResult] = useState<ProcessListsResult>(
    listsResult[0]
  );

  const handleSelectResult = (id: string) => {
    const result = listsResult.find((list) => list._id === id);
    if (result) setSelectedResult(result);
  };

  const getWinners = (listsResult: ProcessListsResult[]) => {
    return listsResult.map((list) => {
      const winner = list.candidates.reduce((max, candidate) => {
        return candidate.valid_votes > max.valid_votes ? candidate : max;
      }, list.candidates[0]);

      return {
        list_id: list._id,
        title: list.title,
        winner,
      };
    });
  };

  const winners = getWinners(listsResult);

  return (
    <div className="containerProcessInfo">
      <div className="containerProcessInfo__back" onClick={() => navigate(-1)}>
        <ArrowBackIcon className="containerProcessInfo__back-icon" />
        <div className="containerProcessInfo__back-text">Volver</div>
      </div>
      <div className="containerProcessInfo__title">{currentProcess?.title}</div>
      <div className="containerProcessInfo__status">
        {currentProcess?.process_status === "done" && (
          <div className="containerProcessInfo__status-done">Realizado</div>
        )}
        {currentProcess?.process_status === "programmed" && (
          <div className="containerProcessInfo__status-programmed">
            Programado
          </div>
        )}
        {currentProcess?.process_status === "cancelled" && (
          <div className="containerProcessInfo__status-cancelled">
            Cancelado
          </div>
        )}
      </div>
      <div className="containerProcessInfo__info">
        <div className="containerProcessInfo__info-date">
          <DateRangeIcon className="containerProcessInfo__info-date-icon" />
          <div className="containerProcessInfo__info-date-text">
            {startDate + " - " + endDate}
          </div>
        </div>
        <div className="containerProcessInfo__info-time">
          <AccessTimeIcon className="containerProcessInfo__info-time-icon" />
          <div className="containerProcessInfo__info-time-text">
            {startTime + " - " + endTime}
          </div>
        </div>
        <div className="containerProcessInfo__info-participants">
          <PersonIcon className="containerProcessInfo__info-participants-icon" />
          <div className="containerProcessInfo__info-participants-text">
            192
          </div>
        </div>
      </div>
      {currentProcess.process_status === "done" && (
        <div className="containerProcessInfo__doneContent">
          <div className="containerProcessInfo__doneContent-left">
            <div className="containerProcessInfo__doneContent-left-title">
              {selectedResult.title}
            </div>
            <PieChart
              className="containerProcessInfo__doneContent-left-chart"
              series={[
                {
                  data: selectedResult.candidates.map((candidate) => {
                    return {
                      id: candidate._id,
                      value: candidate.valid_votes,
                      label:
                        candidate.candidate_name !== "null"
                          ? candidate.candidate_name
                          : "Voto en blanco",
                    };
                  }),
                },
              ]}
              width={650}
              height={300}
            />
          </div>
          <div className="containerProcessInfo__doneContent-right">
            {winners.map((candidate) => (
              <CandidateWinnerListItem
                key={candidate.list_id}
                list_id={candidate.list_id}
                title={candidate.title}
                candidate={candidate.winner}
                onSelect={handleSelectResult}
              />
            ))}
          </div>
        </div>
      )}
      {currentProcess.process_status === "programmed" && (
        <div className="containerProcessInfo__programmedContent">
          <div className="containerProcessInfo__programmedContent-text">
            El proceso está programado para empezar en
          </div>
          <CountdownTimer targetDate={currentProcess.start_date} />
        </div>
      )}
      {currentProcess.process_status === "cancelled" && (
        <div className="containerProcessInfo__cancelledContent">
          El proceso fue cancelado por el administrador
        </div>
      )}
    </div>
  );
};
