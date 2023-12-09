import InputForm from "../../common/inputForm";
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
    onSearchChange: any
    sortByAge: string
    setSortByAge: any

};

const SortingOptions: React.FC<ISortingOptionsProps> = ({ sortByName, sortByPosition, sortByStatus, setSortByName, setSortByPosition, setSortByStatus, setSortByGender, sortByGender, onSearchChange, setSortByAge, sortByAge }) => {

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
    const sortByAgeOptions = [{
        title: "Age (Asc to Desc)", value: "asc"
    },
    {
        title: "Age (Desc to Asc)", value: "desc"
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
            <SelectInput
                value={sortByAge}
                onChange={(e) => setSortByAge(e)}
                title={"Sort By Age"}
                options={sortByAgeOptions}
                id={"sortByAge"}
            />
            <div className="col-span-2">
                <InputForm onChange={(e) => onSearchChange(e.target.value)} label={'Search'} type={'search'} className={'px-2'}  />
            </div>

        </div>
    );
};


export default SortingOptions