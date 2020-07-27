import { IAction } from '../redux.interface';
import { AnyAction } from 'redux';

export interface IDuckState {
  loading: number;
  scrollPosition: any;
  modalOpen: boolean;
  modalType: string;
  modalData: object;
}

export interface IUIDuck {
  name: string;
  reducer: (state: IDuckState, action: IAction) => any;
  setLoading: (loadingWeight: number) => IAction;
  openModal: () => IAction;
  closeModal: () => AnyAction;
  getOwnState: (state: any) => IDuckState;
  isModalOpen: (state: any) => boolean;
  isLoadingFullscreen: (state: any) => boolean;
  isLoading: (state: any) => boolean;
}
