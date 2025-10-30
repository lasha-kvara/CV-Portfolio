
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-sm text-slate-500">
      <p>Designed & Built by Lasha Kvaratskhelia</p>
      <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;