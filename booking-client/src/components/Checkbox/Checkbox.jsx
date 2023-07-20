import styles from './Checkbox.module.css';

export default function Checkbox({
  isChecked,
  onClick,
  children,
  checkbox_id,
}) {
  return (
    <div
      className={`${styles.checkboxInputGroup} ${
        isChecked ? styles.checked : ''
      }`}
    >
      <div className={styles.checkbox} onClick={onClick}>
        <input type="checkbox" id={checkbox_id} name="entireApt" />
      </div>

      <label htmlFor={checkbox_id}>{children}</label>
    </div>
  );
}
