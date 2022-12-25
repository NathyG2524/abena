export class CreateAuthDto {
  id: string;

  companyId: string;

  username: string;

  department: string;

  createdAt!: Date;

  updatedAt!: Date;

  password: string;
}
