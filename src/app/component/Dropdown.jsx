"use client";
import React, { useState } from "react";
import Image from "next/image";
import { category } from "../utilss/data";

function Dropdown() {
  const [activeItem, setActiveItem] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = (item) => {
    if (activeItem === item) {
      return setActiveItem(false);
    }
    setActiveItem(item);
  };
  return (
    <>
      {category.map((item, index) => (
        <div className="drop-container" key={index}>
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

          {/* sub items */}
          {activeItem === index && (
            <div className="subitems">
              {item.submenu.map((item, index) => (
                <div className="dropdown-item" key={index}>
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
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Dropdown;
