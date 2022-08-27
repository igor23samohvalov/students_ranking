import { IStudentId } from "../Types/IStudent";

export default (array: IStudentId[], classFilter: boolean | string) => {
  return array.filter((s) => {
    if (!classFilter) return true;
    return s.form === classFilter;
  });
};
