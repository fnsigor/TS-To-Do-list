import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import * as Form from '@radix-ui/react-form';

const RadixForm = ({ setNewItem, setOpen }: any) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")


    return (
        <Form.Root className="FormRoot" onSubmit={(e) => {
            e.preventDefault();
            setNewItem({ name, description })
            setOpen(false)
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
                    <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} autoComplete="off" />
                </Form.Control>
                <Form.Message match={(value) => value.length > 150} className='error'>
                    Max 150 characters
                </Form.Message>
            </Form.Field>

            <Form.Submit asChild>
                <button className="small-button green">Add Task</button>
            </Form.Submit>
        </Form.Root>
    )
}

const ButtonAddItem = ({ setNewItem }: any) => {

    const [open, setOpen] = useState(false);



    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button className="small-button">Add Task</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="popup-darkBackground" />
                <Dialog.Content className="popup-content">
                    <Dialog.Title className="popup-title">Add a New Task</Dialog.Title>
                    <RadixForm setOpen={setOpen} setNewItem={setNewItem} />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>

    )
}

export default ButtonAddItem

