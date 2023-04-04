import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMembers';
import Header from './Header';
import Nav from './Nav';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Nav />
          <Header />
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route
              path="/grouped-team-members"
              element={<GroupedTeamMembers />}
            />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
