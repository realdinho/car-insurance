export interface Person {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  email: string;
}

export interface Car {
  plateNumber: string;
  maker: string;
  model: string;
  manufacturerDate: Date;
  hasClaimsInLast5Years: boolean;
  yearsOfDrivingLicense: DrivingExperience
}

export enum DrivingExperience {
  ZERO = '0 years',
  ONE = '1 year',
  TWO = '2 years',
  THREE = '3 years',
  FOUR = '4 years',
  FIVE_PLUS = '5+ years',
}