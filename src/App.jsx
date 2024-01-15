import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { refreshUser } from './redux/auth/operations';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoggedIn } from './redux/auth/selectors';

const Layout = lazy(() => import('./layout/Layout/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
// const SignIn = lazy(() => import('./pages/SignIn/SignIn'));

function App() {
  // const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Suspense>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
