import React from 'react'
import Link from "next/link";
import { GoHome } from "react-icons/go";
import { SlEnergy } from "react-icons/sl";
import { TbAppsFilled } from "react-icons/tb";
import { GrDocumentText } from "react-icons/gr";



export default function getSidebarItems() {
    const items: MenuProps["items"] = [
        {
            key: "home",
            icon: <GoHome size={20} />,
            label: <Link href="/hr">Home</Link>,
      
          },
          {
            key: "Jobs",
            icon: <SlEnergy size={20}/>,
            label: <Link href="/hr/jobs">Jobs</Link>,
      
          },
          {
            key: "talentPool",
            icon: <GrDocumentText size={20} />,
            label: <Link href="/hr/talentPool">Talent Pool</Link>,
      
          },
          {
            key: "templates",
            icon: <TbAppsFilled size={20} />,
            label: <Link href="/hr/templates">Templates</Link>,
      
          },      
    ];
    
      return items;
}

