import React, { useEffect, useState } from 'react';
import styles from './HomeMenu.module.scss';
import { iHomeMenu } from '../../interfaces/iHomeMenu';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { routes } from './routes';

function HomeMenu(props: iHomeMenu) {
  const [menuShow, setMenuShow] = useState(false);
  const [loadingRoute, setLoadingRoute] = useState(false);
  const router = useRouter();

  function handleRouteHelpers(route: string) {
    setMenuShow(!menuShow);
    if (router.route !== route) {
      setLoadingRoute(!loadingRoute);
    }
  }

  useEffect(() => {
    loadingRoute && setLoadingRoute(!loadingRoute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const verifyRouteToReturnStyle = (route: string) =>
    `${styles.link} ${router.route === route && styles.link_active}`;

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
          {menuShow ? (
            <nav className={styles.navHome} data-testid={'nav'}>
              {routes.map((route) => (
                <Link
                  href={route.route}
                  key={route.route}
                  className={verifyRouteToReturnStyle(route.route)}
                  onClick={() => handleRouteHelpers(route.route)}
                >
                  {route.name}
                </Link>
              ))}
            </nav>
          ) : (
            props.children
          )}
        </>
      ) : (
        <div className={styles.loading}>
          <h1>Carregando...</h1>
        </div>
      )}
    </>
  );
}

export default HomeMenu;
