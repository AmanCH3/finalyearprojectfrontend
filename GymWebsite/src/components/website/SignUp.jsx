import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from "../../components/admin/member/Dropdown";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [membershipType, setMembershipTypes] = useState('');
  const membershipTypes = [
    { membership_type_id: 1, type_name: "Basic" },
    { membership_type_id: 2, type_name: "Standard" },
    { membership_type_id: 3, type_name: "Premium" },
  ];

  
  const handleSelectMembershipType = (typeId) => {
   if (typeId==1) {
      setMembershipTypes("Basic");
    }
    else if (typeId === 2) {
      setMembershipTypes("Standard");
    } else if (typeId === 3) {
      setMembershipTypes("Premium");
    } else {
      setMembershipTypes("");
    }
    

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        console.log(username,password);
      const response = await axios.post('http://localhost:8000/register/', {
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        address: address,
        date_of_birth: dateOfBirth,
      });

      setSuccessMessage('Registration successful!');
      setError('');
      setUsername('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setAddress('');
      setDateOfBirth('');

      console.log('Registration successful:', response.data);
    } catch (error) {
      setError(error.response?.data || 'An error occurred during registration.');
      setSuccessMessage('');
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="block text-gray-700 text-2xl font-bold mb-6 text-center">
          Sign Up
        </h2>

        {successMessage && (
          <div className="bg-green-200 text-green-700 border border-green-500 rounded p-3 mb-4">
            {successMessage}
          </div>
        )}
        {error && (
          <div className="bg-red-200 text-red-700 border border-red-500 rounded p-3 mb-4">
            {JSON.stringify(error)}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

           <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

           <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

           <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dateOfBirth"
            >
              Date of Birth:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dateOfBirth"
              type="date"
              placeholder="Date of Birth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
<div className="mb-6">
   <label className="font-medium">Membership Type</label>
                  <Dropdown
                    options={membershipTypes.map((type) => ({
                      value: type.membership_type_id,
                      label: type.type_name,
                    }))}
                    onSelect={handleSelectMembershipType}
                    selectedOption={typeId => {
                      if (typeId == 1) {
                        setMembershipTypes("Basic");
                      } else if (typeId === 2) {
                        setMembershipTypes("Standard");
                      } else if (typeId === 3) {
                        setMembershipTypes("Premium");
                      } else {
                        setMembershipTypes("");
                      }
                    }}
                    placeholder="Select Membership Type"
                  />
</div>
          <div className="mb-6">
          <label className="font-medium">Payment Method</label>
            <div className="flex space-x-4">
              <button
                type="butaton"
                className={`px-4 py-2 rounded-lg ${formData.paymentMethod === "Khalti" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: "Khalti" }))}
              >
                Khalti
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded-lg ${formData.paymentMethod === "Cash" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setFormData((prev) => ({ ...prev, paymentMethod: "Cash" }))}
              >
                Cash
              </button>
            </div>

            {formData.paymentMethod === "Khalti" && (
              <div className="mt-2">
                <label className="font-medium">Transaction ID</label>
                <input
                  type="text"
                  name="transactionId"
                  value={formData.transactionId || ""}
                  onChange={handleChange}
                  placeholder="Enter Khalti transaction ID"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 mt-1 w-full"
                />
              </div>
            )}

            {formData.paymentMethod === "Cash" && (
              <div className="mt-2">
                <label className="font-medium">Amount</label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount || ""}
                  onChange={handleChange}
                  placeholder="Enter cash amount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 mt-1 w-full"
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;