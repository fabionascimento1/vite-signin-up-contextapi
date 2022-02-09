import { useState } from 'react' 
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { PageLogin } from './Pages/login'
import { PageProfile } from './Pages/profile'
import { PageSignup } from './Pages/signup'

function App() {
  return (
   <AuthProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<PageProfile />} >
        </Route>
        <Route path="/login" element={<PageLogin />}></Route>
        <Route path="/signup" element={<PageSignup />}></Route>
      </Routes>
     </BrowserRouter>
   </AuthProvider>
  )
}

export default App
