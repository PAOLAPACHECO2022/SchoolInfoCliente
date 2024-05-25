import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setLogout} from "state";

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const [isOpen, setIsOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [studentDropdown, setStudentDropdown] = useState(false);
    const [gradeDropdown, setGradeDropdown] = useState(false);
    const [scoreDropdown, setScoreDropdown] = useState(false);
    const [activityDropdown, setActivityDropdown] = useState(false);
    const [attendanceDropdown, setAttendanceDropdown] = useState(false);
    const [performancecDropdown, setPerformancecDropdown] = useState(false);

    const [courseDropdown, setCourseDropdown] = useState(false);
    const role = useSelector((state) => state.user.role);

    return (
        <>
            {/* Navbar */}
            <nav
                className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                style={{marginLeft: "-0.5cm", marginRight: "3cm"}}
            >
                {/* Contenido del navbar */}

                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    ></path>
                                </svg>
                            </button>
                            <div className="flex ml-2 md:mr-24" onClick={() => navigate("/home")} role="button">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kPdMrw38KVdUQhuf2VifCJglwR44rfty-A&usqp=CAU"
                                    className="h-12 mr-12"
                                    alt="FlowBite Logo"
                                />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                    SCHOOL.INFO
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center p-2">
                            <div className="relative inline-block text-left">
                                <div>
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100"
                                        id="menu-button"
                                        aria-expanded="true"
                                        aria-haspopup="true"
                                        onClick={() => setIsOpen(!isOpen)}
                                    >
                                        {`${user.firstName} ${user.lastName}`}
                                        <svg
                                            className="-mr-1 h-5 w-5 text-gray-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div
                                    className={`${
                                        isOpen ? "absolute" : "hidden"
                                    } right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex="-1"
                                >
                                    <div className="py-1" role="none">
                                        <p
                                            className="text-gray-700 block px-4 py-2 text-sm"
                                            role="menuitem"
                                            tabIndex="-1"
                                            id="menu-item-0"
                                        >
                                            Profile
                                        </p>

                                        <div className="fondo-gris h-full px-3 pb-4 overflow-y-auto dark:bg-gray-500">
                                            <ul className="space-y-2">
                                                {role === "Admin" && (
                                                    <>
                                                        <li>
                                                            <div
                                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500"
                                                                onClick={() => navigate("/home")}
                                                                role="button"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                                </svg>
                                                                <span className="ml-3">Dashboard</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div
                                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-500"
                                                                onClick={() => navigate("/teachers")}
                                                                role="button"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                                                </svg>
                                                                <span className="flex-1 ml-3 whitespace-nowrap">
                                                                    Teachers
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                onClick={() => setStudentDropdown(!studentDropdown)}
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                                    Students
                                                                </span>
                                                                <svg
                                                                    className="w-6 h-6"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                            <ul
                                                                className={`${
                                                                    studentDropdown ? null : "hidden"
                                                                } py-2 space-y-2 bg-slate-500 rounded`}
                                                            >
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate("/gradesByLevel/Primaria/student")
                                                                        }
                                                                    >
                                                                        Primaria
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate(
                                                                                "/gradesByLevel/Secundaria/student"
                                                                            )
                                                                        }
                                                                    >
                                                                        Secundaria
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                onClick={() => setCourseDropdown(!courseDropdown)}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    fill="currentColor"
                                                                    className="bi bi-book"
                                                                    viewBox="0 0 16 16"
                                                                >
                                                                    {" "}
                                                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />{" "}
                                                                </svg>

                                                                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                                    Courses
                                                                </span>
                                                                <svg
                                                                    className="w-6 h-6"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                            <ul
                                                                className={`${
                                                                    courseDropdown ? null : "hidden"
                                                                } py-2 space-y-2 bg-slate-500 rounded`}
                                                            >
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate("/gradesByLevel/Primaria/course")
                                                                        }
                                                                    >
                                                                        Primaria
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate("/gradesByLevel/Secundaria/course")
                                                                        }
                                                                    >
                                                                        Secundaria
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                onClick={() => setScoreDropdown(!scoreDropdown)}
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>

                                                                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                                    Scores
                                                                </span>
                                                                <svg
                                                                    className="w-6 h-6"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                            <ul
                                                                className={`${
                                                                    scoreDropdown ? null : "hidden"
                                                                } py-2 space-y-2 bg-slate-500 rounded`}
                                                            >
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate("/gradesByLevel/Primaria/score")
                                                                        }
                                                                    >
                                                                        Primaria
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate("/gradesByLevel/Secundaria/score")
                                                                        }
                                                                    >
                                                                        Secundaria
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                onClick={() => setActivityDropdown(!activityDropdown)}
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>

                                                                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                                    Activities
                                                                </span>
                                                                <svg
                                                                    className="w-6 h-6"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                            <ul
                                                                className={`${
                                                                    activityDropdown ? null : "hidden"
                                                                } py-2 space-y-2 bg-slate-500 rounded`}
                                                            >
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate("/gradesByLevel/Primaria/activity")
                                                                        }
                                                                    >
                                                                        Primaria
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate(
                                                                                "/gradesByLevel/Secundaria/activity"
                                                                            )
                                                                        }
                                                                    >
                                                                        Secundaria
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                onClick={() =>
                                                                    setAttendanceDropdown(!attendanceDropdown)
                                                                }
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>

                                                                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                                    Attendance
                                                                </span>
                                                                <svg
                                                                    className="w-6 h-6"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                            <ul
                                                                className={`${
                                                                    attendanceDropdown ? null : "hidden"
                                                                } py-2 space-y-2 bg-slate-500 rounded`}
                                                            >
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate(
                                                                                "/gradesByLevel/Primaria/attendance"
                                                                            )
                                                                        }
                                                                    >
                                                                        Primaria
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate(
                                                                                "/gradesByLevel/Secundaria/attendance"
                                                                            )
                                                                        }
                                                                    >
                                                                        Secundaria
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                onClick={() =>
                                                                    setPerformancecDropdown(!performancecDropdown)
                                                                }
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>

                                                                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                                    Performance Convivial
                                                                </span>
                                                                <svg
                                                                    className="w-6 h-6"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                            <ul
                                                                className={`${
                                                                    performancecDropdown ? null : "hidden"
                                                                } py-2 space-y-2 bg-slate-500 rounded`}
                                                            >
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate(
                                                                                "/gradesByLevel/Primaria/performancec"
                                                                            )
                                                                        }
                                                                    >
                                                                        Primaria
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate(
                                                                                "/gradesByLevel/Secundaria/performancec"
                                                                            )
                                                                        }
                                                                    >
                                                                        Secundaria
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                onClick={() => setGradeDropdown(!gradeDropdown)}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth="1.5"
                                                                    stroke="currentColor"
                                                                    className="w-6 h-6"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                                                                    />
                                                                </svg>

                                                                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                                    Grades
                                                                </span>
                                                                <svg
                                                                    className="w-6 h-6"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                            <ul
                                                                className={`${
                                                                    gradeDropdown ? null : "hidden"
                                                                } py-2 space-y-2 bg-slate-500 rounded`}
                                                            >
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() => navigate("/grades/Primaria")}
                                                                    >
                                                                        Primaria
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() => navigate("/grades/Secundaria")}
                                                                    >
                                                                        Secundaria
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </>
                                                )}
                                                {role === "Student" && (
                                                    <>
                                                        <li>
                                                            <div
                                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                                                onClick={() => navigate("/home")}
                                                                role="button"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                                </svg>
                                                                <span className="ml-3">Inicio Student</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div
                                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                                                onClick={() => navigate("/studentScore")}
                                                                role="button"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                <span className="flex-1 ml-3 whitespace-nowrap">
                                                                    Scores Student
                                                                </span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div
                                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                                                onClick={() => navigate("/studentActivity")}
                                                                role="button"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                <span className="flex-1 ml-3 whitespace-nowrap">
                                                                    Activities Student
                                                                </span>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div
                                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                                                onClick={() => navigate("/studentAttendance")}
                                                                role="button"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                <span className="flex-1 ml-3 whitespace-nowrap">
                                                                    Attendance Student
                                                                </span>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div
                                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                                                onClick={() => navigate("/studentPerformancec")}
                                                                role="button"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                <span className="flex-1 ml-3 whitespace-nowrap">
                                                                    Performance Convivial
                                                                </span>
                                                            </div>
                                                        </li>
                                                    </>
                                                )}
                                                {role === "Teacher" && (
                                                    <>
                                                        <li>
                                                            <div
                                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                                                onClick={() => navigate("/home")}
                                                                role="button"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                                                </svg>
                                                                <span className="ml-3">Inicio Teacher</span>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div
                                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                                                onClick={() => navigate("/teacherCourses")}
                                                                role="button"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                <span className="flex-1 ml-3 whitespace-nowrap">
                                                                    Scores Teacher
                                                                </span>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div
                                                                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                                                onClick={() => navigate("/teacherActivities")}
                                                                role="button"
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                <span className="flex-1 ml-3 whitespace-nowrap">
                                                                    Activities Teacher
                                                                </span>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                onClick={() =>
                                                                    setAttendanceDropdown(!attendanceDropdown)
                                                                }
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>

                                                                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                                    Attendance
                                                                </span>
                                                                <svg
                                                                    className="w-6 h-6"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                            <ul
                                                                className={`${
                                                                    attendanceDropdown ? null : "hidden"
                                                                } py-2 space-y-2 bg-slate-500 rounded`}
                                                            >
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate(
                                                                                "/gradesByLevel/Primaria/attendance"
                                                                            )
                                                                        }
                                                                    >
                                                                        Primaria
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate(
                                                                                "/gradesByLevel/Secundaria/attendance"
                                                                            )
                                                                        }
                                                                    >
                                                                        Secundaria
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <button
                                                                type="button"
                                                                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                onClick={() =>
                                                                    setPerformancecDropdown(!performancecDropdown)
                                                                }
                                                            >
                                                                <svg
                                                                    aria-hidden="true"
                                                                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>

                                                                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                                                                    Performance Convivial
                                                                </span>
                                                                <svg
                                                                    className="w-6 h-6"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                            </button>
                                                            <ul
                                                                className={`${
                                                                    performancecDropdown ? null : "hidden"
                                                                } py-2 space-y-2 bg-slate-500 rounded`}
                                                            >
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate(
                                                                                "/gradesByLevel/Primaria/performancec"
                                                                            )
                                                                        }
                                                                    >
                                                                        Primaria
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p
                                                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                                        onClick={() =>
                                                                            navigate(
                                                                                "/gradesByLevel/Secundaria/performancec"
                                                                            )
                                                                        }
                                                                    >
                                                                        Secundaria
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </>
                                                )}

                                                <li>
                                                    <div
                                                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-500"
                                                        onClick={() => navigate("/contacto")}
                                                        role="button"
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                            fill="currentColor"
                                                            viewBox="0 0 25 25"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.51l8 5 8-5V6H4zm16 12v-7.51l-7.39 4.62c-.33.21-.73.32-1.11.32s-.78-.11-1.11-.32L4 10.49V18h16z"></path>
                                                        </svg>

                                                        <span className="flex-1 ml-3 whitespace-nowrap">Contacto</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div
                                                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        onClick={() => dispatch(setLogout())}
                                                        role="button"
                                                    >
                                                        <svg
                                                            aria-hidden="true"
                                                            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                                                clipRule="evenodd"
                                                            ></path>
                                                        </svg>
                                                        <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div role="none">
                                            <button
                                                type="submit"
                                                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                                                role="menuitem"
                                                tabIndex="-1"
                                                id="menu-item-3"
                                                onClick={() => dispatch(setLogout())}
                                            >
                                                Log out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


            {/* Content */}
            <div className={`p-4 sm:ml-64 transition-transform ${sidebarOpen ? "translate-x-64" : "translate-x-0"}`}>
                {/* Aquí puedes agregar el contenido principal de tu página */}
            </div>
        </>
    );
};

export default Sidebar;



