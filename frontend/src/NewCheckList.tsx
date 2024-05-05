import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { connect } from 'react-redux';
import { addChecklist } from './actions';
import axios from 'axios';

const NewCheckList = (props: any) => {
  const [title, setTitle] = useState('');
  const [inputFields, setInputFields] = useState<string[]>([]);

  const handleInputChange = (index: number, value: string) => {
    setInputFields(prevState => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
  };

  const addInputField = () => {
    setInputFields(prevState => [...prevState, '']);
  };

  const handleRemoveField = (index: number) => {
    setInputFields(prevState => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const handleSubmit = () => {
    const dataToSend = {
      title,
      inputFields
    };
  
    console.log(dataToSend.inputFields);
    console.log(dataToSend.title);
  
    props.addChecklist(dataToSend);
  };
  

  return (
    <div className='flex flex-col justify-center items-center w-1/2 m-auto p-3 my-5'>
      <div className='flex justify-between items-center w-full my-5'>
        <div className='w-2/4 text-2xl'>Title of the checklist: </div>
        <Input onChange={(e) => setTitle(e.target.value)} className='border-2'/>
      </div>

      <div className='flex flex-col w-full border rounded-md p-3 border-solid border-sky-500'>
        {inputFields.map((value, index) => (
          <div key={index} className='flex justify-between items-center my-2'>
            <Input
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className='border-2 w-1/2 mr-3'
            />
            <button onClick={() => handleRemoveField(index)} className='bg-red-500 text-white rounded-md px-3 py-1'>Remove</button>
          </div>
        ))}
        <button onClick={addInputField} className='bg-green-500 text-white rounded-md px-3 py-1'>Add Input</button>
      </div>

      <div className='w-full flex justify-end mt-4'>
        <button onClick={handleSubmit} className='bg-blue-500 text-white rounded-md px-3 py-1'>Submit</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    checklists: state.checklists,
  };
}

export default connect(mapStateToProps, { addChecklist })(NewCheckList);
