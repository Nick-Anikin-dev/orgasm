import { Track } from "./tracking";
import { Shelf } from "./shelf";

export interface Notifications {
    isEnableNotifications: boolean
    daysOfWeekNumbers: number[]
    time: string | null
}

export interface User {
    first_name: string
    last_name: string
    isInitialLaunch: boolean
    tracking: Track[]
    notifications: Notifications
    shelf: Shelf
}
