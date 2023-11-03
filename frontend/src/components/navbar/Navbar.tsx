/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Group,
    Box,
    Burger,
    useMantineColorScheme,
    useComputedColorScheme,
    ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { IconMoon, IconSun } from "@tabler/icons-react";
import cx from "clsx";

export const Navbar = () => {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
    });
    const isLightTheme = computedColorScheme === "light";

    const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false);

    return (
        <Box pb={30}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Box>
                        {isLightTheme ? <img src="https://assets.tryhackme.com/img/favicon.png"
                            alt="Try Hack Me"
                            style={{
                                width: '50px',
                                height: '50px',
                                alignItems: 'start',
                                borderRadius: '10px',
                                position: 'absolute',
                                top: '35px',
                                backgroundColor: '#ffff',
                            }} /> : 
                            <img width="80" src="https://assets.tryhackme.com/img/logo/tryhackme_logo_full.svg" alt="TryHackMe" />}
                        
                    </Box>

                    <Group h="100%" gap={10} visibleFrom="sm">
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <ActionIcon
                            onClick={() =>
                                setColorScheme(isLightTheme ? "dark" : "light")
                            }
                            variant="default"
                            size="xl"
                            aria-label="Toggle color scheme"
                        >
                            {isLightTheme ? (
                                <IconMoon
                                    className={cx(classes.icon, classes.dark)}
                                    stroke={1.5}
                                />
                            ) : (
                                <IconSun
                                    className={cx(classes.icon, classes.light)}
                                    stroke={1.5}
                                />
                            )}
                        </ActionIcon>
                    </Group>

                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        hiddenFrom="sm"
                    />
                </Group>
            </header>
        </Box>
    );
};
