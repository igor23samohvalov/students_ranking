import { IoSettings, IoPersonRemoveSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import useAuth from "../hooks/useAuth";
import { fsMethods } from "../lib/firebase";
import { IStudentId } from "../Types/IStudent";
import Button from "./styles/Button.styled";
import { Card, CardBlock, CardImg } from "./styles/StudentPreview.styled";

function StudentPreview({
  student,
  addStudent,
  setEditModal,
}: {
  student: IStudentId;
  addStudent: React.Dispatch<React.SetStateAction<any>>;
  setEditModal: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { surname, name, ranking, rating, id, form } = student;
  const { user } = useAuth();

  const handleRemove = () => {
    try {
      fsMethods.removeStudent(id);
      fsMethods.loadStudents(addStudent);
    } catch (error) {
      alert(error);
    }
  };
  const handleEdit = () => {
    setEditModal({ shown: true, student });
  };

  return (
    <Card
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <CardBlock>
        <CardImg src="./imgs/avatar_placeholder.png" alt="avatar" />
      </CardBlock>
      <CardBlock>
        <h3>
          {surname} {name}, {form}
        </h3>
        <h4>Ранг: {ranking}</h4>
        <p>Рейтинг: {rating}</p>
      </CardBlock>

      <CardBlock>
        <Button>
          <CgProfile />
        </Button>
        {user === "teacher" ? (
          <>
            <Button onClick={handleEdit}>
              <IoSettings />
            </Button>
            <Button onClick={handleRemove}>
              <IoPersonRemoveSharp />
            </Button>
          </>
        ) : null}
      </CardBlock>
    </Card>
  );
}

export default StudentPreview;
