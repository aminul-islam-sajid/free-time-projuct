import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PublicRouter from './router/publicRouter';

function App() {


  return (
     <Suspense fallback={''}>
      <main className="main">
        <Routes>
          {PublicRouter.map(({ path, Component }, index) => {
            return <Route key={index} path={path} element={<Component />} />;
          })}
        </Routes>
      </main>
    </Suspense>
  )
}

export default App
