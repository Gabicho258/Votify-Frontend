import { useState } from "react";
import { IUser } from "../interfaces";

export const useVoters = (initialVoters: Partial<IUser>[] = []) => {
  const [voters, setVoters] = useState<Partial<IUser>[]>(initialVoters);

  const addVoter = (newVoter: Partial<IUser>) => {
    setVoters((prevVoters) => [...prevVoters, newVoter]);
  };

  const removeVoter = (dni: string) => {
    setVoters((prevVoters) => prevVoters.filter((voter) => voter.dni !== dni));
  };

  return {
    voters,
    addVoter,
    removeVoter,
  };
};
