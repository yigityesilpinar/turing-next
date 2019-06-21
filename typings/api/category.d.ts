interface ICategory {
    department_id: number;
    name: string;
    description: string;
    category_id: number;
}

interface ICategoryResponse {
    count: number;
    rows: Array<ICategory>;
}
