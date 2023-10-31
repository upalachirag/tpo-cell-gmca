import React, { useState } from 'react'
function Profile() {
    const [profileData, setProfileData] = useState({
        profilePic: null,
        userName: '',
        password: '',
        confirm: '',
        name: '',
        surname: '',
        email: '',
        address: '',
        course: '',
        year: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData({
            ...profileData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfileData({
            ...profileData,
            profilePic: file,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission here. You can access profileData to get the input values and profilePic for the uploaded image.
        console.log('Form data:', profileData);
    };
    return (
        <>
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body wizard-content">
                            <h4 className="card-title">Update Profile</h4>
                            <h6 className="card-subtitle"></h6>
                            <form id="example-form" action="#" className="m-t-40">
                                <div>
                                    <h3>Student</h3>
                                    <section>
                                        <div className="form-group">
                                            <label htmlFor="profilePic">Profile Picture</label>
                                            <input
                                                type="file"
                                                name="profilePic"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                        </div>
                                        <label htmlFor="userName">Enrollment No</label>
                                        <input id="userName" name="userName" type="text" className="required form-control" />
                                        <label htmlFor="password">Password </label>
                                        <input id="password" name="password" type="text" className="required form-control" />
                                        <label htmlFor="confirm">Confirm Password </label>
                                        <input id="confirm" name="confirm" type="text" className="required form-control" />
                                        <label htmlFor="name">Name </label>
                                        <input id="name" name="name" type="text" className="required form-control" />
                                        <label htmlFor="surname">Last name </label>
                                        <input id="surname" name="surname" type="text" className="required form-control" />
                                        <label htmlFor="email">Email </label>
                                        <input id="email" name="email" type="text" className="required email form-control" />
                                        <label htmlFor="address">Address</label>
                                        <input id="address" name="address" type="text" className="form-control" />
                                        <label htmlFor="course">Course</label>
                                        <input id="course" name="course" type="text" className="form-control" />
                                        <label htmlFor="year">Year</label>
                                        <input id="year" name="year" type="text" className="form-control" />
                                    </section>
                                </div>
                                <div className="text-left">
                                    <button type="button" className="btn btn-primary">Edit</button>
                                    <button type="submit" className="btn btn-success">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile
