import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import useAuth from "../hooks/useAuth";
import Button from "../components/styles/Button.styled";
import Container from "../components/styles/Container.styled";
import { ProfileContainer } from "../components/styles/ProfilePage.styled";
import { CardImg } from "../components/styles/StudentPreview.styled";
import AddEntryModal from "../components/AddEntryModal";
import {
  BackIcon,
  EntryAddIcon,
} from "../components/styles/StyledIcons.styled";
import Entry from "../components/Entry";

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
  const loading = useAppSelector((state) => state.entries.loading);

  const [isAddEntryShown, showAddEntry] = useState<boolean>(false);

  let student = useAppSelector((state) =>
    state.students.list.find((s) => s.id === id),
  );

  if (!student) student = studentPlaceholder;

  return (
    <Container>
      <ProfileContainer>
        <div>
          <div>
            <CardImg src="../imgs/avatar_placeholder.png" alt="avatar" />
            {student.surname} {student.name}
          </div>
          <div>
            <strong>Класс: </strong>
            {student.form}
          </div>
          <div>
            <strong>Ранк: </strong>work in progress
          </div>
          <div>
            <strong>Рейтинг: </strong>
            {student.rating}
          </div>
          <Button onClick={() => navigate(-1)}>
            <BackIcon />
          </Button>
        </div>
        <div>
          <h3>История изменений:</h3>
          {loading || entries.length !== 0 ? (
            entries.map((e) => <Entry key={id} data={e} />)
          ) : (
            <h4>Нет записей</h4>
          )}
          {user === "teacher" && (
            <Button onClick={() => showAddEntry(true)}>
              <EntryAddIcon />
            </Button>
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
