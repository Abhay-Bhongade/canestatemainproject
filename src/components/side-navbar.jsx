import React, { useState } from "react";

import { Link } from "react-router-dom";
import mainLogo from "../assets/main-logo.png";
import landlord from "../assets/landlord.svg";
import landlordss from "../assets/landlordss.svg";
import room from "../assets/rooms.svg";
import roooms from "../assets/rooom.svg";

const SideNavbar = () => {
  const [changeIcon, setChangeIcon] = useState("");

  const Dashboard_Handle = () => {
    setChangeIcon("Dashboard");
  };
  const Landlord_Handle = () => {
    setChangeIcon("Landlord");
  };
  const Rooms_Handle = () => {
    setChangeIcon("Rooms");
  };
  const Tenant_Handle = () => {
    setChangeIcon("Tenant");
  };
  const Finances_Handle = () => {
    setChangeIcon("Finances");
  };
  const Properties_Handle = () => {
    setChangeIcon("Properties");
  };
  const Inquiries_Handle = () => {
    setChangeIcon("Inquiries");
  };
  const OpenHouse_Handle = () => {
    setChangeIcon("OpenHouse");
  };
  const Maintenance_Handle = () => {
    setChangeIcon("Maintenance");
  };
  const Agreements_Handle = () => {
    setChangeIcon("Agreements");
  };
  const Contractors_Handle = () => {
    setChangeIcon("Contractors");
  };

  return (
    <div className="bg-white p-2 sidemenu">
      <Link
        to="/"
        className="d-flex text-decoration-none align-item-center  justify-content-center"
      >
        <img
          className="fs-4 d-none d-sm-inline brand-logo"
          src={mainLogo}
          alt="logo"
        />
      </Link>
      <ul className="nav nav-pills flex-column mt-3 d-flex justify-content-center align-items-center">
        <li
          className="nav-item side-nav-item  side-nav-item11"
          onClick={Dashboard_Handle}
        >
          <Link to="/" className="nav-link icon-container">
            {changeIcon === "Dashboard" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 83 50"
                fill="none"
              >
                <rect fill="#FFE6E6" rx="9" height="50" width="50" x="17" />
                <path
                  d="M54.5 23.625V15.125C54.5 13.25 53.7 12.5 51.7125 12.5H46.6625C44.675 12.5 43.875 13.25 43.875 15.125V23.625C43.875 25.5 44.675 26.25 46.6625 26.25H51.7125C53.7 26.25 54.5 25.5 54.5 23.625Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M54.5 34.875V32.625C54.5 30.75 53.7 30 51.7125 30H46.6625C44.675 30 43.875 30.75 43.875 32.625V34.875C43.875 36.75 44.675 37.5 46.6625 37.5H51.7125C53.7 37.5 54.5 36.75 54.5 34.875Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.125 26.375V34.875C40.125 36.75 39.325 37.5 37.3375 37.5H32.2875C30.3 37.5 29.5 36.75 29.5 34.875V26.375C29.5 24.5 30.3 23.75 32.2875 23.75H37.3375C39.325 23.75 40.125 24.5 40.125 26.375Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.125 15.125V17.375C40.125 19.25 39.325 20 37.3375 20H32.2875C30.3 20 29.5 19.25 29.5 17.375V15.125C29.5 13.25 30.3 12.5 32.2875 12.5H37.3375C39.325 12.5 40.125 13.25 40.125 15.125Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 83 50"
                fill="none"
              >
                <rect fill="#F5F5F5" rx="9" height="50" width="50" x="17" />
                <path
                  d="M54.5 23.625V15.125C54.5 13.25 53.7 12.5 51.7125 12.5H46.6625C44.675 12.5 43.875 13.25 43.875 15.125V23.625C43.875 25.5 44.675 26.25 46.6625 26.25H51.7125C53.7 26.25 54.5 25.5 54.5 23.625Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M54.5 34.875V32.625C54.5 30.75 53.7 30 51.7125 30H46.6625C44.675 30 43.875 30.75 43.875 32.625V34.875C43.875 36.75 44.675 37.5 46.6625 37.5H51.7125C53.7 37.5 54.5 36.75 54.5 34.875Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.125 26.375V34.875C40.125 36.75 39.325 37.5 37.3375 37.5H32.2875C30.3 37.5 29.5 36.75 29.5 34.875V26.375C29.5 24.5 30.3 23.75 32.2875 23.75H37.3375C39.325 23.75 40.125 24.5 40.125 26.375Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M40.125 15.125V17.375C40.125 19.25 39.325 20 37.3375 20H32.2875C30.3 20 29.5 19.25 29.5 17.375V15.125C29.5 13.25 30.3 12.5 32.2875 12.5H37.3375C39.325 12.5 40.125 13.25 40.125 15.125Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Link>
          <spna className="spaninsidenav">Dashboard</spna>
        </li>
        <li className="nav-item side-nav-item side-nav-item12">
          <Link
            to="/landlord"
            className="nav-link icon-container"
            onClick={Landlord_Handle}
          >
            {changeIcon === "Landlord" ? (
              <img src={landlordss} alt="loading" width={50} height={50} />
            ) : (
              <img src={landlord} alt="loading" width={50} height={50} />
            )}
          </Link>
          <spna className="spaninsidenav">Landlord</spna>
        </li>

        <li
          className="nav-item side-nav-item side-nav-item13"
          onClick={Properties_Handle}
        >
          <Link to="/property" className="nav-link icon-container">
            {changeIcon === "Properties" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="15" width="50" height="50" rx="9" fill="#FFE6E6" />
                <path
                  d="M27.5 37.5H52.5"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.6875 37.4996L28.75 22.4621C28.75 21.6996 29.1125 20.9746 29.7125 20.4996L38.4625 13.6871C39.3625 12.9871 40.625 12.9871 41.5375 13.6871L50.2875 20.4871C50.9 20.9621 51.25 21.6871 51.25 22.4621V37.4996"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.25 31.25H38.75C37.7125 31.25 36.875 32.0875 36.875 33.125V37.5H43.125V33.125C43.125 32.0875 42.2875 31.25 41.25 31.25Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.875 27.1875H34.375C33.6875 27.1875 33.125 26.625 33.125 25.9375V24.0625C33.125 23.375 33.6875 22.8125 34.375 22.8125H36.875C37.5625 22.8125 38.125 23.375 38.125 24.0625V25.9375C38.125 26.625 37.5625 27.1875 36.875 27.1875Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                />
                <path
                  d="M45.625 27.1875H43.125C42.4375 27.1875 41.875 26.625 41.875 25.9375V24.0625C41.875 23.375 42.4375 22.8125 43.125 22.8125H45.625C46.3125 22.8125 46.875 23.375 46.875 24.0625V25.9375C46.875 26.625 46.3125 27.1875 45.625 27.1875Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.7504 18.75L48.7129 15H43.2129"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="15" width="50" height="50" rx="9" fill="#F5F5F5" />
                <path
                  d="M27.5 37.5H52.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.6875 37.4996L28.75 22.4621C28.75 21.6996 29.1125 20.9746 29.7125 20.4996L38.4625 13.6871C39.3625 12.9871 40.625 12.9871 41.5375 13.6871L50.2875 20.4871C50.9 20.9621 51.25 21.6871 51.25 22.4621V37.4996"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.25 31.25H38.75C37.7125 31.25 36.875 32.0875 36.875 33.125V37.5H43.125V33.125C43.125 32.0875 42.2875 31.25 41.25 31.25Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.875 27.1875H34.375C33.6875 27.1875 33.125 26.625 33.125 25.9375V24.0625C33.125 23.375 33.6875 22.8125 34.375 22.8125H36.875C37.5625 22.8125 38.125 23.375 38.125 24.0625V25.9375C38.125 26.625 37.5625 27.1875 36.875 27.1875Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                />
                <path
                  d="M45.625 27.1875H43.125C42.4375 27.1875 41.875 26.625 41.875 25.9375V24.0625C41.875 23.375 42.4375 22.8125 43.125 22.8125H45.625C46.3125 22.8125 46.875 23.375 46.875 24.0625V25.9375C46.875 26.625 46.3125 27.1875 45.625 27.1875Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                />
                <path
                  d="M48.7504 18.75L48.7129 15H43.2129"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Link>
          <spna className="spaninsidenav">Properties</spna>
        </li>

        <li
          className="nav-item side-nav-item side-nav-item14"
          onClick={Rooms_Handle}
        >
          <Link to="/rooms" className="nav-link icon-container">
            {changeIcon === "Rooms" ? (
              <img src={roooms} alt="loading" width={50} height={50} />
            ) : (
              <img src={room} alt="loading" width={48} height={48} />
            )}
          </Link>
          <spna className="spaninsidenav">Rooms</spna>
        </li>

        <li
          className="nav-item side-nav-item side-nav-item15"
          onClick={Tenant_Handle}
        >
          <Link to="/tenant" className="nav-link icon-container">
            {changeIcon === "Tenant" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 44"
                fill="none"
              >
                <rect x="16" width="44" height="44" rx="9" fill="#FFE6E6" />
                <path
                  d="M44.0001 17.16C43.9401 17.15 43.8701 17.15 43.8101 17.16C42.4301 17.11 41.3301 15.98 41.3301 14.58C41.3301 13.15 42.4801 12 43.9101 12C45.3401 12 46.4901 13.16 46.4901 14.58C46.4801 15.98 45.3801 17.11 44.0001 17.16Z"
                  stroke="#FF0000"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.9695 24.4402C44.3395 24.6702 45.8495 24.4302 46.9095 23.7202C48.3195 22.7802 48.3195 21.2402 46.9095 20.3002C45.8395 19.5902 44.3095 19.3502 42.9395 19.5902"
                  stroke="#FF0000"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.9685 17.16C32.0285 17.15 32.0985 17.15 32.1585 17.16C33.5385 17.11 34.6385 15.98 34.6385 14.58C34.6385 13.15 33.4885 12 32.0585 12C30.6285 12 29.4785 13.16 29.4785 14.58C29.4885 15.98 30.5885 17.11 31.9685 17.16Z"
                  stroke="#FF0000"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.9995 24.4402C31.6295 24.6702 30.1195 24.4302 29.0595 23.7202C27.6495 22.7802 27.6495 21.2402 29.0595 20.3002C30.1295 19.5902 31.6595 19.3502 33.0295 19.5902"
                  stroke="#FF0000"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.0001 24.6302C37.9401 24.6202 37.8701 24.6202 37.8101 24.6302C36.4301 24.5802 35.3301 23.4502 35.3301 22.0502C35.3301 20.6202 36.4801 19.4702 37.9101 19.4702C39.3401 19.4702 40.4901 20.6302 40.4901 22.0502C40.4801 23.4502 39.3801 24.5902 38.0001 24.6302Z"
                  stroke="#FF0000"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.0907 27.7804C33.6807 28.7204 33.6807 30.2603 35.0907 31.2003C36.6907 32.2703 39.3107 32.2703 40.9107 31.2003C42.3207 30.2603 42.3207 28.7204 40.9107 27.7804C39.3207 26.7204 36.6907 26.7204 35.0907 27.7804Z"
                  stroke="#FF0000"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 44"
                fill="none"
              >
                <rect x="16" width="44" height="44" rx="9" fill="#F5F5F5" />
                <path
                  d="M44.0001 17.16C43.9401 17.15 43.8701 17.15 43.8101 17.16C42.4301 17.11 41.3301 15.98 41.3301 14.58C41.3301 13.15 42.4801 12 43.9101 12C45.3401 12 46.4901 13.16 46.4901 14.58C46.4801 15.98 45.3801 17.11 44.0001 17.16Z"
                  stroke="#292D32"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42.9695 24.4402C44.3395 24.6702 45.8495 24.4302 46.9095 23.7202C48.3195 22.7802 48.3195 21.2402 46.9095 20.3002C45.8395 19.5902 44.3095 19.3502 42.9395 19.5902"
                  stroke="#292D32"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.9685 17.16C32.0285 17.15 32.0985 17.15 32.1585 17.16C33.5385 17.11 34.6385 15.98 34.6385 14.58C34.6385 13.15 33.4885 12 32.0585 12C30.6285 12 29.4785 13.16 29.4785 14.58C29.4885 15.98 30.5885 17.11 31.9685 17.16Z"
                  stroke="#292D32"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.9995 24.4402C31.6295 24.6702 30.1195 24.4302 29.0595 23.7202C27.6495 22.7802 27.6495 21.2402 29.0595 20.3002C30.1295 19.5902 31.6595 19.3502 33.0295 19.5902"
                  stroke="#292D32"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.0001 24.6302C37.9401 24.6202 37.8701 24.6202 37.8101 24.6302C36.4301 24.5802 35.3301 23.4502 35.3301 22.0502C35.3301 20.6202 36.4801 19.4702 37.9101 19.4702C39.3401 19.4702 40.4901 20.6302 40.4901 22.0502C40.4801 23.4502 39.3801 24.5902 38.0001 24.6302Z"
                  stroke="#292D32"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.0907 27.7804C33.6807 28.7204 33.6807 30.2603 35.0907 31.2003C36.6907 32.2703 39.3107 32.2703 40.9107 31.2003C42.3207 30.2603 42.3207 28.7204 40.9107 27.7804C39.3207 26.7204 36.6907 26.7204 35.0907 27.7804Z"
                  stroke="#292D32"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Link>
          <spna className="spaninsidenav">Tenant</spna>
        </li>

        <li
          className="nav-item side-nav-item side-nav-item16"
          onClick={OpenHouse_Handle}
        >
          <Link to="/openhouse" className="nav-link icon-container">
            {changeIcon === "OpenHouse" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="13" width="50" height="50" rx="9" fill="#FFE6E6" />
                <path
                  d="M33 12.5V16.25"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43 12.5V16.25"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.375 21.3628H48.625"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50.5 33.75C50.5 34.6875 50.2375 35.575 49.775 36.325C48.9125 37.775 47.325 38.75 45.5 38.75C44.2375 38.75 43.0875 38.2875 42.2125 37.5C41.825 37.175 41.4875 36.775 41.225 36.325C40.7625 35.575 40.5 34.6875 40.5 33.75C40.5 30.9875 42.7375 28.75 45.5 28.75C47 28.75 48.3375 29.4125 49.25 30.45C50.025 31.3375 50.5 32.4875 50.5 33.75Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.5508 33.7499L44.7883 34.9874L47.4508 32.5249"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M49.25 20.625V30.45C48.3375 29.4125 47 28.75 45.5 28.75C42.7375 28.75 40.5 30.9875 40.5 33.75C40.5 34.6875 40.7625 35.575 41.225 36.325C41.4875 36.775 41.825 37.175 42.2125 37.5H33C28.625 37.5 26.75 35 26.75 31.25V20.625C26.75 16.875 28.625 14.375 33 14.375H43C47.375 14.375 49.25 16.875 49.25 20.625Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37.9951 27.125H38.0063"
                  stroke="#FF0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.3681 27.125H33.3794"
                  stroke="#FF0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.3681 30.875H33.3794"
                  stroke="#FF0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="13" width="50" height="50" rx="9" fill="#F5F5F5" />
                <path
                  d="M33 12.5V16.25"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43 12.5V16.25"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.375 21.3628H48.625"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M50.5 33.75C50.5 34.6875 50.2375 35.575 49.775 36.325C48.9125 37.775 47.325 38.75 45.5 38.75C44.2375 38.75 43.0875 38.2875 42.2125 37.5C41.825 37.175 41.4875 36.775 41.225 36.325C40.7625 35.575 40.5 34.6875 40.5 33.75C40.5 30.9875 42.7375 28.75 45.5 28.75C47 28.75 48.3375 29.4125 49.25 30.45C50.025 31.3375 50.5 32.4875 50.5 33.75Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43.5508 33.7499L44.7883 34.9874L47.4508 32.5249"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M49.25 20.625V30.45C48.3375 29.4125 47 28.75 45.5 28.75C42.7375 28.75 40.5 30.9875 40.5 33.75C40.5 34.6875 40.7625 35.575 41.225 36.325C41.4875 36.775 41.825 37.175 42.2125 37.5H33C28.625 37.5 26.75 35 26.75 31.25V20.625C26.75 16.875 28.625 14.375 33 14.375H43C47.375 14.375 49.25 16.875 49.25 20.625Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M37.9951 27.125H38.0063"
                  stroke="#292D32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.3681 27.125H33.3794"
                  stroke="#292D32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.3681 30.875H33.3794"
                  stroke="#292D32"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Link>
          <spna className="spaninsidenav">Open House</spna>
        </li>

        <li
          className="nav-item side-nav-item side-nav-item17"
          onClick={Maintenance_Handle}
        >
          <Link to="/maintenance" className="nav-link icon-container">
            {changeIcon === "Maintenance" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="13" width="50" height="50" rx="9" fill="#FFE6E6" />
                <path
                  d="M38 28.75C40.0711 28.75 41.75 27.0711 41.75 25C41.75 22.9289 40.0711 21.25 38 21.25C35.9289 21.25 34.25 22.9289 34.25 25C34.25 27.0711 35.9289 28.75 38 28.75Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 26.0998V23.8998C25.5 22.5998 26.5625 21.5248 27.875 21.5248C30.1375 21.5248 31.0625 19.9248 29.925 17.9623C29.275 16.8373 29.6625 15.3748 30.8 14.7248L32.9625 13.4873C33.95 12.8998 35.225 13.2498 35.8125 14.2373L35.95 14.4748C37.075 16.4373 38.925 16.4373 40.0625 14.4748L40.2 14.2373C40.7875 13.2498 42.0625 12.8998 43.05 13.4873L45.2125 14.7248C46.35 15.3748 46.7375 16.8373 46.0875 17.9623C44.95 19.9248 45.875 21.5248 48.1375 21.5248C49.4375 21.5248 50.5125 22.5873 50.5125 23.8998V26.0998C50.5125 27.3998 49.45 28.4748 48.1375 28.4748C45.875 28.4748 44.95 30.0748 46.0875 32.0373C46.7375 33.1748 46.35 34.6248 45.2125 35.2748L43.05 36.5123C42.0625 37.0998 40.7875 36.7498 40.2 35.7623L40.0625 35.5248C38.9375 33.5623 37.0875 33.5623 35.95 35.5248L35.8125 35.7623C35.225 36.7498 33.95 37.0998 32.9625 36.5123L30.8 35.2748C29.6625 34.6248 29.275 33.1623 29.925 32.0373C31.0625 30.0748 30.1375 28.4748 27.875 28.4748C26.5625 28.4748 25.5 27.3998 25.5 26.0998Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="13" width="50" height="50" rx="9" fill="#F5F5F5" />
                <path
                  d="M38 28.75C40.0711 28.75 41.75 27.0711 41.75 25C41.75 22.9289 40.0711 21.25 38 21.25C35.9289 21.25 34.25 22.9289 34.25 25C34.25 27.0711 35.9289 28.75 38 28.75Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.5 26.0998V23.8998C25.5 22.5998 26.5625 21.5248 27.875 21.5248C30.1375 21.5248 31.0625 19.9248 29.925 17.9623C29.275 16.8373 29.6625 15.3748 30.8 14.7248L32.9625 13.4873C33.95 12.8998 35.225 13.2498 35.8125 14.2373L35.95 14.4748C37.075 16.4373 38.925 16.4373 40.0625 14.4748L40.2 14.2373C40.7875 13.2498 42.0625 12.8998 43.05 13.4873L45.2125 14.7248C46.35 15.3748 46.7375 16.8373 46.0875 17.9623C44.95 19.9248 45.875 21.5248 48.1375 21.5248C49.4375 21.5248 50.5125 22.5873 50.5125 23.8998V26.0998C50.5125 27.3998 49.45 28.4748 48.1375 28.4748C45.875 28.4748 44.95 30.0748 46.0875 32.0373C46.7375 33.1748 46.35 34.6248 45.2125 35.2748L43.05 36.5123C42.0625 37.0998 40.7875 36.7498 40.2 35.7623L40.0625 35.5248C38.9375 33.5623 37.0875 33.5623 35.95 35.5248L35.8125 35.7623C35.225 36.7498 33.95 37.0998 32.9625 36.5123L30.8 35.2748C29.6625 34.6248 29.275 33.1623 29.925 32.0373C31.0625 30.0748 30.1375 28.4748 27.875 28.4748C26.5625 28.4748 25.5 27.3998 25.5 26.0998Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Link>
          <spna className="spaninsidenav">Maintenance</spna>
        </li>

        <li
          className="nav-item side-nav-item side-nav-item18"
          onClick={Finances_Handle}
        >
          <Link to="/Finances" className="nav-link icon-container">
            {changeIcon === "Finances" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="16" width="50" height="50" rx="9" fill="#FFE6E6" />
                <path
                  d="M44.1285 25.3266L44.1494 25.2811C43.5739 25.0165 42.9453 24.7836 42.2638 24.5825L42.2634 24.5824L41.4931 24.3623V16.9918C42.6059 17.0554 43.523 17.3868 44.2474 17.9831L44.2475 17.9832C45.0639 18.6505 45.5185 19.5231 45.6119 20.6043L45.6159 20.65H45.6617H46.7518H46.8049L46.8018 20.597C46.7481 19.689 46.4765 18.8809 45.9865 18.174C45.4968 17.4616 44.834 16.9033 43.9997 16.4988C43.2627 16.1364 42.4269 15.9345 41.4931 15.8921V14V13.95H41.4431H40.5835H40.5335V14V15.9038C39.6817 15.964 38.9023 16.1592 38.1959 16.4899L38.1958 16.4899C37.3379 16.8943 36.6574 17.4525 36.1556 18.1649C35.653 18.8728 35.402 19.6851 35.402 20.6C35.402 21.69 35.7793 22.6026 36.5339 23.3343L36.534 23.3345C37.2921 24.0637 38.3844 24.6369 39.8071 25.0566L39.8073 25.0566L40.5335 25.2687V33.0173C39.8053 32.9791 39.149 32.8405 38.5639 32.6021C37.8678 32.3185 37.3108 31.9166 36.8914 31.3969C36.4786 30.8725 36.2426 30.2519 36.1843 29.5335L36.1805 29.4875H36.1344H35H34.9462L34.9501 29.5411C35.0158 30.4437 35.3024 31.2434 35.8104 31.9389L35.8106 31.939C36.3185 32.6286 37.0081 33.1665 37.8778 33.5535L37.8779 33.5535C38.6475 33.8937 39.533 34.0838 40.5335 34.125V36V36.05H40.5835H41.4431H41.4931V36V34.1198C42.5045 34.0668 43.3991 33.8611 44.1761 33.5016L44.1762 33.5016C45.0931 33.0743 45.8008 32.4902 46.2969 31.7483C46.7991 31.0063 47.05 30.1657 47.05 29.2281C47.05 28.5859 46.9277 28.0166 46.6815 27.5217C46.442 27.0283 46.1038 26.599 45.6675 26.2338C45.2381 25.8637 44.7319 25.5462 44.1492 25.2811L44.1285 25.3266ZM44.1285 25.3266C43.5554 25.063 42.9291 24.831 42.2496 24.6305L41.4931 34.0697C42.4982 34.0168 43.3855 33.8123 44.1551 33.4562C45.065 33.0323 45.7651 32.4536 46.2555 31.7203C46.7518 30.987 47 30.1562 47 29.2281C47 28.5922 46.8789 28.0307 46.6366 27.5437C46.4003 27.0568 46.0665 26.6328 45.6352 26.2719C45.2097 25.9052 44.7075 25.5901 44.1285 25.3266ZM40.5335 17.0026V24.0882L40.2784 24.0153C40.2784 24.0153 40.2783 24.0153 40.2782 24.0152C39.7309 23.8554 39.2312 23.6701 38.7789 23.4594C38.3274 23.249 37.9385 23.005 37.6115 22.7276C37.2854 22.4452 37.0327 22.1268 36.8528 21.7723C36.6793 21.4133 36.5921 21.0114 36.5921 20.5656C36.5921 19.8708 36.7841 19.2566 37.1677 18.7213C37.552 18.185 38.0824 17.7605 38.7609 17.4486C39.2917 17.2045 39.8823 17.0557 40.5335 17.0026ZM41.4931 33.011V25.5491L41.9254 25.6753L41.9255 25.6754C42.7917 25.9268 43.5148 26.212 44.0956 26.5306L44.0958 26.5307C44.6814 26.8487 45.1208 27.2248 45.4166 27.6579C45.7114 28.0895 45.8599 28.6092 45.8599 29.2195C45.8599 29.9775 45.653 30.6402 45.2402 31.2097C44.8266 31.7802 44.2522 32.2275 43.5149 32.551C42.9172 32.8085 42.2435 32.9621 41.4931 33.011Z"
                  fill="#FF0000"
                  stroke="#FF0000"
                  strokeWidth="0.1"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="16" width="50" height="50" rx="9" fill="#F5F5F5" />
                <path
                  d="M44.1285 25.3266L44.1494 25.2811C43.5739 25.0165 42.9453 24.7836 42.2638 24.5825L42.2634 24.5824L41.4931 24.3623V16.9918C42.6059 17.0554 43.523 17.3868 44.2474 17.9831L44.2475 17.9832C45.0639 18.6505 45.5185 19.5231 45.6119 20.6043L45.6159 20.65H45.6617H46.7518H46.8049L46.8018 20.597C46.7481 19.689 46.4765 18.8809 45.9865 18.174C45.4968 17.4616 44.834 16.9033 43.9997 16.4988C43.2627 16.1364 42.4269 15.9345 41.4931 15.8921V14V13.95H41.4431H40.5835H40.5335V14V15.9038C39.6817 15.964 38.9023 16.1592 38.1959 16.4899L38.1958 16.4899C37.3379 16.8943 36.6574 17.4525 36.1556 18.1649C35.653 18.8728 35.402 19.6851 35.402 20.6C35.402 21.69 35.7793 22.6026 36.5339 23.3343L36.534 23.3345C37.2921 24.0637 38.3844 24.6369 39.8071 25.0566L39.8073 25.0566L40.5335 25.2687V33.0173C39.8053 32.9791 39.149 32.8405 38.5639 32.6021C37.8678 32.3185 37.3108 31.9166 36.8914 31.3969C36.4786 30.8725 36.2426 30.2519 36.1843 29.5335L36.1805 29.4875H36.1344H35H34.9462L34.9501 29.5411C35.0158 30.4437 35.3024 31.2434 35.8104 31.9389L35.8106 31.939C36.3185 32.6286 37.0081 33.1665 37.8778 33.5535L37.8779 33.5535C38.6475 33.8937 39.533 34.0838 40.5335 34.125V36V36.05H40.5835H41.4431H41.4931V36V34.1198C42.5045 34.0668 43.3991 33.8611 44.1761 33.5016L44.1762 33.5016C45.0931 33.0743 45.8008 32.4902 46.2969 31.7483C46.7991 31.0063 47.05 30.1657 47.05 29.2281C47.05 28.5859 46.9277 28.0166 46.6815 27.5217C46.442 27.0283 46.1038 26.599 45.6675 26.2338C45.2381 25.8637 44.7319 25.5462 44.1492 25.2811L44.1285 25.3266ZM44.1285 25.3266C43.5554 25.063 42.9291 24.831 42.2496 24.6305L41.4931 34.0697C42.4982 34.0168 43.3855 33.8123 44.1551 33.4562C45.065 33.0323 45.7651 32.4536 46.2555 31.7203C46.7518 30.987 47 30.1562 47 29.2281C47 28.5922 46.8789 28.0307 46.6366 27.5437C46.4003 27.0568 46.0665 26.6328 45.6352 26.2719C45.2097 25.9052 44.7075 25.5901 44.1285 25.3266ZM40.5335 17.0026V24.0882L40.2784 24.0153C40.2784 24.0153 40.2783 24.0153 40.2782 24.0152C39.7309 23.8554 39.2312 23.6701 38.7789 23.4594C38.3274 23.249 37.9385 23.005 37.6115 22.7276C37.2854 22.4452 37.0327 22.1268 36.8528 21.7723C36.6793 21.4133 36.5921 21.0114 36.5921 20.5656C36.5921 19.8708 36.7841 19.2566 37.1677 18.7213C37.552 18.185 38.0824 17.7605 38.7609 17.4486C39.2917 17.2045 39.8823 17.0557 40.5335 17.0026ZM41.4931 33.011V25.5491L41.9254 25.6753L41.9255 25.6754C42.7917 25.9268 43.5148 26.212 44.0956 26.5306L44.0958 26.5307C44.6814 26.8487 45.1208 27.2248 45.4166 27.6579C45.7114 28.0895 45.8599 28.6092 45.8599 29.2195C45.8599 29.9775 45.653 30.6402 45.2402 31.2097C44.8266 31.7802 44.2522 32.2275 43.5149 32.551C42.9172 32.8085 42.2435 32.9621 41.4931 33.011Z"
                  fill="black"
                  stroke="black"
                  strokeWidth="0.1"
                />
              </svg>
            )}
          </Link>
          <spna className="spaninsidenav">Finances</spna>
        </li>
        <li
          className="nav-item side-nav-item side-nav-item19"
          onClick={Agreements_Handle}
        >
          <Link to="/agreements" className="nav-link icon-container">
            {changeIcon === "Agreements" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="13" width="50" height="50" rx="9" fill="#FFE6E6" />
                <path
                  d="M49.25 18.75V31.25C49.25 35 47.375 37.5 43 37.5H33C28.625 37.5 26.75 35 26.75 31.25V18.75C26.75 15 28.625 12.5 33 12.5H43C47.375 12.5 49.25 15 49.25 18.75Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.125 15.625V18.125C41.125 19.5 42.25 20.625 43.625 20.625H46.125"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 26.25H38"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 31.25H43"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="13" width="50" height="50" rx="9" fill="#F5F5F5" />
                <path
                  d="M49.25 18.75V31.25C49.25 35 47.375 37.5 43 37.5H33C28.625 37.5 26.75 35 26.75 31.25V18.75C26.75 15 28.625 12.5 33 12.5H43C47.375 12.5 49.25 15 49.25 18.75Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.125 15.625V18.125C41.125 19.5 42.25 20.625 43.625 20.625H46.125"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 26.25H38"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 31.25H43"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Link>
          <spna className="spaninsidenav">Agreements</spna>
        </li>
        <li
          className="nav-item side-nav-item side-nav-item20"
          onClick={Contractors_Handle}
        >
          <Link to="/Contractors" className="nav-link icon-container">
            {changeIcon === "Contractors" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="13" width="50" height="50" rx="9" fill="#FFE6E6" />
                <rect
                  x="23"
                  y="10"
                  width="30"
                  height="30"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_1_15108"
                      transform="translate(0.0333333 0.0191918) scale(0.00187658)"
                    />
                  </pattern>
                  <image
                    id="image0_1_15108"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="13" width="50" height="50" rx="9" fill="#F5F5F5" />
                <rect
                  x="23"
                  y="10"
                  width="30"
                  height="30"
                  fill="url(#pattern0)"
                />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_1_15108"
                      transform="translate(0.0333333 0.0191918) scale(0.00187658)"
                    />
                  </pattern>
                  <image
                    id="image0_1_15108"
                    width="512"
                    height="512"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            )}
          </Link>
          <spna className="spaninsidenav">Contractors</spna>
        </li>

        <li
          className="nav-item side-nav-item side-nav-item21"
          onClick={Inquiries_Handle}
        >
          <Link to="/inquiries" className="nav-link icon-container">
            {changeIcon === "Inquiries" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="13" width="50" height="50" rx="9" fill="#FFE6E6" />
                <path
                  d="M34.6367 28.375L36.5117 30.25L41.5117 25.25"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.5 17.5H40.5C43 17.5 43 16.25 43 15C43 12.5 41.75 12.5 40.5 12.5H35.5C34.25 12.5 33 12.5 33 15C33 17.5 34.25 17.5 35.5 17.5Z"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43 15.0249C47.1625 15.2499 49.25 16.7874 49.25 22.4999V29.9999C49.25 34.9999 48 37.4999 41.75 37.4999H34.25C28 37.4999 26.75 34.9999 26.75 29.9999V22.4999C26.75 16.7999 28.8375 15.2499 33 15.0249"
                  stroke="#FF0000"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 75 50"
                fill="none"
              >
                <rect x="13" width="50" height="50" rx="9" fill="#F5F5F5" />
                <path
                  d="M34.6367 28.375L36.5117 30.25L41.5117 25.25"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35.5 17.5H40.5C43 17.5 43 16.25 43 15C43 12.5 41.75 12.5 40.5 12.5H35.5C34.25 12.5 33 12.5 33 15C33 17.5 34.25 17.5 35.5 17.5Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M43 15.0249C47.1625 15.2499 49.25 16.7874 49.25 22.4999V29.9999C49.25 34.9999 48 37.4999 41.75 37.4999H34.25C28 37.4999 26.75 34.9999 26.75 29.9999V22.4999C26.75 16.7999 28.8375 15.2499 33 15.0249"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </Link>
          <spna className="spaninsidenav">Inquiries</spna>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
