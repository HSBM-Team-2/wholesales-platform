import React, { useState } from 'react';

const RegistrationForm = () => {
    const [userType, setUserType] = useState('user');
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        wholesalerName: '',
        contactInfo: '',
        serviceName: '',
        serviceContactInfo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleUserTypeChange = (e) => {
        setUserType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="usertype">User Type:</label>
            <select id="usertype" name="usertype" value={userType} onChange={handleUserTypeChange}>
                <option value="user">User</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="transport_service">Transport Service</option>
            </select>

            {userType === 'user' && (
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
            )}

            {userType === 'wholesaler' && (
                <div>
                    <label htmlFor="wholesalerName">Wholesaler Name:</label>
                    <input type="text" id="wholesalerName" name="wholesalerName" value={formData.wholesalerName} onChange={handleChange} required />

                    <label htmlFor="contactInfo">Contact Info:</label>
                    <input type="text" id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
                </div>
            )}

            {userType === 'transport_service' && (
                <div>
                    <label htmlFor="serviceName">Service Name:</label>
                    <input type="text" id="serviceName" name="serviceName" value={formData.serviceName} onChange={handleChange} required />

                    <label htmlFor="serviceContactInfo">Contact Info:</label>
                    <input type="text" id="serviceContactInfo" name="serviceContactInfo" value={formData.serviceContactInfo} onChange={handleChange} />
                </div>
            )}

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
