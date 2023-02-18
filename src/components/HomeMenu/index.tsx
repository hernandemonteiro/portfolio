import React, { useState } from 'react';
import styles from './HomeMenu.module.scss';
import { iHomeMenu } from '../../interfaces/iHomeMenu';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';

function HomeMenu(props: iHomeMenu) {
  const [menuShow, setMenuShow] = useState(false);
  const [loadingRoute, setLoadingRoute] = useState(false);

  function handleRouteHelpers() {
    setMenuShow(!menuShow);
    setLoadingRoute(!loadingRoute);
  }
  if (loadingRoute) {
    setTimeout(() => setLoadingRoute(!loadingRoute), 4000);
  }

  return (
    <>
      {!loadingRoute ? (
        <>
          <button
            className={styles.menuButton}
            onClick={() => setMenuShow(!menuShow)}
          >
            {!menuShow ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
          {menuShow && (
            <nav className={styles.navHome}>
              <Link href="/" onClick={handleRouteHelpers}>
                Home
              </Link>
              <Link href="/HardSkills" onClick={handleRouteHelpers}>
                Hard-Skills
              </Link>
              <Link href="/SoftSkills" onClick={handleRouteHelpers}>
                Soft-Skills
              </Link>
              <Link href="/Academic" onClick={handleRouteHelpers}>
                Acadêmico
              </Link>
              <Link href="/Experience" onClick={handleRouteHelpers}>
                Experiência
              </Link>
              <Link href="/Projects" onClick={handleRouteHelpers}>
                Projetos
              </Link>
            </nav>
          )}
          {!menuShow && props.children}
        </>
      ) : (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <h1>Carregando...</h1>
        </div>
      )}
    </>
  );
}

export default HomeMenu;
