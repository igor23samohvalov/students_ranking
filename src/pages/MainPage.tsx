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
import RemoveModal from "../components/RemoveModal";

function MainPage() {
  const { list, loading } = useAppSelector((state) => state.students);
  const [classFilter, setClassFilter] = useState<string | boolean>(false);
  const [isShownAddModal, setAddModal] = useState<boolean>(false);
  const [isShownRemoveModal, setRemoveModal] = useState({
    shown: false,
    id: "",
  });
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
                setRemoveModal={setRemoveModal}
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
        <RemoveModal
          setRemoveModal={setRemoveModal}
          isShownRemoveModal={isShownRemoveModal.shown}
          id={isShownRemoveModal.id}
        />
      </Wrapper>
    </Container>
  );
}

export default MainPage;
