import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import useAuth from "../hooks/useAuth";
import Button from "../components/styles/Button.styled";
import Container from "../components/styles/Container.styled";
import { ProfileContainer } from "../components/styles/ProfilePage.styled";
import { CardImg } from "../components/styles/StudentPreview.styled";
import AddEntryModal from "../components/AddEntryModal";

const studentPlaceholder = {
  surname: "unknown",
  name: "unknown",
  form: "unknown",
  rating: 0,
  id: "UID",
};

function ProfilePage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const entries = useAppSelector((state) =>
    state.entries.list.filter((e) => e.studentId === id),
  );

  const [isAddEntryShown, showAddEntry] = useState<boolean>(false);

  let student = useAppSelector((state) =>
    state.students.list.find((s) => s.id === id),
  );

  if (!student) student = studentPlaceholder;

  return (
    <Container>
      <Button onClick={() => navigate(-1)}>Назад</Button>
      <ProfileContainer>
        <div>
          <CardImg src="../imgs/avatar_placeholder.png" alt="avatar" />
          <p>
            <strong>Студент: </strong>
            {student.surname} {student.name}
          </p>
          <p>
            <strong>Класс: </strong>
            {student.form}
          </p>
          <p>
            <strong>Ранк: </strong>work in progress
          </p>
          <p>
            <strong>рейтинг: </strong>
            {student.rating}
          </p>
        </div>
        <div>
          <h3>История изменений:</h3>
          {user === "teacher" && (
            <Button onClick={() => showAddEntry(true)}>Добавить запись</Button>
          )}
          {entries.length === 0 ? (
            <h4>Нет записей</h4>
          ) : (
            entries.map(({ value, comment, id }) => (
              <p key={id}>
                <strong>{value} - </strong>
                {comment}
              </p>
            ))
          )}
        </div>
      </ProfileContainer>
      <AddEntryModal
        isAddEntryShown={isAddEntryShown}
        showAddEntry={showAddEntry}
        studentId={student.id}
      />
    </Container>
  );
}

export default ProfilePage;
