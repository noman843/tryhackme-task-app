/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout } from "../layout/Layout"
import { Box, Text } from '@mantine/core';
import { TaskCard } from "../components/task/TaskCard";

export const Home = () => {

    return (
        <Layout>
            <Text fz="xl">Welcome</Text>
            <Box mt={15}>
                <TaskCard />
            </Box>
        </Layout>
    )
}
