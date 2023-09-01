import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [bio, setBio] = useState("")

    const [errorMessages, setErrorMessages] = useState([]);
    // this is a git comment

    const validate = () => {
        const errors = [];

        if (name.length === 0) {
            errors.push("First Name cannot be blank.");
        }

        if (!email.includes('@')) {
            errors.push("Email must be in a valid format.");
        }
        if (phoneNumber && phoneNumber.length < 10) {
            errors.push("Phone Number must be at least 10 numbers.");
        }
        if (bio.length > 280) {
            errors.push("Bio exceeded 280 character limit")
        }

        return errors;
    };




};


const test = 1;