import React from 'react'

const Register = ({ closeModal1 }) => {
    return (
        <div className='modal-reg'>
            <div className='more-reg'>
                <div className='cancel'>
                    <button onClick={() => closeModal1(false)}>X</button>
                </div>
                <div className='heading'>
                    <h2>Comp</h2>
                </div>
                <div className='description'>
                    <label htmlFor="shaastra-id">Enter Shaastra ID</label>
                    {/* <br /> */}
                    <input type="text" id='shaastra-id' />
                </div>


                <button className='reg-btn'>Register</button>
            </div>
        </div>

    )
}

export default Register