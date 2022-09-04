import { toast } from "react-toastify";
import { IStudentId } from "../Types/IStudent";

export const customHandler = (array: IStudentId[], classFilter: string) => {
  return [...array]
    .sort((a, b) => b.rating - a.rating)
    .map((s, i) => ({ ...s, ranking: i + 1 }))
    .filter((s) => {
      if (!classFilter) return true;
      return s.form === classFilter;
    });
};

export const notify = (msg: string, state: string) => {
  switch (state) {
    case "success":
      toast.success(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "warn":
      toast.warn(msg);
      break;
    default:
      toast("Неизвестное уведомление");
      break;
  }
};
