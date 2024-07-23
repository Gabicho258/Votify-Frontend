import { Button } from "@mui/material";
import {
  useGetAllProcessesQuery,
  useGetCredentialsByUserIdQuery,
  useGetUserByIdQuery,
} from "../../../app/votify.api";
import LogoutIcon from "@mui/icons-material/Logout";

import "./_Hub.scss";
import { Process } from "../../../components/ProcessRequest/Process";
import { IElectionProcess } from "../../../interfaces";
import { useEffect } from "react";
import { useSpinner } from "../../../hooks/useSpinner";

export const Hub = () => {
  const user_id = localStorage.getItem("voter_id") || "";
  const { data: voter, isLoading: isVoterLoading } =
    useGetUserByIdQuery(user_id);
  const handleLogout = () => {
    localStorage.removeItem("voter_id");
    window.location.href = "/login";
  };
  const { data: allElectionProcesses, isLoading: isAllProcessesLoading } =
    useGetAllProcessesQuery();
  const { data: userCredentials, isLoading: isUserCredentialsLoading } =
    useGetCredentialsByUserIdQuery(voter?._id || "");
  const electionProcesses: IElectionProcess[] =
    allElectionProcesses?.filter((process) =>
      userCredentials?.some(
        (credentials) => credentials.process_id == process._id
      )
    ) || [];
  const { Spinner, loading, setLoading } = useSpinner(true);
  useEffect(() => {
    if (
      !(isVoterLoading || isAllProcessesLoading || isUserCredentialsLoading)
    ) {
      setLoading(false); // Terminar la carga cuando la petición haya finalizado
    }
  }, [
    isVoterLoading,
    isAllProcessesLoading,
    isUserCredentialsLoading,
    setLoading,
  ]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="containerHub">
      <div className="containerHub__left">
        <div className="containerHub__left-welcome">
          Bienvenido{" "}
          <div className="containerHub__left-welcome-name">
            {voter?.user_name + " " + voter?.user_surname}
          </div>
        </div>
        <Button
          variant="outlined"
          startIcon={<LogoutIcon />}
          className="containerHub__left-logoutButton"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </Button>
      </div>
      <div className="containerHub__right">
        <div className="containerHub__right-title">
          Mis procesos electorales:{" "}
        </div>
        <div className="containerHub__right-process">
          <div className="containerHub__right-process-inProgressList">
            <div className="containerHub__right-process-inProgressList-title">
              Procesos en curso
              <hr className="containerHub__right-process-inProgressList-title-divider" />
            </div>

            {electionProcesses
              ?.filter((process) => process.process_status === "in_progress")
              .map((process) => (
                <Process key={process._id} isUser={true} process={process} />
              ))}
          </div>
          <div className="containerHub__right-process-list">
            {electionProcesses
              ?.filter((process) => {
                return (
                  process.process_status !== "in_progress" &&
                  process.admin_status === "approved"
                );
              })
              .map((process) => (
                <Process key={process._id} isUser={true} process={process} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
