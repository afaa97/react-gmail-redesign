const List = () => {
    return(
        <div className="flex flex-auto flex-col space-y-2">
            <div className="flex rounded-2xl bg-[#f6f9fc] h-14 justify-center items-center">
                <svg className="w-7 h-7 fill-[#183153]" viewBox="0 0 576 512">
                    <path d="M176 192h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16zm320 0H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h80v80a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-96c0-8.8-7.2-16-16-16zm-16 96h-32v-64h32v64zM432 64H144C64.47 64 0 128.5 0 208v176c0 35.2 28.8 64 64 64h448c35.2 0 64-28.8 64-64V208c0-79.5-64.5-144-144-144zM256 416H64a32 32 0 0 1-32-32V214.3c0-60.65 45.44-114.1 106-118.1 64.6-3.41 118 47.9 118 111.8v208zm288-32a32 32 0 0 1-32 32H288V208c0-45.5-21.5-85.6-54.5-112H432c61.88.13 111.9 50.13 112 112v176z"/>
                </svg>
                <div className="m-10 text-red-600 font-semibold">
                    Inbox
                </div>
                <div className="rounded-full bg-[#dbe1e9] px-3 py-1 text-white text-xs">
                    76
                </div>
            </div>
            <div className="flex flex-auto rounded-2xl bg-[#f6f9fc] h-14 justify-center items-center">
                <svg className="w-7 h-7 fill-[#d6dce5]" viewBox="0 0 576 512">
                    <path d="m287.9 435.9-137.8 73.2c-7.2 4.3-17 3.6-24.5-1.7-7.4-5.3-11.1-14.5-10.5-23.5l27.1-155.5L31.11 218.2a23.94 23.94 0 0 1 13.38-40.7l153.21-22.7 68.6-141.28A24.1 24.1 0 0 1 287.9 0c9.2 0 17.6 5.25 21.6 13.52l68.6 141.28 153.3 22.7c9 1.3 16.4 7.6 19.3 16.2 2.8 8.7.5 18.2-5.9 24.5L433.6 328.4l26.3 155.5c1.5 9-2.2 18.2-9.7 23.5-7.4 5.3-18.1 6-25.3 1.7l-137-73.2zm-61.4-267.1a32.08 32.08 0 0 1-24.1 17.7L64.99 206.8l99.81 98.8c7.3 7.3 10.7 17.8 9 28.1l-23.6 139.5 122.6-65.5c9.5-5.1 20.8-5.1 30.2 0l122.6 65.5-23.5-139.5a31.8 31.8 0 0 1 9-28.1l99.8-98.8-137.5-20.3c-11.3-1.6-20.3-8.2-24.1-17.7L287.9 42.32 226.5 168.8z"/>
                </svg>
                <div className="m-10 text-red-600 font-semibold">
                    Favorites
                </div>
                <div className="rounded-full bg-[#dbe1e9] px-3 py-1 text-white text-xs">
                    8
                </div>
            </div>
        </div>
    )
}

export default List