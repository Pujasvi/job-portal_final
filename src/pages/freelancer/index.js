import Dropdown from "../../common/dropdown";
import MultiSelectDropdown from "../../common/multiselect-dropdown";
import { setDataInLocalStorage } from "../../utils/commonUtils";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../components/Login/loginSlice";

const options = [
  { label: "C++", value: "c++" },
  { label: "Java", value: "java" },
  { label: "DS", value: "ds" },
  { label: "GoLang", value: "go" },
];
const Freelancer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutLocal = () => {
    setDataInLocalStorage("user", "");
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <div className={styles.header}>
        <button type="button" onClick={logoutLocal}>
          Logout
        </button>
      </div>
      {/* <div>Select Filters</div> */}
      <Dropdown
        label="Select Skills"
        onSelect={(data) => console.log({ data })}
        options={options}
      />
      <MultiSelectDropdown options={options} />
      {/* <Employer/> */}
    </>
  );
};
export default Freelancer;
