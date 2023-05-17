import Container from "../container/container";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 ">
      <div className="py-4 border-b-[10px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3">
            <Logo />
            <Search />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
