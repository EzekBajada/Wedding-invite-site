import * as moment from "moment";
import {WeddingInfo} from "../models/WeddingInfo";

export const weddingInfo: WeddingInfo = {
    bridesName: 'Sylvana',
    groomsName: 'Ezekiel',
    invitationMessage: "We can't wait to share our special day with you. Help us capture our wedding with joy!",
    ceremonyVenue: 'Xaghra Basilica',
    ceremonyTime: '5:00 p.m.',
    receptionVenue: 'Villa Fiorita',
    receptionTime: '6:30 p.m.',
    weddingDate: moment('09-09-2022')
}

export const apiUrls = {
   GetAllGuestsLocal: 'https://localhost:5001/Guests'
}

export const FacebookConfig = {
  AppId: '283993523753600',
  AppSecret: '998cdd8e63b5f747b5c14126065f3fa1'
}

