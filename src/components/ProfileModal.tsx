import useAuth from "../hooks/useAuth";
import { ModalContainer, ModalBody } from "./styles/AddModal.styled";
import CloseIcon from "./styles/CloseIcon";
import { ModalInfo } from "./styles/Modal.styled";

const userMapping = {
  teacher: "учитель",
  student: "студент",
  guest: "гостевой",
};

type ProfileModalProps = {
  showModal: React.Dispatch<React.SetStateAction<any>>;
};

function ProfileModal({ showModal }: ProfileModalProps) {
  const { user } = useAuth();

  const handleClick = () => {
    showModal(false);
  };

  return (
    <ModalContainer>
      <ModalBody>
        <ModalInfo>
          <h2>Профиль</h2>
          <label>
            Аккаунт:
            <input
              readOnly
              value={userMapping[user.role as keyof typeof userMapping]}
            />
          </label>
          <label>
            Email:
            <input readOnly value={user.email} />
          </label>
          <CloseIcon onClick={handleClick} />
        </ModalInfo>
      </ModalBody>
    </ModalContainer>
  );
}

export default ProfileModal;
