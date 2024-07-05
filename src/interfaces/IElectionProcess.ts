export interface IElectionProcess {
    process_id: string;
    user_id: string;
    is_owner: boolean;
    title: string;
    admin_status: string;
    process_status: string;
    start_time: string;
    end_time: string;
    start_date: string;
    end_date: string;
}