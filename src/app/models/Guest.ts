export interface Guest {
  guestId: number;
  name: string | null;
  surname: string | null;
  brideOrGroomSide: string;
  isAttending: boolean | null;
  numberOfGuests: number | null;
}
