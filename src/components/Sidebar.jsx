import { assets } from "../assets/assets";
import RecentChat from "./RecentChat";
import NewChat from "./NewChat";

const Sidebar = ({ onHandleClick, clicked }) => {
  const { menu_icon } = assets;

  return (
    <div className="bg-[#F0F4F9] h-screen transition-all justify-between">
      <div className="top py-1 justify-center pt-5 px-5">
        <img
          onClick={() => {
            onHandleClick((value) => !value);
          }}
          src={menu_icon}
          alt="Menu"
          className="w-10 rounded-full hover:bg-[#E8ECF1] hover:cursor-pointer p-3 mb-10"
        />
        <NewChat clicked={clicked} />
        <RecentChat clicked={clicked} />
      </div>
    </div>
  );
};

export default Sidebar;
