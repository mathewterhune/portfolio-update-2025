import { motion } from "framer-motion";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full text-center py-10 rounded-t-2xl bg-gray-400">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-5">
        
        

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-5xl font-extrabold text-gray-800">Hey there!</p>
          <p className="text-3xl text-gray-700">
            Welcome to my portfolio website!
          </p>
          <p className="text-2xl font-semibold text-gray-600">
            My name is Mathew Terhune
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-5">
            <motion.a
              href="mailto:mathewterhune@gmail.com"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <MdConnectWithoutContact className="inline-block mr-2" />
              Contact Me
            </motion.a>

            <motion.button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                window.open("https://www.linkedin.com/in/mathew-terhune-b07749235/")
              }
            >
              <FaLinkedin className="inline-block mr-2" />
              LinkedIn
            </motion.button>

            <motion.button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open("https://github.com/mathewterhune")}
            >
              <FaGithub className="inline-block mr-2" />
              GitHub
            </motion.button>
          </div>
        </div>
                <img
          src="../src/CoverPhoto.png"
          alt="Profile"
          className="rounded-2xl w-64 h-64 md:w-128 md:h-128"
        />
      </div>
    </div>
  );
};

export default Header;
