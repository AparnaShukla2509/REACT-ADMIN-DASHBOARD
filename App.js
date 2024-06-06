import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Charts from './pages/Charts';
import Tables from './pages/Tables';
import Calendar from './pages/Calendar';
import Kanban from './pages/Kanban';

const App = () => (
  <Router>
    <Navbar />
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
          </Routes>
        </Grid>
      </Grid>
    </Container>
  </Router>
);

export default App;
