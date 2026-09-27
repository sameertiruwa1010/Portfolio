// src/App.tsx

import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/public/assets/css/particles.css";


const App: React.FC = () => {
  return (
    <>
      <Nav />

      <main id="home" className="w-full">

        {/* =========================================================
            PARTICLE / FLOATING LIGHTS
        ========================================================== */}

        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>


        {/* =========================================================
            HERO SECTION
        ========================================================== */}

        <section className="pt-20 md:pt-0 bg-white dark:bg-black">

          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">

            {/* LEFT CONTENT */}

            <div className="mr-auto place-self-center lg:col-span-7">

              <h1
                id="dynamicHeadline"
                className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
              >
                Building Reliable Systems with{" "}

                <span
                  id="dynamicWords"
                  className="text-green-500 font-bold"
                >
                  DevOps & Cloud
                </span>

              </h1>


              <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">

                I build, automate and manage reliable infrastructure using
                Linux, CI/CD, Docker, Kubernetes, Terraform, AWS and modern
                DevOps practices.

              </p>


              <a
                href="#about"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                More About Me

                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>

              </a>


              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text-center text-gray-900 border-4 border-green-300 hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
              >
                Contact Me!
              </a>

            </div>


            {/* RIGHT IMAGE */}

            <div
              id="hacker-logo"
              className="lg:mt-0 lg:col-span-5 lg:flex relative z-10"
              style={{ opacity: 0 }}
            >

              <img
                src="./assets/images/hacker.png"
                alt="Nyapu0x DevOps"
              />

            </div>

          </div>

        </section>


        {/* =========================================================
            FOCUS / STATS SECTION
        ========================================================== */}

        <section className="bg-white dark:bg-black">

          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-28 lg:px-6 border-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">

            <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">

              <div className="flex flex-col items-center justify-center">

                <dt className="mb-2 text-4xl md:text-6xl font-extrabold text-green-500">
                  DEVOPS
                </dt>

                <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">
                  Automation & Delivery
                </dd>

              </div>


              <div className="flex flex-col items-center justify-center">

                <dt className="mb-2 text-4xl md:text-6xl font-extrabold text-green-500">
                  CLOUD
                </dt>

                <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">
                  Infrastructure
                </dd>

              </div>


              <div className="flex flex-col items-center justify-center">

                <dt className="mb-2 text-4xl md:text-6xl font-extrabold text-green-500">
                  LINUX
                </dt>

                <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">
                  Systems & Servers
                </dd>

              </div>

            </dl>

          </div>

        </section>


        {/* =========================================================
            SERVICES / WHAT I DO
        ========================================================== */}

        <section
          id="services"
          className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center"
        >

          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">


            {/* SECTION HEADING */}

            <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">

              <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">

                Automating Systems, Building Reliability

              </h2>


              <p className="text-gray-500 text-2xl dark:text-gray-400">

                Focused on automating deployment workflows, managing Linux
                infrastructure and building reliable cloud environments that
                make application delivery faster and easier to maintain.

              </p>

            </div>


            {/* SERVICES GRID */}

            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">


              {/* ================= CI/CD ================= */}

              <div className="transform transition-all duration-300 hover:scale-105 group">

                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">

                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M4 17V7m0 10 4-4m-4 4-4-4M20 7v10m0-10-4 4m4-4 4 4M8 12h8"
                    />
                  </svg>

                </div>


                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  CI/CD Automation
                </h3>


                <p className="text-gray-500 text-xl dark:text-gray-400">

                  Building automated pipelines for application builds,
                  testing and deployment using GitHub Actions, Jenkins and
                  modern CI/CD workflows.

                </p>

              </div>


              {/* ================= DOCKER ================= */}

              <div className="transform transition-all duration-300 hover:scale-105 group">

                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">

                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M4 8h4v4H4V8Zm6 0h4v4h-4V8Zm6 0h4v4h-4V8ZM7 14h10m-12 0c1 4 4 6 8 6 4.5 0 7-2.5 8-6"
                    />
                  </svg>

                </div>


                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Containerization
                </h3>


                <p className="text-gray-500 text-xl dark:text-gray-400">

                  Packaging applications with Docker and Docker Compose to
                  create consistent development, testing and production
                  environments.

                </p>

              </div>


              {/* ================= KUBERNETES ================= */}

              <div className="transform transition-all duration-300 hover:scale-105 group">

                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">

                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 5v8m-4-6 8 4m0-4-8 4"
                    />
                  </svg>

                </div>


                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Kubernetes
                </h3>


                <p className="text-gray-500 text-xl dark:text-gray-400">

                  Deploying and managing containerized workloads with
                  Kubernetes, services, networking, health checks and
                  scalable application environments.

                </p>

              </div>


              {/* ================= CLOUD ================= */}

              <div className="transform transition-all duration-300 hover:scale-105 group">

                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">

                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M7 18h10a4 4 0 0 0 0-8h-.4A5 5 0 0 0 7 8.5 4.8 4.8 0 0 0 7 18Z"
                    />
                  </svg>

                </div>


                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Cloud Infrastructure
                </h3>


                <p className="text-gray-500 text-xl dark:text-gray-400">

                  Working with AWS infrastructure including EC2, VPC,
                  security groups, IAM, S3 and other cloud resources for
                  application hosting and deployment.

                </p>

              </div>


              {/* ================= TERRAFORM ================= */}

              <div className="transform transition-all duration-300 hover:scale-105 group">

                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">

                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z"
                    />
                  </svg>

                </div>


                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Infrastructure as Code
                </h3>


                <p className="text-gray-500 text-xl dark:text-gray-400">

                  Provisioning and managing repeatable cloud infrastructure
                  using Terraform instead of relying on manual server and
                  cloud configuration.

                </p>

              </div>


              {/* ================= MONITORING ================= */}

              <div className="transform transition-all duration-300 hover:scale-105 group">

                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">

                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 12h4l2-5 4 10 2-5h6M4 4v16h16"
                    />
                  </svg>

                </div>


                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Monitoring & Linux
                </h3>


                <p className="text-gray-500 text-xl dark:text-gray-400">

                  Managing Linux servers and monitoring system and application
                  health using Prometheus, Grafana, logs and practical
                  troubleshooting techniques.

                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            TECHNOLOGY STACK
            Same style as original Clients section
        ========================================================== */}

        <section className="bg-gray-100 dark:bg-black lg:py-18 lg:px-6 border-t-4 border-b-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">

          <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">

            <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">

              Tech Stack

            </h2>


            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">


              <div className="flex justify-center items-center">

                <span className="text-xl md:text-2xl font-bold hover:text-green-500 transition-colors">
                  LINUX
                </span>

              </div>


              <div className="flex justify-center items-center">

                <span className="text-xl md:text-2xl font-bold hover:text-green-500 transition-colors">
                  DOCKER
                </span>

              </div>


              <div className="flex justify-center items-center">

                <span className="text-xl md:text-2xl font-bold hover:text-green-500 transition-colors">
                  K8S
                </span>

              </div>


              <div className="flex justify-center items-center">

                <span className="text-xl md:text-2xl font-bold hover:text-green-500 transition-colors">
                  AWS
                </span>

              </div>


              <div className="flex justify-center items-center">

                <span className="text-xl md:text-2xl font-bold hover:text-green-500 transition-colors">
                  TERRAFORM
                </span>

              </div>


              <div className="flex justify-center items-center">

                <span className="text-xl md:text-2xl font-bold hover:text-green-500 transition-colors">
                  CI/CD
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            ABOUT SECTION
        ========================================================== */}

        <section
          id="about"
          className="bg-white dark:bg-black pt-8"
        >

          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-6">


            {/* ABOUT TEXT */}

            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">

              <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">

                About Me, Nyapu0x

              </h2>


              <p className="mb-4 text-3xl">

                I'm a DevOps Engineer and Information Technology graduate
                focused on Linux, cloud infrastructure, automation and modern
                software delivery.

              </p>


              <p className="text-xl">

                I enjoy working between development and infrastructure —
                managing servers, building CI/CD pipelines, containerizing
                applications and improving the way software is deployed and
                operated.

              </p>


              <p className="text-xl mt-4">

                My current focus is DevOps and cloud engineering, while I
                continue exploring areas such as Site Reliability Engineering,
                MLOps and AIOps.

              </p>


              <a
                href="/assets/Sameer-Tiruwa-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex mt-8 items-center justify-center px-5 py-4 text-base font-medium text-center text-gray-900 border-4 border-green-300 hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
              >
                Download C.V.
              </a>

            </div>


            {/* ORIGINAL IMAGE LAYOUT */}

            <div className="grid grid-cols-2 gap-4 mt-8">

              <img
                className="w-full transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
                src="./assets/images/office-long-2.png"
                alt="workspace"
              />


              <img
                className="mt-4 w-full lg:mt-10 transition-all duration-300 hover:saturate-150 hover:brightness-75 hover:hue-rotate-15"
                src="./assets/images/office-long-1.png"
                alt="DevOps workspace"
              />

            </div>

          </div>


          {/* =====================================================
              PERSONAL QUOTE
              Replaces fake testimonial
          ====================================================== */}

          <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">

            <figure className="max-w-screen-md mx-auto">

              <svg
                className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>


              <blockquote className="transform transition-all duration-300 hover:scale-110">

                <p className="text-2xl font-medium py-8 text-gray-900 dark:text-white">

                  "Automate what repeats. Monitor what matters. Build systems
                  that are simple to understand, reliable to operate and easy
                  to improve."

                </p>

              </blockquote>


              <figcaption className="flex items-center justify-center mt-6 space-x-3">

                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">

                  <div className="pr-3 font-medium text-gray-900 dark:text-white">
                    Nyapu0x
                  </div>

                  <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                    DevOps Engineer
                  </div>

                </div>

              </figcaption>

            </figure>

          </div>

        </section>


        {/* =========================================================
            DEVOPS / PROJECT INTRO SECTION
        ========================================================== */}

        <section
          id="contact"
          className="bg-white dark:bg-black"
        >

          <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">


            {/* KEEP SAME ORIGINAL IMAGE POSITION */}

            <img
              className="w-full transition-opacity duration-300 hover:opacity-70"
              src="./assets/images/data.png"
              alt="infrastructure dashboard"
            />


            <div className="mt-4 md:mt-0">

              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">

                From Code to Production

              </h2>


              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400">

                I work across the software delivery lifecycle — from source
                code and CI/CD pipelines to containers, Linux servers, cloud
                infrastructure and production monitoring.

              </p>


              <p className="mb-6 font-light text-gray-500 text-xl lg:text-2xl dark:text-gray-400">

                My goal is to reduce repetitive work, make deployments safer
                and build infrastructure that development teams can depend on.

              </p>

            </div>

          </div>

        </section>


        {/* =========================================================
            PROJECTS SECTION
            Same simple style — not cards-heavy
        ========================================================== */}

        <section className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center">

          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">


            <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">

              <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">

                Projects & Labs

              </h2>


              <p className="text-gray-500 text-2xl dark:text-gray-400">

                Practical projects where I experiment with automation,
                infrastructure, Kubernetes, cloud and monitoring.

              </p>

            </div>


            <div className="space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">


              {/* PROJECT 1 */}

              <div className="transform transition-all duration-300 hover:scale-105">

                <h3 className="mb-3 text-3xl font-bold dark:text-white">
                  CI/CD Pipeline
                </h3>


                <p className="text-gray-500 text-xl dark:text-gray-400 mb-5">

                  Automated application build and deployment workflow using
                  GitHub Actions, Linux servers, SSH, PM2 and Nginx.

                </p>


                <p className="text-green-500">
                  GitHub Actions • Linux • Nginx
                </p>

              </div>


              {/* PROJECT 2 */}

              <div className="transform transition-all duration-300 hover:scale-105">

                <h3 className="mb-3 text-3xl font-bold dark:text-white">
                  Kubernetes Labs
                </h3>


                <p className="text-gray-500 text-xl dark:text-gray-400 mb-5">

                  Hands-on Kubernetes practice covering deployments, services,
                  containers, health checks, networking and load balancing.

                </p>


                <p className="text-green-500">
                  Kubernetes • k3d • Docker
                </p>

              </div>


              {/* PROJECT 3 */}

              <div className="transform transition-all duration-300 hover:scale-105">

                <h3 className="mb-3 text-3xl font-bold dark:text-white">
                  Terraform AWS
                </h3>


                <p className="text-gray-500 text-xl dark:text-gray-400 mb-5">

                  Infrastructure-as-Code labs for provisioning AWS resources
                  and learning repeatable cloud infrastructure management.

                </p>


                <p className="text-green-500">
                  Terraform • AWS • IaC
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            CONTACT FORM
        ========================================================== */}

        <section className="bg-white dark:bg-black transition-all duration-300 hover:scale-105">

          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">


            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">

              Let's Build Something Reliable

            </h2>


            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-xl lg:text-2xl">

              Interested in DevOps, Linux, cloud infrastructure, CI/CD or
              collaboration? Feel free to contact me.

            </p>


            <form action="#" className="space-y-8">


              {/* NAME */}

              <div>

                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your name
                </label>


                <input
                  type="text"
                  id="name"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your Name"
                  required
                />

              </div>


              {/* EMAIL */}

              <div>

                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>


                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border-4 border-green-300 text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@company.com"
                  required
                />

              </div>


              {/* SUBJECT */}

              <div>

                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>


                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 border-4 border-green-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="DevOps / Cloud / Collaboration"
                  required
                />

              </div>


              {/* MESSAGE */}

              <div className="sm:col-span-2">

                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>


                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 shadow-sm border-4 border-green-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-green-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write your message..."
                ></textarea>

              </div>


              {/* BUTTON */}

              <button
                type="submit"
                className="py-3 px-5 text-lg font-medium text-center text-white bg-green-600 hover:bg-green-700 border-2 border-green-600 rounded-none sm:w-fit focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:border-green-600 dark:focus:ring-green-800"
              >
                Send Message
              </button>

            </form>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default App;