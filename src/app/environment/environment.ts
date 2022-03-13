import * as moment from "moment";
import {WeddingInfo} from "../models/WeddingInfo";

export const weddingInfo: WeddingInfo = {
    bridesName: 'Sylvana',
    groomsName: 'Ezekiel',
    invitationMessage: "We can't wait to share our special day with you. Help us capture our wedding with joy!",
    ceremonyVenue: 'Xaghra Basilica',
    ceremonyTime: '5:00',
    receptionVenue: 'Villa Fiorita',
    receptionTime: '6:30',
    weddingDate: moment('09-09-2022'),
    isCeremonyInTheEvening: true
}

export const baseApiUrl = "http://localhost:5000/"

export const apiUrls = {
   GetAllGuests: 'Guests',
   FindGuest: 'Guest'
}
