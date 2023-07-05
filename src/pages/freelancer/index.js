import Dropdown from "../../common/dropdown";
import MultiSelectDropdown from "../../common/multiselect-dropdown";
import styles from "./index.module.css";

const options = [
  { label: "C++", value: "c++" },
  { label: "Java", value: "java" },
  { label: "DS", value: "ds" },
  { label: "GoLang", value: "go" },
];
const Freelancer = () => {
  const logoutLocal = () => {};
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
