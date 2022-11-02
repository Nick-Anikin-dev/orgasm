import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notifications, User } from "../../types/user";
import { Track } from "../../types/tracking";

const initialState: User = {
    first_name: "",
    last_name: "",
    isInitialLaunch: true,
    tracking: [],
    notifications: {
        isEnableNotifications: false,
        daysOfWeekNumbers: [],
        time: null
    },
    shelf: {
        isErogenousZonesRead: false,
        isLackOfSensitivityRead: false,
        isTypesOfOrgasmRead: false,
        isUsefulFeaturesRead: false,
        isWayToOrgasmRead: false
    }
}

const userSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initUser(state: User, action: PayloadAction<User>) {
           state = action.payload
        },
        setFirstLaunch(state: User){
            state.isInitialLaunch = false
        },
        setNotifications(state: User, action: PayloadAction<Notifications>){
            state.notifications = action.payload
        },
        addTechniqueTrack(state: User, action: PayloadAction<Track>){
            state.tracking = [...state.tracking, action.payload]
        }
    }
})

export default userSlice.reducer
