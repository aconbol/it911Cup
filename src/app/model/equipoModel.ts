export class Equipo {

  constructor (
      public id: number,
      public legacy_id: number,
      public name: string,
      public short_code: string,
      public twitter: string,
      public country_id: number,
      public national_team: boolean,
      public founded: number,
      public logo_path: string,
      public venue_id: number
  ) {}

}
