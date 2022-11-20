import React from 'react';

const menu = () => {
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    return (
        <div className="tab">
            <a href="#Profile">
                <button className="tablinks" onClick={event => {openTab(event, 'Profile')}}>Profile</button>
            </a>
            <a href="#Objective">
                <button className="tablinks" onClick={event => {openTab(event, 'Education')}}>Education</button>
            </a>
            <a href="#Education">
                <button className="tablinks" onClick={event => {openTab(event, 'Objective')}}>Objective</button>
            </a>
            <a href="#skill-footer">
                <button className="tablinks" onClick={event => {openTab(event, 'skill_footer')}}>Projects</button>
            </a>
            <a href="#Interest">
                <button className="tablinks" onClick={event => {openTab(event, 'Interest')}}>Interest</button>
            </a>
            <a href="#Skill">
                <button className="tablinks" onClick={event => {openTab(event, 'Skill')}}>Skills</button>
            </a>
            <a href="#Languages">
                <button className="tablinks" onClick={event => {openTab(event, 'Languages')}}>Languages</button>
            </a>
        </div>
    );
}

export default menu;