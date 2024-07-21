import "./_ProcessInfo.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { PieChart } from "@mui/x-charts/PieChart";
import { ICandidate } from "../../../interfaces";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { CandidateWinnerListItem } from "../../../components/CandidateWinnerListItem/CandidateWinnerListItem";
import { CountdownTimer } from "../../../components/CountdownTimer/CountdownTimer";
import {
  useGetAllCandidatesQuery,
  useGetCredentialsByProcessIdQuery,
  useGetListsByProcessIdQuery,
  useGetProcessByIdQuery,
} from "../../../app/votify.api";

type ProcessListsResult = {
  _id: string;
  process_id: string;
  title: string;
  candidates: ICandidate[];
};

export const ProcessInfo = () => {
  const navigate = useNavigate();
  const { process_id } = useParams();
  const { data: currentProcess, isLoading: isLoadingProcess } =
    useGetProcessByIdQuery(process_id || "");
  const { data: myLists, isLoading: isLoadingLists } =
    useGetListsByProcessIdQuery(process_id || "");
  const { data: allCandidates, isLoading: isLoadingCandidates } =
    useGetAllCandidatesQuery();

  const startDate = new Date(
    currentProcess?.start_date || ""
  ).toLocaleDateString();
  const endDate = new Date(currentProcess?.end_date || "").toLocaleDateString();
  const startTime = new Date(
    currentProcess?.start_date || ""
  ).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const endTime = new Date(currentProcess?.end_date || "").toLocaleTimeString(
    [],
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  const { data: processCredentials } = useGetCredentialsByProcessIdQuery(
    process_id || ""
  );
  const listsResult: ProcessListsResult[] = useMemo(() => {
    return (
      myLists?.map((list) => {
        return {
          _id: list?._id,
          process_id: list?.process_id,
          title: list?.title,
          candidates:
            allCandidates?.filter(
              (candidate) => candidate?.list_id === list?._id
            ) || [],
        };
      }) || []
    );
  }, [myLists, allCandidates]);
  console.log(currentProcess);
  const [selectedResult, setSelectedResult] =
    useState<ProcessListsResult | null>(null);

  const handleSelectResult = (id: string) => {
    const result = listsResult.find((list) => list._id === id);
    if (result) setSelectedResult(result);
  };

  const getWinners = (listsResult: ProcessListsResult[]) => {
    return listsResult.map((list) => {
      const winner = list?.candidates.reduce((max, candidate) => {
        return candidate.valid_votes > max.valid_votes ? candidate : max;
      }, list?.candidates[0]);

      return {
        list_id: list?._id,
        title: list?.title,
        winner,
      };
    });
  };

  const winners = getWinners(listsResult);

  useEffect(() => {
    if (listsResult.length > 0) {
      setSelectedResult(listsResult[0]);
    }
  }, [listsResult]);
  return isLoadingCandidates || isLoadingLists || isLoadingProcess ? (
    <>loading</>
  ) : (
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
            {processCredentials?.length}
          </div>
        </div>
      </div>
      {currentProcess?.process_status === "done" && (
        <div className="containerProcessInfo__doneContent">
          <div className="containerProcessInfo__doneContent-left">
            <div className="containerProcessInfo__doneContent-left-title">
              {selectedResult?.title}
            </div>
            <PieChart
              className="containerProcessInfo__doneContent-left-chart"
              series={[
                {
                  data:
                    selectedResult?.candidates.map((candidate) => {
                      return {
                        id: candidate._id,
                        value: candidate.valid_votes,
                        label:
                          candidate.candidate_name !== "null"
                            ? candidate.candidate_name
                            : "Voto en blanco",
                      };
                    }) || [],
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
      {currentProcess?.process_status === "programmed" && (
        <div className="containerProcessInfo__programmedContent">
          <div className="containerProcessInfo__programmedContent-text">
            El proceso está programado para empezar en
          </div>
          <CountdownTimer targetDate={currentProcess?.start_date} />
        </div>
      )}
      {currentProcess?.process_status === "cancelled" && (
        <div className="containerProcessInfo__cancelledContent">
          El proceso fue cancelado por el administrador
        </div>
      )}
    </div>
  );
};
