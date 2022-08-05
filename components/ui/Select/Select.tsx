import s from './Select.module.css';
import cn from 'classnames';
interface SelectProps {
  className?: string;
  label: string;
  options: { value: string; label: string }[];
  value: string | number | undefined;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const Select = ({
  className,
  label,
  options,
  name,
  value,
  onChange,
}: SelectProps) => {
  return (
    <div className={cn(className, s.root)}>
      <label htmlFor={name} className={s.label}>
        {label}
      </label>
      <div className={s.selectGroup}>
        <select
          name={name}
          id={name}
          className={s.select}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Select;
