import React, { useState } from 'react';
import './login.css';
import { FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="login-page">
      <motion.div 
        className="login-box"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="toggle-tabs">
          <button 
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <h2>{isLogin ? 'Welcome Back' : 'Create Your Account'}</h2>
        <p>{isLogin ? 'Login to continue' : 'Sign up to get started'}</p>

        <form>
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>

        <div className="divider">or continue with</div>

        <div className="social-icons">
          <FaGoogle className="icon" />
          <FaGithub className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
