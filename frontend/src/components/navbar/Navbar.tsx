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

    const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false);

    return (
        <Box pb={30}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Box>
                        <img src="https://assets.tryhackme.com/img/favicon.png"
                            alt="Try Hack Me"
                            style={{
                                width: '50px',
                                height: '50px',
                                alignItems: 'start',
                                margin: '0 auto',
                                border: '1px solid #212c42',
                                borderRadius: '10px',
                                position: 'absolute',
                                top: '35px',
                                backgroundColor: '#ffff',
                            }} />
                    </Box>

                    <Group h="100%" gap={10} visibleFrom="sm">
                        <Link to="/" className={classes.link}>
                            Home
                        </Link>
                        <ActionIcon
                            onClick={() =>
                                setColorScheme(
                                    computedColorScheme === "light" ? "dark" : "light"
                                )
                            }
                            variant="default"
                            size="xl"
                            aria-label="Toggle color scheme"
                        >
                            {computedColorScheme === "light" ? (
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
