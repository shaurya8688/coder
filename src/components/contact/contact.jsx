import React from 'react'
import './contact.css'


export default function contact() {
  return (
     <div className='container'>

        <form id="form">
            <div className='social'>
                
                <div className='btn'> 
                    <h1>Let's partner up</h1>
                </div>
                <div className='or'>Lets Level up your brand</div>

                 
            </div>
            <div>
                
                <i classNameName='fa-solid fa-user'></i>
                <input type="text" name="username" id="username" placeholder="Name"/>
                <i className='fa-solid fa-circle-exclamation failure-icon'></i>
                <i className='fa-regular fa-circle-check success-icon'></i>
                <div className='error'></div>
            </div>
            <div>
                <i className='fa-regular fa-envelope'></i>
                <input type="email" name="email" id="email" placeholder="abc@gmail.com"/>
                <i className='fa-solid fa-circle-exclamation failure-icon'></i>
                <i className='fa-regular fa-circle-check success-icon'></i>
                <div className='error'></div>
            </div>
            <div>
                <h3>Phone XXXX 389 XXXX</h3>
            </div>
            <div>
             <textarea name="text" id="text" cols="45" rows="8" placeholder='How can i help ?'></textarea>
            </div>

            <button type="submit" id="submit">Get Started</button>
            <p>Prefer email? abcd@gmail.com</p>
            
        </form>
        <div className='content'>
           
        </div>
        
    </div>
  )
}
