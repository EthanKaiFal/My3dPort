import '../index.css'
import { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
const Contact = () => {
    const formRef = useRef();

    const[loading, setloading] = useState(false);
    const [form, setForm] = useState({
        FullName: '',
        Email: '',
        YourMessage: ''
    })

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]:value})
    }

    const handleSubmit = async(e) =>{

        //service_lih1fmt
        e.preventDefault();
        setloading(true);
        try{
        await emailjs.send(service_lih1fmt, template_p7elm0k,{
            from_name: form.FullName,
            to_name: 'Ethan',
            from_email: form.email,
            to_email: 'ethan.kai.falconer@gmail.com',
            message: form.YourMessage
            
        }, 'V3WjTaAFYvlBvoyjI');
        setloading(false);
        alert('Success');
        setForm({
            FullName:'',
            Email:'',
            YourMessage:''
        });
    }
    catch(error){
        alert('Soemthing went wrong!');
    }
    }
    return(
        <section className="c-space contact-section" id="contact" >
            <div className="contact-containers">
                <h1 className="contact-header"> Let's Talk</h1>
                <p className="my-message">From designing front ends to setting up backend APIs to sandbox testing to cloud computing, I possess a wide variety of skills that have been developed through school, projects, and further self learning. </p>
                <form ref={formRef} onSubmit={handleSubmit} className="form-container">
                    <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                    <label for="FullName"><span className="field-label">Full Name</span></label>
                    <input type="text" id="FullName" name="FullName" className="input-form" onChange={handleChange} placeholder='John Doe'/>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                    <label for="Email"><span className="field-label">Email</span></label>
                    <input type="text" id="Email" name="Email" className="input-form" onChange={handleChange} placeHolder="john.doe@gmail.com"/>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
                    <label for="YourMessage"><span className="field-label">Your Message</span></label>
                    <textarea rows="5" id="YourMessage" name="" className="input-form their-message" onChange={handleChange} placeHolder="Hi, I'm interested in..."></textarea>
                    </div>
                    <button  className="send-message-btn" type="submit">
                        {loading ? 'Sending...' : 'Sending'} 
                        <img src="assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"></img>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;