import { Technique } from "./index";

export interface Track {
    date: string
    assessment: number
    techniques: Technique
    minutesDuration: number | null
}
