import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/styles/Container.styled";
import {
  StudentsContainer,
  Wrapper,
} from "../components/styles/MainPage.styled";
import StudentPreview from "../components/StudentPreview";
import IStudent from "../Types/IStudent";
import Menu from "../components/Menu";
import AddModal from "../components/AddModal";

function MainPage() {
  const [students, setStudents] = useState<IStudent[]>([]);
  const [isShownAddModal, setAddModal] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("/students.json")
      .then((res) => res.data)
      .then(({ students }) => {
        setStudents(students);
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Menu setAddModal={setAddModal} />
        <StudentsContainer>
          {students.map((student) => (
            <StudentPreview key={student.id} {...student} />
          ))}
        </StudentsContainer>
        <AddModal isShown={isShownAddModal} setAddModal={setAddModal} />
      </Wrapper>
    </Container>
  );
}

export default MainPage;
