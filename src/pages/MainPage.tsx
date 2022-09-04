import { useState } from "react";
import Container from "../components/styles/Container.styled";
import {
  StudentsContainer,
  Wrapper,
} from "../components/styles/MainPage.styled";
import Menu from "../components/Menu";
import useAuth from "../hooks/useAuth";
import AddModal from "../components/AddModal";
import EditModal from "../components/EditModal";
import RemoveModal from "../components/RemoveModal";
import StudentsList from "../components/StudentsList";
import ButtonIcon from "../components/styles/ButtonIcon.styled";
import { AddStudentIcon } from "../components/styles/StyledIcons.styled";

function MainPage() {
  const { user } = useAuth();
  const [classFilter, setClassFilter] = useState<string>("");
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
            <StudentsList
              filter={classFilter}
              setEditModal={setEditModal}
              setRemoveModal={setRemoveModal}
            />
          </div>
          <div>
            {user.role === "teacher" ? (
              <ButtonIcon onClick={() => setAddModal(true)}>
                <AddStudentIcon />
              </ButtonIcon>
            ) : null}
          </div>
        </StudentsContainer>
        {isShownAddModal && <AddModal setAddModal={setAddModal} />}
        {isShownEditModal.shown && (
          <EditModal
            showModal={setEditModal}
            student={isShownEditModal.student}
          />
        )}
        {isShownRemoveModal.shown && (
          <RemoveModal
            entity="student"
            showModal={setRemoveModal}
            id={isShownRemoveModal.id}
          />
        )}
      </Wrapper>
    </Container>
  );
}

export default MainPage;
