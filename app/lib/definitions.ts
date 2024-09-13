// consider adding unique ids to these (mongo does create some automatically)
export type DateInfo = {
  date: Date;
  description: string;
  author: string;
}

export type AboutInfo = {
  editDate: Date;
  title: string;
  description: string;
  author: string;
}