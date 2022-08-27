import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import Button from "../components/styles/Button.styled";
import Container from "../components/styles/Container.styled";
import { ProfileContainer } from "../components/styles/ProfilePage.styled";
import { CardImg } from "../components/styles/StudentPreview.styled";

const studentPlaceholder = {
  surname: "unknown",
  name: "unknown",
  form: "unknown",
  rating: 0,
  id: "UID",
};

function ProfilePage() {
  const { id } = useParams();
  let student = useAppSelector((state) =>
    state.students.list.find((s) => s.id === id),
  );

  if (!student) student = studentPlaceholder;

  const navigate = useNavigate();
  const [entries, setEntries] = useState<string[][]>([]);
  console.log("profile page loaded");

  useEffect(() => {
    setEntries([]);
  }, []);

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
          {entries.length === 0 ? (
            <h4>Нет записей</h4>
          ) : (
            entries.map(([mark, comment]) => (
              <p>
                <strong>{mark} - </strong>
                {comment}
              </p>
            ))
          )}
        </div>
      </ProfileContainer>
    </Container>
  );
}

export default ProfilePage;
