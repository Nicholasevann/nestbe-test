import { RoleEnum } from '../enums/role.enum';

export type CurrentUser = {
  id: number;
  role: RoleEnum;
};
