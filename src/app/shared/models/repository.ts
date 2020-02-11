export interface Repository {
    name: string;
    private: boolean;
    size: number;
    forks: number;
    created_at: Date;
    updated_at: Date;
    url: string;
    open_issues: number;
}
