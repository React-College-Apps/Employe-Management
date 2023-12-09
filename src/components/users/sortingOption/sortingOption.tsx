import SelectInput from "../../common/selectInput";

interface ISortingOptionsProps {
    sortByName: string;
    sortByPosition: string;
    sortByStatus: string
    setSortByName: any,
    setSortByPosition: any,
    setSortByStatus: any
    setSortByGender: any
    sortByGender: string
};

const SortingOptions: React.FC<ISortingOptionsProps> = ({ sortByName, sortByPosition, sortByStatus, setSortByName, setSortByPosition, setSortByStatus, setSortByGender, sortByGender }) => {

    const sortByNameOptions = [{
        title: "Name (A to Z)", value: "asc"
    },
    {
        title: "Name (Z to A)", value: "desc"
    }]
    const sortByTitleOptions = [{
        title: "Title (A to Z)", value: "asc"
    },
    {
        title: "Title (Z to A)", value: "desc"
    }]
    const sortByGenderOptions = [{
        title: "Male To Female", value: "male"
    },
    {
        title: "Female To Male", value: "female"
    }]
    const sortByStatusOptions = [{
        title: "Active To Not Active", value: "active"
    },
    {
        title: "Not Active To Active", value: "notActive"
    }]
    return (
        <div className='grid grid-cols-3 mb-3 w-1/2 gap-3'>
            <SelectInput
                value={sortByName}
                onChange={(e) => setSortByName(e)}
                title={"Sort By Name"}
                options={sortByNameOptions}
                id={"sortByName"}
            />
            <SelectInput
                value={sortByPosition}
                onChange={(e) => {
                    setSortByPosition(e)
                }}
                title={"Sort By Title"}
                options={sortByTitleOptions}
                id={"sortByTitle"}
            />
            <SelectInput
                value={sortByStatus}
                onChange={(e) => setSortByStatus(e)}
                title={"Sort By Status"}
                options={sortByStatusOptions}
                id={"sortByStatus"}
            />
            <SelectInput
                value={sortByGender}
                onChange={(e) => setSortByGender(e)}
                title={"Sort By Gender"}
                options={sortByGenderOptions}
                id={"sortByGender"}
            />


        </div>
    );
};


export default SortingOptions