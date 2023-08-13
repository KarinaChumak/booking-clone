import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './LoginSignupPage.module.css';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import { useAuth } from '../../contexts/AuthContext';

function LoginSignupPage() {
  const [email, setEmail] = useState('karinac3011@gmail.com');
  const [password, setPassword] = useState('12345678');

  const { isAuthenticated, login } = useAuth();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) {
        navigate('/', { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );

  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }
  return (
    <>
      <header>
        <Header toShowButtons={false} toShowDetails={false}></Header>
      </header>
      <main>
        <section className={styles.loginPage}>
          <Container>
            <div className={styles.formContainer}>
              <form
                className={styles.loginForm}
                onSubmit={handleSubmit}
              >
                <h3>Sign in or create an account</h3>
                <div>
                  <label>Email address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className={styles.dataInput}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>

                <div className={styles.passwordInputDiv}>
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className={styles.dataInput}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <button>Continue with email</button>
              </form>

              <div className={styles.terms}>
                <p>
                  By signing in or creating an account, you agree to
                  absolutely nothing, as this is a learning project,
                  not for a commercial use
                </p>
              </div>

              <p>All rights belong to Booking.com™</p>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default LoginSignupPage;
