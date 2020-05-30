import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../types/sidebarTypes';

const initialState = {
  open: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_CLOSE:
      return {
        open: false,
      };
    case SIDEBAR_OPEN:
      return {
        open: true,
      };

    default:
      return state;
  }
};
