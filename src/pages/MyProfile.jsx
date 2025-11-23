import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    if (!name || !photo) {
      toast.error("Name and Photo URL cannot be empty!");
      return;
    }

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setEditing(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-lg mx-auto py-10 px-4">
      <title>MyProfile</title>
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">
        My Profile
      </h2>

      <div className="bg-white shadow-lg p-6 rounded-lg text-center">
        <img
          src={user?.photoURL || "https://i.ibb.co.com/Swh1pkqf/islamic-cartoon-profile-picture-10957076.png" }
          alt="User"
          className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-300"
        />

        <h2 className="text-2xl font-semibold mt-4">
          {user?.displayName || "Sumaiya"}
        </h2>

        <p className="text-gray-600 mt-1">{user?.email}</p>

      
        <button
          onClick={() => setEditing(!editing)}
          className="mt-4 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 cursor-pointer"
        >
          {editing ? "Cancel" : "Update Profile"}
        </button>
      </div>

      {/* Update Form */}
      {editing && (
        <div className="bg-white shadow-lg p-6 rounded-lg mt-6">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Update Your Info
          </h3>

          <label className="block font-semibold">Name</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block font-semibold">Photo URL</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded mb-3"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />

          <button
            onClick={handleUpdate}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 cursor-pointer"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
