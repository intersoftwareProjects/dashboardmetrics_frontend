import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { getName, getToken } from "@/lib/utils/local_variables";
import { Button } from "@nextui-org/react";
import { User } from "@/lib/Interfaces/user.interface";
import {LogoIntersoftwareWhite} from "@/components/images";

export function Navbar() {
  const [user, setUser] = useState<User>({ username: "" });
  const [pageTitle, setPageTitle] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) {
      redirectToLogin();
    }
  });

  useEffect(() => {
    setPageTitle(getPageTitle(router.pathname));
  }, [router.pathname]);
  
  useEffect(() => {
    const name = getName();

    if(name) {
      setUser({ username: name });
    } else {
      setUser({ username: "no se ha loguedo" });
    }

  }, []);

  function redirectToLogin() {
    router.push("/");
  }

  function getPageTitle(pathname: string) {
    const pathParts = pathname.split("/");
    const lastPathPart = pathParts[pathParts.length - 1];
    return lastPathPart.charAt(0).toUpperCase() + lastPathPart.slice(1);
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleLogout() {
    // handle logout logic here
  }

  if(user.username) {
    return (
        <nav style={{ backgroundColor: "#1B1D36", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px", maxHeight: "65px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button style={{ backgroundColor: "transparent", border: "none", marginRight: "20px" }} onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="white" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </button>
            <LogoIntersoftwareWhite scale={0.5} />
            <p style={{ marginLeft: "20px", fontSize: "22px" }}>|‎ ‎ ‎ ‎ {pageTitle}</p>
          </div>
          <p style={{fontSize: "20px"}}>{user.username}</p>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              style={{ position: "absolute", top: "65px", left: "0", backgroundColor: "#1B1D36", padding: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", zIndex: 1, minHeight: "93.2vh" }}
            >
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                <li><a href="#">Menu Item 1</a></li>
                <li><a href="#">Menu Item 2</a></li>
                <li><a href="#">Menu Item 3</a></li>
                <li style={{ position: "absolute", bottom: "20px" }}><Button onClick={handleLogout} className="bg-[#1B1D36]">Salir</Button></li>
              </ul>
            </motion.div>
          )}
        </nav>
    );
  }
}