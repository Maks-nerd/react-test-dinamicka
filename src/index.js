// Модули
import React from 'react';
import ReactDOM from 'react-dom';

// Компоненты
import App from './components/App';
import Container from './components/Container';

// Стили
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root'),
);
