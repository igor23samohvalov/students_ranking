import { IStudentId } from "../Types/IStudent";

export default (array: IStudentId[], classFilter: boolean | string) => {
  return [...array]
    .sort((a, b) => b.rating - a.rating)
    .map((s, i) => ({ ...s, ranking: i + 1 }))
    .filter((s) => {
      if (!classFilter) return true;
      return s.form === classFilter;
    });
};
