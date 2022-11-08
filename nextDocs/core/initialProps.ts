import { readDirs, readNavDir } from "./readDir";

export function initialProps(RootElement: any) {
  RootElement.getInitialProps = async () => {
    const dirs = await readDirs("./src/pages/docs/");
    const navDir = await readNavDir("./src/pages/docs");
    let pageProps = { dirs: dirs, navDir: navDir };

    return pageProps;
  };
}
