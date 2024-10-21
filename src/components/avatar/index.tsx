import React from "react";
import { Dropdown, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { LogIn, LogOut } from "lucide-react";
import { useAuthContext } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Avatar1: React.FC = () => {
    const {isAuthenticated , logout } = useAuthContext();
  const items: MenuProps["items"] = [
    // {
    //   label: (
    //     <div className="hover:bg-transparent pointer-events-none">
    //       <p>Do Khoa</p>
    //       <p>khoado2003@gmail.com</p>
    //     </div>
    //   ),
    //   key: "0",
    //   disabled: true,
    // },
    // {
    //   label: (
    //     <a
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       href="https://www.aliyun.com"
    //     >
    //       View profile
    //     </a>
    //   ),
    //   key: "1",
    // },
    {
      label: (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ),
      key: "0",
      
    },
    {
      label: (
        <button className="bg-transparent">
        {isAuthenticated ? (
            <div
                onClick={() => {
                    logout();
                    // Optionally show a toast notification here
                }}
                className="flex items-end cursor-pointer"
            >   
                Logout
                <LogOut className='w-auto h-5 ml-2'/>
            </div>
        ) : (
            <Link to="/login" className="flex items-end">
                Login
                <LogIn />
            </Link>
        )}
    </button>
      ),
      key: "2",
    },
  ];
  return (
    <>
      <div className="">
        <Dropdown
          menu={{ items }}
          placement="bottomRight"
          className="hover:bg-transparent"
        >
          {/* <img
            src="https://insacmau.com/wp-content/uploads/2023/02/logo-FPT-Polytechnic-.png"
            alt=""
            className="w-10 h-10 rounded-full cursor-pointer object-cover ring-2 ring-gray-300 hover:ring-[orange]"
          /> */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

        </Dropdown>
      </div>
    </>
  );
};

export default Avatar1;