import React from 'react'

const Knowmore = ({ closeModal }) => {

    return (
        <div className='modal'>

            <div className='more scroll-bar'>
                <div className='cancel'>
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='heading'>
                    <h2>Comp</h2>
                </div>
                <div className='description'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, autem animi. Minus voluptates totam molestias voluptatem magnam sint aut? Nisi quos nemo nam accusamus quod magni, officia quis tenetur expedita.
                    </p>

                </div>
                <div className='date'>
                    <div>
                        <h5>
                            DeadLine
                        </h5>
                        <p>
                            20/07/2022
                        </p>


                    </div>
                    <div>
                        <h5>
                            TimeLine
                        </h5>
                        <p>
                            20/07/2022
                        </p>
                    </div>
                </div>
                <div className='faq'>
                    <h2>FAQ</h2>
                    <div className='ques-ans'>
                        <p className='ques'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.
                        </p>
                        <p className='ans'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!
                        </p>
                    </div>
                    {/* <br /> */}
                    <div className='ques-ans'>
                        {/* <div className='container'> */}
                        <p className='ques'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.
                        </p>
                        <p className='ans'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!
                        </p>
                        {/* </div> */}
                    </div>
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Knowmore