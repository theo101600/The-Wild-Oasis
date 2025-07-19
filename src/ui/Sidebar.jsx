import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";
import { useUser } from "../features/authentication/useUser";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  const { isLoading, user, error } = useUser();
  console.log(user.id);
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      {user.id === "1be9853d-8deb-46be-a3f6-bb8b37008ecf" && <Uploader />}
    </StyledSidebar>
  );
}

export default Sidebar;
