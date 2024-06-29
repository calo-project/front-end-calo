import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice.jsx'
import modalSlice from '../features/common/modalSlice.jsx'
import rightDrawerSlice from '../features/common/rightDrawerSlice.jsx'
import leadsSlice from '../features/leads/leadSlice.jsx'

const combinedReducer = {
  header : headerSlice,
  rightDrawer : rightDrawerSlice,
  modal : modalSlice,
  lead : leadsSlice
}

export default configureStore({
    reducer: combinedReducer
})