function createFormNode(tabId) {
    return `
        <table>
            <thead>
                <th></th>
                <th>KEY</th>
                <th>VALUE</th>
            </thead>
            <tbody id="${tabId}bodyTr">
                <tr id="${tabId}bodyLast">
                    <td></td>
                    <td><input id="${tabId}bodyKey" type="text" placeholder="Key" /></td>
                    <td><input id="${tabId}bodyValue" type="text" placeholder="Value" /></td>
                    <td><button onclick="return addBody(${tabId}bodyKey, ${tabId}bodyValue)">+</button></td>
                </tr>
            </tbody>
        </table>    
    `
}