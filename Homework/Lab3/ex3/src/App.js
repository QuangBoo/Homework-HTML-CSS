import img from './img/cv.jpeg';
import Menu from './Menu'
import './App.css';

function App() {
  return (
    <div className="App">
     <Menu />
     <div className="page-white tabcontent" id="profile"></div>

    <div className="hem">
        <h1 id="Profile" className="h-profile">Profile</h1>
        <p className="h-student">I'm a student</p>
        <hr className="solid"/>
        <div className="wrapper">
            <div className="wrap-img">
                <img src={img} alt='avatar' className='img'/>
            </div>
            <div className="wrap-information">
                <h1 className="name">PHAM MINH QUANG</h1>
                <p className="major">INFORMATION SYSTEM</p>
                <div className="wrap-input">
                    <div className="wrap-infor">
                        <p className="dob">Date of birth:</p>
                        <p className="gender">Gender:</p>
                        <p className="phone">Phone:</p>
                        <p className="email">Email:</p>
                        <p className="address">Address:</p>
                        <p className="wb">Website:</p>
                    </div>
                    <div className="wrap-inputinfor">
                        <p className="inputdob">April 14, 2001</p>
                        <p className="inputgender">Male</p>
                        <p className="inputphone">0828238198</p>
                        <p className="inputemail">19522099@gm.uit.edu.vn</p>
                        <p className="inputaddress">Ho Chi Minh, Viet Nam</p>
                        <p className="inputwb">https://www.facebook.com/QuangCun2001</p>
                    </div>
                </div>
            </div>
        </div>
        <div id="Objective" className="Object">
            <h3 className="object-title">OBJECTIVE</h3>
            <hr className="solid" />
            <div className="ob-infor">
                <p>Programming Language: C++, C#, Oracle PL/SQL, HTML, CSS, Javascript.</p>
                <p>Language: English.</p>
            </div>
        </div>
        <div id="Education" className="education">
            <h3 className="education-title">EDUCATION</h3>
            <hr className="solid-2"/>
            <div className="wrap-edu">
                <div className="study-year">
                    <p className="year">2019 - Now</p>
                </div>
                <div className="school-infor">
                    <p className="school-name">University of Information Technology</p>
                    <p className="school-major">Major: Information System</p>
                    <p className="gpa">GPA: 7,++</p>
                </div>
            </div>
            <div id="skill_footer" className="project">
                <h3 className="project-title">PROJECTS</h3>
                <hr className="solid-3"/>
                <h4 className="project-name">FACE MASK WEARING RECOGNITION SYSTEM FOR BIG DATA VIDEO STREAMING</h4>
                <p className="project-year">(2022 -2022)</p>
                <table className="project-table">
                    <tr>
                        <td className="customer">Customer</td>
                        <td className="cus-name" >ICTC 2022</td>
                    </tr>
                    <tr>
                        <td className="descrip">Description</td>
                        <td className="descrip-infor" >Researching and developing an Face Mask Wearing
                            Recognition System that to predits people without a mask using machine learning technology
                            combined with Big Data.</td>
                    </tr>
                    <tr >
                        <td className="team">Team size</td>
                        <td className="team-num">4 people</td>
                    </tr>
                    <tr >
                        <td className="position">My position</td>
                        <td className="position-infor">Member</td>
                    </tr>
                    <tr >
                        <td className="Tech-use">Technologies used</td>
                        <td className="tech-infor" >Real-time video analysis and face recognition with
                            masks.</td>
                    </tr>
                </table>
            </div>
            <div id="Interest" className="interest">
                <h3 className="interes-title">INTERESTS</h3>
                <hr className="solid-4"/>
                <p className="inter-infor">I love reading books, listening to music, watching movies</p>
            </div>
            <div id="Skill" className="skill">
                <h3 className="skill-title">SKILLS</h3>
                <hr className="solid-5"/>
                <div className="item-content">
                    <div className="skill-infor">
                        <p className="flex-space" >
                          <div className="grid">
                            <div className="row">
                                <div className="class-wrap">
                                    <div className="header-skill">HTML - CSS</div>
                                    <div className="wrap-border">
                                        <div className="border-box active"></div>
                                        <div className="border-box active"></div>
                                        <div className="border-box active"></div>
                                        <div className="border-box"></div>
                                        <div className="border-box"></div>
                                    </div>
                                </div>
                                <div className="class-wrap">
                                    <div className="header-skill-1">SQL</div>
                                    <div className="wrap-border">
                                        <div className="border-box active"></div>
                                        <div className="border-box active"></div>
                                        <div className="border-box active"></div>
                                        <div className="border-box active"></div>
                                        <div className="border-box active"></div>
                                    </div>
                                </div>
                                <div className="class-wrap">
                                    <div className="header-skill-2">Javascript</div>
                                    <div className="wrap-border">
                                        <div className="border-box active"></div>
                                        <div className="border-box active"></div>
                                        <div className="border-box active"></div>
                                        <div className="border-box active"></div>
                                        <div className="border-box"></div>
                                    </div>
                                </div>
                                <div className="class-wrap">
                                    <div className="header-skill-3">React</div>
                                    <div className="wrap-border">
                                        <div className="border-box active"></div>
                                        <div className="border-box active"></div>
                                        <div className="border-box active"></div>
                                        <div className="border-box"></div>
                                        <div className="border-box"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </p>
                    </div>
                </div>
                <p className="see-profile">See my profile on github.</p>
                <form action="https://github.com/QuangBoo">
                    <button className="see-github">See project on Github</button>
                </form>
            </div>

            <div id="Languages" className="Language">
                <h3 className="language-title">LANGUAGES</h3>
                <hr className="solid"/>
                <div className="row">
                    <div className="class-wrap">
                        <div className="header-skill">English</div>
                        <div className="wrap-border">
                            <div className="border-box active"></div>
                            <div className="border-box active"></div>
                            <div className="border-box active"></div>
                            <div className="border-box active"></div>
                            <div className="border-box active"></div>
                        </div>
                    </div>
                    <div className="class-wrap">
                        <div className="header-skill-1">Chinese</div>
                        <div className="wrap-border">
                            <div className="border-box active"></div>
                            <div className="border-box active"></div>
                            <div className="border-box active"></div>
                            <div className="border-box active"></div>
                            <div className="border-box"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
  );
}

export default App;
