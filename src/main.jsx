
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Contextprovider } from './Context/Context.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Contextprovider>
    <App />
    </Contextprovider>
    </BrowserRouter>
    

)
