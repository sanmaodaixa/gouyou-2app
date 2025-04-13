import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MapPin, PawPrint, ShoppingCart, Users, LogIn, UserPlus, Video, Dog } from "lucide-react";

function HomePage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to GouYou</h1>
      <p className="mt-2">Connect with dog owners, share stories, and discover products.</p>
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Dog Profile</h2>
      <form className="grid gap-4">
        <input className="border p-2 rounded" type="text" placeholder="Dog's Name" />
        <input className="border p-2 rounded" type="text" placeholder="Breed" />
        <input className="border p-2 rounded" type="number" placeholder="Age" />
        <input className="border p-2 rounded" type="file" accept="image/*" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Save Profile</button>
      </form>
    </div>
  );
}

function UploadPage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Dog Video</h2>
      <form className="grid gap-4">
        <input className="border p-2 rounded" type="text" placeholder="Video Title" />
        <input className="border p-2 rounded" type="file" accept="video/*" />
        <textarea className="border p-2 rounded" placeholder="Description" rows="4"></textarea>
        <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">Upload</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="flex gap-4 p-4 justify-center bg-white shadow">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/upload">Upload</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}

export default App;
