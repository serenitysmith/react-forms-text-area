import React, {useState} from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = React.useState(
    {firstName: "", lastName: "", email: "", comments:""}
)

 // console log statement to make sure handle change is working 
console.log(formData.comments)

function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

return (
    <form>
        <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
        />
        <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
        />
        <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
        />

{/* 
/* /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes. */}

      {/* // in html whatever you put inside text area becomes its value, its  a larger input box for text  */}
        {/* <textarea>Whatever you put inside</textarea> */}

        {/* react is a little different,see below  */}

        {/* to meet the challenge we added a coments section to our object array above and added fordata.comments inside the vlaue of th etext area we also dded the same hale  change function as above and for hande chage to work it needs a name hence the name comments */}
<textarea 
value={formData.comments}
placeholder="Comments"
                onChange={handleChange}
                name="comments"

/>
       

        

    </form>
)
}

export default App;
