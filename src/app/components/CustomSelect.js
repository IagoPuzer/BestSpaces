import PropTypes from "prop-types";

export default function CustomSelect(props) {
  const { options, onChange, value } = props;

  if (!Array.isArray(options)) {
    console.error("Options should be an array");
    return null;
  }

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border rounded-md"
    >
      <option value="" disabled>
        Selecione uma opção
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
// Adicionando PropTypes para as propriedades
CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
