import { Dispatch, SetStateAction } from "react";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IQueries {
  limit: number;
  start: number;
}

export interface IDataState {
  stateData: IPost[];
  start: number;
  isLoading: boolean;
  isAuthenticated: boolean;
  user: null;
}

export interface IModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
