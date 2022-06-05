import * as moment from 'moment';
import { WeddingInfo } from '../WeddingInfo';

export const weddingInfo: WeddingInfo = {
  bridesName: 'Sylvana',
  groomsName: 'Ezekiel',
  invitationMessage:
    "We can't wait to share our special day with you. Help us capture our wedding with joy!",
  ceremonyVenue: 'Xaghra Basilica',
  ceremonyTime: '5:00',
  receptionVenue: 'Alba Terrace, Marsalforn Gozo',
  receptionTime: '6:30',
  weddingDate: moment('09-09-2022'),
  isCeremonyInTheEvening: true,
};

export const apiUrls = {
  GetAllGuests: 'Guests',
  FindGuest: 'Guests/Guest',
  UpsertGuest: 'Guests/UpsertGuest',
};
