import { useState, useEffect } from "react";
import reactLogo from "../assets/icons/react.svg";
import { ethers } from "ethers";

import CaloToken from "../abis/CaloToken.json";
import config from "../config/config.json";

export default function Home() {
  return (
    <>
        <div>
            <h1>About</h1>
            <p>This is the About Page.</p>
        </div>
    </>
  );
}
