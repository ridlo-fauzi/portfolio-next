import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import React from "react";

const ContactPage = () => {
  return (
    <main>
      <Navbar />
      <Contact />
      {/* <div className="fixed top-0 z-30 left-0 w-full h-1/2 bg-orange-500 pointer-events-none">
        <Lanyard position={[0, 0, 30]} gravity={[0, -40, 0]} />
      </div> */}
    </main>
  );
};

export default ContactPage;
