import React from 'react';
import Joditreact from "jodit-react"
import { useRef } from 'react';

const Texteditor = ({setValue, config}) => {
    const editor=useRef(null)
  return <Joditreact ref={editor} onChange={(content)=>setValue(content)} config={config} /> 
    
}

export default Texteditor
