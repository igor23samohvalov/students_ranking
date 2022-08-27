export interface IEntry {
  studentId: string;
  added: string;
  value: number;
  comment: string;
}

export interface IEntryId extends IEntry {
  id: string;
}
