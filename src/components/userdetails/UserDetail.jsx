import React from "react";
import UserInfo from "./UserInfo";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import WorkExperience from "./WorkExperience";
import { Link, useLocation } from 'react-router-dom';
import Education from "./Education";
import Certification from "./Certification";
import Skill from "./Skill";

function UserDetail() {
  const location = useLocation();
  const selectedTab = location.pathname.split('/').pop(); // Extract the tab from the URL

  const tabIndex = {
    'user-info': 0,
    'work-exp': 1,
    'education': 2,
    'certifications': 3,
    'skills': 4,
  }[selectedTab];

   

  return (
    <>
      <Tabs className="Tabs" selectedIndex={tabIndex}>
        <TabList>
          <Tab>
          <Link  className="text-decoration-none" to="/userdetails/user-info"> Personal Info</Link>
          </Tab>
          <Tab > 
          <Link className="text-decoration-none" to="/userdetails/work-exp"> Work Experience</Link>
           </Tab>
          <Tab >
          <Link className="text-decoration-none" to="/userdetails/education"> Education</Link>
            </Tab>
          <Tab >
            <Link className="text-decoration-none" to="/userdetails/certifications"> Certifications</Link>
            </Tab>
          <Tab  >
          <Link className="text-decoration-none" to="/userdetails/skills"> Skills</Link>
            </Tab>
        </TabList>
        <TabPanel>
          <UserInfo />
        </TabPanel>
        <TabPanel>
         <WorkExperience/>
        </TabPanel>
        <TabPanel>
         <Education/>
        </TabPanel>
        <TabPanel>
         <Certification/>
        </TabPanel>
        <TabPanel>
          <Skill/>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default UserDetail;
