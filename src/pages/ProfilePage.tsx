import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/styles/Button.styled";
import Container from "../components/styles/Container.styled";
import { ProfileContainer } from "../components/styles/ProfilePage.styled";
import { CardImg } from "../components/styles/StudentPreview.styled";
import { fsMethods } from "../lib/firebase";

function ProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState<any>({});
  const [entries, setEntries] = useState<string[][]>([]);
  console.log("profile page loaded");

  useEffect(() => {
    console.log("show us id: ", id);
    if (id) {
      try {
        fsMethods.loadStudnet(setStudent, id);
        setEntries([]);
      } catch (error) {
        console.log(error);
      }
    }
  }, [id]);

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
