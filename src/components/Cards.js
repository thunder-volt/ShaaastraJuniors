import React from 'react'
import { useState } from 'react';
import Knowmore from './Knowmore';
import Register from './Register';
const Cards = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModal1, setOpenModal1] = useState(false);
    const data = [
        {
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",

        },
        {
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",

        },
        {
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",

        },
        {
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",

        },
    ]
    return (
        <div className='container'>
            <div className='card-bdy'>
                {
                    data.map((data) => {
                        return <div className='card'>
                            <div className='img'></div>
                            <div className='ttl'>{data.heading}</div>
                            <div className='dsp'><p>{data.description}</p></div>
                            <div className='extra'><p>{data.date}</p>
                                <p className=''>{data.venue}</p></div>
                            <div className='link'>
                                <div>
                                    <button onClick={() => {
                                        setOpenModal1(true);
                                        setOpenModal(false);
                                        window.scroll(0, 0);
                                        // const root = document.getElementsByClassName("App");
                                        // root.style.display = "none";

                                    }}>Register</button>

                                </div>
                                <div>
                                    <button onClick={() => {
                                        setOpenModal(true);
                                        setOpenModal1(false)
                                        window.scroll(0, 0);
                                        // const root = document.getElementsByClassName("App");
                                        // root.style.display = "none";

                                    }}>Know More</button>

                                </div>
                            </div>
                        </div>
                    })
                }

                {/* <div className='card'>
                    <div className='img'>
                    </div>
                    <div className='ttl'>
                        <p>{data[0].heading}</p>
                    </div>
                    <div className='dsp'>
                        <p>
                            {data[0].description}
                        </p>
                    </div>
                    <div className='extra'>
                        <p>{data[0].date}</p>
                        <p>{data[0].venue}</p>
                    </div>
                    <div className='link'>
                        <div>
                            <button onClick={() => {
                                setOpenModal1(true);
                                setOpenModal(false);
                                window.scroll(0, 0);
                                // const root = document.getElementsByClassName("App");
                                // root.style.display = "none";

                            }}>Register</button>

                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                setOpenModal1(false)
                                window.scroll(0, 0);
                                // const root = document.getElementsByClassName("App");
                                // root.style.display = "none";

                            }}>Know More</button>

                        </div>
                    </div>
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
                    <div className='link'>
                        <div>
                            <button onClick={() => {
                                setOpenModal1(true);
                                setOpenModal(false);
                                window.scroll(0, 0);
                                // const root = document.getElementsByClassName("App");
                                // root.style.display = "none";

                            }}>Register</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                setOpenModal1(false);
                                window.scroll(0, 0);
                            }}>Know More</button>
                        </div>
                    </div>
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
                    <div className='link'>
                        <div>
                            <button onClick={() => {
                                setOpenModal1(true);
                                setOpenModal(false);
                                window.scroll(0, 0);
                                // const root = document.getElementsByClassName("App");
                                // root.style.display = "none";

                            }}>Register</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                setOpenModal1(false);
                                window.scroll(0, 0);
                            }}>Know More</button>
                        </div>
                    </div>
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
                    <div className='link'>
                        <div>
                            <button onClick={() => {
                                setOpenModal1(true);
                                setOpenModal(false);
                                window.scroll(0, 0);
                                // const root = document.getElementsByClassName("App");
                                // root.style.display = "none";

                            }}>Register</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                setOpenModal1(false);
                                window.scroll(0, 0)
                            }}>Know More</button>
                        </div>
                    </div> */}
                {/* </div> */}

            </div>
            {openModal && < Knowmore closeModal={setOpenModal} />}
            {openModal1 && < Register closeModal1={setOpenModal1} />}
        </div>
    )
}

export default Cards