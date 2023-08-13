import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import styles from './LoggedUser.module.css';
import { useAuth } from '../../contexts/AuthContext';
import UserMenu from '../UserMenu/UserMenu';

import useClickOutside from '../../hooks/useClickOutside';

function LoggedUser() {
  const [menuOpen, setMenuOpen] = useState(true);
  const wrapperRef = useRef('menu');

  const { user } = useAuth();

  function handleToggleMenu() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  useClickOutside(wrapperRef, () => {
    setMenuOpen(false);
  });

  return (
    <div
      className={styles.loggedUser}
      onClick={handleToggleMenu}
      ref={wrapperRef}
    >
      <img src={user.avatar}></img>
      <div className={styles.details}>
        <h4>{user.name}</h4>
        <p>{user.level}</p>
      </div>
      <AnimatePresence>
        {menuOpen && <UserMenu onClick={handleToggleMenu}></UserMenu>}
      </AnimatePresence>
    </div>
  );
}

export default LoggedUser;
