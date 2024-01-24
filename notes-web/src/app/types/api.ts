export interface IAPIResponse<T> {
    success: boolean;
    statusCode: number;
    data: T;
    error?: string;
}
