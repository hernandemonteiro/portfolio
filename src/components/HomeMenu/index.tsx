import React, { useState } from 'react';
import styles from './HomeMenu.module.scss';
import { iHomeMenu } from '../../interfaces/iHomeMenu';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function HomeMenu(props: iHomeMenu) {
  const router = usePathname();

  const [menuShow, setMenuShow] = useState(false);
  const [loadingRoute, setLoadingRoute] = useState(false);

  function handleRouteHelpers() {
    setMenuShow(!menuShow);
    setLoadingRoute(!loadingRoute);
  }
  if (loadingRoute) {
    setTimeout(() => setLoadingRoute(!loadingRoute), 4000);
  }

  function menuLinkRouteRenderControll(
    route: string,
    component: React.ReactNode
  ) {
    return router != route && component;
  }

  return (
    <>
      {!loadingRoute ? (
        <>
          <button
            className={styles.menuButton}
            data-testid={'menuButton'}
            onClick={() => setMenuShow(!menuShow)}
          >
            {!menuShow ? <AiOutlineMenu /> : <AiOutlineClose />}
          </button>
          {menuShow && (
            <nav className={styles.navHome} data-testid={'nav'}>
              {menuLinkRouteRenderControll(
                '/',
                <Link href="/" onClick={handleRouteHelpers}>
                  Home
                </Link>
              )}
              {menuLinkRouteRenderControll(
                '/HardSkills',
                <Link href="/HardSkills" onClick={handleRouteHelpers}>
                  Hard-Skills
                </Link>
              )}
              {menuLinkRouteRenderControll(
                '/SoftSkills',
                <Link href="/SoftSkills" onClick={handleRouteHelpers}>
                  Soft-Skills
                </Link>
              )}
              {menuLinkRouteRenderControll(
                '/Academic',
                <Link href="/Academic" onClick={handleRouteHelpers}>
                  Acadêmico
                </Link>
              )}
              {menuLinkRouteRenderControll(
                '/Experience',
                <Link
                  href="/Experience"
                  data-testid={'navigate_test'}
                  onClick={handleRouteHelpers}
                >
                  Experiência
                </Link>
              )}
              {menuLinkRouteRenderControll(
                '/Projects',
                <Link href="/Projects" onClick={handleRouteHelpers}>
                  Projetos
                </Link>
              )}
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
