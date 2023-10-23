import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@nextui-org/react";
import {Activity, ChevronDown, Flash, Lock, Scale, Server, TagUser} from "@/components/icons";
import {LogoIntersoftwareWhite} from "@/components/images";
import * as React from "react";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getName, getToken} from "@/lib/utils/local_variables";
import {User} from "@/lib/Interfaces/user.interface";
import {BiLogOut} from "react-icons/bi";
import Head from "next/head";

export function SiteNavbar() {
    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} height={undefined} width={undefined}/>,
        scale: <Scale className="text-warning" fill="currentColor" size={30} height={undefined} width={undefined}/>,
        lock: <Lock className="text-success" fill="currentColor" size={30} height={undefined} width={undefined}/>,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} height={undefined}
                            width={undefined}/>,
        flash: <Flash className="text-primary" fill="currentColor" size={30} height={undefined} width={undefined}/>,
        server: <Server className="text-success" fill="currentColor" size={30} height={undefined} width={undefined}/>,
        user: <TagUser className="text-danger" fill="currentColor" size={30} height={undefined} width={undefined}/>,
    };

    const [user, setUser] = useState<User>({username: ""});
    const [pageTitle, setPageTitle] = useState("");
    const router = useRouter();

    useEffect(() => {
        const token = getToken();
        if (!token) {
            redirectToLogin();
        }
    });

    useEffect(() => {
        setPageTitle(getPageTitle(router.pathname));
    }, [router.pathname]);

    useEffect(() => {
        const name = getName();

        if (name) {
            setUser({username: name});
        } else {
            setUser({username: "no se ha loguedo"});
        }
    }, []);

    function redirectToLogin() {
        // router.push("/");
    }

    function getPageTitle(pathname: string) {
        const pathParts = pathname.split("/");
        const lastPathPart = pathParts[pathParts.length - 1];
        return lastPathPart.charAt(0).toUpperCase() + lastPathPart.slice(1);
    }

    function handleLogout() {
        sessionStorage.removeItem("token");
        localStorage.removeItem("token");
        // router.push("/");
    }


    return (
        <Navbar isBlurred={false} className="intersoftware bg-primary-50">
            <NavbarBrand>
                <LogoIntersoftwareWhite scale={0.4}/>
                <p className="font-bold text-inherit"></p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-medium text-primary"
                        radius="sm"
                        onPress={() => router.push("/dashboard")}
                    >
                        Inicio
                    </Button>
                </NavbarItem>

                <NavbarItem>
                    <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-medium text-primary"
                        radius="sm"
                        onPress={() => router.push("/forms")}
                    >
                        Formularios
                    </Button>
                </NavbarItem>

            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="text-medium">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-medium text-primary"
                                endContent={icons.chevron}
                                radius="sm"
                            >
                                {user.username}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="User Menu"
                            className="w-[200px] intersoftware bg-primary-50"
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                            <DropdownItem
                                startContent={<BiLogOut size={20}/>}
                                onClick={handleLogout}
                            >
                                Cerrar Sesión
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>

        </Navbar>
 
    );
}