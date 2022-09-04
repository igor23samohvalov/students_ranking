import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Wrapper from "./styles/Navbar.styled";
import Button from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import useAuth from "../hooks/useAuth";
import ProfileModal from "./ProfileModal";

function Header() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const [isShownProfileModal, showProfileModal] = useState<boolean>(false);

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };
  const handleProfile = () => {
    showProfileModal(true);
  };

  return (
    <header>
      <Container>
        <Wrapper>
          <Button onClick={handleProfile}>Профиль</Button>
          <Button onClick={handleLogOut}>Выйти</Button>
        </Wrapper>
      </Container>
      {isShownProfileModal && <ProfileModal showModal={showProfileModal} />}
    </header>
  );
}

export default Header;
