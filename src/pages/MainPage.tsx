import { useState } from "react";
import Container from "../components/styles/Container.styled";
import {
  StudentsContainer,
  Wrapper,
} from "../components/styles/MainPage.styled";
import StudentPreview from "../components/StudentPreview";
import Menu from "../components/Menu";
import AddModal from "../components/AddModal";
import { IStudentId } from "../Types/IStudent";
import EditModal from "../components/EditModal";
import PlaceholderStudent from "../components/PlaceholderStudent";
import customHandler from "../lib/utility";
import { useAppSelector } from "../hooks/reduxHooks";

function MainPage() {
  const { list, loading } = useAppSelector((state) => state.students);
  const [classFilter, setClassFilter] = useState<string | boolean>(false);
  const [isShownAddModal, setAddModal] = useState<boolean>(false);
  const [isShownEditModal, setEditModal] = useState<any>({
    shown: false,
    student: {},
  });

  return (
    <Container>
      <Wrapper>
        <Menu setAddModal={setAddModal} setClassFilter={setClassFilter} />
        <StudentsContainer>
          {loading || customHandler(list, classFilter).length !== 0 ? (
            customHandler(list, classFilter).map((student: IStudentId) => (
              <StudentPreview
                key={student.id}
                student={student}
                setEditModal={setEditModal}
              />
            ))
          ) : (
            <PlaceholderStudent />
          )}
        </StudentsContainer>
        <AddModal isShownAddModal={isShownAddModal} setAddModal={setAddModal} />
        <EditModal
          setEditModal={setEditModal}
          isShownEditModal={isShownEditModal.shown}
          student={isShownEditModal.student}
        />
      </Wrapper>
    </Container>
  );
}

export default MainPage;
