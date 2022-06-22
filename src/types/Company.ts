import Timeslot from "./Timeslot";

export interface Company {
  id: number;
  name: string;
  type: string;
  time_slots: Array<Timeslot>;
}