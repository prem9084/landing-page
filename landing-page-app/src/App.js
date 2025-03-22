import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import debounce from "./Components/Utility";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Pricing from "./Components/Pricicng";
import UserSearch from "./Components/UserSearch";
import Footer from "./Components/Footer";
import "./App.css";

// Lazy load the Contact component
const Contact = lazy(() => import("./Components/Contact"));
function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(data);
      setFilteredUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching users:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Debounced search function
  const handleSearch = debounce((searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredUsers(users);
      return;
    }

    const term = searchTerm.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
    );

    setFilteredUsers(filtered);
  }, 300);
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <div className="user-section">
        <div className="container">
          <h2>Our Users</h2>
          <UserSearch
            onSearch={handleSearch}
            users={filteredUsers}
            isLoading={isLoading}
          />
        </div>
      </div>
      <Suspense
        fallback={<div className="loading">Loading contact form...</div>}
      >
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
