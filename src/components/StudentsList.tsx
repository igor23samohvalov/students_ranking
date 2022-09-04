import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import { customHandler } from "../lib/utility";
import { IStudentId } from "../Types/IStudent";
import PlaceholderStudent from "./PlaceholderStudent";
import StudentPreview from "./StudentPreview";
import { ListLoader } from "./styles/Loader";

type StudentsListProps = {
  filter: string;
  setEditModal: React.Dispatch<React.SetStateAction<any>>;
  setRemoveModal: React.Dispatch<React.SetStateAction<any>>;
};

function StudentsList({
  filter,
  setEditModal,
  setRemoveModal,
}: StudentsListProps) {
  const [filteredList, setFilteredList] = useState<IStudentId[]>([]);
  const { list, loading } = useAppSelector((state) => state.students);

  useEffect(() => {
    console.log("setfiltered useeffect worked");
    setFilteredList(customHandler(list, filter));
  }, [list]);

  if (loading) return <ListLoader />;
  if (filteredList.length === 0) return <PlaceholderStudent />;

  return (
    <>
      {filteredList.map((student: IStudentId) => (
        <StudentPreview
          key={student.id}
          student={student}
          setEditModal={setEditModal}
          setRemoveModal={setRemoveModal}
        />
      ))}
    </>
  );
}

export default StudentsList;
