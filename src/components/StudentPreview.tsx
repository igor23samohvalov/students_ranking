import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { IStudentId } from "../Types/IStudent";
import Button from "./styles/ButtonIcon.styled";
import { Card, CardBlock, CardImg } from "./styles/StudentPreview.styled";
import {
  EditIcon,
  ProfileIcon,
  RemoveStudentIcon,
} from "./styles/StyledIcons.styled";

function StudentPreview({
  student,
  setEditModal,
  setRemoveModal,
}: {
  student: IStudentId;
  setEditModal: React.Dispatch<React.SetStateAction<any>>;
  setRemoveModal: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { surname, name, ranking, rating, id, form } = student;
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleRemove = () => {
    setRemoveModal({ shown: true, id });
  };

  const handleEdit = () => {
    setEditModal({ shown: true, student });
  };

  return (
    <Card
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <CardBlock>
        <span>{ranking === undefined || ranking > 5 ? "?" : ranking}</span>
      </CardBlock>
      <CardBlock>
        <CardImg src="./imgs/avatar_placeholder.png" alt="avatar" />
      </CardBlock>
      <CardBlock>
        <h4>
          {surname} {name}, {form}
        </h4>
        <span>Рейтинг: {rating}</span>
      </CardBlock>
      <CardBlock>
        <Button onClick={() => navigate(id)}>
          <ProfileIcon />
        </Button>
        {user.role === "teacher" ? (
          <>
            <Button onClick={handleEdit}>
              <EditIcon />
            </Button>
            <Button onClick={handleRemove}>
              <RemoveStudentIcon />
            </Button>
          </>
        ) : null}
      </CardBlock>
    </Card>
  );
}

export default StudentPreview;
