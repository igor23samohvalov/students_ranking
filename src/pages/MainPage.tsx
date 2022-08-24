import { useEffect, useState } from "react";
import Container from "../components/styles/Container.styled";
import {
  StudentsContainer,
  Wrapper,
} from "../components/styles/MainPage.styled";
import StudentPreview from "../components/StudentPreview";
import Menu from "../components/Menu";
import AddModal from "../components/AddModal";
import { fsMethods } from "../lib/firebase";
import { IStudentId } from "../Types/IStudent";
import EditModal from "../components/EditModal";
import PlaceholderStudent from "../components/PlaceholderStudent";

function MainPage() {
  const [students, setStudents] = useState<IStudentId[]>([]);
  const [filteredStudents, setFilteredStudents] = useState<IStudentId[]>([]);
  const [isShownAddModal, setAddModal] = useState<boolean>(false);
  const [form, setForm] = useState<string | boolean>(false);
  const [isShownEditModal, setEditModal] = useState<any>({
    shown: false,
    student: {},
  });

  useEffect(() => {
    fsMethods.loadStudents(setStudents);
  }, []);
  useEffect(() => {
    if (!form) setFilteredStudents(students);
    else setFilteredStudents(students.filter((s) => s.form === form));
  }, [form, students]);

  return (
    <Container>
      <Wrapper>
        <Menu setAddModal={setAddModal} setForm={setForm} />
        <StudentsContainer>
          {filteredStudents.length === 0 ? (
            <PlaceholderStudent />
          ) : (
            filteredStudents.map((student: IStudentId) => (
              <StudentPreview
                key={student.id}
                student={student}
                addStudent={setStudents}
                setEditModal={setEditModal}
              />
            ))
          )}
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
