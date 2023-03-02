import { Dispatch, SetStateAction } from "react";

export interface IUsersInfo {
  login: string;
  password: string;
}

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
  isLogined: boolean;
  database: IUsersInfo[];
}

export interface IModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}