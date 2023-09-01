import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneType, setPhoneType] = useState(null);
    const [staff, setStaff] = useState(null);
    const [bio, setBio] = useState("");
    const [emailNotif, setEmailNotif] = useState(null);
    const [errorMessages, setErrorMessages] = useState([]);


    const validate = () => {
        const errors = [];

        if (name.length === 0) {
            errors.push("First Name cannot be blank.");
        }

        if (!email.includes('@')) {
            errors.push("Email must be in a valid format.");
        }
        if (phoneNumber && (!/^\d{3}-?\d{3}-?\d{4}$/.test(phoneNumber))) {
            errors.push("Phone Number invalid and should be in format ###-###-####.");
        }
        if(phoneNumber && phoneType === null){
            errors.push("Please select phone type.")
        }
        if (bio.length > 280) {
            errors.push("Bio exceeded 280 character limit")
        }

        return errors;
    };


    const handleChange = (field) => {
        return (e)=>{
            switch(field){
                case 'name':
                    setName(e.target.value);
                    break;
                case 'email':
                    setEmail(e.target.value);
                    break;
                case 'phoneNumber':
                    setPhoneNumber(e.target.value);
                    break;
                case 'phoneType':
                    setPhoneType(e.target.value);
                case 'staff':
                    setStaff(e.target.value);
                    break;
                case 'bio':
                    setBio(e.target.value);
                    break;
                case 'emailNotif':
                    setEmailNotif(e.target.value);
                    break;
                default:
                    break;
            }
        }
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        let errors = [];

        if(errors.length){
            setErrorMessages(errors);
        }else{
            let user = {
                name,
                email,
                phoneNumber,
                phoneType,
                staff,
                bio,
                emailNotif
            };

            setErrorMessages([]);
        }
    };

    const showErrors = ()=>{
        if(!errorMessages.length){
            return null;
        }else{
            return(
                <ul>
                    {errorMessages.map( error => <li>error</li>)}
                </ul>
            )
        }
    }


    return (
        <>
            {showErrors()}

        </>
    )

};


