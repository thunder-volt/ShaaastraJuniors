import React from 'react'
import { useState } from 'react';
import Knowmore from './Knowmore';
const Cards = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='container'>
            <div className='card-bdy'>

                <div className='card'>
                    <div className='img'>
                    </div>
                    <div className='ttl'>
                        <p>Comp</p>
                    </div>
                    <div className='dsp'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum. Placeat quae similique pariatur sint deserunt alias omnis.
                        </p>
                    </div>
                    <div className='extra'>
                        <p>01/08/2022</p>
                        <p>Chennai</p>
                    </div>
                    {/* <div className='link'>
                        <div>
                            <button >Register</button>

                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                window.scroll(0, 0);
                                // const root = document.getElementsByClassName("App");
                                // root.style.display = "none";

                            }}>Know More</button>

                        </div>
                    </div> */}
                </div>
                <div className='card'>
                    <div className='img'>
                    </div>
                    <div className='ttl'>
                        <p>Comp</p>
                    </div>
                    <div className='dsp'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum. Placeat quae similique pariatur sint deserunt alias omnis.
                        </p>
                    </div>
                    <div className='extra'>
                        <p>01/08/2022</p>
                        <p>Chennai</p>
                    </div>
                    {/* <div className='link'>
                        <div>
                            <button>Register</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                window.scroll(0, 0);
                            }}>Know More</button>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='card-bdy'>
                <div className='card'>
                    <div className='img'>
                    </div>
                    <div className='ttl'>
                        <p>Comp</p>
                    </div>
                    <div className='dsp'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum. Placeat quae similique pariatur sint deserunt alias omnis.
                        </p>
                    </div>
                    <div className='extra'>
                        <p>01/08/2022</p>
                        <p>Chennai</p>
                    </div>
                    {/* <div className='link'>
                        <div>
                            <button>Register</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                window.scroll(0, 0);
                            }}>Know More</button>
                        </div>
                    </div> */}
                </div>
                <div className='card'>
                    <div className='img'>
                    </div>
                    <div className='ttl'>
                        <p>Comp</p>
                    </div>
                    <div className='dsp'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum. Placeat quae similique pariatur sint deserunt alias omnis.
                        </p>
                    </div>
                    <div className='extra'>
                        <p>01/08/2022</p>
                        <p>Chennai</p>
                    </div>
                    {/* <div className='link'>
                        <div>
                            <button>Register</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                window.scroll(0, 0)
                            }}>Know More</button>
                        </div>
                    </div> */}
                </div>

            </div>
            {openModal && < Knowmore closeModal={setOpenModal} />}
        </div>
    )
}

export default Cards