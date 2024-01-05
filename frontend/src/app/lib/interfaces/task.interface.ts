export interface Task {
    _id?: string;
    name: string;
    description: string | null;
    status: string;
    createdAt?: string | null;
    updatedAt?: string | null;
}
