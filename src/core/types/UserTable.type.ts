import IUserInterface from "../interface/IUserInterface";

type UserTableProps = {
    users: IUserInterface[];
    allChecked: boolean;
    onCheckAll: () => void;
    onCheck: (id: number) => void;
};


export default UserTableProps