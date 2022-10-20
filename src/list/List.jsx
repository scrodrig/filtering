
import countryList from './countries'
import ListView from './ListView'
import { useState } from 'react'

function List() {
    let [items, setItems] = useState(countryList)

    function filterItems(searchPattern) {
        if (searchPattern === '') {
            console.log('Im here')
            setItems(countryList)
        } else {
            let newItems = filterItemsBySearchPatter(searchPattern)
            console.log('Im another here', newItems)
            setItems(newItems)
        }
    }

    function filterItemsBySearchPatter(searchPattern) {
        let filteredItems = countryList.map(item => item.toLowerCase().includes(searchPattern.toLowerCase()) ? item : null)
        return filteredItems
    }

    return (
        <ListView elements={items} funcFilterItems={filterItems} />
    )
}

export default List