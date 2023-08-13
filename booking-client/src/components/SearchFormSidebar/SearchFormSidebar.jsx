import styles from './SearchFormSidebar.module.css';
import Checkbox from '../Checkbox/Checkbox';
function SearchFormSidebar() {
  return (
    <form className={styles.searchForm}>
      <p>Search</p>

      <div>
        <label> Destination/property name: </label>
        <div className={styles.inputGroup}>
          <svg viewBox="0 0 128 128">
            <path d="M118.8 113.2l-31-31A4 4 0 0 0 85 81a44 44 0 1 0-4 4 4 4 0 0 0 1.2 2.8l31 31a4 4 0 0 0 5.6-5.7zM52 88a36 36 0 1 1 36-36 36 36 0 0 1-36 36z"></path>
          </svg>
          <input
            type="text"
            placeholder="Where are you going?"
          ></input>
        </div>
      </div>

      <div>
        <label> Check-in date: </label>
        <button className={styles.calendarInputButton}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z"></path>
          </svg>
          <p>Tuesday 8 August</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={styles.dropdownArrow}
          >
            <path d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z"></path>
          </svg>
        </button>
      </div>

      <div>
        <label> Check-in date: </label>
        <button className={styles.calendarInputButton}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75v8.25zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25V13.5zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5zM7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0zm10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0z"></path>
          </svg>
          <p>Tuesday 8 August</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={styles.dropdownArrow}
          >
            <path d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z"></path>
          </svg>
        </button>
      </div>
      <div>
        <label>People leaving</label>
        <button className={styles.calendarInputButton}>
          <p>2 adults - 0 children</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={styles.dropdownArrow}
          >
            <path d="M18 9.45c0 .2-.078.39-.22.53l-5 5a1.08 1.08 0 0 1-.78.32 1.1 1.1 0 0 1-.78-.32l-5-5a.75.75 0 0 1 0-1.06.74.74 0 0 1 1.06 0L12 13.64l4.72-4.72a.74.74 0 0 1 1.06 0 .73.73 0 0 1 .22.53zm-5.72 4.47zm-.57 0z"></path>
          </svg>
        </button>
      </div>

      <Checkbox
        isChecked={true}
        onClick={() => {}}
        checkbox_id="workTravel"
      >
        I&apos;m travelling for work
      </Checkbox>

      <button className={styles.submitButton}>Search</button>
    </form>
  );
}

export default SearchFormSidebar;
