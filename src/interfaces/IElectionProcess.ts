export interface IElectionProcess {

    _id: string;
    user_id: string;
    is_owner: boolean;
    title: string;
    admin_status: string;
    process_status: string;
    start_date: string;
    end_date: string;
}
