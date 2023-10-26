import App from './App';
import ReactDOM from 'react-dom/client';
import { UserProvider } from './contexts/UserContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UserProvider>
    <App />
  </UserProvider>
)
