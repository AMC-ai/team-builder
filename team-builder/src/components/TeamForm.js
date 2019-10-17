import React, { useState } from "react";

const TeamForm = props => {
    const [teamList, setTeamList] = useState({
        fullName: "",
        email: "",
        role: "",
    });

    const addMember = e => {
        setTeamList({ ...teamList, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.addNewTeamMember(teamList);
        setTeamList({ fullName: "", email: "", role: "", });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="fullName">Name:  </label>
            <input
                name="fullName"
                id="fullName"
                type="text"
                placeholder="e.g. John Doe"
                onChange={addMember}
                value={teamList.fullName}
            />
            <label htmlFor="email">E-mail:  </label>
            <input
                name="email"
                id="email"
                type="text"
                placeholder="e.g. johnDoe99@email.com"
                onChange={addMember}
                value={teamList.email}
            />
            <label htmlFor="role">Job Title:  </label>
            <input
                name="role"
                id="role"
                type="text"
                placeholder="e.g. Team Lead"
                onChange={addMember}
                value={teamList.role}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
export default TeamForm;