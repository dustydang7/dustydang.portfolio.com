import React, {useState} from "react";
import "./AboutSection.css";
import {
    SiJavascript, SiJava, SiR, SiReact, SiHtml5, SiAdobecreativecloud,
    SiCss3, SiCsharp, SiNodeDotJs, SiWebstorm,
    SiAdobephotoshop, SiAdobeindesign, SiVisualstudio, SiMathworks,
    SiAdobeillustrator, SiPostgresql, SiPython, SiFigma, SiRedux
} from 'react-icons/si';
import {DiGoogleCloudPlatform, DiDatabase} from 'react-icons/di';
import {Button} from "./Button";
import {FaTimes} from "react-icons/fa";

function AboutSection() {
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);

    const open1 = () => setOpenModal1(true);
    const open2 = () => setOpenModal2(true);
    const open3 = () => setOpenModal3(true);
    const open4 = () => setOpenModal4(true);

    const Modal = ({closeModal,header,text}) => (
            <div className='bg'>
                <div className='modalContainer'>
                    <FaTimes className = 'close' onClick={() => closeModal(false)} />
                    <div className='body'>
                        <h1>{header}</h1>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
    );

    const program = (<>
        <div>
            <p><SiJava/>Java</p>
            <p><SiR/>R</p>
            <p><SiPython/>Python</p>
            <p><SiCsharp/>C#</p>
            <p><SiMathworks/>MatLab</p>
        </div>
    </>)

    const web = (
        <>
            <div>
                <p><SiHtml5/>HTML 5</p>
                <p><SiCss3/>CSS 3</p>
                <p><SiJavascript/>JavaScript</p>
                <p><SiReact/>ReactJS</p>
                <p><SiNodeDotJs/>NodeJS</p>
                <p><SiRedux/>Redux</p>
                <p><SiReact/>React Native</p>
                <p><SiFigma/>Figma</p>
            </div>
        </>
    )

    const graphic = (
        <>
            <div>
                <p><SiAdobephotoshop/>Adobe Photoshop</p>
                <p><SiAdobeillustrator/>Adobe Illustrator</p>
                <p><SiAdobeindesign/>Adobe InDesign</p>
            </div>
        </>
    )

    const database = (
        <>
            <div>
                <p><DiGoogleCloudPlatform/>GCP</p>
                <p><SiPostgresql/>postgreSQL</p>
            </div>
        </>
    )

    return (
        <>
            <div className='intro'>
                    <h1>About Me</h1>
                    <h3>Computer Science, Mathematics, Artist, Gamer</h3>
                    <p>I am a student majoring in Computer Science and Mathematics. I am a practical person and enjoy learning through doing things. I love to code and design applications,
                        either it is frontend or backend. My favorite math topics are multivariables calculus, linear optimization and statistics. I am also a self-taught artist, who hobby is digital art.
                        Aside from showcasing my creativity through programming, I also love art as well as gaming. Some of my favorite
                        games are MOBA likes League of Legend: Wildrift, Role Playing like Personas and Shin Megami Tensei, and Simulation
                    like Stardew Valley, Rune Factory, and Story of Seasons.</p>
            </div>
            <div className='modal-btn'>
                <h1>Skills</h1>
                <Button onClick={() => open1()} className = 'btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    <SiVisualstudio/>
                </Button>
            {openModal1 ? <Modal closeModal={setOpenModal1}
            header="Programming Languages" text={program}/> : null}

                <Button onClick={() => open2()} className = 'btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    <SiWebstorm/>
                </Button>
            {openModal2 ? <Modal closeModal={setOpenModal2} header="Web/Application Development" text={web}/> : null}

                <Button onClick={() => open3()} className = 'btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    <SiAdobecreativecloud/>
                </Button>
            {openModal3 ? <Modal closeModal={setOpenModal3} header="Graphic Design" text={graphic}/> : null}

                <Button onClick={() => open4()} className = 'btn' buttonStyle='btn--primary' buttonSize='btn--large'>
                    <DiDatabase/>
                </Button>
            {openModal4 ? <Modal closeModal={setOpenModal4} header="Cloud & Database" text={database}/> : null}
            </div>
        </>

    )
}

export default AboutSection;