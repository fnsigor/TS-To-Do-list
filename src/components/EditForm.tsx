import  { useState } from 'react'

import * as Form from '@radix-ui/react-form';


export const EditForm = ({updateItem, setOpen, itemIndex, item}:any) => {

    const [name, setName] = useState<string | undefined>(item.name)
    const [description, setDescription] = useState<string | undefined>(item.description)


    return (
        <Form.Root className="FormRoot" onSubmit={(e) => {
           
            updateItem({name, description}, itemIndex)
            setOpen(false)
            e.preventDefault();
        }} >

            <Form.Field name="name">
                <Form.Label htmlFor='name'>Name</Form.Label>
                <Form.Control asChild>
                    <input id="name" value={name} onChange={e => setName(e.target.value)} required autoComplete="off" />
                </Form.Control>
                <Form.Message match="valueMissing" className='error'>
                    The task must have a name
                </Form.Message>

                <Form.Message match={(value) => value.length > 25} className='error'>
                    Max 25 characters
                </Form.Message>
            </Form.Field>

            <Form.Field name="description">
                <Form.Label htmlFor="description">
                    Description
                </Form.Label>
               <Form.Control asChild>
               <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} autoComplete="off"/>
               </Form.Control>
               <Form.Message match={(value) => value.length > 150} className='error'>
                    Max 150 characters
                </Form.Message>
            </Form.Field>

            <Form.Submit asChild>
                <button className="small-button green">Update Task</button>
            </Form.Submit>
        </Form.Root>
    )
}


