import {Moment} from "moment";

export interface WeddingInfo {
  bridesName: string,
  groomsName: string,
  invitationMessage: string,
  ceremonyVenue: string,
  ceremonyTime: string,
  receptionVenue: string,
  receptionTime: string,
  weddingDate: Moment
}
