"use client";

import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Error sending email: " + (data.error || "Unknown error"));
      }
    } catch {
      // Empty catch block - ESLint will ignore this
      /* eslint-disable-next-line no-empty */
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadCV = () => {
    // Create a temporary anchor element for download
    const link = document.createElement('a');
    link.href = '/Lewis_Muthomi_CV_2025.pdf'; // Fixed filename
    link.download = 'Lewis_Muthomi_CV_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-8">
        <div className="text-xl font-bold">Portfolio.</div>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
          <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
          <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
          <li><a href="#project" className="hover:text-cyan-400 transition">Project</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-16 lg:py-24">
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
          <h2 className="text-2xl mb-4">Hello, It&#39;s Me</h2>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">Lewis Muthomi</h1>
          <p className="text-2xl mb-4">
            And I&#39;m a{" "}
            <span className="text-cyan-400 font-semibold">Full Stack Developer</span>
          </p>
          <p className="text-gray-300 mb-4 max-w-lg leading-relaxed">
            I&#39;m a Developer and web Designer. Freelancer providing services by programming and design content needs. My
            expertise is to create end website design, Frontend design, and many more...
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-4"></div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-lg opacity-75 animate-pulse"></div>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <Image
                    src="/profile.jpg"
                    alt="Lewis Muthomi"
                    width={350}
                    height={350}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 lg:px-16 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur-lg opacity-30"></div>
              <div className="relative rounded-xl overflow-hidden border-2 border-gray-700 shadow-2xl">
                <Image
                  src="/work.jpg"
                  alt="Lewis at work"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <p className="max-w-2xl mx-auto lg:mx-0 text-gray-300 leading-relaxed mb-4">
              My passion lies in creating <span className="text-cyan-400 font-semibold">captivating website designs</span>  
              and bringing them to life through clean and efficient frontend development. 
              I specialize in producing visually appealing, modern, and user-friendly websites 
              that not only look great but also deliver a seamless user experience.  
              <br /><br />
              Over the course of my career, I&#39;ve developed a strong understanding of 
              <span className="text-purple-400 font-semibold">User Experience (UX)</span> and 
              <span className="text-purple-400 font-semibold">User Interface (UI)</span> principles, 
              which allows me to design interfaces that feel intuitive, engaging, and impactful.  
              <br /><br />
              Beyond coding, I believe design is about telling a story and building a connection 
              with users. Whether it&#39;s through crafting pixel-perfect interfaces or optimizing 
              performance for faster, smoother interactions, I take pride in every detail.  
              <br /><br />
              My goal is to help brands and businesses establish a strong digital presence 
              with websites that are not just functional, but also 
              <span className="text-cyan-400 font-semibold">memorable, responsive, and future-ready.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-8 lg:px-16 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">My Services</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-300 mb-4">
          I offer comprehensive digital solutions to bring your ideas to life
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-cyan-400/30 group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-gray-300 mb-4">
              I create intuitive and engaging user interfaces with a focus on user experience. 
              My design process involves research, prototyping, and testing to ensure seamless 
              interactions that delight users and achieve business goals.
            </p>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-purple-400/30 group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Web Design</h3>
            <p className="text-gray-300 mb-4">
              I design responsive and visually appealing websites that work across all devices. 
              From concept to deployment, I focus on creating modern, fast-loading sites with 
              clean code and attention to detail that converts visitors into customers.
            </p>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <a href="#" className="text-purple-400 hover:text-purple-300 font-medium flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700 hover:border-pink-400/30 group">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">App Design</h3>
            <p className="text-gray-300 mb-4">
              I design native and cross-platform mobile applications with intuitive interfaces 
              and smooth user experiences. My app designs prioritize usability while maintaining 
              aesthetic appeal and brand consistency across different platforms.
            </p>
            <div className="mt-6 pt-4 border-t border-gray-700">
              <a href="#" className="text-pink-400 hover:text-pink-300 font-medium flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-8 lg:px-16 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-300 mb-4">
          UI/UX Design &ndash; designing intuitive, user-centered interfaces that improve usability and customer engagement.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Technical Skills</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Figma</span>
                  <span className="text-gray-400 text-sm">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full w-[90%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">React</span>
                  <span className="text-gray-400 text-sm">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full w-[85%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Tailwind CSS</span>
                  <span className="text-gray-400 text-sm">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-pink-500 to-cyan-400 h-3 rounded-full w-[88%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">JavaScript</span>
                  <span className="text-gray-400 text-sm">80%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full w-[80%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Next.js</span>
                  <span className="text-gray-400 text-sm">82%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full w-[82%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">HTML</span>
                  <span className="text-gray-400 text-sm">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-pink-500 to-cyan-400 h-3 rounded-full w-[95%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Professional Skills</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Team Work</span>
                  <span className="text-gray-400 text-sm">92%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full w-[92%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Project Management</span>
                  <span className="text-gray-400 text-sm">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full w-[85%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Creativity</span>
                  <span className="text-gray-400 text-sm">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-pink-500 to-cyan-400 h-3 rounded-full w-[90%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Clear Communication Skills</span>
                  <span className="text-gray-400 text-sm">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full w-[88%] relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="project" className="px-8 lg:px-16 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700">
            <div className="w-full h-48 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Project 1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">E-Commerce Platform</h3>
            <p className="text-gray-300 text-sm mb-4">
              Full-stack web application with Next.js, TypeScript, and MongoDB
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700">
            <div className="w-full h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Project 2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Task Management App</h3>
            <p className="text-gray-300 text-sm mb-4">
              React Native mobile app with Firebase backend integration
            </p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 border border-gray-700">
            <div className="w-full h-48 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Project 3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Portfolio Website</h3>
            <p className="text-gray-300 text-sm mb-4">
              Modern portfolio site with animations and interactive elements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-8 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
          <h3 className="text-xl text-cyan-400 font-semibold text-center mb-4">Let&#39;s Work Together</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I&#39;m excited to hear about your project and discuss how we can work together to bring your ideas to life. 
                Whether you have a specific project in mind or just want to explore possibilities, feel free to reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">mwirigilewis005@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-cyan-400/10 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.518 5.517l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">0740222955</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-700">
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex space-x-4 mb-4">
                  <a
                    href="https://wa.me/254740222955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.896 6.994c-.002 5.45-4.436 9.884-9.889 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.717 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.481-8.413"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lewis-muthomi-647318301/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227 .792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Lewis-m-muthomi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.345-.090.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.920-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017 0z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <button
                onClick={handleDownloadCV}
                className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
              >
                Download CV
              </button>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-2">Enter Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-2">Enter Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-2">Enter Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}