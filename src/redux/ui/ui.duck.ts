import { createActionTypes } from '../create-action-types';
import { IAction } from '../redux.interface';
import { IDuckState, IUIDuck } from './ui.duck.interface';

const UI: any = {
  name: 'UI'
};

const initialState: IDuckState = {
  loading: 0,
  scrollPosition: {},
  modalOpen: false,
  modalType: '',
  modalData: {}
};

const actionTypes: any = createActionTypes(
  {
    add_loading: 'add_loading',
    open_modal: 'open_modal',
    close_modal: 'close_modal'
  },
  UI.name
);

UI.reducer = (state: IDuckState = initialState, action: IAction) => {
  switch (action.type) {
    case actionTypes.add_loading:
      return {
        ...state,
        loading: Math.max(0, action.payload + state.loading)
      };
    case actionTypes.open_modal:
      return {
        ...state,
        modalOpen: true
      };
    case actionTypes.close_modal:
      return {
        ...state,
        modalOpen: false
      };
    default:
      return state;
  }
};

UI.setLoading = (loadingWeight: number = 0): IAction => ({
  type: actionTypes.add_loading,
  payload: loadingWeight
});

UI.openModal = (payload: { data: {} }): IAction => ({
  type: actionTypes.open_modal,
  payload
});

UI.closeModal = () => ({
  type: actionTypes.close_modal
});

UI.getOwnState = (state: any): IDuckState => state[UI.name] || initialState;
UI.getModalData = (state: any): any => UI.getOwnState(state).modalData;
UI.getModalType = (state: any): string => UI.getOwnState(state).modalType;
UI.isModalOpen = (state: any): boolean => UI.getOwnState(state).modalOpen;
UI.isLoadingFullscreen = (state: any): boolean => UI.getOwnState(state).loading > 1;
UI.isLoading = (state: any): boolean => !!UI.getOwnState(state).loading;

const UIDuck: IUIDuck = UI;
export default UIDuck;
