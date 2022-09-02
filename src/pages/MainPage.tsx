import { useState } from "react";
import Container from "../components/styles/Container.styled";
import {
  StudentsContainer,
  Wrapper,
} from "../components/styles/MainPage.styled";
import StudentPreview from "../components/StudentPreview";
import useAuth from "../hooks/useAuth";
import Menu from "../components/Menu";
import AddModal from "../components/AddModal";
import { IStudentId } from "../Types/IStudent";
import EditModal from "../components/EditModal";
// import PlaceholderStudent from "../components/PlaceholderStudent";
import customHandler from "../lib/utility";
import { useAppSelector } from "../hooks/reduxHooks";
import RemoveModal from "../components/RemoveModal";
import Loader from "../components/styles/Loader";
import { AddStudentIcon } from "../components/styles/StyledIcons.styled";
import ButtonIcon from "../components/styles/ButtonIcon.styled";

function MainPage() {
  const { user } = useAuth();
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
        <Menu setClassFilter={setClassFilter} />
        <StudentsContainer>
          <div />
          <div>
            {loading ? (
              <Loader />
            ) : (
              customHandler(list, classFilter).map((student: IStudentId) => (
                <StudentPreview
                  key={student.id}
                  student={student}
                  setEditModal={setEditModal}
                  setRemoveModal={setRemoveModal}
                />
              ))
            )}
          </div>
          <div>
            {user === "teacher" ? (
              <ButtonIcon onClick={() => setAddModal(true)}>
                <AddStudentIcon />
              </ButtonIcon>
            ) : null}
          </div>
        </StudentsContainer>
        <AddModal isShownAddModal={isShownAddModal} setAddModal={setAddModal} />
        <EditModal
          setEditModal={setEditModal}
          isShownEditModal={isShownEditModal.shown}
          student={isShownEditModal.student}
        />
        <RemoveModal
          entity="student"
          showModal={setRemoveModal}
          isShown={isShownRemoveModal.shown}
          id={isShownRemoveModal.id}
        />
      </Wrapper>
    </Container>
  );
}

export default MainPage;
