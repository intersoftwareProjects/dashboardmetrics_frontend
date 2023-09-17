import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu
} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "@/components/icons";
import {LogoIntersoftwareWhite} from "@/components/images";
import * as React from "react";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import {getName, getToken} from "@/lib/utils/local_variables";
import {User} from "@/lib/Interfaces/user.interface";

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
        router.push("/");
    }

    function getPageTitle(pathname: string) {
        const pathParts = pathname.split("/");
        const lastPathPart = pathParts[pathParts.length - 1];
        return lastPathPart.charAt(0).toUpperCase() + lastPathPart.slice(1);
    }

    function handleLogout() {
        sessionStorage.removeItem("token");
        localStorage.removeItem("token");
        router.push("/");
    }

    return (
        <Navbar isBlurred={false} className="intersoftware bg-primary-50">
            <NavbarBrand>
                <LogoIntersoftwareWhite scale={0.4}/>
                <p className="font-bold text-inherit"></p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/dashboard" className="text-medium">
                        Inicio
                    </Link>
                </NavbarItem>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-medium text-primary"
                                endContent={icons.chevron}
                                radius="sm"
                            >
                                Formularios
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Formularios"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={icons.scale}
                        >
                            Autoscaling
                        </DropdownItem>
                        <DropdownItem
                            key="usage_metrics"
                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                            startContent={icons.activity}
                        >
                            Usage Metrics
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                            startContent={icons.flash}
                        >
                            Production Ready
                        </DropdownItem>
                        <DropdownItem
                            key="99_uptime"
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                            startContent={icons.server}
                        >
                            +99% Uptime
                        </DropdownItem>
                        <DropdownItem
                            key="supreme_support"
                            description="Overcome any challenge with a supporting team ready to respond."
                            startContent={icons.user}
                        >
                            +Supreme Support
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
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
                            className="w-[200px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >
                            <DropdownItem onClick={handleLogout}>Cerrar Sesión</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    );
}
