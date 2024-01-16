import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="ABC"/>
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="Abc@xyz.com"/>
          </div>
          <div>
            <label>Message</label>
            <input type="text" required placeholder="Tells us about your query..."/>
          </div>
          
            <button type="submit">Send</button>
          
        </form>
      </main>
      </div>  
    </>
  )
}

export default Contact
