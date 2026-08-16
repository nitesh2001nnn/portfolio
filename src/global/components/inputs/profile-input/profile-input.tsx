import "./profile-input.scss";

type profileInput = {
  label: string;
  value: string;
  onChange: (item: string) => void;
  errorText: string;
};
const ProfileInput = ({ label, value, onChange, errorText: _errorText }: profileInput) => {
  const handleChange = (item: any) => {
    onChange(item);
  };
  return (
    <div>
      <label>{label}</label>
      <input
        type="file"
        onChange={(item: any) => handleChange(item)}
        value={value}
      ></input>
    </div>
  );
};

export default ProfileInput;
