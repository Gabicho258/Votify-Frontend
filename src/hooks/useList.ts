import { useState } from "react";

export interface IList {
  _id?: string;
  process_id?: string;
  title: string;
  candidates: ICandidate[] | [];
}
export interface ICandidate {
  _id?: string;
  list_id?: string;
  candidate_name: string;
  photo_url: string;
  organization_name: string;
  logo_url: string;
  valid_votes: number;
}

export const useList = (initialLists: IList[] | []) => {
  const [lists, setLists] = useState<IList[]>(initialLists);

  const addList = (newList: IList) => {
    setLists((prevLists) => [...prevLists, newList]);
  };

  const removeList = (listTitle: string) => {
    setLists((prevLists) =>
      prevLists.filter((list) => list.title !== listTitle)
    );
  };

  const addCandidate = (listTitle: string, newCandidate: ICandidate) => {
    setLists((prevLists) => {
      return prevLists.map((list) => {
        if (list.title === listTitle) {
          return { ...list, candidates: [...list.candidates, newCandidate] };
        }
        return list;
      });
    });
  };

  const removeCandidate = (listTitle: string, candidateName: string) => {
    setLists((prevLists) => {
      return prevLists.map((list) => {
        if (list.title === listTitle) {
          return {
            ...list,
            candidates: list.candidates.filter(
              (candidate) => candidate.candidate_name !== candidateName
            ),
          };
        }
        return list;
      });
    });
  };

  return {
    lists,
    addList,
    removeList,
    addCandidate,
    removeCandidate,
  };
};
