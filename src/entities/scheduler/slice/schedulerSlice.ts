import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Dayjs } from 'dayjs';
import type { TInitialState } from '.';

const initialState: TInitialState = {
  schedulers: {},
  filter: '',
  isChanged: false,
  month: 0,
  toggleModal: false,
  toggleDetailsModal: false,
  toggleUpdateModal: false,
};

export const schedulerSlice = createSlice({
  name: 'scheduler',
  selectors: {
    getSchedulers: (state) => state.schedulers,
    getSchedulersFilter: (state) => state.filter,
    getSchedulersIsChanged: (state) => state.isChanged,
    getSchedulerMonth: (state) => state.month,
    getSchedulerDay: (state) => state.schedulerDay,
    getToggleSchedulersModal: (state) => state.toggleModal,
    getToggleUpdateSchedulersModal: (state) => state.toggleUpdateModal,
    getToggleDetailsSchedulersModal: (state) => state.toggleDetailsModal,
  },
  initialState,
  reducers: {
    setMonth(state, action: PayloadAction<number>) {
      state.month = action.payload;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
    setIsChanged(state, action: PayloadAction<boolean>) {
      state.isChanged = action.payload;
    },
    setSchedulers(state, action: PayloadAction<Record<string, any>>) {
      state.schedulers = action.payload;
    },
    setSchedulerDay(state, action: PayloadAction<Dayjs>) {
      state.schedulerDay = action.payload;
    },
    toggleSchedulersModal(state, action: PayloadAction<boolean>) {
      state.toggleModal = action.payload;
    },
    toggleSchedulersDetailsModal(state, action: PayloadAction<boolean>) {
      state.toggleDetailsModal = action.payload;
    },
    toggleSchedulersUpdateModal(state, action: PayloadAction<boolean>) {
      state.toggleUpdateModal = action.payload;
    },
  },
});

export const {
  setMonth,
  setFilter,
  setIsChanged,
  setSchedulers,
  setSchedulerDay,
  toggleSchedulersModal,
  toggleSchedulersUpdateModal,
  toggleSchedulersDetailsModal,
} = schedulerSlice.actions;
export const {
  getSchedulers,
  getSchedulerDay,
  getSchedulerMonth,
  getSchedulersFilter,
  getSchedulersIsChanged,
  getToggleSchedulersModal,
  getToggleUpdateSchedulersModal,
  getToggleDetailsSchedulersModal,
} = schedulerSlice.selectors;
