import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import useAuth from "../hooks/useAuth";
import Button from "../components/styles/Button.styled";
import Container from "../components/styles/Container.styled";
import {
  EntriesContainer,
  ProfileContainer,
} from "../components/styles/ProfilePage.styled";
import { CardImg } from "../components/styles/StudentPreview.styled";
import AddEntryModal from "../components/AddEntryModal";
import {
  BackIcon,
  EntryAddIcon,
} from "../components/styles/StyledIcons.styled";
import EditEntryModal from "../components/EditEntryModal";
import RemoveModal from "../components/RemoveModal";
import EntriesList from "../components/EntriesList";

const studentPlaceholder = {
  surname: "unknown",
  name: "unknown",
  form: "unknown",
  rating: 0,
  id: "UID",
  email: "ivanov@mail.com",
};

function ProfilePage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isEditEntryShown, showEditEntry] = useState<any>({
    shown: false,
    entry: {},
  });
  const [isRemoveEntryShown, showRemoveEntry] = useState({
    shown: false,
    id: "",
  });
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
          <EntriesContainer>
            <EntriesList
              showEditEntry={showEditEntry}
              showRemoveEntry={showRemoveEntry}
              id={id}
            />
            {user.role === "teacher" && (
              <Button onClick={() => showAddEntry(true)}>
                <EntryAddIcon />
              </Button>
            )}
          </EntriesContainer>
        </div>
      </ProfileContainer>
      <AddEntryModal
        isAddEntryShown={isAddEntryShown}
        showAddEntry={showAddEntry}
        student={student}
      />
      <EditEntryModal
        isShown={isEditEntryShown.shown}
        showModal={showEditEntry}
        entry={isEditEntryShown.entry}
      />
      <RemoveModal
        entity="entry"
        isShown={isRemoveEntryShown.shown}
        showModal={showRemoveEntry}
        id={isRemoveEntryShown.id}
      />
    </Container>
  );
}

export default ProfilePage;
