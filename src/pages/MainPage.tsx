import { useEffect, useState } from "react";
import Container from "../components/styles/Container.styled";
import {
  StudentsContainer,
  Wrapper,
} from "../components/styles/MainPage.styled";
import StudentPreview from "../components/StudentPreview";
// import IStudent from "../Types/IStudent";
import Menu from "../components/Menu";
import AddModal from "../components/AddModal";
import { fsMethods } from "../lib/firebase";
import { IStudentId } from "../Types/IStudent";
import EditModal from "../components/EditModal";

function MainPage() {
  const [students, setStudents] = useState<IStudentId[]>([]);
  const [isShownAddModal, setAddModal] = useState<boolean>(false);
  const [isShownEditModal, setEditModal] = useState<any>({
    shown: false,
    student: {},
  });

  useEffect(() => {
    fsMethods.loadStudents(setStudents);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Menu setAddModal={setAddModal} />
        <StudentsContainer>
          {students.map((student: IStudentId) => (
            <StudentPreview
              key={student.id}
              student={student}
              addStudent={setStudents}
              setEditModal={setEditModal}
            />
          ))}
        </StudentsContainer>
        <AddModal
          isShownAddModal={isShownAddModal}
          setAddModal={setAddModal}
          addStudent={setStudents}
        />
        <EditModal
          setEditModal={setEditModal}
          isShownEditModal={isShownEditModal.shown}
          student={isShownEditModal.student}
          addStudent={setStudents}
        />
      </Wrapper>
    </Container>
  );
}

export default MainPage;
