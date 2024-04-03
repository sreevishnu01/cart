"use client";
import React, { useState } from "react";
import Image from "next/image";
import { category } from "../utilss/data";

function DropdownMobile() {
  const [activeItem, setActiveItem] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = (item) => {
    if (activeItem === item) {
      return setActiveItem(false);
    }
    setActiveItem(item);
  };
  return (
    <>
      <div className="dropdown-mobile">
        {category.map((item, index) => (
          <div className="dropdown-main " key={index}>
            <div className="drop-container ">
              <div
                className="dropdown-item parent-dropdown"
                onClick={(e) => toggleDropdown(index)}
              >
                <div className="icon-group">
                  <div className="icon">
                    <Image
                      src={item.icon ? item.icon : "/assets/icons/sofa.svg"}
                      alt="Picture of the author"
                      fill
                      style={{ aspectRatio: "calc(400/300)" }}
                    />
                  </div>
                  <p>{item.title}</p>
                </div>
                <div className="icon">
                  {activeItem === index ? (
                    <Image
                      src="/assets/icons/arrowup.svg"
                      alt="Picture of the author"
                      fill
                      style={{ aspectRatio: "calc(400/300)" }}
                    />
                  ) : (
                    <Image
                      src="/assets/icons/arrowdown.svg"
                      alt="Picture of the author"
                      fill
                      style={{ aspectRatio: "calc(400/300)" }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DropdownMobile;
