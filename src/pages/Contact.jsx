import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState ({name: '', email: '', messag: ''});
  const[isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm()
  };

  emailjs.sendForm(
    'service_sxe8x8t'
  )

  const handleFocus = () => {
    
    
  };
  const handleBlur = () => {};

  return (
    <section className='relative flex lg:flex-row flex-col max-container p-8'>
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text text-2xl font-bold'>Get In Touch</h1>
        <form className='w-full flex flex-col gap-7 mt-14'
        onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>Name:
          <br />
          <input
            type = "text"
            name = "name"
            className = "input mt-2 px-6 py-2 rounded-lg border"
            placeholder = "Joe"
            required
            value = {form.name}
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}/> </label>
        
          <label className='text-black-500 font-semibold'>Email: <br />
          <input
            type = "email"
            name = "email"
            className = "input mt-2 px-6 py-2 rounded-lg border"
            placeholder = "joe@gmail.com"
            required
            value = {form.email}
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}/> </label>
<label className='text-black-500 font-semibold'>Your Message
<br />
          <textarea
            name = "message"
            rows = '4'
            className = "textarea mt-2 px-6 py-2 rounded-lg border"
            placeholder = "Let Me know how I can you"
            required
            value = {form.message}
            onChange={handleChange} 
            onFocus={handleFocus}
            onBlur={handleBlur}/> </label>

            <button 
            type = "submit"
            className='btn bg-blue-500 text-white py-2 px-6 rounded-lg mt-4 shadow-md hover:bg-blue-600'
            disabled = {isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}>
            {isLoading ? 'Sending ...' : 'Send Message'}
            </button>
        </form>
      </div>

    </section>
  )
}

export default Contact