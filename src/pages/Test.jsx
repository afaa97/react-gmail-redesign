import Image from "../assets/logo-gmail.svg";

const Test = () => {
    return (
        <main className="flex justify-center bg-gradient-to-r from-[#EB434D] to-[#B6242D]"> {/* Background */}
            <div className="flex w-11/12 flex-auto m-10 p-5 bg-red-200 rounded-[15px] shadow-lg"> {/* Box */}
                <section className="w-72 p-5 bg-white font-semibold"> {/* ================ Section - Navigation */}
                    <div className="flex gap-3"> {/* Top Buttons */}
                        <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400"/>
                        <button className="w-3 h-3 rounded-full bg-orange-500 hover:bg-orange-400"/>
                        <button className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400"/>
                    </div>
                    <div className="flex h-[160px] justify-center items-center"> {/* Gmail Logo */}
                        <a href="/">
                            <div className="bg-gray_hover rounded-full">
                                <img className="h-28 w-28 p-4" src={Image} alt="Gmail Logo"/>
                            </div>
                        </a>
                    </div>
                    <ul className="flex flex-col gap-3"> {/* Menu First List */}
                        <li>
                            <a href="/" className="flex items-center p-5 rounded-xl bg-gray_hover">
                                <div className="relative">
                                    <svg className="w-6 h-6 fill-blue_accent" viewBox="0 0 576 512">
                                        <path d="M176 192h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm320 0H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-96c0-8.8-7.2-16-16-16zm-16 96h-32v-64h32v64zM432 64H144C64.47 64 0 128.5 0 208v176c0 35.2 28.8 64 64 64h448c35.2 0 64-28.8 64-64V208c0-79.5-64.5-144-144-144zM256 416H64a32 32 0 0 1-32-32V214.3c0-60.65 45.44-114.1 106-118.1 64.6-3.41 118 47.9 118 111.8v208zm288-32a32 32 0 0 1-32 32H288V208c0-45.5-21.5-85.6-54.5-112H432c61.88.13 111.9 50.13 112 112v176z"/>
                                    </svg>
                                    <i className="absolute -top-0.5 -right-1 border border-white rounded-full px-1 py-1 bg-red_theme" />
                                </div>
                                <span className="flex-1 ml-5 text-red_theme">Inbox</span>
                                <span className="rounded-full bg-gray_numbers px-3 py-1 text-white text-xs">76</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-5 rounded-xl hover:bg-gray_hover">
                                <svg className="w-6 h-6 fill-not_hover" viewBox="0 0 576 512">
                                    <path d="m287.9 435.9-137.8 73.2c-7.2 4.3-17 3.6-24.5-1.7-7.4-5.3-11.1-14.5-10.5-23.5l27.1-155.5L31.11 218.2a23.94 23.94 0 0 1 13.38-40.7l153.21-22.7 68.6-141.28A24.1 24.1 0 0 1 287.9 0c9.2 0 17.6 5.25 21.6 13.52l68.6 141.28 153.3 22.7c9 1.3 16.4 7.6 19.3 16.2 2.8 8.7.5 18.2-5.9 24.5L433.6 328.4l26.3 155.5c1.5 9-2.2 18.2-9.7 23.5-7.4 5.3-18.1 6-25.3 1.7l-137-73.2zm-61.4-267.1a32.08 32.08 0 0 1-24.1 17.7L64.99 206.8l99.81 98.8c7.3 7.3 10.7 17.8 9 28.1l-23.6 139.5 122.6-65.5c9.5-5.1 20.8-5.1 30.2 0l122.6 65.5-23.5-139.5a31.8 31.8 0 0 1 9-28.1l99.8-98.8-137.5-20.3c-11.3-1.6-20.3-8.2-24.1-17.7L287.9 42.32 226.5 168.8z"/>
                                </svg>
                                <span className="flex-1 ml-5 text-not_hover">Favorites</span>
                                <span className="rounded-full bg-gray_numbers px-3 py-1 text-white text-xs">8</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-5 rounded-xl hover:bg-gray_hover">
                                <svg className="w-6 h-6 fill-not_hover" viewBox="0 0 384 512">
                                    <path d="M365.3 125.3 258.8 18.8A64.05 64.05 0 0 0 213.5 0H64A64 64 0 0 0 0 64v384a64 64 0 0 0 64 64h256a64 64 0 0 0 64-64V170.5c0-17-6.7-33.2-18.7-45.2zM224 34.08c4.48 1.57 8.67 3.85 12.12 7.3l106.5 106.5A30 30 0 0 1 349.9 160H240c-8.8 0-16-7.2-16-16V34.08zM352 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h128v112c0 26.5 21.5 48 48 48h112v256zM96 272c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zm176 48H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h160a16 16 0 1 0 0-32zm0 64H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h160a16 16 0 1 0 0-32z"/>
                                </svg>
                                <span className="flex-1 ml-5 text-not_hover">Drafts</span>
                                <span className="rounded-full bg-gray_numbers px-3 py-1 text-white text-xs">2</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-5 rounded-xl hover:bg-gray_hover">
                                <svg className="w-6 h-6 fill-not_hover" viewBox="0 0 512 512">
                                    <path d="M498.1 5.63a31.97 31.97 0 0 0-33.98-1.4l-448 255.1C5.53 266.3-.68 277.8.06 289.1s8.38 22.86 19.62 27.55l103.2 43.01 61.85 146.5c1.47 4.44 4.47 5.84 6.37 5.84 2.06 0 4.07-.81 5.55-2.24l85.75-82.4 120.4 50.16c4.3 1.8 8.5 2.47 12.3 2.47a32 32 0 0 0 31.65-27.15l64-415.1c2.75-13.02-2.45-25.16-12.65-32.11zM32 288 412.1 70.8 123.9 326.3 32 288zm168.7 174.3-49.6-117.4 229.5-203.4-169.5 233.1c-2.9 4-3.8 9.1-2.44 13.84a15.92 15.92 0 0 0 9.44 10.41l34.4 13.76-51.8 49.69zm216-19L249 376.74l225.7-310.3-58 376.86z"/>
                                </svg>
                                <span className="flex-1 ml-5 text-not_hover">Send</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-5 rounded-xl hover:bg-gray_hover">
                                <svg className="w-6 h-6 fill-not_hover" viewBox="0 0 448 512">
                                    <path d="M432 64c8.8 0 16 7.16 16 16s-7.2 16-16 16h-18.3l-25.5 356.6c-2.3 33.5-31.1 59.4-63.8 59.4H123.6a63.97 63.97 0 0 1-63.85-59.4L34.29 96H16a16 16 0 1 1 0-32h95.1L137 22.56A48.1 48.1 0 0 1 177.7 0h92.6c16.5 0 31.9 8.53 39.8 22.56L336.9 64H432zM177.7 32c-5.5 0-10.6 2.84-13.5 7.52L148.9 64h150.2l-15.3-24.48c-2.9-4.68-8-7.52-13.5-7.52h-92.6zm203.9 64H66.37l25.3 354.3A32.02 32.02 0 0 0 123.6 480h200.8a32 32 0 0 0 31.9-29.7L381.6 96z"/>
                                </svg>
                                <span className="flex-1 ml-5 text-not_hover">Trash</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-3 mb-40"> {/* Menu Second List */}
                        <li className="flex items-center p-5 mt-5 mb-2">
                            <span className="flex-1 text-[#d6dce5]">LABELS</span>
                            <button className="rounded-full p-1 hover:bg-red-100">
                                <svg className="w-5 h-5 fill-red_theme" viewBox="0 0 448 512">
                                    <path d="M432 256a32 32 0 0 1-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48a32 32 0 1 1 0-64h144v-144a32 32 0 1 1 64 0v144h144c17.7-.01 32 14.29 32 31.99z"/>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-5 rounded-xl hover:bg-gray_hover">
                                <i className="border-4 border-blue-400 rounded-full px-2 py-2" />
                                <span className="ml-5 text-not_hover">Office</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-5 rounded-xl hover:bg-gray_hover">
                                <i className="border-4 border-orange-400 rounded-full px-2 py-2" />
                                <span className="ml-5 text-not_hover">Clients</span>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="flex items-center p-5 rounded-xl hover:bg-gray_hover">
                                <i className="border-4 border-purple-400 rounded-full px-2 py-2" />
                                <span className="ml-5 text-not_hover">Personals</span>
                            </a>
                        </li>
                    </ul>
                    <div className="flex flex-col gap-3">
                        <button className="flex p-5 justify-center rounded-xl bg-red_theme hover:bg-red-600"> {/* New Message Button */}
                            <svg className="h-6 w-6 fill-white" viewBox="0 0 576 512">
                                <path d="M373.2 16.97a56 56 0 0 1 79.2 0L495 59.6a55.95 55.95 0 0 1 0 79.2L182.3 451.6a97.59 97.59 0 0 1-40.8 24.2L20.52 511.4c-5.62 1.6-11.7.1-15.83-4.1a15.94 15.94 0 0 1-4.04-15.8l35.58-121a96.37 96.37 0 0 1 24.21-40.8L373.2 16.97zm56.6 22.63a24.08 24.08 0 0 0-34 0L341 94.4l76.6 75.7 54.8-53.9c9.4-9.4 9.4-24.6 0-33.97L429.8 39.6zm-362.87 340-27.3 92.8 92.77-27.3c10.3-3 19.7-8.6 27.2-16.2l234.5-235.3-75.7-76.6L83.07 352.4a63.42 63.42 0 0 0-16.14 27.2zM560 480c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16h320z"/>
                            </svg>
                            <span className="ml-5 text-white font-semibold">New message</span>
                        </button>
                        <button className="flex p-5 rounded-xl hover:bg-gray_hover"> {/* Settings Button */}
                            <svg className="h-6 w-6 fill-not_hover" viewBox="0 0 512 512">
                                <path d="M168 255.1c0-47.7 39.4-88 88-88s88 40.3 88 88c0 49.5-39.4 88.9-88 88.9s-88-39.4-88-88.9zm88-56c-30.9 0-56 26-56 56 0 31.8 25.1 56 56 56s56-24.2 56-56c0-30-25.1-56-56-56zM65.67 230.6l-40.33-36.8a31.92 31.92 0 0 1-6.16-39.6l30.24-52.4a31.99 31.99 0 0 1 37.42-14.48l51.96 16.58a192.31 192.31 0 0 1 44-25.47l11.7-53.27A31.98 31.98 0 0 1 225.8 0h60.4c15.1 0 28.1 10.47 31.3 25.16l11.7 53.27c14.9 6.53 30.6 15.13 44 25.47l52-16.58a31.97 31.97 0 0 1 37.4 14.48l30.2 52.4c7.5 13 5 29.5-6.1 39.6l-40.4 36.8a190.53 190.53 0 0 1 0 50.8l40.4 36.8a31.96 31.96 0 0 1 6.1 39.6l-30.2 52.4c-7.5 13-23.1 19-37.4 14.5l-52-16.6c-13.4 10.3-29.1 18.9-44 25.5l-11.7 53.2a32 32 0 0 1-31.3 25.2h-60.4a32 32 0 0 1-31.3-25.2l-11.7-53.2c-15.8-6.6-30.6-15.2-44-25.5l-51.96 16.6a32.1 32.1 0 0 1-37.42-14.5l-30.24-52.4a31.92 31.92 0 0 1 6.16-39.6l40.33-36.8c-1.1-8.3-1.67-16.8-1.67-26.3 0-7.7.57-16.2 1.67-24.5zm92.73-101.4-13.3 10.3-67.97-21.7-30.24 52.4 52.69 48-2.19 16.6c-.92 6.9-1.39 14-1.39 20.3 0 8.1.47 15.2 1.39 22.1l2.19 16.6-52.69 48 30.24 52.4 67.97-21.7 13.3 10.3c11.1 8.6 23.5 15.8 36.6 20.3l15.5 7.3 15.3 69.6h60.4l15.3-69.6 14.6-7.3c14-4.5 26.4-11.7 37.5-20.3l13.3-10.3 68 21.7 30.2-52.4-52.7-48 2.2-16.6c.9-6.9 1.4-14 1.4-21.2 0-7.2-.5-14.3-1.4-21.2l-2.2-16.6 52.7-48-30.2-52.4-68 21.7-13.3-10.3c-11.1-8.6-23.5-15.8-37.5-21.2l-14.6-6.4L286.2 32h-60.4l-15.3 69.6L195 108c-13.1 5.4-25.5 12.6-36.6 21.2z"/>
                            </svg>
                            <span className="ml-5 text-not_hover font-semibold">Settings</span>
                        </button>
                    </div>
                </section>
                <section className="flex flex-col p-7 w-[500px] bg-gray_hover"> {/* ================ Section - Mails */}
                    <div className="flex my-10 justify-center"> {/* Search Bar */}
                        <input type="text" name="search"
                               placeholder="🔍  Search"
                               className="rounded-full text-center outline-none w-full mx-10 font-semibold p-3"/>
                    </div>
                    <div className="flex"> {/* Sorting */}
                        <span className="flex flex-1 text-not_hover font-semibold">SORT</span>
                        <label>
                            <select
                                className="inline-flex font-semibold outline-none text-sm text-not_hover bg-transparent text-center mr-2 mb-2">
                                <option value="" disabled selected>Date</option>
                                <option value="First">xx/xx/xxxx</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex flex-col gap-6 py-5 overflow-y-auto"> {/* Cards */}
                        <a href="/" className="relative flex flex-col h-auto rounded-xl p-9 shadow-sm bg-white">
                            <div className="flex flex-row items-center mb-3">
                                <i className="absolute top-4 right-4 rounded-full px-1 py-1 bg-red_theme" />
                                    <div className="bg-gray_hover rounded-full">
                                        <img className="h-14 w-14 p-2" src={Image} alt="Gmail Logo"/>
                                    </div>
                                <span className="ml-5 fill-blue_accent font-semibold">Gaspard Lemoine</span>
                                <svg className="flex-1 -ml-8 w-4 h-4 fill-yellow-400" viewBox="0 0 576 512">
                                    <path d="m287.9 435.9-137.8 73.2c-7.2 4.3-17 3.6-24.5-1.7-7.4-5.3-11.1-14.5-10.5-23.5l27.1-155.5L31.11 218.2a23.94 23.94 0 0 1 13.38-40.7l153.21-22.7 68.6-141.28A24.1 24.1 0 0 1 287.9 0c9.2 0 17.6 5.25 21.6 13.52l68.6 141.28 153.3 22.7c9 1.3 16.4 7.6 19.3 16.2 2.8 8.7.5 18.2-5.9 24.5L433.6 328.4l26.3 155.5c1.5 9-2.2 18.2-9.7 23.5-7.4 5.3-18.1 6-25.3 1.7l-137-73.2zm-61.4-267.1a32.08 32.08 0 0 1-24.1 17.7L64.99 206.8l99.81 98.8c7.3 7.3 10.7 17.8 9 28.1l-23.6 139.5 122.6-65.5c9.5-5.1 20.8-5.1 30.2 0l122.6 65.5-23.5-139.5a31.8 31.8 0 0 1 9-28.1l99.8-98.8-137.5-20.3c-11.3-1.6-20.3-8.2-24.1-17.7L287.9 42.32 226.5 168.8z"/>
                                </svg>
                                <span className="text-not_hover text-sm">15 min ago</span>
                            </div>
                            <div>
                                <p className="fill-blue_accent font-medium">Road trip de Tromso aux iles Lofoten</p>
                                <p className="text-not_hover font-medium">Bonjour Olivier, Suite à notre entetien de ce jour...</p>
                            </div>
                            <div className="flex gap-6 items-center mt-4">
                                <span className="text-purple-500 text-sm">
                                     <i className="inline-block mr-2 h-2 w-2 bg-purple-500" />Personals
                                </span>
                                <span className="text-not_hover text-sm">
                                     <i className="inline-block mr-2 h-2 w-2 bg-not_hover" />3
                                </span>
                                <span className="text-not_hover text-sm">
                                     <i className="inline-block mr-2 h-2 w-2 bg-not_hover" />5
                                </span>
                            </div>
                        </a>
                    </div>
                </section>
                <section className="flex-auto p-7 bg-white"> {/* ================ Section - Content */}
                    <div className="flex gap-6 mt-12 bg-purple-500 mb-5"> {/* Icons */}
                        <svg className="w-5 h-5 fill-red_theme" viewBox="0 0 448 512">
                            <path d="M432 256a32 32 0 0 1-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48a32 32 0 1 1 0-64h144v-144a32 32 0 1 1 64 0v144h144c17.7-.01 32 14.29 32 31.99z"/>
                        </svg>
                        <svg className="flex-0 w-5 h-5 fill-red_theme" viewBox="0 0 448 512">
                            <path d="M432 256a32 32 0 0 1-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48a32 32 0 1 1 0-64h144v-144a32 32 0 1 1 64 0v144h144c17.7-.01 32 14.29 32 31.99z"/>
                        </svg>
                        <svg className="flex-0 w-5 h-5 fill-red_theme" viewBox="0 0 448 512">
                            <path d="M432 256a32 32 0 0 1-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48a32 32 0 1 1 0-64h144v-144a32 32 0 1 1 64 0v144h144c17.7-.01 32 14.29 32 31.99z"/>
                        </svg>
                        <svg className="flex-0 w-5 h-5 fill-red_theme" viewBox="0 0 448 512">
                            <path d="M432 256a32 32 0 0 1-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48a32 32 0 1 1 0-64h144v-144a32 32 0 1 1 64 0v144h144c17.7-.01 32 14.29 32 31.99z"/>
                        </svg>
                        <svg className="flex w-5 h-5 fill-red_theme" viewBox="0 0 448 512">
                            <path d="M432 256a32 32 0 0 1-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48a32 32 0 1 1 0-64h144v-144a32 32 0 1 1 64 0v144h144c17.7-.01 32 14.29 32 31.99z"/>
                        </svg>
                        <svg className="flex-1 ml-80 w-5 h-5 fill-red_theme" viewBox="0 0 448 512">
                            <path d="M432 256a32 32 0 0 1-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48a32 32 0 1 1 0-64h144v-144a32 32 0 1 1 64 0v144h144c17.7-.01 32 14.29 32 31.99z"/>
                        </svg>
                    </div>
                    <div className="flex justify-center items-center py-5 bg-gray_hover rounded-xl"> {/* Previous Messages */}
                        <div className="bg-red_theme rounded-full mr-2">
                            <img className="h-8 w-8 p-2" src={Image} alt="Gmail Logo"/>
                        </div>
                        <div className="bg-red_theme rounded-full mr-2">
                            <img className="h-8 w-8 p-2" src={Image} alt="Gmail Logo"/>
                        </div>
                        <div className="bg-red_theme rounded-full">
                            <img className="h-8 w-8 p-2" src={Image} alt="Gmail Logo"/>
                        </div>
                        <p className="mx-4 text-xs text-not_hover">6 previous messages</p>
                        <svg className="w-5 h-5 fill-red_theme" viewBox="0 0 448 512">
                            <path d="M432 256a32 32 0 0 1-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48a32 32 0 1 1 0-64h144v-144a32 32 0 1 1 64 0v144h144c17.7-.01 32 14.29 32 31.99z"/>
                        </svg>
                    </div>
                    <div className="flex flex-col h-auto rounded-xl p-9 shadow-sm bg-white"> {/* Message Content */}
                        <div className="flex flex-row items-center mb-3">
                            <div className="bg-gray_hover rounded-full">
                                <img className="h-14 w-14 p-2" src={Image} alt="Gmail Logo"/>
                            </div>
                            <span className="flex flex-1 ml-5 fill-blue_accent font-semibold">Gaspard Lemoine</span>
                            <span className="text-not_hover text-sm">15 min ago</span>
                            <p className="flex flex-col fill-blue_accent font-medium">Road trip de Tromso aux iles Lofoten</p>
                        </div>
                        <div>
                            <p className="text-not_hover font-medium">Bonjour Olivier, Suite à notre entetien de ce jour...</p>
                        </div>
                    </div>
                    <div> {/* Message Input */}

                    </div>
                </section>
            </div>
        </main>
    )
}

export default Test