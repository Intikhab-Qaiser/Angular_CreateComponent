export default class Course implements ICourse {
  Id: number;
  Title: string;
  CreationDate: Date;
  Duration: number;
  Description: string;
  FirstName: string;
  LastName: string;

  constructor(Id: number, Title: string, CreationDate: Date,
    Duration: number, Description: string, FirstName: string, LastName: string) {
      this.Id = Id;
      this.Title = Title;
      this.CreationDate = CreationDate;
      this.Duration = Duration;
      this.Description = Description;
      this.FirstName = FirstName;
      this.LastName = LastName;
    }
}
