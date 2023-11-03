/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Box,
    Button,
    Card,
    Flex,
    Group,
    Loader,
    Modal,
    Switch,
    Text,
    TextInput,
    useComputedColorScheme,
} from "@mantine/core";
import classes from "./TaskCard.module.css";
import { useEffect, useState } from "react";
import useAuthStore from "../../store/useAuthStore";
import { useForm } from "@mantine/form";
import React from "react";
import TaskService from './../../services/TaskService';

interface Task {
    id: string;
    description: string;
    status: boolean;
}

export function TaskCard() {
    const [modalOpened, setModalOpened] = useState(false);
    const [modalState, setModalState] = useState("");
    const [loading, setLoading] = useState(false);
    const [newTask, setNewTask] = useState<Task>({
        id: "",
        description: "",
        status: false,
    });
    const [accessToken] = useAuthStore((state: any) => [state.accessToken]);
    const [tasks, setTasks] = useState<Task[]>([]);
    const apiUrl = 'http://localhost:5000/api'

    const taskService = new TaskService(apiUrl, accessToken);

    const addTaskForm = useForm({
        initialValues: {
            description: "",
        },

        validate: {
            description: (value) =>
                value.length > 5 ? null : "Description Must be of 5 characters long",
        },
    });

    const getTasks = async () => {
        setLoading(true);
        taskService.getTasks()
            .then((tasks) => {
                console.log("Tasks:", tasks);
                setTasks(tasks);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getTasks();
    }, []);

    const handleAddTask = (data: { description: string }) => {
        taskService.addTask(data.description)
            .then((task) => {
                console.log("Task:", task);
                setTasks((prevTasks: Task[]) => [...prevTasks, task]);
                setModalOpened(false);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setLoading(false);
            });
    };

    const handleTaskUpdate = (task: Task) => {
        setModalState("update");
        addTaskForm.setFieldValue("description", task.description);
        setModalOpened(true);
        setNewTask(task);
    };

    const handleTaskDelete = (taskId: string) => {
        taskService.deleteTask(taskId)
            .then((response) => {
                // Check if the response is not null (meaning an API call was made)
                if (response !== null) {
                    // console.log("Task updated:", response.data.task);
                    // Filter out the deleted task from the tasks state
                    const updatedTasks = tasks.filter((task) => task.id !== response.data.task.id);
                    setTasks(updatedTasks);
                }
            })
            .catch((error) => {
                console.error("Error updating task:", error);
            });
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const updateTask = (taskId: any, description: any, status: any) => {
        // Update the task in the backend using the updateTaskAPI utility function
        taskService.updateTask(taskId, description, status)
            .then((response) => {
                // Check if the response is not null (meaning an API call was made)
                if (response !== null) {
                    // console.log("Task updated:", response.data.task);

                    // Update the tasks state with the modified task
                    const updatedTasks = tasks.map((task) =>
                        task.id === taskId
                            ? {
                                ...task,
                                description:
                                    description !== null ? description : task.description,
                                status: status !== null ? status : task.status,
                            }
                            : task
                    );
                    setTasks(updatedTasks);
                    setModalOpened(false);
                }
            })
            .catch((error) => {
                console.error("Error updating task:", error);
            });
    }
    const handleSwitchChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        task: Task
    ) => {
        const newStatus = event.currentTarget.checked;
        const newDescription = task.description;
        const taskId = task.id;

        updateTask(taskId, newDescription, newStatus);
    };

    const computedColorScheme = useComputedColorScheme("light", {
        getInitialValueInEffect: true,
    });

    const backgroundColor = computedColorScheme === "dark" ? "#ffff" : "#212c42"
    const textColorInverted = computedColorScheme === "dark" ? "#212c42" : "#ffff"
    return (
        <Box>
            {loading ? (
                <Box p="xl" >
                    <Flex justify={"center"} align={"center"}>
                        <Loader size={29} />
                    </Flex>
                </Box>
            ) : (
                <Card withBorder radius="md" p="xl" className={classes.card}
                    style={{
                        backgroundColor: backgroundColor,
                        color: backgroundColor,
                    }}
                >
                    <Text size="lg" c="dimmed" fw={500}>
                        Task List
                    </Text>
                    <Text fz="xs" c="dimmed" mt={3} mb="xl">
                        Make a list of tasks you want to complete
                    </Text>

                    {tasks &&
                        tasks.length > 0 &&
                        tasks.map((task: any) => (
                            <React.Fragment key={task.id}>
                                <Group
                                    justify="space-between"
                                    className={classes.item}
                                    wrap="nowrap"
                                    gap="xl"
                                >
                                    <Flex justify={"flex-start"} gap={"lg"}>
                                        <Switch
                                            size="xs"
                                            mt={4}
                                            checked={task.status}
                                            onChange={(event) => handleSwitchChange(event, task)}
                                        />
                                        <Text size="md" c="dimmed" td={task.status ? "line-through" : ""}>
                                            {task.description}
                                        </Text>
                                    </Flex>
                                    <Group visibleFrom="sm">
                                        <Button
                                            variant="default"
                                            onClick={() => handleTaskUpdate(task)}
                                        >
                                            Edit
                                        </Button>
                                        <Button onClick={() => handleTaskDelete(task.id)}>
                                            Delete
                                        </Button>
                                    </Group>
                                </Group>
                            </React.Fragment>
                        ))}

                    <Box mt={10}>
                        <Button
                            color="#88cc14"
                            style={{ border: "1px solid #212c42" }}
                            onClick={() => setModalOpened(true)}>
                            Add Task
                        </Button>
                    </Box>
                </Card>
            )}

            <Modal
                opened={modalOpened}
                onClose={() => setModalOpened(false)}
                title={modalState === "update" ? "Update Task" : "Add Task"}
                styles={{
                    header: {
                        backgroundColor: backgroundColor,
                        color: textColorInverted,
                    },
                    body: {
                        backgroundColor: backgroundColor,
                        color: textColorInverted,
                    },
                }}
            >
                <Box p={20}
                    style={{
                        backgroundColor: backgroundColor,
                        color: backgroundColor,
                    }}
                >
                    <Text fz="xs" c="dimmed" mt={3} mb="xl">
                        {modalState === "update" ? "Update" : "Add"} a task you want to
                        complete
                    </Text>
                    <form
                        onSubmit={addTaskForm.onSubmit((values) => {
                            modalState === "update"
                                ? updateTask(newTask.id, values.description, newTask.status)
                                : handleAddTask(values);
                        })}
                    >
                        <TextInput
                            style={{
                                color: textColorInverted,
                            }}
                            withAsterisk
                            label="Task Description"
                            placeholder="Task Description"
                            {...addTaskForm.getInputProps("description")}
                        />
                        <Box mt={10}>
                            <Button variant="outline" type="submit">
                                Add
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </Box>
    );
}
