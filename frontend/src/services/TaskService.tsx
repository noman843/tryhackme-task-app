/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

class TaskService {
    private apiUrl: string;
    private accessToken: string;

    constructor(apiUrl: string, accessToken: string) {
        this.apiUrl = apiUrl;
        this.accessToken = accessToken;
    }

    getTasks() {
        const config = {
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
            },
        };

        const apiUrl = `${this.apiUrl}/tasks/`;

        return axios.get(apiUrl, config)
            .then((response) => {
                return response.data.tasks;
            })
            .catch((error) => {
                throw error;
            });
    }

    addTask(description: string) {
        const config = {
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
            },
        };

        const apiUrl = `${this.apiUrl}/tasks/`;
        const requestBody = {
            description: description,
        };

        return axios.post(apiUrl, requestBody, config)
            .then((response) => {
                return response.data.task;
            })
            .catch((error) => {
                throw error;
            });
    }

    updateTask(taskId: any, description: any, status: any) {
        const config = {
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
            },
        };

        const requestBody: { description?: string; status?: string } = {};

        if (description !== null && description !== undefined) {
            requestBody.description = description;
        }

        if (status !== null && status !== undefined) {
            requestBody.status = status;
        }

        if (Object.keys(requestBody).length === 0) {
            return Promise.resolve(null);
        }

        const apiUrl = `${this.apiUrl}/tasks/${taskId}`;
        return axios.put(apiUrl, requestBody, config);
    }

    deleteTask(taskId: any) {
        const config = {
            headers: {
                Authorization: `Bearer ${this.accessToken}`,
            },
        };

        const apiUrl = `${this.apiUrl}/tasks/${taskId}`;
        return axios.delete(apiUrl, config);
    }
}

export default TaskService;
