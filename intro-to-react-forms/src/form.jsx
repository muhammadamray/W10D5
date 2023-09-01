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
        } else{
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
        } else{
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
            <form name='form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input type="text" placeholder="Name" onChange={handleChange('name')} value={name}/>
                <br/>

                <input type="text" placeholder="Email" onChange={handleChange('email')} value={email}/>
                <br/>


                <input type="tel" placeholder="Number Optional" onChange={handleChange('phoneNumber')} value={phoneNumber}/>
                <br/>


                <label htmlFor="phoneType">Phone Type</label>
                <select name="phone-type" id="phoneType">
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
                <br/>


                <div>
                    <p>Staff:</p>
                    <input type="radio" name="staff" id="Instructor"/>
                    <label htmlFor="Instructor">Instructor</label>
                    <input type="radio" name="Student" id="Student"/>
                    <label htmlFor="Student">Student</label>
                </div>
                <br />
                

                <div>
                    <label for="bio">Bio:</label>
                    <input type="text" id="Bio" name="Bio" placeholder="Please enter a bio thats under 280 characters"/>
                </div>
                <br />

                <form>
                    <fieldset>
                        <legend>Sign up for Email Notifications?</legend>
                        <div>
                            <input type="checkbox" id="emailNotifYes" name="emailNotif" value="Yes" />
                            <label htmlFor="emailNotifYes">Yes</label>
                        </div>
                        <div>
                            <input type="checkbox" id="emailNotifNo" name="emailNotif" value="No" />
                            <label htmlFor="emailNotifNo">No</label>
                        </div>
                    </fieldset>
                </form>


                <button>Submit</button>
            </form>
        </>
    )

};


export default Form;

