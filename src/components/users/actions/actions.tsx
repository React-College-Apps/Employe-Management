import React from 'react'
import SelectInput from '../../common/selectInput'
import Button from '../../common/button'

interface IActionProps {
    setUserAction: (value: string) => void;
    actionHandler: () => void;
    actionOptions: any[]
}
const Actions: React.FC<IActionProps> = ({ actionHandler, setUserAction, actionOptions }) => {
    return (
        <div >
            <h2 className='mb-3'>Action</h2>
            <div className='grid grid-cols-3 justify-center items-center'>
                <div>
                    <SelectInput className="mb-3" onChange={(value) => setUserAction(value)} title={'User Actions'} options={actionOptions} />
                </div>
                <div>
                    <Button className=" bg-yellow-500 hover:bg-yellow-400 text-xs mt-5 ml-3 px-3 py-2" onClick={() => actionHandler()}> Submit Action</Button>
                </div>


            </div>
        </div>
    )
}

export default Actions