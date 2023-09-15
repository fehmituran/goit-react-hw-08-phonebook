import AppBar from 'components/AppBar/AppBar'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Container} from "./SharedLayout.styled";
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  return (
    <Container>
     <AppBar/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Container>
  );
}

export default SharedLayout
