import { SideBar } from '../SideBar';
import { Content } from '../Content';

import '../../assets/styles/global.scss';

import { MovieContextProvider } from '../../Context/ApiContext';

export function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <MovieContextProvider>
        <SideBar />
        <Content />
      </MovieContextProvider>
    </div>
  );
}
