import { ReactElement, useState } from "react"
import { Item } from "./components/Item"
import ButtonAddItem from "./components/ButtonAddItem"



export interface TypeItem {
  name: string
  description?: string
}


export const App = (): ReactElement => {

  const [toDoItems, setToDoItems] = useState<TypeItem[]>([])
  const [completedItems, setCompletedItems] = useState<TypeItem[]>([])
  const [showingCompletedItems, setShowingCompletedItems] = useState(false)

  function setNewItem(newItem: TypeItem) {
    setToDoItems([...toDoItems, newItem])
  }

  function updateItem(newItem: TypeItem, index: number) {
    const updatedToDoItems = toDoItems
    updatedToDoItems.splice(index, 1, newItem)
    setToDoItems([...updatedToDoItems])
  }


  function updateCompletedItems(newItem: TypeItem, index: number) {
    const updatedToDoItems = toDoItems
    updatedToDoItems.splice(index, 1)
    setToDoItems([...updatedToDoItems])

    setCompletedItems([...completedItems, newItem])
  }


  function deleteToDoItem(index: number) {
    const updatedToDoItems = toDoItems
    updatedToDoItems.splice(index, 1)
    setToDoItems([...updatedToDoItems])
  }

  return (
    <div>

      <nav id="navbar">
        {showingCompletedItems
          ? (<>
            <h1>Completed tasks</h1>
            <button className="small-button" onClick={() => setShowingCompletedItems(false)}>
              Current Tasks
            </button>
          </>)
          : (<>
            <h1>Current Tasks</h1>
            <div>
              <ButtonAddItem setNewItem={setNewItem} />
              <button className="small-button" onClick={() => setShowingCompletedItems(true)}>
                Completed Tasks
              </button>
            </div>
          </>)
        }
      </nav>


      <ul className="itemList" >

        {showingCompletedItems ? (
          completedItems && (completedItems.map((item, i) => (
            <li className="item done" key={'doneItem' + i}>
              <h4>{item.name}</h4>
              {item.description !== "" && (<p>{item.description}</p>)}
            </li>
          )))
        )

          : (toDoItems && (
            toDoItems.map((item, i) => (
              <Item
                item={item}
                key={'item-' + i}
                itemIndex={i}
                updateItem={updateItem}
                updateCompletedItems={updateCompletedItems}
                deleteToDoItem={deleteToDoItem}
              />
            ))))
        }


      </ul>


    </div>
  )
}
