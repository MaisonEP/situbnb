"use client";

import { Avatar, AvatarGroup } from "@chakra-ui/react";
import "./AccomodationAvatar.css";
import { Link } from "@chakra-ui/react";

export function AccomodationAvatar() {
  function hi() {
    return console.log("Hi");
  }

  return (
    <Link href="/BookingForm">
      <div
        onClick={() => {
          hi();
        }}
        className="displayContainer"
      >
        <img className="image" src="/BnB.jpg"></img>
        <p className="label">Location: France</p>
      </div>
    </Link>
  );
}
