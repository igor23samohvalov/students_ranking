import { useEffect, useState } from "react";
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
import customFilter from "../lib/utility";
import { useAppSelector } from "../hooks/reduxHooks";

function MainPage() {
  const { list, loading } = useAppSelector((state) => state.students);
  const [classFilter, setClassFilter] = useState<string | boolean>(false);
  const [isShownAddModal, setAddModal] = useState<boolean>(false);
  const [isShownEditModal, setEditModal] = useState<any>({
    shown: false,
    student: {},
  });

  useEffect(() => {
    console.log("loading is now: ", loading);
  }, [loading]);

  return (
    <Container>
      <Wrapper>
        <Menu setAddModal={setAddModal} setClassFilter={setClassFilter} />
        <StudentsContainer>
          {customFilter(list, classFilter).length === 0 ? (
            <PlaceholderStudent />
          ) : (
            customFilter(list, classFilter).map((student: IStudentId) => (
              <StudentPreview
                key={student.id}
                student={student}
                setEditModal={setEditModal}
              />
            ))
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
