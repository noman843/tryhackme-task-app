import { ReactNode } from "react";
import { Navbar } from "../components/navbar/Navbar"
import { Box } from "@mantine/core";

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <Box>
            <Navbar />
            {children}
        </Box>
    )
}
