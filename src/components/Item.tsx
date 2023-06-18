
import { TypeItem } from '../App'
import * as Checkbox from '@radix-ui/react-checkbox';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { EditForm } from './EditForm';

export interface ItemProps {
  item: TypeItem
  itemIndex: number
  updateItem: any
  updateCompletedItems: any
  deleteToDoItem: any
}

export const Item = ({ item, itemIndex, updateItem, updateCompletedItems, deleteToDoItem }: ItemProps) => {

  const [open, setOpen] = useState(false);

  return (
    <li className="item">
      <h4>{item.name}</h4>
      {item.description !== "" && (<p>{item.description}</p>)}
      <div>

        <Checkbox.Root className="CheckboxRoot" onCheckedChange={()=>updateCompletedItems(item, itemIndex)} checked={false} title='Complete'>
          <Checkbox.Indicator className="CheckboxIndicator">
            <svg width="50" height="50" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </Checkbox.Indicator>
        </Checkbox.Root>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button className='large-button blue' title='Edit item'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.7072 0.292899C19.3166 -0.0976329 18.6834 -0.0976329 18.293 0.292899L3.42911 15.1567C3.24919 15.3366 3.10527 15.5492 3.00503 15.7831L0.0808859 22.606C-0.080194 22.982 0.00378591 23.418 0.292926 23.7072C0.582066 23.9962 1.01811 24.0802 1.39395 23.9192L8.21694 20.995C8.4508 20.8948 8.6634 20.7508 8.84332 20.571L23.7072 5.70709C24.0976 5.31657 24.0976 4.68341 23.7072 4.29289L19.7072 0.292899ZM4.84332 16.5709L19 2.41422L21.5858 4.99999L7.4291 19.1568L4.43849 20.4384L3.56163 19.5616L4.84332 16.5709Z" fill="black" />
              </svg>

            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="popup-darkBackground" />
            <Dialog.Content className="popup-content">
              <Dialog.Title className="popup-title">Edit Task</Dialog.Title>
              <EditForm setOpen={setOpen} updateItem={updateItem} itemIndex={itemIndex} item={item} />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <button className='large-button red' onClick={()=>deleteToDoItem(itemIndex)} title='Delete item'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.66667 0C5.93029 0 5.33333 0.44772 5.33333 1C5.33333 1.55228 5.93029 2 6.66667 2H17.3333C18.0697 2 18.6667 1.55228 18.6667 1C18.6667 0.44772 18.0697 0 17.3333 0H6.66667ZM0 5C0 4.44772 0.59696 4 1.33333 4H5.33333H18.6667H22.6667C23.4029 4 24 4.44772 24 5C24 5.55228 23.4029 6 22.6667 6H21.3333V22C21.3333 23.1046 20.1395 24 18.6667 24H5.33333C3.86059 24 2.66667 23.1046 2.66667 22V6H1.33333C0.59696 6 0 5.55228 0 5ZM5.33333 6H18.6667V22H5.33333V6Z" fill="black" />
          </svg>
        </button>
      </div>
    </li>
  )
}

