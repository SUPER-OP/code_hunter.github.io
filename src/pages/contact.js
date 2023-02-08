import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

export const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = { name, email, phone, desc };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        alert("Thanks for Contacting us !")
        setname('')
        setemail('')
        setphone('')
        setdesc('')
      })
      .catch((error) => {
        console.error('Error:', error);
      });


  }
  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
  }
  return (
    <div className={styles.container}>
      <h1>Contact Us<span>!</span></h1>
      <form onSubmit={handleSubmit} spellCheck="false">
        <div className={styles.formWrapper}>
          <div className={styles.box}>
            <label htmlFor="name" className={styles.formLabel}> Name  : </label>
            <input type="text" value={name} onChange={handleChange} className={styles.form_control} id="name" name='name' aria-describedby="nameHelp" />

          </div>
          <div className={styles.box}>
            <label htmlFor="email" className={styles.formLabel}>Email : </label>
            <input type="email" value={email} onChange={handleChange} className={styles.form_control} id="email" name='email' aria-describedby="emailHelp" />
          </div>
          <div className={styles.box}>
            <label htmlFor="Phone No." className={styles.formLabel}>Phone : </label>
            <input type="number" value={phone} onChange={handleChange} className={styles.form_control} id="phone" name='phone' />
          </div>

          <div className={styles.box}>

            <label htmlFor="desc" className={styles.formLabel}>Elaborate your Concern : </label><br />
            <textarea name='desc' rows="8" cols="50" id="desc" value={desc} onChange={handleChange} className={styles.form_controlDesc} placeholder="Write your concern here " />


          </div>
        </div>
        <div className={styles.submitBtn}>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  )
}
export default Contact;